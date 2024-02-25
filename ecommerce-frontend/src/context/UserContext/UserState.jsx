import { createContext, useReducer } from "react";
import axios from "axios";
import UserReducer from "./UserReducer";

const token = JSON.parse(localStorage.getItem("token"));

const initialState = {
  users: [],
  token: token || null,
  user: null,
};

const API_URL = "http://localhost:3000";

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, initialState);

  const login = async (user) => {
    const res = await axios.post(API_URL + "/users/login", user);

    dispatch({
      type: "LOGIN",
      payload: res.data,
    });

    if (res.data) {
      localStorage.setItem("token", JSON.stringify(res.data.token));
    }
  };
  const logout = async () => {
    const token = JSON.parse(localStorage.getItem("token"));

    const res = await axios.delete(API_URL + "/users/logout", {
      headers: {
        authorization: token,
      },
    });
    dispatch({
      type: "LOGOUT",
      payload: res.data,
    });
    if (res.data) {
      localStorage.removeItem("token");
    }
  };

  const getUserInfo = async () => {
    const token = JSON.parse(localStorage.getItem("token"));

    const res = await axios.get(`${API_URL}/users/getUserOrders`, {
      headers: {
        authorization: token,
      },
    });

    dispatch({
      type: "GET_USER_INFO",
      payload: res.data.user,
    });
    return res;
  };

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
        token: state.token,
        user: state.user,
        users: state.users,
        login,
        logout,
        postUser,
        getUserInfo,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const UserContext = createContext(initialState);
