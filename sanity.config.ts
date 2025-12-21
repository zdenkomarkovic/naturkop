import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './sanity/schemas';
import { sanityConfig } from './sanity/config';

export default defineConfig({
  name: 'default',
  title: 'Naturkop CMS',

  projectId: sanityConfig.projectId,
  dataset: sanityConfig.dataset,

  basePath: '/studio',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});
