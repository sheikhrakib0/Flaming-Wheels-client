import React, { useEffect, useState } from 'react';
import { Button, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navigation from '../../Navigation/Navigation';
import Product from '../../Product/Product';
import Slider from '../../Slider/Slider';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('./products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])
  return (
    <div>
      <Navigation></Navigation>
      <Slider></Slider>
      <div>
        <h2 className='my-4 fw-bold'>Our Products</h2>
        <div className='container'>
          <Row xs={1} md={3} className="g-4">
            {
              products.slice(0, 6).map(product => <Product
                product={product}
                key={product.id}
              ></Product>)
            }
          </Row>
        </div>
        <Link to='/products'><Button>See All Products</Button></Link>
      </div>
    </div>
  );
};

export default Home;