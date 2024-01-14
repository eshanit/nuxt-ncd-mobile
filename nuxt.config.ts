// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@vee-validate/nuxt", "@pinia/nuxt"],
  runtimeConfig: {
    // Do not put secret information here
    public: {
      // db Url
      couchDBUrl: process.env.DATA_BASE_URL,
      couchDBUsername: process.env.DATA_BASE_USERNAME,
      couchDBPassword: process.env.DATA_BASE_PSWD,
    },
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  vite: {
    define: {
      global: 'window' ,
    }
  },
  ssr: false
})
