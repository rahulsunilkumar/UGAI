# Guide Dissector

A local PDF-to-Markdown converter and review workspace for training guides. This is a separate app beside the existing MRO website. It does not modify that website or publish anything.

## Start

On this Mac, double-click **dissector/run.command**, then open **http://127.0.0.1:8770/**. The launcher finds an existing Python environment with the required libraries, including this machine's bundled runtime. Keep its terminal running; Ctrl+C stops the app.

From the UGAI folder, the equivalent is:

```sh
bash dissector/run.command
```

For another computer with Python 3.11 or newer:

```sh
python3 -m venv dissector/.venv
dissector/.venv/bin/python -m pip install -r dissector/requirements.txt
dissector/.venv/bin/python dissector/app.py
```

Use `--port 8771` if 8770 is occupied. `DISSECTOR_PYTHON=/path/to/python` overrides the launcher's runtime selection. All library dependencies execute locally. No Node build, account, API key, OCR service, or generative model is needed.

## Convert, review, export

1. Drop a PDF onto the upload area, or choose a file. Maximum 200 MB / 1,500 pages. Use a PDF exported from Word when possible.
2. Optionally attach the matching `.docx` before conversion. Exact heading-style matches help join wrapped headings. PDF text stays authoritative; the Word file is only a structural hint. Different editions are not automatically reconciled.
3. Open the resulting conversion. Select a section in the outline, then edit its title, lesson/group, type, and Markdown. Changes save locally after a short pause; Cmd/Ctrl+S saves immediately. A concurrent edit in another tab causes a visible revision conflict instead of overwriting it.
4. Compare with the original page. Use page navigation and Fit/150%/200% zoom. **Extracted text** shows the raw page lines and how they were handled.
5. To add an illustration, put the Markdown cursor where the image belongs, choose **Capture illustration**, drag a rectangle around the image and its labels, then **Add to section**. To replace a crop, add a new one and remove the old Markdown image line. Click an illustration thumbnail to inspect it or locate its source page.
6. Split at the Markdown cursor, merge with the next section, or move sections up/down. Splits preserve the original source scope and flag it for review. Excluding a section requires a reason and retains its source evidence. Nothing is silently deleted.
7. Mark a section reviewed when its text, structure, images, and review notes are resolved. Editing it returns it to draft.
8. **Export package** saves a ZIP under the conversion's `exports/` directory and offers it as a browser download. Drafts can be exported; review status remains explicit. Include the original PDF only if desired.

## Local storage

All conversions are under `UGAI/conversions/<conversion-id>/` by default:

```text
source.pdf              Original uploaded PDF
source.docx             Optional heading hints
job.json                Conversion progress / failure state
project.json            Editable document, sections, images, review states
evidence.json          Original page text, positions, tables, and disposition ledger
assets/                 Rendered illustration crops
preview/                On-demand page renders
exports/                Exported ZIP packages
```

The root `conversions/` folder is ignored by Git. It contains the source material and all derived content. Back it up in an appropriate local/approved location. To remove a conversion, stop the app and remove its specific directory. To move the workspace, copy the whole conversion directory together, not only `project.json`.

## Export contract: `guide-package/1.0`

```text
README.md                      Clickable table of contents
manifest.json                  Ordered navigation and source metadata
content/<stable-section-id>.md YAML front matter and editable Markdown
assets/<asset-id>.png           Referenced images only
review/source-evidence.json    Original extraction and disposition ledger
source/source.pdf              Optional
```

Markdown files deliberately use stable section IDs instead of titles. Renaming or reordering a section does not change its exported file path. The manifest stores lesson/group names and order for a future website compiler. Images use relative `../assets/...` links. Source pages and review states appear in each file's front matter.

The future builder should follow the manifest order, skip excluded sections (`file: null`), render the Markdown, and resolve its image links. Markdown is not executable code: any future renderer must sanitize HTML and links. The included browser preview escapes raw HTML and loads only this project's images.

An export is an **internal review package**. Its evidence file includes source text even for excluded material. Excluding classroom content does not create a sanitized public copy. Classification markings are retained in metadata; no handling category is changed automatically.

## Extraction approach and limits

- `pdfplumber` reads native PDF text, fonts, image boxes, and ruled/aligned tables. Repeated margins and line numbers are omitted from presentation, with their raw evidence retained.
- Rules recognize lessons, topics, labeled procedures, step starts, and knowledge checks. References such as “see Step 4” are retained as prose, not new steps.
- `pypdfium2` renders source pages and illustration crops, preserving visible WordArt, arrows, and overlays. Calls are serialized because PDFium is not thread-safe.
- Optional Word heading styles provide exact-match hints; no arbitrary paragraph indices or MRO-specific procedure list is hardcoded.
- All sections begin as drafts. Automatically detected screenshot boxes and tables require visual review. Complex columns, merged cells, decorative layouts, and wrapped headings can need corrections. Small ungrouped graphics remain visible in the original/evidence and may need a manual crop.
- Scanned/image-only pages are flagged. OCR is not implemented. Password-protected or malformed PDFs show a conversion error; unlock/export a supported PDF locally and retry.
- A re-upload creates a separate conversion. Automatic edition diffs, reconciliation of stable IDs across different source PDFs, Markdown re-import, and a website builder are future work.
- The app binds only to `127.0.0.1`, validates host/origin, and requires a per-run token for writes. It has no remote sign-in or multi-user permissions and must not be exposed as a shared server.

## Files and extension points

- `engine.py`: extraction, section assembly, schema checks, rendering, ZIP export.
- `app.py`: localhost server, background conversion queue, persistence and routes.
- `web/`: dependency-free review interface and safe Markdown preview.
- `test_dissector.py`: synthetic-layout unit tests and localhost API integration tests.
- `audit_conversion.py`: source coverage, image validity, step counts, and export link checks.

Run checks with the same Python environment used to start the app:

```sh
cd dissector
python3 -m unittest -v
python3 audit_conversion.py ../conversions/CONVERSION_ID
```

For the supplied reference guide, add `--expected-steps 423` to the audit. That count is a test expectation for this edition, not a conversion rule.

Technical references: [pdfplumber](https://github.com/jsvine/pdfplumber), [pypdfium2](https://pypdfium2.readthedocs.io/en/stable/python_api.html).
