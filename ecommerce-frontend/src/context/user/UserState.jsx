import { createContext, useReducer } from "react";
import axios from "axios";
import UserReducer from "./UserReducer";

const initialState = {
  users: [],
  token: token || null,
  user: null,
};

const token = JSON.parse(localStorage.getItem("token"));

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

  const getUserInfo = async () => {
    const token = JSON.parse(localStorage.getItem("token"));
    const res = await axios.get(API_URL + "/users/info", {
      headers: {
        authorization: token,
      },
    });
    dispatch({
      type: "GET_USER_INFO",
      payload: res.data,
    });
    return res;
  };

  return (
    <UserContext.Provider
      value={{
        users: state.users,
        token: state.token,
        user: state.user,
        postUser,
        getUserInfo,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const UserContext = createContext(initialState);
