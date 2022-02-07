import { request, gql } from 'graphql-request';

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
