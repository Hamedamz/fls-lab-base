# Website owner preview

This preview uses a separate GitHub Pages site, not the live website or master branch.

## One-time owner setup

A repository admin or maintainer must enable the publishing source:

1. Open https://github.com/Hamedamz/fls-lab-base/settings/pages
2. Under Build and deployment, select Deploy from a branch.
3. Select preview/figma-redesign and /(root), then Save.
4. Wait for the Pages deployment in Actions to finish.
5. Share https://hamedamz.github.io/fls-lab-base/

The URL is only live after Pages has been enabled and deployment succeeds. The preview will be publicly accessible. Do not attach a production custom domain to this review site.

## Refreshing the preview

On feature/figma-design-implementation, commit the intended source changes, then run:

    node scripts/build-preview.mjs

Publish the contents of dist/ to the preview/figma-redesign branch using a normal fast-forward commit. The preview branch contains built static files only. Build output includes the repository URL base, deep-link fallback, .nojekyll, and preview-info.json identifying the source commit. Changes to the feature branch alone do not refresh the preview; rebuild and publish the preview branch after each approved update.

## Review checklist

- Open Home, Dronevision, Tile, Products, Resources, About, Publications, Contact, Announcements, and GitHub.
- Refresh a nested route such as /fls-lab-base/resources to check deep links.
- Test header/dropdowns, mobile menu, footer, and narrow screens.
- The hero video and final imagery still need approved media.
- The contact form previews details; it does not deliver messages.

GitHub's setup instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
