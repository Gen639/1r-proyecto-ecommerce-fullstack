import React, { useState, useContext } from "react";
import { UserContext } from "../../../context/UserContext/UserState";
import { Form, Input, Button, Result } from "antd";

const Register = () => {
  const [message, setMessage] = useState("");
  const [form] = Form.useForm();
  const { postUser } = useContext(UserContext);

  const onFinish = (values) => {
    console.log(values);
    postUser(values);

    form.resetFields();
    setMessage("The confirmation codes have been alredy sent to ur email, pls check your email inbox.");
    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    form.resetFields();

    setMessage("The error occured on registering new user.");
    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  return (
    <>
      <h2>Register form</h2>
      <div className="container">
        <Form
          form={form}
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
        <p>{message}</p>
      </div>
    </>
  );
};

export default Register;
