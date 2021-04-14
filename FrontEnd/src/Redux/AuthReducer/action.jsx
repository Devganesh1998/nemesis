import {
    LOGIN_REQUEST,
    LOGIN_FAILURE,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE,
    LOGOUT_REQUEST,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    VERIFY_AUTH_REQUEST,
    VERIFY_AUTH_SUCCESS,
    VERIFY_AUTH_FAILURE,
} from "./actionType";

import axios from "../axoisInstance";

const requestRegister = () => {
    return {
        type: REGISTER_REQUEST,
    };
};

const registerSuccess = (user) => {
    return {
        type: REGISTER_SUCCESS,
        user,
    };
};

const registerFailure = (error) => {
    return {
        type: REGISTER_FAILURE,
        error,
    };
};

const requestLogin = () => {
    return {
        type: LOGIN_REQUEST,
    };
};

const loginSuccess = (user) => {
    return {
        type: LOGIN_SUCCESS,
        user,
    };
};

const loginFailure = (error) => {
    return {
        type: LOGIN_FAILURE,
        error,
    };
};

const requestLogout = () => {
    return {
        type: LOGOUT_REQUEST,
    };
};

const logoutSuccess = (payload) => {
    return {
        type: LOGOUT_SUCCESS,
        payload,
    };
};

const logoutFailure = (error) => {
    return {
        type: LOGOUT_FAILURE,
        error,
    };
};

const requestVerifyAuth = () => {
    return {
        type: VERIFY_AUTH_REQUEST,
    };
};

const VerifyAuthSuccess = (payload) => {
    return {
        type: VERIFY_AUTH_SUCCESS,
        payload,
    };
};

const VerifyAuthFailure = (error) => {
    return {
        type: VERIFY_AUTH_FAILURE,
        error,
    };
};

export const registerUser = (payload) => (dispatch) => {
    dispatch(requestRegister());
    axios({
        method: "POST",
        url: "https://nemesis-flask-server.herokuapp.com/auth/register",
        headers: { "Content-Type": "application/json;charset=utf-8" },
        data: payload,
    })
        .then((res) => {
            const { data } = res;
            if (data.isRegisterSuccess) {
                dispatch(registerSuccess(data));
            } else {
                dispatch(registerFailure(res.data.errormsg));
            }
        })
        .catch((err) => {
            console.error(err);
            const { message = "", data: { errormsg = "" } = {} } = err || {};
            dispatch(registerFailure(errormsg || message));
        });
};

export const loginUser = (payload) => (dispatch) => {
    dispatch(requestLogin());
    axios({
        method: "POST",
        url: "https://nemesis-flask-server.herokuapp.com/auth/login",
        headers: { "Content-Type": "application/json;charset=utf-8" },
        data: payload,
    })
        .then((res) => {
            const { data } = res;
            data.isLoginSuccess
                ? dispatch(loginSuccess(data))
                : dispatch(loginFailure(res.data.errormsg));
        })
        .catch((err) => {
            console.error(err);
            const {
                message = "",
                response: { data: { errormsg = "" } = {} } = {},
            } = err || {};
            console.log({ err, errormsg, message });
            dispatch(loginFailure(errormsg || message));
        });
};

export const logoutUser = (payload) => (dispatch) => {
    dispatch(requestLogout());
    axios({
        method: "GET",
        url: "https://nemesis-flask-server.herokuapp.com/auth/logout",
        headers: { "Content-Type": "application/json;charset=utf-8" },
    })
        .then((res) => {
            const { data } = res;
            data.isLogoutSuccess
                ? dispatch(logoutSuccess(data))
                : dispatch(logoutFailure(res.data.errormsg));
        })
        .catch((err) => {
            console.error(err);
            const { message = "", data: { errormsg = "" } = {} } = err || {};
            dispatch(logoutFailure(errormsg || message));
        });
};

export const verifyAuth = (payload) => (dispatch) => {
    dispatch(requestVerifyAuth());
    axios({
        method: "GET",
        url: "https://nemesis-flask-server.herokuapp.com/auth/verifyAuth",
        headers: { "Content-Type": "application/json;charset=utf-8" },
        data: payload,
    })
        .then((res) => {
            const { data } = res;
            data.isAuthenticated
                ? dispatch(VerifyAuthSuccess(data))
                : dispatch(VerifyAuthFailure(res.data.errormsg));
        })
        .catch((err) => {
            console.error(err);
            const { message = "", data: { errormsg = "" } = {} } = err || {};
            dispatch(VerifyAuthFailure(errormsg || message));
        });
};
