<template>
  <div>
    <div v-for="(farm, index) in farms" :key="index">
      <Card :farm="farm" />
    </div>
  </div>
</template>

<script>
import { API } from 'aws-amplify'
import { listFarms } from '../src/graphql/queries'

export default {
  loading: false,
  async asyncData() {
    const result = await API.graphql({
      query: listFarms,
    })

    console.log(result.data.listFarms.items)

    return {
      farms: result.data.listFarms.items,
    }
  },
}
</script>

<style scoped>
.amplify-s3-image {
  height: 100px;
}
</style>
