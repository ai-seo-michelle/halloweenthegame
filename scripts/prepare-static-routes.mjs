import { existsSync, readFileSync, rmSync, unlinkSync, writeFileSync } from 'node:fs';
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

const headerBlocks = [];

for (const route of routes) {
  const slug = route.replace(/^\//, '');
  const sourceHtml = join(clientRoot, `${slug}.html`);
  const routeDir = join(clientRoot, slug);

  if (!existsSync(sourceHtml)) {
    throw new Error(`Missing static HTML for ${route}: ${sourceHtml}`);
  }

  if (existsSync(routeDir)) {
    rmSync(routeDir, { recursive: true, force: true });
  }

  headerBlocks.push(`${route}\n  Content-Type: text/html; charset=utf-8`);
  headerBlocks.push(`${route}/\n  Content-Type: text/html; charset=utf-8`);
}

const redirectsPath = join(clientRoot, '_redirects');
if (existsSync(redirectsPath)) {
  unlinkSync(redirectsPath);
}

const headersPath = join(clientRoot, '_headers');
const existingHeaders = existsSync(headersPath) ? readFileSync(headersPath, 'utf8').trimEnd() : '';
const routeHeaders = headerBlocks.join('\n');
writeFileSync(
  headersPath,
  `${existingHeaders}\n\n# Pretty route HTML entry points\n${routeHeaders}\n`,
  'utf8',
);

console.log(`Prepared ${routes.length} extensionless static routes.`);