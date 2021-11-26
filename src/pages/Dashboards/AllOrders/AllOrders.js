import React, { useEffect, useState } from 'react';
import { Button, Image } from 'react-bootstrap';

const AllOrders = () => {
  const [allOrders, setAllOrders] = useState([]);

  const handleDelete=(id)=>{

  }
   //finding user orders
   useEffect(()=>{
    fetch(`https://vast-basin-25739.herokuapp.com/allorders`)
    .then(res=>res.json())
    .then(data=>setAllOrders(data))
  },[])
  return (
    <div className='container'>
      <h2 className='bg-dark fs-2 text-white py-4 w-50 mx-auto'>All Orders</h2>
      {
        allOrders.map(order=><div key={order._id}
        className="d-flex mx-auto w-75 justify-content-between bg-info my-4"
        >
          <Image className='mx-4' height='60' width='60' roundedCircle src={order.productImg}/>
          <h3 className='px-2 text-center'>{order.productName}</h3>
          <Button onClick={()=>handleDelete(order._id)} variant='dark' className='px-2'>Cancel Order</Button>
        </div>)
      }
    </div>
  );
};

export default AllOrders;