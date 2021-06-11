/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createFarm = /* GraphQL */ `
  mutation CreateFarm(
    $input: CreateFarmInput!
    $condition: ModelFarmConditionInput
  ) {
    createFarm(input: $input, condition: $condition) {
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
export const updateFarm = /* GraphQL */ `
  mutation UpdateFarm(
    $input: UpdateFarmInput!
    $condition: ModelFarmConditionInput
  ) {
    updateFarm(input: $input, condition: $condition) {
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
export const deleteFarm = /* GraphQL */ `
  mutation DeleteFarm(
    $input: DeleteFarmInput!
    $condition: ModelFarmConditionInput
  ) {
    deleteFarm(input: $input, condition: $condition) {
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
