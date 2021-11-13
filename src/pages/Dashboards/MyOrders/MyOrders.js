import React, { useEffect, useState } from 'react';
import { Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const MyOrders = () => {
  const {user} = useAuth();
  const [orders, setOrders] = useState([]);

  //deleting orders
  
  const handleDelete = (id) =>{
    const proceed = window.confirm('Are you sure want to delete ?');
    if(proceed){
        fetch(`https://vast-basin-25739.herokuapp.com/orders/${id}`, {
          method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
          if(data.deletedCount > 0){
            alert('Deleted Successfully')
            const remainingOrders = orders.filter(order =>order._id !== id);
            setOrders(remainingOrders);
          }
        })
    }
  }
  
  //finding user orders
  useEffect(()=>{
    fetch(`https://vast-basin-25739.herokuapp.com/orders?email=${user.email}`)
    .then(res=>res.json())
    .then(data=>setOrders(data))
  },[user.email])
  return (
    <div className='container'>
      <h2 className='bg-dark fs-2 text-white py-4 w-50 mx-auto'>My Orders</h2>
      {
        orders.map(order=><div key={order._id}
        className="d-flex mx-auto w-75 justify-content-between bg-info my-4"
        >
          <Image className='mx-4' height='60' width='60' roundedCircle src={order.productImg}/>
          <h3 className='px-2 text-center'>{order.productName}</h3>
          <Button onClick={()=>handleDelete(order._id)} variant='dark' className='px-2'>Cancel Order</Button>
        </div>)
      }

      <Link to='/dashboard/pay'><Button>Make Payment <i className="fas fa-arrow-right"></i></Button></Link>
    </div>
  );
};

export default MyOrders;