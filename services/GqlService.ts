import { request, gql } from 'graphql-request';
import { marked } from 'marked';

export const newSearchQuery = (data: {}) => {
    const matation = gql`
    mutation ($data: SearchtermInput!) {
        createSearchterm(data: $data, locale: "nl") {
            data {
            id
            }
        }
    }`;

    return request(process.env.graphqlClient as string, matation, {data});
}

export const addItemToWhislist = (data: {}) => {
    const matation = gql`
    mutation ($data: WhishlistInput!) {
        createWhishlist(data: $data, locale: "nl") {
            data {
            id
            }
        }
    }`;

    return request(process.env.graphqlClient as string, matation, {data});
}

export const deleteItemWhislist = (data: {}) => {
    const matation = gql`
    mutation ($data: ID!) {
        deleteWhishlist(id: $data, locale: "nl") {
            data {
            id
            }
        }
    }`;

    return request(process.env.graphqlClient as string, matation, {data});
}

export const getAllVacancies = async () => {
    const query = gql`
    query {
    vacancies {
        data {
        attributes {
            title
            fulltime_partime
            Slug
        }
        }
    }
    }`;

    const result = await request(process.env.graphqlClient as string, query);

    return result.vacancies.data;
}

export const getVacancyBySlug = async (slug: string) => {
    const matation = gql`
    query ($slug: String!){
        vacancies(filters: { Slug: { eq: $slug}}) {
          data {
            attributes {
              title
              fulltime_partime
              Description
              what_we_offer {
                offer
              }
              Task {
                Task
              }
              SEO {
                title
                description
              }
            }
          }
        }
      }`;

    const result = await request(process.env.graphqlClient as string, matation, {
        slug,
    });

    const vacancy = result.vacancies.data[0] ?? null;

    if (! vacancy) {
        return null;
    }

    return {
        attributes: {
            ...vacancy.attributes,
            Description: marked.parse(vacancy.attributes.Description, {
                breaks: true,
            }),
        }
    };
}

export const getPageBySlug = async (slug: string) => {
    const matation = gql`
    query ($slug: String!){
        pages(filters: { slug: { eq: $slug}}) {
          data {
            attributes {
              title
              content
              SEO {
                title
                description
                page_no_index
                canonical_url_field {
                  url
                }
              }
            }
          }
        }
      }`;

    const result = await request(process.env.graphqlClient as string, matation, {
        slug,
    });

    const page = result.pages.data[0] ?? null;

    if (! page) {
        return null;
    }

    return {
        id: 'none',
        title: page.attributes.title,
        body: marked.parse(page.attributes.content, {
            breaks: true,
        }),
        seo: page.attributes.SEO,
    }
}

export const getCollectionBySlug = async (slug: string) => {
  const query = gql`
  query ($slug: String!){
    collections(filters: { slug: { eq: $slug}}, locale: "nl") {
      data {
        attributes {
          title,
          slug
          cover {
            data {
              attributes {
                url
                ext
                alternativeText
              }
            }
          }
          cover_video_url
          intro
          seo {
            title
            description
            canonical_url_field {
              url
            }
          }
          collections {
            shopify_collection_slug
            title
            heading_type
            content
          }
          body {
            __typename
            ... on ComponentContentCollectionContentBlock {
              title
              heading_type
              content
              image {
                data {
                  attributes {
                    url
                    alternativeText
                  }
                }
              }
              dark_bg
              cta_slug
              cta_title
            }
            ... on ComponentContentCollectionContentBlockInline {
                title
                heading_type_inline: heading_type
                content_inline: content
                image_inline: image {
                  data {
                    attributes {
                      url
                      alternativeText
                    }
                  }
                }
                display_image_left
                cta_slug
                cta_title
                link
            }
            ... on ComponentContentTwoColumns {
              column_one_title
              column_one_content
              column_two_title
              column_two_content
            }
            ... on ComponentContentLengthButtons {
              title
            }
            ... on ComponentContentApplicationsSlider {
              title
            }
            ... on ComponentContentBenefits {
                title
            }
            ... on ComponentContentSingleImage {
                bottom_text
                single_image: image {
                  data {
                    attributes {
                      url
                      alternativeText
                    }
                  }
                }
              }
            ... on ComponentContentCustomBenefits {
              block_title
              column_1_title
              column_1_image {
                data {
                  attributes {
                    url
                    alternativeText
                  }
                }
              }
              column_2_title
              column_2_image {
                data {
                  attributes {
                    url
                    alternativeText
                  }
                }
              }
              column_3_title
              column_3_image {
                data {
                  attributes {
                    url
                    alternativeText
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  `;

  const result = await request(process.env.graphqlClient as string, query, {
    slug
  });

  const page = result.collections.data[0] ?? null;

  if (! page) {
      return null;
  }

  return page.attributes;
}

export const getSitemap = async () => {
  const query = gql`query {
    sitemaps {
      data {
        attributes {
          url
          priority
          lastmod
          changefreq
        }
      }
    }
  }`;

  console.log('test', process.env.graphqlClient);

  const result = await request('http://localhost:1337/graphql', query);

  const sitemap = result.sitemaps.data ?? null;

  return sitemap;
}