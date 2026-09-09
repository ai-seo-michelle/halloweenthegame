import { copyFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = dirname(fileURLToPath(new URL('../package.json', import.meta.url)));
const clientRoot = join(projectRoot, 'dist', 'client');
const sitemapPath = join(projectRoot, 'public', 'sitemap.xml');
const sitemap = readFileSync(sitemapPath, 'utf8');
const routeMatches = [...sitemap.matchAll(/<loc>https:\/\/halloweenthegame\.info([^<]*)<\/loc>/g)];
const routes = routeMatches
  .map((match) => match[1] || '/')
  .filter((route) => route !== '/');

if (!existsSync(join(clientRoot, 'index.html'))) {
  throw new Error('Missing dist/client/index.html. Run the Vinext build before preparing static routes.');
}

const redirects = [];
const headerBlocks = [];

for (const route of routes) {
  const slug = route.replace(/^\//, '');
  const sourceHtml = join(clientRoot, `${slug}.html`);
  const sourceRsc = join(clientRoot, `${slug}.rsc`);
  const routeDir = join(clientRoot, slug);
  const targetHtml = join(routeDir, 'index.html');
  const targetRsc = join(routeDir, 'index.rsc');

  if (!existsSync(sourceHtml)) {
    throw new Error(`Missing static HTML for ${route}: ${sourceHtml}`);
  }

  mkdirSync(routeDir, { recursive: true });
  copyFileSync(sourceHtml, targetHtml);

  if (existsSync(sourceRsc)) {
    copyFileSync(sourceRsc, targetRsc);
  }

  redirects.push(`${route} ${route}/index.html 200`);
  redirects.push(`${route}/ ${route}/index.html 200`);
  headerBlocks.push(`${route}\n  Content-Type: text/html; charset=utf-8`);
  headerBlocks.push(`${route}/\n  Content-Type: text/html; charset=utf-8`);
}

writeFileSync(join(clientRoot, '_redirects'), `${redirects.join('\n')}\n`, 'utf8');

const headersPath = join(clientRoot, '_headers');
const existingHeaders = existsSync(headersPath) ? readFileSync(headersPath, 'utf8').trimEnd() : '';
const routeHeaders = headerBlocks.join('\n');
writeFileSync(
  headersPath,
  `${existingHeaders}\n\n# Pretty route HTML entry points\n${routeHeaders}\n`,
  'utf8',
);

console.log(`Prepared ${routes.length} extensionless static routes.`);