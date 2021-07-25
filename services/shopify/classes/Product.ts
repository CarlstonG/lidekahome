import {safeGet} from "~/services/Helpers";
// @ts-ignore
import _ from 'lodash';
import {Collection} from "~/services/shopify/classes/Collection";

export class Product {
  id: number | null;
  title: string | null;
  handle: string | null;
  url: string | null;
  brand: string | null;
  description: string | null;
  price: number | null;
  images: {} | [] | null | undefined;
  media: {} | [] | null | undefined;
  metafields: {} | [] | null | undefined;
  firstVariantId: number | null | undefined;
  firstMediaSrc: string | null | undefined;
  seo = {} as {
    title: string
    description: string
  };
  collection = {} as Collection|{}

  constructor(data: {}) {
    this.id = safeGet(data, 'id');
    this.title = safeGet(data, 'title');
    this.handle = safeGet(data, 'handle');
    this.url = `/product/${this.handle}`;
    this.brand = safeGet(data, 'vendor');
    this.description = safeGet(data, 'descriptionHtml');
    this.price = safeGet(data, 'priceRange.maxVariantPrice.amount');
    this.firstVariantId = safeGet(data, 'variants.edges.0.node.id');
    this.seo = safeGet(data, 'seo', {});
    this.collection = new Collection(safeGet(data, 'collections.edges.0.node', {}))
    this.convertMediaEdges(safeGet(data, 'media.edges', {}));
    this.convertImagesEdges(safeGet(data, 'images.edges', {}));
    this.convertMetaFieldsEdges(safeGet(data, 'metafields.edges', {}));
    this.customDeclarations();
  }

  private convertMediaEdges(mediaEdges: {}) {
    this.media = _.map(mediaEdges, (item: {}) => {
      return {
        type: safeGet(item, 'node.mediaContentType'),
        alt: safeGet(item, 'node.alt'),
        preview: safeGet(item, 'node.previewImage.originalSrc'),
        src: safeGet(item, 'node.image.transformedSrc'),
        sources: safeGet(item, 'node.sources'),
      }
    })
  }

  private convertImagesEdges(imagesEdges: {}) {
    this.images = _.map(imagesEdges, (item: {}) => {
      return {
        alt: safeGet(item, 'node.alt'),
        src: safeGet(item, 'node.transformedSrc'),
      }
    })
    this.firstMediaSrc = safeGet(this.images, '0.src', 'https://via.placeholder.com/600');
  }

  private convertMetaFieldsEdges(metaFieldsEdges: {}) {
    this.metafields = _.map(metaFieldsEdges, (item: {}) => {
      return {
        key: safeGet(item, 'node.key'),
        namespace: safeGet(item, 'node.namespace'),
        value: safeGet(item, 'node.value'),
      }
    })
  }

  specifications: []|null|undefined|string;
  related: []|{}|null|undefined|string;
  deliveryDate: []|{}|null|undefined|string;

  private customDeclarations() {
    this.specifications = _.find(this.metafields, (item: { key: string }) => {
      return item.key === 'specifications'
    });

    if (this.specifications) {
      this.specifications = _.get(this.specifications, 'value', '');
      this.specifications = _.get(JSON.parse(this.specifications), 0, '');
    }

    this.related = this.metafields;
    this.related = _.find(this.metafields, (item: { key: string }) => {
      return item.key === 'related'
    });

    if (this.related) {
      const relatedNames = JSON.parse(_.get(_.find(this.metafields, (item: { key: string }) => {
        return item.key === 'name'
      }), 'value', ''));

      const relatedSelected = JSON.parse(_.get(_.find(this.metafields, (item: { key: string }) => {
        return item.key === 'selected'
      }), 'value', ''));

      this.related = JSON.parse(_.get(this.related, 'value', ''));

      this.related = _.map(this.related, (value: string, key: string) => {
        return {
          name: relatedNames[key],
          selected: relatedSelected[key],
          handle: value,
        }
      })
    }

    this.deliveryDate = _.get(_.find(this.metafields, (item: { key: string }) => {
      return item.key === 'delivery_date'
    }), 'value', null);
  }
}
