import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import { customStructure } from './structure'

export default defineConfig({
  name: 'default',
  title: 'recipes-site',

  projectId: 'hrwnx43k',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: customStructure,
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
