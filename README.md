# MRO Operations Guide

See [Publishing and maintenance](PUBLISHING.md) for the final review, example searches, hosting choices, and release process.

A local, searchable edition of the Maintenance MRO Scheduler Instructor Guide, v4.0, dated 07 August 2026. It uses the supplied Word document for text and the matching Word-exported PDF for annotated screenshots.

The first draft contains 8 lesson overviews, 45 procedures, 423 steps, 431 screenshot regions, introductory references, a glossary, 10 knowledge-check questions, and a course exercise. The original lesson order is retained; Practice has its own section.

## Open the guide

From this `UGAI` folder:

```sh
python3 -m http.server 8766 --bind 127.0.0.1 --directory dist
```

Open `http://127.0.0.1:8766/`. Press Ctrl+C in the terminal to stop the server. The browser needs no package installation, account, API key, or paid service.

## Project files

| Path | Purpose |
| --- | --- |
| `dist/index.html` | Website entry point |
| `dist/styles.css` | Layout, responsive styles, Accenture color treatment |
| `dist/app.js` | Contents navigation, local search, screenshot viewer, printing |
| `dist/content.js` | Generated guide text and navigation data; contains CUI |
| `dist/assets/screenshots/` | Annotated screenshot crops; contains CUI |
| `dist/assets/source/guide.pdf` | Original PDF for page references; contains CUI |
| `dist/assets/accenture.svg` | Logo from the supplied brand materials |
| `scripts/scan_pdf.py` | Reads page text and image coordinates |
| `scripts/build_guide.py` | Builds guide content and rendered screenshot crops |
| `scripts/verify_guide.mjs` | Checks coverage, links, assets, and representative searches |
| `scripts/audit_release.py` | Checks release assets, source PDF, and sharing metadata |
| `scripts/configure_site.py` | Sets approved deployment URLs and asset cache versions locally |
| `dist/assets/share-card.png` | Generic link-preview image |
| `qa/` | Local extraction coordinates and review manifests; contains CUI |
| `FIRST_DRAFT_REVIEW.md` | Coverage, editorial choices, and remaining review work |

## How search works

Search runs entirely in the browser over the retained guide. It weights procedure titles and summaries, then matches instruction text, prerequisites, references, glossary definitions, lesson recaps, and practice material. It includes common synonyms, acronym expansion, partial terms of three or more characters (such as `D035` for `D035K`), and common spelling errors or transposed letters. Exact wording receives more weight than partial or typo matches. Where appropriate, results link directly to a matching step.

Typo matching is a fallback for unrecognized words of four or more letters. Codes containing numbers are matched exactly or by prefix, so a typo does not silently turn one transaction code into another. This is a practical local search improvement, not unrestricted interpretation of every possible question.

This is retrieval of source material. It does not generate answers, call an AI model, or send questions to a service. It may miss unfamiliar wording; the contents remain the complete browsing route.

If there are no sufficiently complete matches, search can show related procedures whose titles match at least two query terms. These results identify the unmatched words rather than claiming to answer the full question.

## Rebuild from the source documents

Viewing does not require a build. To regenerate content, use Python 3.11 or newer, the packages in `scripts/requirements.txt`, and Poppler's `pdftoppm` command. Node.js is only needed for the verification script.

```sh
python3 scripts/scan_pdf.py UGAI_DOC.pdf
python3 scripts/build_guide.py --docx UGAI_DOC.docx --pdf UGAI_DOC.pdf --layout qa/pdf-layout.json --pdftoppm /path/to/pdftoppm
node scripts/verify_guide.mjs
```

Replace `/path/to/pdftoppm` with the installed binary, or `pdftoppm` if it is on PATH. The build is local; the first screenshot render takes longer than subsequent builds.

**The extractor is mapped to this document edition.** Its lesson boundaries, reference selections, and screenshot crop rules are specific to the supplied source pair. A revised document needs an extraction review, even if the build checks pass. Export the PDF from the same Word revision, rescan it, rebuild, and review the screenshot associations. Editing only `content.js` is temporary because the next build replaces it.

## Hosting and CUI

The `dist/` directory is a static website with relative asset paths and hash-based navigation, suitable for a static hosting workflow, including a future GitHub Pages artifact. There is no server application or automatic deployment workflow.

**This draft contains CUI and provides no authentication or access control.** Keep it in the approved local environment until the organization approves both the content and its hosting/access arrangements. A hidden URL, `noindex` tag, or private source repository does not add authentication to this website.

No publishing or Git push was performed for this draft. The source Word/PDF files were already tracked by Git when this draft was added. `.gitignore` excludes new generated content and source files by default, but does not remove already tracked files or protect repository history. Review repository access and tracked content before any push. Code and documentation also contain guide-specific terminology; the ignore rules are a convenience, not a classification boundary.

All runtime assets are local. Screenshots load as needed, and the full PDF loads only when opened. The full `dist/` bundle is approximately 88 MiB; it includes the roughly 28 MiB source PDF.
