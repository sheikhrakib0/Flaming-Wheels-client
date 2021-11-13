import React, { useState } from 'react';
import { Alert, Button, Form, Spinner } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Navigation from '../../Navigation/Navigation';

const Register = () => {
  const [registerData, setRegisterData] = useState({});
  const history = useHistory();
  const { name, email, password } = registerData;
  const { registerUser, error, user, loading } = useAuth();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newRegisterData = { ...registerData };
    newRegisterData[field] = value;
    setRegisterData(newRegisterData);
    // console.log(registerData);
  }
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    registerUser(email, password, name, history)
  }
  return (
    <div>
      <Navigation></Navigation>
      <div className="form-signin w-50 mx-auto my-4">
        {loading? <Spinner animation="border" />
        :
        <Form onSubmit={handleRegisterSubmit}>
          <img className="mb-4" src="../assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
          <h1 className="h3 mb-3 fw-normal">Please register here</h1>

          <div className="form-floating">
            <input name='name' onBlur={handleOnBlur} type="text" className="form-control" id="floatingName" placeholder="Your full name" />
            <label htmlFor="floatingInput">Your Name</label>
          </div>
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
          <Button className="w-100 btn btn-lg btn-primary" type="submit">Register</Button>
          <p>Have an account? <Link style={{ textDecoration: 'none' }} to='/login'>Login here</Link></p>
          <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
        </Form>}
        {user?.email && <Alert variant='success'>
          Success! User created Successfully!
        </Alert>}
        {error && <Alert variant='danger'>
          Error! {error}
        </Alert>}
      </div>
    </div>
  );
};

export default Register;