# FLS website: implementation and review guide

**Status: planning only. Begin implementation only when the user requests it.**

- Repository: https://github.com/Hamedamz/fls-lab-base
- Local clone: `C:\Users\zappe\Downloads\fls-lab-base\fls-lab-base`
- Working branch: `feature/figma-design-implementation`
- Inspected baseline: `2f78db4` (master at inspection).

## 1. Outcome and minimal-change rules

Recreate the ten selected Figma pages in the existing Vue website, deliver a local preview the user can test, and provide ordered commits for the website owners to review.

Keep Vue 3, Vue Router, Vite, Tailwind, existing dependencies and the lockfile. Prefer editing existing templates and styles over replacing the application or reorganizing the source tree. Share components where they reduce real repetition: header, footer, repeated cards and the similar product layouts. Do not extract all existing content merely for consistency.

Use editable HTML text, links and controls. Responsive sections should grow with content rather than inherit fixed Figma page heights. Preserve existing research information and links. Avoid unrelated formatting, dependency upgrades, a CMS or backend unless separately requested.

## 2. Page, route and content map

| Selected design | Route | Implementation approach |
| --- | --- | --- |
| Landing Page - Gradient + Video | `/` | Update `HomeView.vue`: video hero, products, feature sections, announcements and footer. |
| Dronevision | `/dronevision` | New product view; share layout with Tiles where useful. |
| Tile | `/tiles` | New product view with Tile-specific content. |
| Products | `/products` | New overview; link to preserved technology research. |
| Resources | `/resources` | New directory of real internal pages and approved external resources. |
| About FLS Lab | `/about` | Adapt the personnel view; preserve photos, names, bios and alumni access. |
| Publications | `/publications` | Restyle the existing publication view without losing citations or links. |
| Contact Us | `/contact` | New contact layout; delivery behavior requires an owner decision. |
| Announcements | `/announcements` | Restyle existing records; retain Show More behavior. |
| GitHub | `/github` | New website page linking to verified lab repositories/organization. |

Initially retain `/technology` as a research archive linked from Products or Resources. Redirect `/personnel` to `/about` once About is ready. Keep `/alumni` accessible. Do not remove research content before identifying its approved destination. Add a not-found view, page titles and appropriate scroll behavior.

## 3. Inputs and decisions

Collect these before detailed implementation:

- Access to selected Figma frames or individual full-resolution exports. Figma browser access was blocked in this session; no Figma MCP tool was available. The overview establishes scope but cannot supply exact measurements or small text.
- Final logo SVG, illustration exports, fonts, original hero video and poster. The exact assets are absent from the inspected clone. Identify temporary replacements explicitly.
- Approved button destinations, repository URLs, contact recipient and delivery service.
- Production hosting, deployment branch/base path, preview mechanism and release owner.

Layout work can use clearly marked placeholders while content is pending. Do not invent research results, metrics, affiliations, publications or repository names. Exact visual sign-off depends on the actual designs and assets.

## 4. Ordered commits for owner review

Each implementation chunk includes relevant tests and short review notes. Keep it buildable. Split a chunk if it becomes difficult to review; avoid commits for every CSS adjustment.

| Chunk / suggested commit | Code boundary | Owner review | Checks before commit |
| --- | --- | --- | --- |
| 0. `docs: add redesign implementation and review guide` | This guide only. | Scope, routes, preservation and workflow. | No application/configuration changes. |
| 1. `feat: add responsive shared header and gradient footer` | `App.vue`, `FLSTitle.vue`, focused shared components, global CSS and body classes in `index.html` if needed. Replace the broken starter test with meaningful shell/navigation coverage. Narrow lint configuration fixes only where necessary. | Logo, header, menu, gradient, footer card and space below it. Existing pages remain legible. | Build, shell tests, mobile/keyboard checks, inspect every existing view after global CSS changes. |
| 2. `feat: recreate the gradient video homepage` | `HomeView.vue`, required assets and small reusable visual components. | Section order, hero crop, cards, content width and footer transition. | Build, desktop/mobile comparison, media controls/fallback/reduced motion and working links. |
| 3. `feat: add product overview and product detail routes` | Products, Dronevision and Tiles views, shared product layout, these routes and navigation entries. | Product differences, hierarchy, links and preserved research. | Build, product route tests, direct loads, responsive checks, `/technology` remains accessible. |
| 4. `feat: restyle about publications and announcements` | Existing personnel/publication/announcement templates, About route and Personnel redirect, narrowly scoped legacy styling. | Existing records/links, bios, alumni access and Show More. | Build, compare records and links to baseline, interaction/redirect tests and mobile checks. |
| 5. `feat: add resources contact and github pages` | Three new views, their routes, final navigation/footer destinations, not-found view, titles and scroll behavior. | Every menu destination works; contact behavior is truthful; external links are correct. | Build, route/contact tests, invalid-input and applicable failure states, keyboard checks, all ten routes. |
| 6. `docs: record local acceptance checks and handoff` | Verification notes, startup and asset instructions. Small final fixes may precede this in focused code commits. | Reproducible preview, results, limitations and release readiness. | Full local acceptance pass, reviewed diff and recorded outcomes. |

Do not link to new routes before their destinations exist. Preserve functionality at every commit. These are ordered changes, not independent feature toggles.

## 5. Live review and commit workflow

1. Check branch/status and identify user changes before editing. Never overwrite unrelated work.
2. Start one read-only review subagent, as requested, with the baseline, current scope and preservation requirements.
3. Implement one chunk and its focused checks. Stage only its files.
4. Have the reviewer inspect that actual diff while the developer runs verification. Avoid changing the reviewed files during the review pass; work on notes or checks instead.
5. Fix findings and request review of the changed diff. Record any unresolved findings. Subagent review supports owner review; it does not replace it.
6. Inspect staged changes for accidental content loss, unrelated formatting and generated files. Commit when required checks pass, or explicitly record an inherited blocker and its scope.
7. Record commit hash, visible changes, results and limitations. Continue to the next chunk.
8. When sharing is requested, push the branch and open a draft pull request with ordered commits. Avoid rewriting commits the owners have already reviewed without coordinating.

Local commits are not visible to owners until pushed or exported. Until sharing is requested, provide a local commit/diff report or patch files. This task is documentation only.

Useful review commands, run from the clone:

```powershell
git log --oneline 2f78db4..HEAD
git diff --stat 2f78db4..HEAD
git show <commit-hash>
git diff --cached
git diff --check
```

Replace `<commit-hash>` with the actual commit. A single PR can contain all ordered chunks; separate PRs are useful only if the owners prefer incremental merging.

## 6. Local setup and observed baseline

Record Node and package-manager versions. The existing checkout already has installed dependencies. Its future startup commands are:

```powershell
Set-Location 'C:\Users\zappe\Downloads\fls-lab-base\fls-lab-base'
git status --short --branch
npm run dev -- --host 127.0.0.1 --port 5173 --strictPort
```

Open `http://127.0.0.1:5173`. Keep the server terminal running; stop with Ctrl+C. If the port is occupied, stop the known old preview or choose and record another port.

The development server has not been started as part of this planning task; startup/browser verification belongs to implementation.

**Fresh installation is pending a verified setup recipe.** Environment observed: Node `24.19.0`, pnpm `11.25.0`. On this machine `pnpm install --frozen-lockfile` installed the locked packages but returned an error because esbuild's install script was not approved. It generated an incomplete `pnpm-workspace.yaml`, which was removed. Before providing clean-install commands to the owners, resolve this with a narrow esbuild build approval compatible with the installed pnpm version and verify the recipe in a clean checkout. Do not broadly approve dependency scripts or commit the incomplete generated workspace file. The installed packages worked for the build and test/lint execution with the existing scripts; `npm run` does not create a second lockfile. Do not describe clean setup as reproducible until it has been verified.

| Baseline check | Actual result before implementation |
| --- | --- |
| Production build | Passed using `npm run build`. |
| Unit suite | Failed: `HelloWorld.spec.js` imports missing `HelloWorld.vue`. |
| Non-mutating ESLint | Three errors: CommonJS `module` environment in `postcss.config.js` and `tailwind.config.js`, and the single-word personnel `Index.vue` component name. Existing formatting warnings also occur. |
| Application source | No application, manifest or lockfile changes made. Local ignored dependency/build artifacts were generated. |

Replace the stale test with useful behavior coverage in chunk 1. Fix baseline lint errors narrowly; record inherited formatting warnings instead of reformatting the project. Report baseline failures separately from introduced failures.

## 7. Implementation and final verification

Run checks appropriate to each chunk. Use the existing tools and test meaningful behavior rather than copies of markup. Run non-mutating lint on changed code during development, and full checks before handoff:

```powershell
npm run test:unit -- --run
node node_modules/eslint/bin/eslint.js . --ext .vue,.js,.jsx,.cjs,.mjs --ignore-path .gitignore
npm run build
npm run preview -- --host 127.0.0.1 --strictPort
```

Production preview uses `http://127.0.0.1:4173`. Rebuild after source changes before checking preview. Stop with Ctrl+C. The existing `npm run lint` script uses `--fix`; avoid it for read-only review.

Final local acceptance checklist:

- [ ] Open and refresh each of the ten routes directly; follow all internal links.
- [ ] Verify legacy routes, alumni, unknown URLs, back/forward, document titles and scroll behavior.
- [ ] Compare sections against approved Figma frames at matching widths; list approximations and missing assets.
- [ ] Check 375, 768, 1024 and 1440px and intermediate widths: no overflow, clipped text, obstructed controls or excessive empty sections.
- [ ] Check menu/active state and footer links. The gradient reaches the page bottom with visible gradient space below the white card.
- [ ] With real video supplied, check muted inline autoplay/loop, pause, reduced motion, loading failure and useful poster/static fallback.
- [ ] Verify existing publication links/citations, announcements, people/bios/photos, alumni and NSF acknowledgement are retained or explicitly mapped.
- [ ] Check new external destinations against owner-approved URLs; identify unavailable links.
- [ ] Check keyboard navigation, menu dismissal, visible focus, labels, image descriptions and text contrast; use another installed browser when available.
- [ ] Test contact validation and its actual outcome. A mailto fallback must say it opens an email draft; never claim a message was sent. A delivery service needs success/failure checks.
- [ ] Inspect browser console/network for app errors and missing assets; inspect image/video loading and page weight.
- [ ] Record actual full test/build/lint results, inherited issues, reviewer findings and resolutions.
- [ ] Run `git diff --check` and inspect staged files before committing.

If browser testing is blocked, report it. Command-line passes do not prove visual/browser checks passed. Final visual sign-off remains pending until the approved source designs and assets are available.

## 8. Owner review packet and user handoff

Deliver:

- Branch/base and ordered commit hashes with one sentence describing each chunk.
- Exact startup/preview commands and local URL the user can open.
- Desktop/mobile screenshots, where browser capture is available, labeled by route and viewport.
- Verification results, subagent findings/resolutions, and known limitations.
- Where to edit routine content and replace logo/images/video.
- Missing assets, placeholder copy and contact/hosting decisions requiring owner input.

Use this short note per chunk:

```text
Commit:
Purpose and affected pages:
Files/areas changed:
How to review locally:
Checks run and results:
Review findings and resolutions:
Known gaps / owner decision needed:
```

The local milestone is a site the user can start and browse, ten working routes, recorded checks and explicit missing assets/services. Exact design sign-off and production release are later milestones.

## 9. Later production release

After implementation/local review and authorization to share, push the branch, open a PR and provide a hosted preview. Owners review the design and commits before merging.

Confirm the actual host supports Vue Router history fallback and the correct asset base path. Local Vite preview does not prove refreshing `/dronevision` works on the production host. Check hosted direct URLs, contact delivery, HTTPS media and asset paths before release.

Deploy after owner approval. Record the previous deployed revision and host-specific rollback process; check live routes and interactions after release.

## Planning review

A read-only review subagent checked this guide. Its finding was that the startup recipe included the known failing pnpm installation command. The guide now separates the installed checkout from clean installation and marks fresh setup as pending verification. No other blocking guide findings were reported. Application implementation and browser testing have not begun.
