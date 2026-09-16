"""Scan PDF text and image coordinates locally for build_guide.py.

Requires pdfplumber. Does not extract or transmit image content to any service.
"""
import argparse
import hashlib
import json
import re
from pathlib import Path

import pdfplumber


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("pdf", type=Path)
    parser.add_argument("--output", type=Path, default=Path(__file__).resolve().parents[1] / "qa/pdf-layout.json")
    args = parser.parse_args()
    layouts = []
    with pdfplumber.open(args.pdf) as document:
        for number, page in enumerate(document.pages, 1):
            lines = page.extract_text_lines(return_chars=False)
            steps = []
            for line in lines:
                match = re.search(r"\bStep\s+(\d+)[.:]\s*", line["text"])
                if match and 20 <= number <= 281:
                    steps.append(dict(page=number, number=int(match[1]), **{
                        key: line[key] for key in ("text", "top", "x0", "bottom")
                    }))
            images = [{key: image[key] for key in ("x0", "x1", "top", "bottom", "width", "height", "srcsize")} for image in page.images]
            layouts.append(dict(page=number, width=page.width, height=page.height, lines=lines, images=images, steps=steps))
            page.close()
            if number % 50 == 0:
                print(f"Scanned {number} pages", flush=True)
    args.output.parent.mkdir(parents=True, exist_ok=True)
    args.output.write_text(json.dumps(layouts, ensure_ascii=False))
    args.output.with_suffix(".meta.json").write_text(json.dumps({"pdfSha256": hashlib.sha256(args.pdf.read_bytes()).hexdigest()}))
    print(f"Saved {len(layouts)} pages and {sum(len(p['steps']) for p in layouts)} step locations to {args.output}")


if __name__ == "__main__":
    main()
