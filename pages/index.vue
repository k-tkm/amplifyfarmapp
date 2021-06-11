<template>
  <div>
    <amplify-authenticator>
      <h1>写真登録</h1>
      <form @submit.prevent="submitCreate">
        <label>住所</label>
        <input
          v-model="form.farm_address"
          placeholder="住所を入力してください"
        />
        <label>説明</label>
        <input
          v-model="form.farm_describe"
          placeholder="説明を書いてください"
        />
        <label>Photo</label>
        <input type="file" @change="onFileChange" /><br />
        <input type="submit" value="登録" />
      </form>
    </amplify-authenticator>
  </div>
</template>

<script>
import { Storage, API, Auth } from 'aws-amplify'
import { createFarm } from '../src/graphql/mutations'

export default {
  data() {
    return {
      form: {
        farm_address: '',
        s3key: '',
        farm_describe: '',
      },
      image: null,
    }
  },
  methods: {
    // 画像を挿入
    onFileChange(e) {
      this.image = e.target.files[0]
    },
    async submitCreate() {
      const s3key = new Date().getTime().toString(16) + this.image.name
      let result

      try {
        result = await Storage.put(s3key, this.image, {
          level: 'protected',
        })
        console.log(result)

        this.form.s3key = result.key

        const cred = await Auth.currentCredentials()

        result = await API.graphql({
          query: createFarm,
          variables: {
            input: { ...this.form, ownerIdentityId: cred.identityId },
          },
        })

        console.log(result)
        window.$nuxt.$router.push('/show')
      } catch (error) {
        console.error(error)
      }
    },
  },
}
</script>
