import axios from 'axios';
import _ from 'lodash';
import { gql, GraphQLClient } from 'graphql-request'

const client = new GraphQLClient(process.env.shopifyGraphql, {
  headers: {
    'X-Shopify-Storefront-Access-Token': process.env.shopifyAccessToken,
    'Content-Type': 'application/json'
  }
})

class Product {
  constructor(data) {
    this.id = _.get(data, 'id', null);
    this.title = _.get(data, 'title', null);
    this.handle = _.get(data, 'handle', null);
    this.description = _.get(data, 'description', null)

    const imagesEdges = _.get(data, 'images.edges', null);
    this.images = imagesEdges ? _.map(imagesEdges, (item) => {
      return {
        alt: _.get(item, 'node.altText', null),
        src: _.get(item, 'node.transformedSrc', null),
      }
    }) : [];


    const mediaEdges = _.get(data, 'media.edges', null);
    this.media = mediaEdges ? _.map(mediaEdges, (item) => {
      return {
        type: _.get(item, 'node.mediaContentType', null),
        alt: _.get(item, 'node.alt', null),
        preview: _.get(item, 'node.previewImage.originalSrc', null),
        src: _.get(item, 'node.image.transformedSrc', null),
        sources: _.get(item, 'node.sources', null),
      }
    }) : [];

    const metaFieldsEdges = _.get(data, 'metafields.edges', null);
    this.metafields = metaFieldsEdges ? _.map(metaFieldsEdges, (item) => {
      return {
        key: _.get(item, 'node.key', null),
        namespace: _.get(item, 'node.namespace', null),
        value: _.get(item, 'node.value', null),
      }
    }) : [];

    this.specifications = _.find(this.metafields, (item) => {
      return item.key === 'specifications'
    });

    if (this.specifications) {
      this.specifications = _.get(this.specifications, 'value', '');
      this.specifications = _.get(JSON.parse(this.specifications), 0, '');
    }
  }
}

class Collection {
  constructor(data) {
    this.id = _.get(data, 'id', null);
    this.title = _.get(data, 'title', null);
    this.handle = _.get(data, 'handle', null);

    const productsEdges = _.get(data, 'products.edges', []);
    this.products = _.map(productsEdges, (item) => {
      return new Product(item.node);
    });
  }
}


const ApiService = {
  async call(query) {
    return await new Promise((resolve, reject) => {
      client.request(query).then((response) => {
        return resolve(response);
      }).catch((err) => {
        return reject(err);
      })
    });
  },

  async getProductByHandle(handle) {
    const query = gql`{
        productByHandle(handle: "${handle}") {
          id
          title
          descriptionHtml
          media(first: 100) {
            edges {
              node {
                previewImage {
                  originalSrc
                }
                alt
                mediaContentType
                ...mediaFieldsByType
              }
            }
          }
          metafields(first: 100) {
            edges {
              node {
                key
                namespace
                value
              }
            }
          }
        }
      }

      fragment mediaFieldsByType on Media {
        ... on ExternalVideo {
          id
          embeddedUrl
        }
        ... on MediaImage {
          image {
          transformedSrc(maxWidth: 800, maxHeight: 800)
        }
      }

      ... on Model3d {
        sources {
          url
          mimeType
          format
          filesize
        }
      }

      ... on Video {
        sources {
          url
          mimeType
          format
          height
          width
        }
      }
    }`

    const data = await this.call(query);

    if (data === undefined) {
      return {};
    }

    return new Product(data.productByHandle);
  },

  async getProductsByCollectionHandle(handle) {
    const query = gql`
    {
      collectionByHandle(handle: "${handle}") {
        id
        title
        handle
        products(first: 50) {
          edges {
            node {
              id
              title,
              handle,
              images(first: 1) {
                edges {
                  node {
                    id
                    altText,
                    transformedSrc(maxWidth: 600, maxHeight: 600)
                  }
                }
              }
            }
          }
        }
      }
    }`

    const data = await this.call(query);

    if (data === undefined) {
      return {};
    }

    console.log(data);
    return new Collection(data.collectionByHandle);
  }
}

export default ApiService;
