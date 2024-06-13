<script>
import {store} from "../../../../store/store.js";
import {router} from "../../../../router/router.js";
import index from "vuex";

export default {
  name: "VerifyComponent",
  data: () => {
    return {
      form: {
        code: null,
        login: null
      },
      errors: {}
    }
  },
  methods: {
    verifyCode(event) {
      event.preventDefault();
      this.form.login = this.user.data.login
      console.log(this.form.login);
      store.dispatch('verifyCode', this.form).then((response) => {
        if (response.success)
          router.push('/');
        else {
          console.log(response);
          this.errors = response.errors ? response.errors : response.message
        }
      })
    }
  },
  computed: {
    index() {
      return index
    },
    user() {
      return store.state.user
    }
  }
}
</script>

<template>
  <div class="h-screen w-screen flex flex-col justify-center items-center">
    <div v-for="(error , index) in errors"
         class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
         role="alert">
      <span class="font-medium">{{ index }}!</span> {{ errors[index] }}.
    </div>
    <form v-on:submit="verifyCode" class="border border-gray-400 shadow-xl p-5 rounded">
      <p class="text-sm text-center mb-6">
        {{ user.data.login }}
      </p>
      <div class="relative z-0 w-full mb-5 group">
        <input
            v-model="form.code"
            type="number" name="floating_email" id="floating_email"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" " required/>
        <label for="floating_email"
               class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
          Verify Code
        </label>
        <button type="submit"
                class="w-full mt-5 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
          Submit Code
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped>

</style>