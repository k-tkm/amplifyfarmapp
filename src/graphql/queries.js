/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getFarm = /* GraphQL */ `
  query GetFarm($id: ID!) {
    getFarm(id: $id) {
      id
      s3key
      farm_address
      farm_describe
      owner
      ownerIdentityId
      createdAt
      updatedAt
    }
  }
`;
export const listFarms = /* GraphQL */ `
  query ListFarms(
    $filter: ModelFarmFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFarms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        s3key
        farm_address
        farm_describe
        owner
        ownerIdentityId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
