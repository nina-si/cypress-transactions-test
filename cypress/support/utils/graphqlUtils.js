// Utility to match GraphQL mutation based on the operation name
export const hasOperationName = (req, operationName) => {
  const { body } = req;
  return (
    body.hasOwnProperty('operationName') && body.operationName === operationName
  );
};

// Alias query if operationName matches
export const aliasQuery = (req, operationName) => {
  if (hasOperationName(req, operationName)) {
    req.alias = `gql${operationName}Query`;
  }
};

// Alias mutation if operationName matches
export const aliasMutation = (req, operationName) => {
  if (hasOperationName(req, operationName)) {
    req.alias = `gql${operationName}Mutation`;
  }
};

// Operations names to use as aliases in intercept
export const graphqlOperationNames = {
  GET_ACCOUNTS: 'getAccounts',
  GET_TRANSACTIONS: 'getTransactionsV4',
  GET_PRODUCT_FEATURES: 'getProductFeatures',
};
