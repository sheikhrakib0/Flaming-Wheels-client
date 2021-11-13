import React, { useEffect, useState } from 'react';
import { Button, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navigation from '../../Navigation/Navigation';
import Product from '../../Product/Product';
import Reviews from '../../Reviews/Reviews';
import Slider from '../../Slider/Slider';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://vast-basin-25739.herokuapp.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])
  return (
    <div>
      <Navigation></Navigation>
      <Slider></Slider>
      <div id='products'>
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
        <Link className="rounded-pill" to='/products'><Button>See All Products <i className="fas fa-arrow-right"></i></Button></Link>
      </div>

      <Reviews></Reviews>

    </div>
  );
};

export default Home;