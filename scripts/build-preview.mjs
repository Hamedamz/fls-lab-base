import { execFileSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';

// Build for this repository's separate GitHub Pages review site.
const base = '/fls-lab-base/';
execFileSync(process.execPath, ['node_modules/vite/bin/vite.js', 'build', '--base', base], { stdio: 'inherit' });
const restorePath = `<script>
(function () {
  var path = new URLSearchParams(location.search).get('previewPath');
  if (path && path.startsWith('${base}')) history.replaceState(null, '', path);
})();
</script>`;
const html = readFileSync('dist/index.html', 'utf8');
writeFileSync('dist/index.html', html.replace('<head>', '<head>\n' + restorePath));
// Pages serves 404.html for deep links. Redirect through the root, then restore
// the requested URL before Vue Router starts, preserving query and fragment.
writeFileSync('dist/404.html', `<!doctype html><html><head><meta charset="utf-8"><title>Opening FLS Lab preview</title><script>location.replace('${base}?previewPath=' + encodeURIComponent(location.pathname + location.search + location.hash));</script></head><body><a href="${base}">Open FLS Lab preview</a></body></html>`);
writeFileSync('dist/.nojekyll', '');
const sourceCommit = execFileSync('git', ['rev-parse', 'HEAD'], { encoding: 'utf8' }).trim();
writeFileSync('dist/preview-info.json', JSON.stringify({ sourceCommit, builtAt: new Date().toISOString(), purpose: 'FLS website owner design review' }, null, 2));
console.log('Preview files prepared in dist/. Publish to preview/figma-redesign; Pages activation requires a repository owner.');
