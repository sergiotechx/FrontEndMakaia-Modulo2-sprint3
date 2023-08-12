const types = {
    authLogin: 'auth - login',
    authLogout: 'auth - logout'
}
const initialAuthStore = {
    id: 0,
    username: undefined,
    name: undefined,
    email: undefined,
    avatar: undefined,
    followers: [],
    following: [],
    posts: []
}
const authReducer = (state, action) => {
   
    switch (action.type) {
        case types.authLogin:
            console.log("dispatch Login")
            return action.payload
        case types.authLogout:
            console.log("dispatch Logout")
            return initialAuthStore
        default:
            return initialAuthStore
    }
}
export { initialAuthStore, types }
export default authReducer