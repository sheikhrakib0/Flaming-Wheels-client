
import React from 'react';
import { Alert } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
  const {user, loading, admin} = useAuth();
  if(loading){return <Alert></Alert>}
  return (
    <Route
    {...rest}
    render={({ location }) =>
      user.email && admin ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: "/home",
            state: { from: location }
          }}
        />
      )
    }
  />
  );
};

export default AdminRoute;