import path from "node:path"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    srcDir: "src",
    modules: ["@nuxtjs/tailwindcss", "nuxt-primevue", "@pinia/nuxt"],
    primevue: {
        options: {
            unstyled: true
        },
        importPT: { from: path.resolve(__dirname, "src/presets/lara/") } // import and apply preset
    }
})
