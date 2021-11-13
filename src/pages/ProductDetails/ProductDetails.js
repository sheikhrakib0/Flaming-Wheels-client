import React, { useEffect, useState } from 'react';
import { Alert, Col, Image, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import Navigation from '../Navigation/Navigation';

const ProductDetails = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState({});
  const [isAdded, setIsAdded] = useState(false);
  // const productId = singleProduct._id; 

  useEffect(() => {
    fetch(`https://vast-basin-25739.herokuapp.com/products/${id}`)
      .then(res => res.json())
      .then(data => setSingleProduct(data))
  }, [id])

  //for server Data 
  const initialOrderInfo = {
    productId: id,
    name: user.displayName,
    email: user.email
  };
  const [orderInfo, setOrderInfo] = useState(initialOrderInfo);

  const handleOnBlur = e =>{
    const field = e.target.name;
    const value = e.target.value;
    const newOrderInfo = {...orderInfo};
    newOrderInfo[field] = value;
    setOrderInfo(newOrderInfo);
  }

  //handle form submit
  const handleSubmit = e => {
    e.preventDefault();
    const orders = {...orderInfo, productName: singleProduct.name, productImg: singleProduct.picture}
    // console.log(orders);
    //sending data to server
    fetch('https://vast-basin-25739.herokuapp.com/orders', {
      method: 'POST',
      headers: {'content-type' : 'application/json'},
      body: JSON.stringify(orders),
    }).then(res=>res.json())
    .then(data=>{
      if(data.insertedId){
        setIsAdded(true);
        e.target.reset();
      }
    })
    
  }

  return (
    <div>
      <Navigation></Navigation>
      <Row>
        <Image src={singleProduct.picture} height="600px" />
        <Row>
          <Col xs={12} md={7}>
            <h2 className='bg-dark text-white py-2 mt-4'>Product Details</h2>
            <br />
            <h2>{singleProduct.name}</h2>
            <h4>Price ${singleProduct.price}</h4>
            <p>{singleProduct.description}</p>
          </Col>
          <Col sx={12} md={5}>
            <div className='container col-sm ps-4 p-2 mt-4 bg-dark'>
              <h2 className='text-center text-white my-4'>Fill the form to Place Order</h2>
              <form className='text-white text-start p-4 rounded' onSubmit={handleSubmit}>
                <div className="form-row">
                  <div class="form-row">
                    <div class="col">
                      <label htmlFor="inputAddress">Name</label>
                      <input type="text" className="form-control" value={user.displayName || ''} />
                    </div>
                    <div class="col">
                      <label htmlFor="inputAddress">Email</label>
                      <input type="text" className="form-control" value={user.email} />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="inputAddress">Address</label>
                  <input
                  name="address" onBlur={handleOnBlur}
                   type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" required/>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="inputCity">Phone</label>
                    <input
                    name="phone" onBlur={handleOnBlur}
                    type="text" className="form-control" id="inputCity" required/>
                  </div>
                </div>
                <div className="form-group">
                </div>
                <div className='d-flex justify-content-center'>
                  <button type="submit" className="w-50 btn btn-danger my-4">Place Order</button>
                </div>
              </form>
              {isAdded && <Alert variant='success'>Successfully placed your order</Alert>}
            </div>
          </Col>
        </Row>
      </Row>
    </div>
  );
};

export default ProductDetails;