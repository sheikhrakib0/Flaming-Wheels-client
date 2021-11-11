import React from 'react';
import { Carousel } from 'react-bootstrap';

const Slider = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            height='700px'
            src="https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=822&q=80"
            alt="black cycle"
          />
          <Carousel.Caption>
            <h3>Black Road Bike</h3>
            <p>Road bicycle racing is the cycle sport discipline of road cycling,</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            height='700px'
            src="https://images.unsplash.com/photo-1496147433903-1e62fdb6f4be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=821&q=80"
            alt="Extreme Racing"
          />

          <Carousel.Caption>
            <h3>Extreme Racing Bike</h3>
            <p>It's made with passion for the passionate.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            height='700px'
            src="https://images.unsplash.com/photo-1559348349-86f1f65817fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="Simple Office Bike"
          />

          <Carousel.Caption>
            <h3>Simple Office Bike</h3>
            <p>Make yourself formal with this stylish bike</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;