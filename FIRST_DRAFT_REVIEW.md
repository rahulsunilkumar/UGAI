# First draft review

Local edition prepared 15 September 2026 from `UGAI_DOC.docx` and `UGAI_DOC.pdf`.

## Coverage

| Lesson | Topic | Procedures |
| --- | --- | ---: |
| 1 | Requesting and Inducting Items | 16 |
| 2 | Tracking Assets | 6 |
| 3 | Turn-In/Sellback | 6 |
| 4 | Configurations | 2 |
| 5 | Visits | 1 |
| 6 | Work Orders | 9 |
| 7 | Inventory Transactions | 5 |
| 8 | Production Execution Workbench | Overview and companion references |

There are 71 reading pages in total, including 45 procedures with all 423 source steps. The three Misidentified Item Turn-In parts remain grouped together and carry their shared prerequisites. Ten knowledge-check questions appear across seven Practice pages, followed by the course exercise.

## Editorial treatment

- Kept original lesson, topic, and procedure order.
- Preserved procedure instructions, field names, role requirements, prerequisites, notes, and tips. Short summaries and step headings support navigation; they are editorial additions.
- Rendered 431 screenshot regions from the PDF so Word drawings, arrows, highlights, and numbered callouts stay together. Eight regions belong to introductory references; the remaining 423 accompany procedure steps.
- Retained application navigation, vocabulary, toolbar actions, keyboard shortcuts, glossary, lesson overviews and recaps, and companion-resource references.
- Removed classroom administration, attendance, introductions, delivery directions, the course survey, and references to an introductory video that was not supplied.
- Moved knowledge checks and the useful course exercise into Practice. Answers use the source text and appear only when expanded.
- Retained source-page links into the complete PDF, allowing the reader to check original context.
- Added “non-engine” to the relevant general D7 procedure heading, based on its source prerequisite, to distinguish it from the engine-specific procedure.

## Known limits and review priorities

1. **Workbench instructions are external.** Lesson 8 points to separate Production Execution Workbench guides. Those files were not supplied; no steps were invented to fill the gap. Other companion job aids are also listed as references, not downloads.
2. **Screenshot quality follows the source.** Annotations are combined correctly in the rendered crops. Some original screen text is soft at larger sizes; rendering cannot recover missing source resolution. The viewer offers fit-to-window and actual-size modes.
3. **The guide is a first draft, not an operational validation.** A subject-matter reviewer should walk through representative Oracle workflows, particularly engine/non-engine transactions, interface validation, and the three-part turn-in workflow. Source wording, including its inconsistencies, remains largely intact.
4. **Practice needs a training context.** The course exercise expects a separately assigned scenario and environment. The guide does not invent training credentials, transaction values, or missing scenarios.
5. **Search is lexical.** It handles selected synonyms and acronym definitions, but is not a semantic model. Try actual questions from learners to identify vocabulary gaps. Unsupported questions show an empty state and a route back to the contents.

## Verification

- Matched all 423 DOCX steps to PDF step starts by sequence, number, and normalized opening text; captured the one Step 1 embedded inside a Read Statement and the step numbered with a colon.
- Confirmed all 45 procedure boundaries and all 71 reading pages are reachable from the contents.
- Confirmed all 431 image assets exist and have valid dimensions, with retained page/crop coordinates in `qa/extraction-manifest.json`.
- Reproduced the PDF layout scan exactly from the supplied PDF and rebuilt using it.
- Ran representative search regressions for work orders, serial numbers, D7 engine/non-engine, MISTR/non-MISTR, acronyms, shortcuts, missing Workbench material, and an unsupported query.
- Visually reviewed screenshot contact sheets and full-size crop samples. Checked desktop and mobile reading, search filters, direct-step navigation, screenshot enlargement, and Practice answer disclosure in the browser.

These checks establish extraction and navigation integrity. They do not certify the source's Oracle procedures as current or validate every transaction in a live system.
