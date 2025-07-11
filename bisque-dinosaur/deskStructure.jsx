import {FaFileAlt} from 'react-icons/fa'
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'
import DocumentsPane from 'sanity-plugin-documents-pane'

export const myStructure = (S, context) =>
  S.list()
    .title('Base')
    .items([
      // Filtered Projects
      S.listItem()
        .title('Filtered Projects')
        .child(
          S.list()
            .title('Filters')
            .items([
              S.listItem()
                .title('Projects By City')
                .child(
                  S.documentTypeList('cities')
                    .title('By City')
                    .child((citiesId) => {
                      return S.documentList()
                        .title('caseStudy')
                        .filter('_type == "caseStudy" && cities._ref == $citiesId ')
                        .params({citiesId})
                    })
                ),
            ])
        ),

      // Testimonials
      // S.listItem()
      //   .title('Testimonialz')
      //   .icon(FaFileAlt)
      //   .child(
      //     S.documentTypeList('testimonials')
      //       .title('Testimonials')
      //       .child((testimonialsId) =>
      //         S.document()
      //           .documentId(testimonialsId)
      //           .schemaType('testimonials')
      //           .views([
      //             // Default form view
      //             S.view.form().title('Default View'),
      //             // Custom view for testimonials
      //             S.view
      //               .component(() => (
      //                 <div>
      //                   <h1>Custom Testimonial View</h1>
      //                   <p>This is a custom view for the Testimonials section, tailored for each testimonial!</p>
      //                 </div>
      //               ))
      //               .title('Custom View'),
      //           ])
      //       )
      //   ),

      // Minimum required configuration
      // orderableDocumentListDeskItem({type: 'post', S, context}),
      orderableDocumentListDeskItem({
        type: 'post',
        title: 'Blog Post',
        S,
        context,
        options: {
          order: 'publishedAt desc',
        },
      }),
      orderableDocumentListDeskItem({
        type: 'media',
        title: 'Press',
        S,
        context,
        options: {
          order: 'publishedAt desc',
        },
      }),

      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() !== 'home' &&
          item.getId() !== 'projects' &&
          item.getId() !== 'designservices' &&
          item.getId() !== 'faqpage' &&
          item.getId() !== 'mediapage' &&
          item.getId() !== 'aboutus' &&
          item.getId() !== 'careers' &&
          item.getId() !== 'privacypolicy' &&
          item.getId() !== 'forcontractors' &&
          item.getId() !== 'letstalk' &&
          item.getId() !== 'foragents' &&
          item.getId() !== 'footersettings' &&
          item.getId() !== 'howitworks' &&
          item.getId() !== 'locationspage' &&
          item.getId() !== 'thankyous' &&
          item.getId() !== 'blogpage' &&
          item.getId() !== 'supportpage' &&
          item.getId() !== 'fordesigners' &&
          item.getId() !== 'forhomeowners' &&
          item.getId() !== 'renovationservices' &&
          item.getId() !== 'post' &&
          item.getId() !== 'media' &&
          item.getId() !== 'meettheteam' &&
          item.getId() !== 'marketing' &&
          item.getId() !== 'viapage' &&
          item.getId() !== 'partnerwithfreemodel' &&
          item.getId() !== 'reviews' &&
          item.getId() !== 'requestestimate'
      ),

      // About Us
      S.listItem()
        .title('About Us')
        .icon(FaFileAlt)
        .child(S.document().schemaType('aboutus').documentId('aboutus')),

      // Blog Page
      S.listItem()
        .title('Blog Page')
        .icon(FaFileAlt)
        .child(S.document().schemaType('blogpage').documentId('blogpage')),

      // Careers
      S.listItem()
        .title('Careers')
        .icon(FaFileAlt)
        .child(S.document().schemaType('careers').documentId('careers')),

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

      // For Agents
      S.listItem()
        .title('For Agents')
        .icon(FaFileAlt)
        .child(S.document().schemaType('foragents').documentId('foragents')),

      // For Contractors
      S.listItem()
        .title('For Contractors')
        .icon(FaFileAlt)
        .child(S.document().schemaType('forcontractors').documentId('forcontractors')),

      // For Designers
      S.listItem()
        .title('For Designers')
        .icon(FaFileAlt)
        .child(S.document().schemaType('fordesigners').documentId('fordesigners')),

      // For Homeowners
      S.listItem()
        .title('For Homeowners')
        .icon(FaFileAlt)
        .child(S.document().schemaType('forhomeowners').documentId('forhomeowners')),

      // Home Page
      S.listItem()
        .title('Home')
        .icon(FaFileAlt)
        .child(S.document().schemaType('home').documentId('home')),

      // How It Works
      S.listItem()
        .title('How It Works')
        .icon(FaFileAlt)
        .child(S.document().schemaType('howitworks').documentId('howitworks')),

      // Let's Talk
      S.listItem()
        .title("Let's Talk")
        .icon(FaFileAlt)
        .child(S.document().schemaType('letstalk').documentId('letstalk')),

      // Locations Page
      S.listItem()
        .title('Locations Page')
        .icon(FaFileAlt)
        .child(S.document().schemaType('locationspage').documentId('locationspage')),

      // Marketing
      S.listItem()
        .title('Marketing')
        .icon(FaFileAlt)
        .child(S.documentTypeList('marketing').title('Marketing')),

      // Media Page
      S.listItem()
        .title('Media Page')
        .icon(FaFileAlt)
        .child(S.document().schemaType('mediapage').documentId('mediapage')),

      // Meet the Team
      S.listItem()
        .title('Meet the Team')
        .icon(FaFileAlt)
        .child(S.document().schemaType('meettheteam').documentId('meettheteam')),

      // Partner with Freemodel
      S.listItem()
        .title('Partner with Freemodel')
        .icon(FaFileAlt)
        .child(S.document().schemaType('partnerwithfreemodel').documentId('partnerwithfreemodel')),

      // Privacy Policy
      S.listItem()
        .title('Privacy Policy')
        .icon(FaFileAlt)
        .child(S.document().schemaType('privacypolicy').documentId('privacypolicy')),

      // Project Page
      S.listItem()
        .title('Projects')
        .icon(FaFileAlt)
        .child(S.document().schemaType('projects').documentId('projects')),

      // Renovation Services
      S.listItem()
        .title('Renovation Services')
        .icon(FaFileAlt)
        .child(S.document().schemaType('renovationservices').documentId('renovationservices')),

      // Request Estimate
      S.listItem()
        .title('Request Estimate')
        .icon(FaFileAlt)
        .child(S.document().schemaType('requestestimate').documentId('requestestimate')),

      // Reviews
      S.listItem()
        .title('Reviews')
        .icon(FaFileAlt)
        .child(S.document().schemaType('reviews').documentId('reviews')),

      // Support
      S.listItem()
        .title('Support')
        .icon(FaFileAlt)
        .child(S.document().schemaType('supportpage').documentId('supportpage')),

      // Thank Yous
      S.listItem()
        .title('Thank Yous')
        .icon(FaFileAlt)
        .child(S.document().schemaType('thankyous').documentId('thankyous')),

      // Footer Settings
      S.listItem()
        .title('NavBar/Footer Settings')
        .icon(FaFileAlt)
        .child(S.document().schemaType('footersettings').documentId('footersettings')),

      // Via
      S.listItem()
        .title('Via')
        .icon(FaFileAlt)
        .child(S.document().schemaType('viapage').documentId('viapage')),
      // END
    ])
