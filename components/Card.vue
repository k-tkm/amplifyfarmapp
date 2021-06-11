<template>
  <v-expand-transition
    ><v-card class="mx-auto" max-width="600">
      <v-container class="grey lighten-5">
        <v-row>
          <v-col sm="4">
            <amplify-s3-image
              :identity-id="farm.ownerIdentityId"
              :img-key="farm.s3key"
              level="protected"
              class="white--text align-end"
            />
          </v-col>
          <v-col sm="8">
            <v-card-title>住所：{{ farm.farm_address }}</v-card-title>
            <hr />
            <v-card-title>{{ farm.farm_describe }}</v-card-title>
          </v-col>
        </v-row>
      </v-container>
      <v-card-actions>
        <v-btn color="orange" text @click="deleteFarm(farm)"> 削除 </v-btn>
      </v-card-actions>
    </v-card></v-expand-transition
  >
</template>
<script>
import { API, Storage } from 'aws-amplify'
import { deleteFarm } from '../src/graphql/mutations'

export default {
  props: {
    farm: {
      type: Object,
      required: true,
    },
  },
  methods: {
    async deleteFarm(farm) {
      let result
      try {
        // s3から削除
        result = await Storage.remove(farm.s3key, {
          level: 'protected',
        })

        // dynamoから削除
        result = await API.graphql({
          query: deleteFarm,
          variables: { input: { id: farm.id } },
        })
        console.log(result)
        // ページをリロード
        location.reload()
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>

<style scoped>
amplify-s3-image {
  --height: 150px;
  --width: 200px;
}
</style>
