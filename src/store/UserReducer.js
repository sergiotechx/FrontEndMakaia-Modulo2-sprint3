const  initialUserStore = {
      id: 0,
      username: undefined,
      name: undefined,
      email: undefined,
      avatar: undefined,
      followers: [], 
      following: [], 
      posts: [] 
}
const userReducer =(state, action) =>{
    switch(action.types){
        default:
            return state
    }
}
export {initialUserStore}
export default  userReducer