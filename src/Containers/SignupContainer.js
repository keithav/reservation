import React from 'react';
import './SignupContainer.css';
import { Link } from 'react-router-dom';
const axios = require('axios');

const SignupContainer = () => {
  const auth = e => {
    e.preventDefault();
    axios('localhost:3000/auth/google', {
      method: 'GET',
      // mode: 'no-cors',
      // headers: {
      //   'Access-Control-Allow-Origin': '*',
      //   'Content-Type': 'application/json',
      // },
      // withCredentials: true,
      // credentials: 'same-origin',
    })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log('This is the error', error);
      });
  };

  return (
    <div className="container">
      <h1>Welcome to Reservation Smith</h1>
      <a className="loginButton" href="/auth/google" />
      {/* <Link to="/auth/google"> */}
      <input type="button" className="loginButton" onClick={auth} />
      {/* </Link> */}
    </div>
  );
};

export default SignupContainer;
