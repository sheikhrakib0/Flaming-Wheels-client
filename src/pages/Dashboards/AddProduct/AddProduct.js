import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';

const AddProduct = () => {
  const [isAdded, setIsAdded] = useState(false);

  const inputValue = {};
  //handle input
  const handleOnBlur = e =>{
    const field = e.target.name;
    const value = e.target.value;
    inputValue[field] = value;
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    fetch("https://vast-basin-25739.herokuapp.com/products", {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(inputValue)
    })
    .then(res=>res.json())
    .then(data=>setIsAdded(true))

  }
  return (
    <div>
      <h2 className='bg-dark fs-2 text-white py-4 w-50 mx-auto'>Give us a review</h2>
      <div>
        <div className='container col-sm ps-4 p-2 mt-4 bg-dark'>
          <h2 className='text-center text-white my-4'>Write a user Review here</h2>
          <form className='text-white text-start p-4 rounded' onSubmit={handleSubmit}>
            <div className="form-row">
              <div class="form-row">
                <div class="col">
                  <label htmlFor="inputAddress">Price</label>
                  <input name="price" onBlur={handleOnBlur} type="number" className="form-control" placeholder='number value' required />
                </div>
                <div class="col">
                  <label htmlFor="inputTitle">Name</label>
                  <input name="name" onBlur={handleOnBlur} type="text" className="form-control" placeholder='product name' required />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputDescription">Desctipton</label>
              <textarea
                name="description" onBlur={handleOnBlur}
                type="text" className="form-control" placeholder="Description about the product" required />
            </div>
            <div className="form-group">
              <label htmlFor="inputDescription">Photo URL</label>
              <input
                name="picture" onBlur={handleOnBlur}
                type="text" className="form-control"  placeholder="full link" required />
            </div>
            <div className="form-group">
              <label htmlFor="inputDescription">Company</label>
              <input
                name="company" onBlur={handleOnBlur}
                type="text" className="form-control" placeholder="Description about the product" required />
            </div>
            <div className="form-group">
            </div>
            <div className='d-flex justify-content-center'>
              <button type="submit" className="w-50 btn btn-danger my-4">Place Order</button>
            </div>
          </form>
          {isAdded && <Alert variant='success'>Successfully added product</Alert>}
        </div>
      </div>
    </div>
  );
};

export default AddProduct;