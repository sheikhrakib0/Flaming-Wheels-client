import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navigation from '../../Navigation/Navigation';

const Register = () => {
  return (
    <div>
      <Navigation></Navigation>
      <div className="form-signin w-50 mx-auto my-4">
        <Form>
          <img className="mb-4" src="../assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
          <h1 className="h3 mb-3 fw-normal">Please register here</h1>

          <div className="form-floating">
            <input type="text" className="form-control" id="floatingName" placeholder="Your full name" />
            <label htmlFor="floatingInput">Your Name</label>
          </div>
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
          <Button className="w-100 btn btn-lg btn-primary" type="submit">Register</Button>
          <p>Have an account? <Link style={{ textDecoration: 'none' }} to='/login'>Login here</Link></p>
          <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
        </Form>
      </div>
    </div>
  );
};

export default Register;