import React, { useState, useEffect } from "react";
import { Tabs } from "antd";
import LoginForm from "../Components/authComponents/LoginForm";
import RegisterForm from "../Components/authComponents/RegisterForm";
import { loginUser } from "../Redux/AuthReducer/action";
import { registerUser } from "../Redux/AuthReducer/action";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import {
    NotificationContainer,
    NotificationManager,
} from "react-notifications";

const { TabPane } = Tabs;

const AuthPage = ({
    loginUser,
    registerUser,
    is_auth,
    isRegisterError,
    registerErrorMessage,
    isLoginError,
    loginErrorMessage,
    ...rest
}) => {
    const [currTab, setCurrTab] = useState(rest.match.params.type);
    const callback = (key) => {
        setCurrTab(key);
    };

    useEffect(() => {
        setCurrTab(rest.match.params.type);
    }, [rest.match.params.type]);

    useEffect(() => {
        if (isLoginError) {
            NotificationManager.error(loginErrorMessage || "", 'Error', 3000);
        }
    }, [isLoginError]);

    useEffect(() => {
        if (isRegisterError) {
            NotificationManager.error(
                registerErrorMessage || "",
                'Error',
                3000
            );
        }
    }, [isRegisterError]);

    return is_auth ? (
        <Redirect to="/" {...rest} />
    ) : (
        <>
            <Tabs
                defaultActiveKey="login"
                onChange={callback}
                activeKey={currTab}
                {...rest}
                style={{ padding: "10px" }}
            >
                <TabPane tab="Login" key="login">
                    <LoginForm loginUser={loginUser} />
                    <div style={{ margin: "20px" }}>
                        <h3 style={{ color: "GrayText" }}>
                            Demo EmailId and Password
                        </h3>
                        <h4>Email Id : test@test.com</h4>
                        <h4>Password : test</h4>
                    </div>
                </TabPane>
                <TabPane tab="Register" key="register">
                    <RegisterForm registerUser={registerUser} />
                </TabPane>
            </Tabs>
            <NotificationContainer />
        </>
    );
};

const mapStateToProps = (state) => ({
    is_auth: state.auth.isAuthenticated,
    isRegisterError: state.auth.isRegisterError,
    registerErrorMessage: state.auth.registerErrorMessage,
    isLoginError: state.auth.isLoginError,
    loginErrorMessage: state.auth.loginErrorMessage,
});
const mapDispatchToProps = (dispatch) => ({
    loginUser: (datas) => dispatch(loginUser(datas)),
    registerUser: (datas) => dispatch(registerUser(datas)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);
