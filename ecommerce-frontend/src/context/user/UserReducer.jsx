const users = (state, action) => {
  switch (action.type) {
    case "POST_USER":
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case "GET_USER_INFO":
      return {
        ...state,
        user: action.payload,
      };

    case "LOGIN":
      return {
        ...state,
        token: action.payload.token,
      };
    case "LOGOUT":
      return {
        user: null,
        token: null,
      };

    default:
      return state;
  }
};
export default users;
