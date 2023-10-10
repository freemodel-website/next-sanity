import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {media} from 'sanity-plugin-media'
import {schemaTypes} from './schemas'
import {myStructure} from './deskStructure'
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'

export default defineConfig({
  name: 'default',
  title: 'Freemodel',

  projectId: '5h1h7x9x',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: myStructure,
      orderableDocumentListDeskItem,
    }),
    visionTool(),
    media(),
    {
      name: 'custom-css',
      path: '/custom.css',
    },
  ],

  schema: {
    types: schemaTypes,
  },
})
