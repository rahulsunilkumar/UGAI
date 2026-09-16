# Publishing and maintaining MRO Operations Guide

## Review outcome — 15 September 2026

The application has passed local publication checks. **It has not been published, and an approved hosting environment has not been selected.** The current localhost address works only on the computer running the preview.

### Checked and corrected

- Renamed the website **MRO Operations Guide** throughout its interface, browser titles, generated home record, and rebuild script. The original instructor-guide title remains in source references.
- Opened all 71 reading routes under a `/UGAI/` path in the browser. All showed the expected page and active contents entry, with no horizontal overflow at the desktop test size.
- Reloaded a direct procedure/step link and confirmed it landed on step 3. Source PDF links resolved under the same repository path.
- Preserved search filters in shared URLs, including after a fresh reload.
- Added recovery for unknown pages, nonexistent steps, and malformed link encoding, plus a branded static `404.html`.
- Checked 431 screenshot files, the source PDF hash, runtime assets, and the generic sharing image. No missing release assets were found.
- Added generic Open Graph metadata and a 1200 × 630 preview image containing no source screenshots or procedure details.
- Added a local deployment-URL configuration script, with asset versions to refresh cached code/content after a release. Tested repeated configuration on an isolated copy using a reserved example domain.
- Passed 27 representative search assertions, including partial identifiers, spelling errors, and unsupported questions. Related results are explicitly labeled when an extra query word does not match.

### Representative search results

| Example question | First result / behavior |
| --- | --- |
| How do I create a service order? | Create Service Order |
| How do I find a work order? | Search for a Work Order |
| How can I update a visit? | Update Visits |
| How do I close a visit? | Close Visit |
| How do I return unused material? | Return Material from Work Order; labeled as related because “unused” does not match |
| Where do I enter a serial number? | Search for a Product |
| Where can I see inventory transactions? | View Inventory Transactions Status Summary |
| How do I print the master configuration report? | View Master Configurations Report |
| D035 | Finds D035K instructions |
| reciept | Miscellaneous Receipt |
| maintenace visit | Create Maintenance Visits |
| What does PSSD mean? | Acronym glossary |
| How do I assign an employee in Workbench? | Lesson 8, which explains that the detailed companion guides were not supplied |
| Can I reset my password? | No matching instructions; no answer is invented |

These are retrieval checks, not a validation of Oracle transactions in a live environment. Search is local and lexical, with synonyms, prefixes, and typo handling; it does not understand every possible question.

## Hosting decision

The guide, screenshots, and source PDF contain CUI. The website itself has no authentication. Hosting and repository access must be approved by the responsible AFS owner for this material.

| Option | How it fits |
| --- | --- |
| Approved organization GitHub Enterprise Cloud | Private project Pages can restrict viewers to people with repository read access. Confirm the specific environment is approved for the data; the product feature alone does not establish that. |
| Approved internal website host | Publish the static `dist/` bundle behind the organization's access controls. GitHub can still manage the code if that repository is approved. |
| Free public GitHub Pages | Suitable only for a separately reviewed public/synthetic edition. It does not meet the restricted-access requirement for this current bundle. |

GitHub states that a private repository can still produce a public Pages site. Private Pages access controls require an organization using GitHub Enterprise Cloud and an eligible private/internal project repository. See [GitHub's visibility documentation](https://docs.github.com/en/enterprise-cloud@latest/pages/getting-started-with-github-pages/changing-the-visibility-of-your-github-pages-site) and [publishing-source documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

The configured remote currently points to the personal `rahulsunilkumar/UGAI` repository. Its online visibility was not verified. Source Word/PDF files are already tracked in local Git history, while the new application files remain uncommitted. `.gitignore` does not remove previously tracked documents or history. Review the repository arrangement before pushing.

## How links will look

The generic card is `dist/assets/share-card.png`. Static metadata supplies the new title and a brief description. Before release, run `scripts/configure_site.py --url` with the **actual approved HTTPS site root**, including a path such as `/UGAI/` when applicable. This sets absolute preview/canonical URLs, the 404 home link, and asset cache versions. It does not upload anything.

Procedure and step links retain their `#guide/...` fragments, and search links retain their query and category. Keep these identifiers stable when revising the document so existing links keep working.

All fragment links use the same generic preview card: the fragment is handled in the browser and is not sent to the server. A protected host may prevent chat preview services from reading metadata, so Teams/Slack previews must be checked after publishing with the approved access controls in place. Do not expose controlled content just to enable a preview. References: [Open Graph protocol](https://ogp.me/), [URI fragments](https://developer.mozilla.org/en-US/docs/Web/URI/Reference/Fragment).

## Release workflow after the hosting decision

1. Use the approved repository and hosting environment. For private Pages, configure private site visibility before deploying and verify who is entitled to repository read access.
2. Decide where the source and generated content will live. The current ignore rules deliberately exclude generated guide text, screenshots, and the source PDF copy. A normal push therefore does **not** create a complete deployable bundle. In an approved repository, either track the authorized generated bundle or rebuild it on an approved runner from available source files.
3. Run the content/search checks with `node scripts/verify_guide.mjs`.
4. Run `python3 scripts/configure_site.py --url` with the real approved site root, then `python3 scripts/audit_release.py --require-url`.
5. Publish **only `dist/`**. GitHub's branch-based publishing accepts repository root or `/docs`; this project's `dist/` layout is suited to a custom Actions artifact. Use only approved runners/artifact storage for this content. No deployment workflow has been enabled here.
6. Check the hosted site with an authorized account, and confirm an unauthorized visitor cannot open the pages, screenshots, guide data, or PDF directly. Test a fresh step link, a filtered search link, and the preview behavior in the intended messaging app.
7. Record a release tag and its source-document revision. Retain the previous verified bundle for rollback.

## Ongoing maintenance through GitHub

Use a small branch and pull request for each update. Review the changed text, screenshots, and interface together; merge only the version intended for release. Keep business-content corrections separate from unrelated design changes when practical.

For a new document revision:

1. Save the matching Word document and its Word-exported PDF in the approved workspace.
2. Rescan the PDF with `scripts/scan_pdf.py`.
3. Review and update the extraction map in `scripts/build_guide.py`. It is specific to the current edition: lesson paragraph positions, selected references, expected counts, dates/version, and crop rules may need changes. Replacing the Word file alone is not a reliable automatic update.
4. Rebuild and inspect coverage, prerequisites, screenshots, and Practice answers. Preserve record IDs or provide a deliberate link migration if a procedure is renamed.
5. Add real learner questions to `scripts/verify_guide.mjs`, run both verification scripts, refresh deployment URLs/cache versions, and review the pull request.
6. Release the approved bundle and record what changed. Revert/redeploy the previous verified bundle if a release is wrong.

For design-only changes, update HTML/CSS/JavaScript, run the same checks, and inspect desktop and mobile layouts. Do not hand-edit `dist/content.js` as the permanent source of document corrections; the next rebuild replaces it.
