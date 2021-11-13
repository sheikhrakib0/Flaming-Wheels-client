import React from 'react';
import { Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import notFound from '../../img/404.jpg';

const NotFound = () => {
  return (
    <div>
      <Image src={notFound}></Image>
      <div>
        <Link to='/home'><Button><i className="fas fa-arrow-left"></i> Back to Home</Button></Link>
      </div>
    </div>
  );
};

export default NotFound;