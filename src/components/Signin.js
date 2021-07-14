import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../context/auth/authContext";
import "../styles/MyStyles/Login.css";
import workwise from "../fonts/workwise.ttf";
import { useToasts } from "react-toast-notifications";
import { Link } from "react-router-dom";
const Workwise = {
  fontFamily: "workwise",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `
    local('workwise'),
    local('workwise-Regular'),
    url(${workwise}) format('ttf')
  `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF"
};

const Signin = props => {
  const authContext = useContext(AuthContext);
  const { addToast } = useToasts();
  const { login, error, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/home");
    }
    // eslint-disable-next-line
  }, [props.history]);

  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const { email, password } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (email === "" || password === "") {
      addToast("Please fill in all fields", {
        appearance: "warning",
        autoDismiss: true
      });
      // setAlert('Please fill in all fields', 'danger');
    } else {
      // login({
      //   email,
      //   password
      // });
      console.log("login successful");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="Grid-container">
          <div className="card">
            <img src="img/workwise.png" className="logo" alt="logo" />
            <h2>Log in to the visitor manager dashboard</h2>
            <form>
              <div className="form-elements">
                <div className="form-group field">
                  <input
                    className="form-field"
                    id="email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={onChange}
                    required
                  />
                  <label htmlFor="name" className="form-label">
                    Email
                  </label>
                </div>
                <br></br>
                <div className="form-group field">
                  <input
                    className="form-field"
                    id="password"
                    type="password"
                    name="password"
                    value={password}
                    onChange={onChange}
                    required
                  />
                  <label for="name" className="form-label">
                    Password
                  </label>
                </div>
              </div>
              <div className="login-grid">
                <div className="checkbox c-checkbox float-left mt-0">
                  <label className="remember-check">
                    <input
                      type="checkbox"
                      className=""
                      value=""
                      name="remember"
                    />
                    <span className="fa fa-check checkmark"></span>Remember Me
                  </label>
                </div>
                <div className="forgot-pwd">
                  <a className="forgot-link" href="#">
                    Forgot password?
                  </a>
                </div>
              </div>
              <a href="#" onClick={onSubmit}>
                <button type="submit" className="form-submit">
                  <i className="fa fa-lock"></i>
                  &nbsp; &nbsp; Login{" "}
                </button>
              </a>
            </form>
          </div>
          <img src="img/showcase.png" className="showcase-img" alt="showcase" />
        </div>
      </header>
    </div>
  );
};

export default Signin;
