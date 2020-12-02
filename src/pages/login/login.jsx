import React from "react";

import "../../styles/login.module.css";
import BlanjaLogo from "../../assets/blanja-logo.svg";

const Login = () => {
  return (
    <>
      <div className='d-flex flex-column justify-content-center align-items-center'>
        <header className='container d-flex flex-column justify-content-center'>
          <div className='icon-head'>
            <img src={BlanjaLogo} alt='Logo Blanja' />
          </div>

          <div class='row justify-content-center'>
            <div class='head'>
              <p>Please login with your account</p>
            </div>
          </div>
        </header>

        <div className='container d-flex flex-column p-0'>
          <div className='form pr-sm-5 pl-sm-5'>
            <input className="w-100" type="email" name="Email" id="email" placeholder="Email"/>
          <input className="w-100" type="password" name="Password" id="password" placeholder="Password"/>
          <div className="txtLink d-flex justify-content-end">
            <a className="custom" href="./reset-Password.html">Forgot password?</a>
          </div>
          <div className="submit">
            <input className="w-100 btn submit" type="submit" value="PRIMARY" />
          </div>
          <div className="txtLink d-flex justify-content-center">
            <p>
              Don't have a Blanja account?
              <a href="./register-User.html">Register</a>
            </p>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;