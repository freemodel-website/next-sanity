import {FaFileAlt} from 'react-icons/fa'

export const myStructure = (S) =>
  S.list()
    .title('Base')
    .items([
      ...S.documentTypeListItems().filter(
        (item) =>
          // item.getId() !== 'siteSettings' &&
          item.getId() !== 'home' &&
          item.getId() !== 'projects' &&
          item.getId() !== 'designservices' &&
          item.getId() !== 'faqpage' &&
          item.getId() !== 'mediapage' &&
          item.getId() !== 'aboutus' &&
          item.getId() !== 'careers' &&
          item.getId() !== 'privacypolicy' &&
          item.getId() !== 'forcontractors'
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
      // Design Services
      S.listItem()
        .title('Design Services')
        .icon(FaFileAlt)
        .child(S.document().schemaType('designservices').documentId('designservices')),
      // FAQ
      S.listItem()
        .title('FAQ')
        .icon(FaFileAlt)
        .child(S.document().schemaType('faqpage').documentId('faqpage')),
      // Media
      S.listItem()
        .title('Media Page')
        .icon(FaFileAlt)
        .child(S.document().schemaType('mediapage').documentId('mediapage')),
      // About Us
      S.listItem()
        .title('About Us')
        .icon(FaFileAlt)
        .child(S.document().schemaType('aboutus').documentId('aboutus')),
      // Careers
      S.listItem()
        .title('Careers')
        .icon(FaFileAlt)
        .child(S.document().schemaType('careers').documentId('careers')),
      // Privacy Policy
      S.listItem()
        .title('Privacy Policy')
        .icon(FaFileAlt)
        .child(S.document().schemaType('privacypolicy').documentId('privacypolicy')),
      // For Contractors
      S.listItem()
        .title('For Contractors')
        .icon(FaFileAlt)
        .child(S.document().schemaType('forcontractors').documentId('forcontractors')),

      //END
    ])
