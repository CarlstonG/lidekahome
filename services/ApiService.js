import axios from 'axios';
import _ from 'lodash';

const instance = axios.create({
  baseURL: 'https://' + process.env.shopifyDomain + '/api/2021-07/graphql.json',
  timeout: 1000,
  headers: {
    'X-Shopify-Storefront-Access-Token': process.env.shopifyAccessToken,
    'Content-Type': 'application/json'
  }
});

class Product {
  constructor(id, title, description, media, metafields) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.media = media.edges ? _.map(media.edges, (item) => {
      return {
        type: _.get(item, 'node.mediaContentType', null),
        alt: _.get(item, 'node.alt', null),
        preview: _.get(item, 'node.previewImage.originalSrc', null),
        src: _.get(item, 'node.image.originalSrc', null),
        sources: _.get(item, 'node.sources', null),
      }
    }) : [];
    this.metafields = metafields.edges ? _.map(metafields.edges, (item) => {
      return {
        key: _.get(item, 'node.key', null),
        namespace: _.get(item, 'node.namespace', null),
        value: _.get(item, 'node.value', null),
      }
    }) : [];

    this.specifications = _.get(JSON.parse(_.get(_.find(this.metafields, (item) => {
      return item.key === 'specifications'
    }), 'value', '')), 0, '');
  }
}


const ApiService = {
  async getProductByHandle(handle) {
    const data = await new Promise((resolve, reject) => {
      instance.post('', {
        query: this.query,
      }).then(({data: {data: {productByHandle}}}) => {
        return resolve(productByHandle);
      }).catch((err) => {
        return reject(err);
      })
    });

    /*GRAPHQLLLL CLIENT*/

    const product = new Product(
      data.id,
      data.title,
      data.descriptionHtml,
      data.media ?? {},
      data.metafields ?? {},
    );

    return product;
  },

  query: `
  {
    productByHandle(handle: "led-strip-5-meter") {
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
      originalSrc
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
}

export default ApiService;
