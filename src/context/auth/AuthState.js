import React, { useReducer } from 'react';
import axios from 'axios';
import AuthContext from './authContext';
import authReducer from './authReducer';
import { useToasts } from 'react-toast-notifications';

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
    const { addToast } = useToasts();

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
      
      console.log(formData);
        const config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };

        var data = new FormData(); 
        data.append('email', formData.email);
        data.append('password', formData.password);
        try {
        
        await axios.post('api/user/login', data, config).then((res) => {
          console.log(res);
          if (res.data.status === 200) {
            addToast(res.data.message, {
              appearance: 'success',
              autoDismiss: true,
            });
          } else {
            addToast(res.data.message, {
              appearance: 'error',
              autoDismiss: true,
            });
          }
          
        }).catch((err) => {
          addToast("Login failed, user not found", {
            appearance: 'error',
            autoDismiss: true,
          });
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
