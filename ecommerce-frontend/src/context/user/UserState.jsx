import { createContext, useReducer } from "react";
import axios from "axios";
import UserReducer from "./UserReducer";

const initialState = {
  users: [],
};

export const UserState = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, initialState);

  const postUser = async (user) => {
    try {
      const res = await axios.post("http://localhost:3000/users", user);
      dispatch({
        type: "POST_USER",
        payload: res.data.user,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        users: state.users,
        postUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const UserContext = createContext(initialState);
