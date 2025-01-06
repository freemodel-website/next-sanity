export const BROKERAGE_QUERY = `
  *[_type == "brokerage" && slug.current == $brokerage] {
    _id,
    title,
    slug,
    logoImage {
      crop,
      hotspot,
      asset->{
        _ref,
        _type,
        altText,
        description,
        "tags": opt.media.tags[]->name.current,
        title,
        url
      }
    },
    text,
    sectionhead,
    mainImage {
      crop, 
      hotspot,
      asset->{
        _ref,
        _type,
        altText,
        description,
        "tags": opt.media.tags[]->name.current,
        title,
        url
      }
    },
    body,
    bodyTitle,
    "projects": *[_type == "caseStudy" && references(^._id)]{
      _id,
      _updatedAt,
      title,
      slug,
      mainImage {
        crop,
        hotspot,
        asset->{
          _ref,
          _type,
          altText,
          description,
          "tags": opt.media.tags[]->name.current,
          title,
          url
        }
      },
      beds,
      baths,
      durationmonths,
      bool
    },
    callout,
    questionimage {
      crop,
      hotspot,
      asset -> {
        _id,
        alt,
        url
      }
    },
    questionsanswers,
    buttontitle,
    tbssection,
    tbsbody,
    tbstitle1,
    tbstitle2,
    tbstitle3,
    imageArray,
    imageGallaryTitle,
    imageGallaryBody,
    imagesGallery []{
      title,
      image {
        crop, 
        hotspot,
        asset->{
          _id,
          url
        }
      }
    },
    //----SEO
    seoTitle,
    seoDescription,
  }[0]
`;
