import { types } from "@/constants/Constants";

const initialComentStore = {
    comments: [],
    post: {
        postId: 0,
        userId: 0,
        image: ""
    }
};


const comentReducer = (state = initialComentStore, action) => {
  
    switch (action.type) {
       
        case types.setComent:
            
            state = action.payload
            return state
       
            case types.addComent:

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
