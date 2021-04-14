import React from "react";
import { Form, Input, Button } from "antd";
import { layout, tailLayout } from "./LoginForm";
import { MailOutlined, PhoneOutlined, LockOutlined } from "@ant-design/icons";

// const layout = {
//   labelCol: {
//     span: 13,
//   },
//   wrapperCol: {
//     span: 16,
//   },
// };

// const tailLayout = {
//   wrapperCol: {
//     offset: 8,
//     span: 16,
//   },
// };

const RegisterForm = (props) => {
    const { registerUser } = props;
    const submit = (value) => {
        console.log(value);
        registerUser(value);
    };

    return (
        <React.Fragment>
            <Form
                {...layout}
                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinish={submit}
            >
                <Form.Item label="First name" name="first_name">
                    <Input />
                </Form.Item>

                <Form.Item label="Last name" name="last_name">
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Email address"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: "Please input your mail Id!",
                        },
                        () => ({
                            validator(_, value) {
                                if (!value) {
                                    return Promise.resolve();
                                }
                                const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                                if (value.match(regexEmail)) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(
                                    new Error("Entered email is not valid!")
                                );
                            },
                        }),
                    ]}
                >
                    <Input
                        prefix={<MailOutlined style={{ margin: "5px" }} />}
                        placeholder="Email"
                    />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "Please input your password!",
                        },
                    ]}
                >
                    <Input.Password
                        prefix={<LockOutlined style={{ margin: "5px" }} />}
                    />
                </Form.Item>

                <Form.Item
                    label="Phone Number"
                    name="mobile"
                    rules={[
                        {
                            required: true,
                            message: "Please input your Phone Number!",
                        },
                    ]}
                >
                    <Input
                        prefix={<PhoneOutlined style={{ margin: "5px" }} />}
                        maxLength={20}
                        type="number"
                    />
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </React.Fragment>
    );
};

export default RegisterForm;
