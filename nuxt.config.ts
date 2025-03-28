// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   compatibilityDate: "2024-11-01",
   devtools: { enabled: true },
   modules: ["@nuxt/ui"],
   css: ["~/assets/css/main.css"],
   // This does fix it but not willing to do this for production, not sure what it really does under the hood
   // future:{compatibilityVersion:4}

   // This does not fix it
   // features:{inlineStyles: false},
});
