const isLogged = true
export default defineNuxtRouteMiddleware((to, from) => {
    if (isLogged) {
        if (to.path === "/auth") {
            console.log(to)
            console.log(from)
            return navigateTo("/")
        }
        return
    }
    return navigateTo(`/auth?redirectTo=${to.path}`)
})
