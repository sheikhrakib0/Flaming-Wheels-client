import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Navigation from '../Navigation/Navigation';
import Product from '../Product/Product';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  return (
    <div>
      <Navigation />
      <h2 className='my-4 fw-bold'>Our Products</h2>
      <div className='container'>
      <Row xs={1} md={3} className="g-4">
        {
          products.map(product=><Product
          product={product}
          key={product._id}
          ></Product>)
        }
        </Row>
      </div>
    </div>
  );
};

export default Products;