import {FaFileAlt} from 'react-icons/fa'

export const myStructure = (S) =>
  S.list()
    .title('Base')
    .items([
      // Site Settings
      //   S.listItem()
      //     .title('Site Settings')
      //     .child(S.document().schemaType('siteSettingstest').documentId('siteSettingstest')),
      // About Page
      //   S.listItem()
      //     .title('About Page')
      //     .child(S.document().schemaType('aboutpagesingle').documentId('aboutpagesingle')),

      ...S.documentTypeListItems().filter(
        (item) =>
          // item.getId() !== 'siteSettings' &&
          item.getId() !== 'home' && item.getId() !== 'projects'
      ),

      // Home Page
      S.listItem()
        .title('Home')
        .icon(FaFileAlt)
        .child(S.document().schemaType('home').documentId('home')),
      // Project Page
      S.listItem()
        .title('Projects')
        .icon(FaFileAlt)
        .child(S.document().schemaType('projects').documentId('projects')),

      //END
    ])
