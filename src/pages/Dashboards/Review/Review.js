import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';

const Review = () => {
  const [isAdded, setIsAdded] = useState(false);

  const {user} = useAuth()

  const date = new Date();

  const inputValue = {};
  //handle input
  const handleOnBlur = e =>{
    const field = e.target.name;
    const value = e.target.value;
    inputValue[field] = value;
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    const review =  {...inputValue, date: date.toLocaleDateString(), name: user.displayName, picture: user.photoURL }
    fetch("http://localhost:5000/reviews", {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(review)
    })
    .then(res=>res.json())
    .then(data=>setIsAdded(true))

  }
  return (
    <div id='review' style={{marginTop:'100px', borderTop: '3px solid black', paddingTop: '20px'}}>
      <h2 className='bg-dark fs-2 text-white py-4 w-50 mx-auto'>Give us a review</h2>
      <div>
        <div className='container col-sm ps-4 p-2 mt-4 bg-dark'>
          <h2 className='text-center text-white my-4'>Write a user Review here</h2>
          <form className='text-white text-start p-4 rounded' onSubmit={handleSubmit}>
            <div className="form-row">
              <div class="form-row">
                <div class="col">
                  <label htmlFor="inputAddress">Rating </label>
                  <input name="rating" onBlur={handleOnBlur} type="number" className="form-control" placeholder='number 0 - 5' />
                </div>
                <div class="col">
                  <label htmlFor="inputTitle">Title</label>
                  <input name="title" onBlur={handleOnBlur} type="text" className="form-control" />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputDescription">Desctipton</label>
              <textarea
                name="description" onBlur={handleOnBlur}
                type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
            </div>
            <div className="form-group">
            </div>
            <div className='d-flex justify-content-center'>
              <button type="submit" className="w-50 btn btn-danger my-4">Place Order</button>
            </div>
          </form>
          {isAdded && <Alert variant='success'>Successfully added Review</Alert>}
        </div>
      </div>
    </div>
  );
};

export default Review;