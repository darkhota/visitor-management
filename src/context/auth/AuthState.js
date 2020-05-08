import React, { useReducer } from 'react';
import axios from 'axios';
import AuthContext from './authContext';
import authReducer from './authReducer';

import {
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT
  } from '../types';

const base_url = "http://localhost:8090";
const token    = "a56d34d777288aa5e18adfb06d2806e88283ec6e";
const AuthState = props => {
    const initialState = {
      token: localStorage.getItem('token'),
      isAuthenticated: null,
      user: null,
      error: null
    };

    const [state, dispatch] = useReducer(authReducer, initialState);

    // Load User
    const loadUser = async () => {
        // setAuthToken(localStorage.token);

        try {
        const res = await axios.get(`${base_url}/api/user/validate`);

        dispatch({
            type: USER_LOADED,
            payload: res.data
        });
        } catch (err) {
        dispatch({ type: AUTH_ERROR });
        }
    };

    // Login User
    const login = async formData => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        };

        try {
        // const res = await axios.post(`/api/user/login`, formData, config);
        axios.get('api/user/auth', config).then((res) => {
          console.log(res);
        });
        
        // dispatch({
        //     type: LOGIN_SUCCESS,
        //     payload: res.data
        // });
        
        // loadUser();
        } catch (err) {
            console.log('Chai ' + err)
        // dispatch({
        //     type: LOGIN_FAIL,
        //     payload: err.response.data.msg
        // });
        }
    };

    // Logout
    const logout = () => dispatch({ type: LOGOUT });
    return (
        <AuthContext.Provider
          value={{
            token: state.token,
            isAuthenticated: state.isAuthenticated,
            user: state.user,
            error: state.error,
            loadUser,
            login,
            logout
          }}
        >
          {props.children}
        </AuthContext.Provider>
      );

  };
  
  export default AuthState;
