import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'

import schemas from './schemas'

export default defineConfig({
  projectId: 'bp1tcvcf',
  dataset: 'production',
  name: 'react_portfolio',
  title: 'React Portfolio',
  plugins: [
    deskTool(),
    visionTool()
  ],
  schema: {
    types: schemas,
  },
})
