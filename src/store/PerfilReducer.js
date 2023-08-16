import { types } from "@/constants/Constants";

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

  switch (action.type) {
    case types.perfilsetData:
      state = action.payload;
      return state;
    default:
      return state;
  }
};
export { initialUserStore };
export default userReducer;
