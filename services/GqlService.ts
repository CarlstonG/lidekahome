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
          cover {
            data {
              attributes {
                url
                ext
              }
            }
          }
          cover_video_url
          intro
          seo {
            title
            description
          }
          collections {
            shopify_collection_slug
            title
            content
          }
          body {
            __typename
            ... on ComponentContentCollectionContentBlock {
              title
              content
              image {
                data {
                  attributes {
                    url
                  }
                }
              }
              dark_bg
              cta_slug
              cta_title
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