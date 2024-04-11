export const useUser = defineStore("user", {
    state: () => {
        return {
            isLoggedIn: false
        }
    },
    getters: {},
    actions: {
        login () {
            this.isLoggedIn = true
        }
    }
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useUser, import.meta.hot))
}
