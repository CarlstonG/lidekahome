import _ from 'lodash';
import {gql, GraphQLClient} from 'graphql-request'

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
    this.description = _.get(data, 'descriptionHtml', null)

    this.price = _.get(data, 'priceRange.maxVariantPrice.amount', null)

    this.firstVariantId = _.get(data, 'variants.edges.0.node.id', null);

    const imagesEdges = _.get(data, 'images.edges', null);
    this.images = imagesEdges ? _.map(imagesEdges, (item) => {
      return {
        alt: _.get(item, 'node.altText', null),
        src: _.get(item, 'node.transformedSrc', null),
      }
    }) : [];

    this.firstMediaSrc = _.get(this.images, '0.src', 'https://via.placeholder.com/600');

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

    this.related = this.metafields;
    this.related = _.find(this.metafields, (item) => {
      return item.key === 'related'
    });

    if (this.related) {
      const relatedNames = JSON.parse(_.get(_.find(this.metafields, (item) => {
        return item.key === 'name'
      }), 'value', ''));

      const relatedSelected = JSON.parse(_.get(_.find(this.metafields, (item) => {
        return item.key === 'selected'
      }), 'value', ''));

      this.related = JSON.parse(_.get(this.related, 'value', ''));

      this.related = _.map(this.related, (value, key) => {
        return {
          name: relatedNames[key],
          selected: relatedSelected[key],
          handle: value,
        }
      })
    }

    this.deliveryDate = _.get(_.find(this.metafields, (item) => {
      return item.key === 'delivery_date'
    }), 'value', null);
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
        priceRange {
          maxVariantPrice {
            amount
            currencyCode
          }
          minVariantPrice {
            amount
            currencyCode
          }
        }
        variants(first: 1) {
          edges {
            node {
              id
            }
          }
        }
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
          transformedSrc(maxWidth: 600, maxHeight: 600)
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

  async getProductsByQuery(searchQuery) {
    const query = gql`
      {
        products(query: "${searchQuery}", first: 10) {
          edges {
            node {
              title,
              handle,
              images(first: 1) {
                edges {
                  node {
                    id
                    altText,
                    transformedSrc(maxWidth: 200, maxHeight: 200)
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

    const productsEdges = _.get(data, 'products.edges', []);
    return _.map(productsEdges, (item) => {
      return new Product(item.node);
    });
  },

  async getCollectionsByQuery(searchQuery) {
    const query = gql`
      {
        collections(query: "${searchQuery}", first: 10) {
          edges {
            node {
              title,
              handle
            }
          }
        }
      }`

    const data = await this.call(query);

    if (data === undefined) {
      return {};
    }

    const collectionEdges = _.get(data, 'collections.edges', []);
    return _.map(collectionEdges, (item) => {
      return new Collection(item.node);
    });
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
                priceRange {
                  maxVariantPrice {
                    amount
                    currencyCode
                  }
                  minVariantPrice {
                    amount
                    currencyCode
                  }
                }
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

    return new Collection(data.collectionByHandle);
  }
}

export default ApiService;
