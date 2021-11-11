import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Navigation from '../../Navigation/Navigation';

const Login = () => {
  const { signInUsingGoogle, setUser} = useAuth();

  // google sign in
  const handleGoogleSignIn = (e) =>{
    e.preventDefault();
    signInUsingGoogle()
    .then(res=>{
      setUser(res.user);
    })
    .catch(err=>console.log(err.message))

  }
  return (
    <div>
      <Navigation />
      <div className="form-signin w-50 mx-auto my-4">
        <Form>
          <img className="mb-4" src="../assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

          <div className="form-floating">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <div className="checkbox mb-3">
          </div>
          <Button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</Button>
          <p>Don't have an account? <Link style={{textDecoration: 'none'}} to='/register'>Register here</Link></p>
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