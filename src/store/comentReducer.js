const types = {
    setComent : "set-coment",
}

const  initialComentStore = {
    user : {
        id: 0,
        img:""
    },
    Comment: {
        name:"",
        userId:0,
        Text: "",
        postId:"",
        timestamp:""
    }
    

}
const comentReducer =(state, action) =>{
   switch(action.tpe){
    case types.setComent:
        state = action.payload;
        return state
       default:
           return state
   }
}
export {initialComentStore}
export default  comentReducer 