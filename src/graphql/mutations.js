/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createIntradayStockPrice = /* GraphQL */ `
  mutation CreateIntradayStockPrice(
    $input: CreateIntradayStockPriceInput!
    $condition: ModelIntradayStockPriceConditionInput
  ) {
    createIntradayStockPrice(input: $input, condition: $condition) {
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
export const updateIntradayStockPrice = /* GraphQL */ `
  mutation UpdateIntradayStockPrice(
    $input: UpdateIntradayStockPriceInput!
    $condition: ModelIntradayStockPriceConditionInput
  ) {
    updateIntradayStockPrice(input: $input, condition: $condition) {
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
export const deleteIntradayStockPrice = /* GraphQL */ `
  mutation DeleteIntradayStockPrice(
    $input: DeleteIntradayStockPriceInput!
    $condition: ModelIntradayStockPriceConditionInput
  ) {
    deleteIntradayStockPrice(input: $input, condition: $condition) {
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
export const createStockSymbol = /* GraphQL */ `
  mutation CreateStockSymbol(
    $input: CreateStockSymbolInput!
    $condition: ModelStockSymbolConditionInput
  ) {
    createStockSymbol(input: $input, condition: $condition) {
      id
      symbol
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateStockSymbol = /* GraphQL */ `
  mutation UpdateStockSymbol(
    $input: UpdateStockSymbolInput!
    $condition: ModelStockSymbolConditionInput
  ) {
    updateStockSymbol(input: $input, condition: $condition) {
      id
      symbol
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteStockSymbol = /* GraphQL */ `
  mutation DeleteStockSymbol(
    $input: DeleteStockSymbolInput!
    $condition: ModelStockSymbolConditionInput
  ) {
    deleteStockSymbol(input: $input, condition: $condition) {
      id
      symbol
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
