
import { types } from "@/constants/Constants"

const initialAuthStore = {
    id: 0,
    username: undefined,
    name: undefined,
    email: undefined,
    avatar: undefined,
    poster:undefined,
    followers: [],
    following: [],
    posts: []
}
const authReducer = (state, action) => {
   
    switch (action.type) {
        case types.authLogin:
            state = action.payload
            return state
        case types.authLogout:
            state = initialAuthStore
            return state
        default:
            return initialAuthStore
    }
}
export { initialAuthStore }
export default authReducer