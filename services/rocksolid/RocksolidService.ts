import axios from "axios";

export const client = axios.create({
  baseURL: 'https://api-service-bym3v.ondigitalocean.app/api/v1',
  headers: {
    'Content-Type': 'application/json'
  },
  params: {
    api_key: process.env.rocksolidApiKey
  }
})

export const RocksolidService = {
  async post(url: string, data: {}) {
    return await new Promise((resolve, reject) => {
      client.post(url, data).then((response) => {
        return resolve(response);
      }).catch((err) => {
        return reject(err);
      })
    });
  },
}
