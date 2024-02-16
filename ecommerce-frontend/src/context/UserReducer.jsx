const users = (state, action) => {
  switch (action.type) {
    // case "LOGIN":
    //   return {
    //     ...state,
    //     token: action.payload.token,
    //   };
    case POST_USER:
      return {
        ...state,
        users: [state.users, action.payload],
      };
    default:
      return state;
  }
};
export default users;
