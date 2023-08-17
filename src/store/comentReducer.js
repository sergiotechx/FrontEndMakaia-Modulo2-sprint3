const initialComentStore = {
        comments: [],
            post: {
                postId:0,
                userId:0,
                image:""
    }
};


const comentReducer = (state = initialComentStore, action) => {
    console.log('por acá',action.type)
    switch (action.type) {
        
        case types.setComent:
          
        return {
                ...state,
                comments: [...state.comments, action.payload],
            };
        default:
            return state;
    }
};

export { initialComentStore };
export default comentReducer;
