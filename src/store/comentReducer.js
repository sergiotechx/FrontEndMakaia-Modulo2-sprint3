export const types = {
    setComent: "set-coment",
};

const initialComentStore = {
    user: {
        userId:0,
        avatar:"",

    },
    comments: [],
    post: {
        postId:0,
        userId:0
    }
};


const comentReducer = (state = initialComentStore, action) => {
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
