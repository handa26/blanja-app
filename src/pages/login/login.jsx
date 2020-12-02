import React from "react";

import BlanjaLogo from "../../assets/blanja-logo.svg";
import "../../styles/login.css";

const Login = () => {
  return (
    <>
      <section id='form-container'>
        <div class='container'>
          <div class='logo'>
            <img src={BlanjaLogo} alt='Blanja Logo' />
            <h1>Blanja</h1>
          </div>
          <h2>Please login with your account</h2>
          <div class='btn-group'>
            <a href='#' class='btn btn-ghost'>
              Customer
            </a>
            <a href='#' class='btn btn-full'>
              Seller
            </a>
          </div>
          <div class='form-section'>
            <form class='fill-form'>
              <div class='col-input form-input'>
                <input
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Email'
                />
              </div>
              <div class='col-input form-input'>
                <input
                  type='password'
                  name='password'
                  id='password'
                  placeholder='Password'
                />
              </div>
              <div class='reset form-input'>
                <a href='reset-password1.html'>Forgot password?</a>
              </div>
              <div class='submit form-input'>
                <a class='submit-btn' href='index.html' type='submit'>
                  LOGIN
                </a>
              </div>
            </form>
          </div>
          <p class='text'>
            Don't have a Blanja account? <a href='signup.html'>Register</a>
          </p>
        </div>
      </section>
    </>
  );
};

export default Login;
