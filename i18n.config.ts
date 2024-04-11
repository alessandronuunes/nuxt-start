export default defineI18nConfig(() => ({
    strategy: "no_prefix",
    defaultLocale: "ptBr",
    fallbackLocale: "ptBr",
    detectBrowserLanguage: {
        useCookie: true,
        cookieKey: "i18n",
        onlyOnRoot: true
    },
    langDir: "src/lang",
    locales: [
        {
            code: "ptBr",
            file: "ptBr.json",
            name: "Português"
        }
    ]
}))
