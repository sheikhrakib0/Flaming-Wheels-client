import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Navigation from '../../Navigation/Navigation';

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { signInWithEmail, signInUsingGoogle, setUser, setError } = useAuth();

  const location = useLocation();
  const history = useHistory();

  //handle input
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  }

  const { email, password } = loginData;
  //handle email login
  const handleEmailLogin = e => {
    e.preventDefault();
    signInWithEmail(email, password, location, history);
  }
  // google sign in
  const handleGoogleSignIn = (e) => {
    e.preventDefault();
    signInUsingGoogle()
      .then(res => {
        setUser(res.user);
        const destination = location?.state?.from || '/';
        history.replace(destination);
        setError('')
      })
      .catch(err => setError(err.message))

  }
  return (
    <div>
      <Navigation />
      <div className="form-signin w-50 mx-auto my-4">
        <Form>
          <img className="mb-4" src="../assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

          <div className="form-floating">
            <input name='email' onBlur={handleOnBlur} type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input name='password' onBlur={handleOnBlur} type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <div className="checkbox mb-3">
          </div>
          <Button onClick={handleEmailLogin} className="w-100 btn btn-lg btn-primary" type="submit">Sign in</Button>
          <p>Don't have an account? <Link style={{ textDecoration: 'none' }} to='/register'>Register here</Link></p>
          <p>--------or---------</p>
          <br />
          <Button onClick={handleGoogleSignIn}>Sign In With Google</Button>
          <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
        </Form>
      </div>
    </div>
  );
};

export default Login;