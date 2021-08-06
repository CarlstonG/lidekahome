import axios from "axios";

export const client = axios.create({
  baseURL: process.env.rocksolidApiUrl,
  headers: {
    'Content-Type': 'application/json'
  },
  params: {
    api_key: process.env.rocksolidApiKey
  }
})

export const post = async (url: string, data: {}) => {
  return await new Promise((resolve, reject) => {
    client.post(url, data).then((response) => {
      return resolve(response);
    }).catch((err) => {
      return reject(err);
    })
  });
};

export const get = async (url: string, data = {}) => {
  return await new Promise((resolve, reject) => {
    client.get(url, data).then((response) => {
      return resolve(response);
    }).catch((err) => {
      return reject(err);
    })
  });
};

export const getProduct = async (slug: string) => {
  const {data} = await get(`/product/${slug}`) as { data: {} };
  return data;
};

export const searchProducts = async (query: string) => {
  const {data} = await get(`/product/search/${query}`) as { data: {} };
  return data;
};

export const getCollection = async (slug: string, variables: {}) => {
  const {data} = await post(`/collection/${slug}`, variables) as { data: {} };
  return data;
};

export const searchCollections = async (query: string) => {
  const {data} = await get(`/collection/search/${query}`) as { data: {} };
  return data;
};

export const getBlog = async (slug: string) => {
  const {data} = await get(`/blog/${slug}`) as { data: {} };
  return data;
}

export const getArticle = async (slug: string, articleSlug: string) => {
  const {data} = await get(`/blog/${slug}/${articleSlug}`) as { data: {} };
  return data;
}

export const getPage = async (slug: string) => {
  const {data} = await get(`/page/${slug}`) as { data: {} };
  return data;
}

export const createCustomer = async (variables: {}) => {
  const {data} = await post(`/customer/create`, variables) as { data: {} };
  return data;
}

export const findCustomer = async (accessToken: string) => {
  const {data} = await get(`/customer/find/${accessToken}`) as { data: {} };
  return data;
};

export const getCustomer = async (accessToken: string) => {
  const {data} = await get(`/customer/get/${accessToken}`) as { data: {} };
  return data;
};

export const getAccessToken = async (variables: {}) => {
  const {data} = await post(`/customer/getAccessToken`, variables) as { data: {} };
  return data;
};

export const refreshAccessToken = async (variables: {}) => {
  const {data} = await post(`/customer/refreshAccessToken`, variables) as { data: {} };
  return data;
};

export const deleteAccessToken = async (variables: {}) => {
  const {data} = await post(`/customer/deleteAccessToken`, variables) as { data: {} };
  return data;
};

export const activateCustomer = async (variables: {}) => {
  const {data} = await post(`/customer/activate`, variables) as { data: {} };
  return data;
};

export const recoverCustomer = async (variables: {}) => {
  const {data} = await post(`/customer/recover`, variables) as { data: {} };
  return data;
};

export const resetCustomer = async (variables: {}) => {
  const {data} = await post(`/customer/reset`, variables) as { data: {} };
  return data;
};

export const updateCustomer = async (variables: {}) => {
  const {data} = await post(`/customer/update`, variables) as { data: {} };
  return data;
};

export const connectCustomerToCheckout = async (variables: {}) => {
  const {data} = await post(`/customer/connectToCheckout`, variables) as { data: {} };
  return data;
};

export const getShop = async () => {
  const { data } = await get(`/shop`) as { data: {} };
  return data;
}
