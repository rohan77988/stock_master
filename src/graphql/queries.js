/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const listAllStockSymbols = /* GraphQL */ `
  query ListAllStockSymbols($limit: Int, $nextToken: String) {
    listAllStockSymbols(limit: $limit, nextToken: $nextToken) {
      items {
        id
        symbol
        owner
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const retrieveLatestIntradayPrices = /* GraphQL */ `
  query RetrieveLatestIntradayPrices(
    $symbol: String
    $ts: Int
    $limit: Int
    $nextToken: String
  ) {
    retrieveLatestIntradayPrices(
      symbol: $symbol
      ts: $ts
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        symbol
        data_timezone
        data_timestamp
        open_price
        high_price
        low_price
        close_price
        volume
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getIntradayStockPrice = /* GraphQL */ `
  query GetIntradayStockPrice($id: ID!) {
    getIntradayStockPrice(id: $id) {
      id
      symbol
      data_timezone
      data_timestamp
      open_price
      high_price
      low_price
      close_price
      volume
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listIntradayStockPrices = /* GraphQL */ `
  query ListIntradayStockPrices(
    $filter: ModelIntradayStockPriceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listIntradayStockPrices(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        symbol
        data_timezone
        data_timestamp
        open_price
        high_price
        low_price
        close_price
        volume
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStockSymbol = /* GraphQL */ `
  query GetStockSymbol($id: ID!) {
    getStockSymbol(id: $id) {
      id
      symbol
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listStockSymbols = /* GraphQL */ `
  query ListStockSymbols(
    $filter: ModelStockSymbolFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStockSymbols(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        symbol
        owner
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
