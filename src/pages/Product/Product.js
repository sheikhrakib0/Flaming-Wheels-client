import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = (props) => {
  const {id, name, picture, price, description} = props.product;

  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={picture} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>Price: ${price}</Card.Text>
          <Card.Text>{description.slice(0, 100)}...</Card.Text>
          <Link to={`/product/${id}`}><Button variant='dark'>Buy Now</Button></Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Product;