import path from "node:path"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {
        enabled: true,
        timeline: {
            enabled: true
        }
    },
    srcDir: "src",
    app: {
        baseURL: "/v3/"
    },
    imports: {
        dirs: [path.resolve("./stores"), "~/stores"]
    },
    modules: ["@nuxtjs/tailwindcss", "nuxt-primevue", "@pinia/nuxt", "@nuxtjs/i18n", "@vueuse/nuxt"],
    primevue: {
        options: {
            // unstyled: true
        }
        // importPT: { from: path.resolve(__dirname, "src/assets/presets/wind/") } // import and apply preset
    },
    tailwindcss: {
        configPath: path.resolve(__dirname, "tailwind.config.ts")
    },
    css: ["primeicons/primeicons.css", "primevue/resources/themes/aura-light-teal/theme.css"],
    // https://i18n.nuxtjs.org/
    i18n: {
        strategy: "no_prefix",
        defaultLocale: "ptBr",
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: "i18n_locale"
        },
        langDir: "lang",
        locales: [
            {
                code: "ptBr",
                file: "ptBr.json",
                name: "Português"
            }
        ]
    }
})
