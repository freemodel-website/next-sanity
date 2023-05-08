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
      //Home Page
      S.listItem().title('Home').child(S.document().schemaType('home').documentId('home')),

      ...S.documentTypeListItems().filter(
        (item) =>
          // item.getId() !== 'siteSettingstest' &&
          // item.getId() !== 'aboutpagesingle' &&
          item.getId() !== 'home' //&&
        //item.getId() !== 'review'
      ),
    ])
