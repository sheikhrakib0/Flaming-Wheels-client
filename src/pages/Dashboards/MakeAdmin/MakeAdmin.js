import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';

const MakeAdmin = () => {

  const [isAdded, setIsAdded] = useState(false);
  const [email, setEmail] = useState('');

  const handleOnBlur = e =>{
    setEmail(e.target.value);
  }
  const handleSubmit =e=>{
     e.preventDefault();
     const user = {email}
     fetch('http://localhost:5000/users/admin',{
       method: 'PUT',
       headers: {'content-type':  'application/json'},
       body: JSON.stringify(user)
     })
     .then(res=>res.json())
     .then(data=>{
       setIsAdded(true);
       e.target.reset();
     })
  }
  return (
    <div id='review'>
      <h2 className='bg-dark fs-2 text-white py-4 w-50 mx-auto'>Make an user Admin</h2>
      <div>
        <div className='container col-sm ps-4 p-2 mt-4 bg-dark'>
          <form className='text-white text-start p-4 rounded' onSubmit={handleSubmit}>
            <div className="form-row">
              <div class="form-row">
                <div class="col">
                  <label htmlFor="inputAddress">Email</label>
                  <input onBlur={handleOnBlur} type="email" className="form-control" placeholder='user email' />
                </div>
              </div>
            </div>
            <div className='d-flex justify-content-center'>
              <button type="submit" className="w-50 btn btn-danger my-4">Make Admin</button>
            </div>
          </form>
          {isAdded && <Alert variant='success'>Successfully added Admin</Alert>}
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;