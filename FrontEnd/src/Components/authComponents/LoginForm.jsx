import React from "react";
import { Form, Input, Button } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";

export const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 10,
    },
};
export const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 10,
    },
};

const LoginForm = (props) => {
    const { loginUser } = props;
    const onFinish = (values) => {
        console.log("Success:", values);
        loginUser(values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <Form
            {...layout}
            name="basic"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                label="Email"
                name="email"
                rules={[
                    {
                        required: true,
                        message: "Please input your email!",
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
                <Input prefix={<MailOutlined style={{ margin: "5px" }} />} />
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

            {/* <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item> */}

            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default LoginForm;
