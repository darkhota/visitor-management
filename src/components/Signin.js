import React, { Component } from 'react';
import '../styles/MyStyles/Login.css';
import workwise from '../fonts/workwise.ttf';
import { Link } from 'react-router-dom';
const Workwise = {
  fontFamily: 'workwise',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('workwise'),
    local('workwise-Regular'),
    url(${workwise}) format('ttf')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};



const Signin = () => {
  
  return (
    <div className="App">
      <header className="App-header">
       <div className="Grid-container">
         <div className="card">
           <img src ="img/workwise.png" className="logo" alt="logo" />
           <h2>
             Log in to the workwise dashboard
           </h2>
           <form>
             <div className="form-elements">
             <div className="form-group field">
             <input type= "text" className="form-field" />
             <label for="name" className="form-label">Email</label>
             </div> <br></br>
             <div className="form-group field">
             <input type= "text" className="form-field" />
             <label for="name" className="form-label">Password</label>
             </div>
             </div>
             <div className="login-grid">
           
             <div className="checkbox c-checkbox float-left mt-0">
                                    <label className="remember-check">
                                        <input type="checkbox" className="" value="" name="remember"/>
                                        <span className="fa fa-check checkmark"></span>Remember Me</label>
                                </div>
                  <div className="forgot-pwd">
                  <a
                  className="forgot-link" href="#">Forgot password?</a>
                  </div>
                  
              </div>
              <a href="/home">
              <button type= "button" className="form-submit" >
              <i className="fa fa-lock"></i>
                &nbsp; &nbsp; Login </button>
              </a>
              

           </form>
          
         </div>
         <img src ="img/showcase.png" className="showcase-img" alt="showcase" />

       </div>
  
      </header>
    </div>
   
  );

}

export default Signin;
