const types = {
  setData: "set - data",
};

const initialUserStore = {
  id: 0,
  name: undefined,
  avatar: undefined,
  poster: undefined,
  followers: [],
  following: [],
  posts: [],
};
const userReducer = (state, action) => {
  switch (action.types) {
    case types.setData:
      state: action.payload;
      return state;
    default:
      return state;
  }
};
export { initialUserStore };
export default userReducer;
