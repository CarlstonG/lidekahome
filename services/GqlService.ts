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