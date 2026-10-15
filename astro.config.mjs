import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://fabiorosado.dev',
  trailingSlash: 'always',
  markdown: { shikiConfig: { langAlias: { Dockerfile: 'dockerfile', git: 'shellscript' } } },
  integrations: [mdx()],
});
