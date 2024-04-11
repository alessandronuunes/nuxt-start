import { defineStore } from "pinia"

export interface Logo {
    site: string | null
    chat: string | null
  }

export interface Support {
    phone: string | null
    email: string | null
  }

export interface useSite {
    name: string
    domain: string
    description: string | null
    logo: Logo
    support: Support
    "360dialog": any[]
  }

export const useSite = defineStore("site", {
    state: (): useSite => ({
        name: "Gabriel",
        domain: "https://vmix.chatmix.com.br/api-v2",
        description: null,
        logo: {
            site: "",
            chat: ""
        },
        support: {
            phone: null,
            email: null
        },
        "360dialog": []
    }),

    actions: {
        async getData () {
            const request = await useAsyncData(
                "check-site",
                () => $fetch("https://vmix.chatmix.com.br/api-v2/external/check-site")
            )

            if (!request.data && request.error) {
                return
            }

            const data: useSite = request.data.value as unknown as useSite

            this.name = data.name
            this.domain = data.domain
            this.description = data.description
            this.logo.site = data.logo.site
            this.logo.chat = data.logo.chat
            this.support.phone = data.support.phone
            this.support.email = data.support.email
            this["360dialog"] = data["360dialog"]
        }
    }
})
