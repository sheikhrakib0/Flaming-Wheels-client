import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ProductDetails = () => {
  const {id} = useParams();
  const [singleProduct, setSingleProduct] = useState({})

  useEffect(()=>{
    fetch(`http://localhost:3000/product/${id}`)
    .then(res=>res.json())
    .then(data=>setSingleProduct(data))
  },[])

  return (
    <div>
      Single Product Details of {singleProduct.price}
    </div>
  );
};

export default ProductDetails;