import React, { useState, useContext } from "react";
import { UserContext } from "../../../context/user/UserState";

const Register = () => {
  const initialState = {
    name: "",
    email: "",
    password: "",
  };
  const [data, setData] = useState(initialState);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const { postUser } = useContext(UserContext);

  const clearState = () => {
    setData({ ...initialState });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`sending ${data.name} ${data.email} ${data.password}`);

    const newUser = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
    console.log(newUser);
    postUser(newUser);
    clearState();
  };

  const handleInputChange = (event) => {
    const updatedData = { ...data, [event.target.name]: event.target.value };

    if (!updatedData.name || !updatedData.email || !updatedData.password) {
      setMessage("Please complete all fields");
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }

    setData(updatedData);
  };

  return (
    <>
      <h2>Register form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          value={data.name || ""}
          name="name"
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="email"
          value={data.email || ""}
          name="email"
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="password"
          value={data.password || ""}
          name="password"
          onChange={handleInputChange}
        />
        <button type="submit" disabled={btnDisabled}>
          Register
        </button>
        <p>{message}</p>
      </form>
    </>
  );
};

export default Register;
