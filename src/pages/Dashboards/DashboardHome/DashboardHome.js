import React from 'react';
import MyOrders from '../MyOrders/MyOrders';
import Review from '../Review/Review';


const DashboardHome = () => {
  return (
    <div>
      <MyOrders></MyOrders>
      <Review></Review>
    </div>
  );
};

export default DashboardHome;