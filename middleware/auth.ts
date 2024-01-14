export default defineNuxtRouteMiddleware((to) => {
    const { isAuthenticated } = storeToRefs(useAuthStore())
    const token = useCookie('token')

    if(token.value){

        isAuthenticated.value = true

    }

    if(token.value && to?.name === 'index') {
        return navigateTo('/dashboard')
    }

    if(!token.value && to?.name !== 'index') {
        abortNavigation()
        return  navigateTo('/')
    }
    
})