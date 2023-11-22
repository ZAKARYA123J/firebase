import React, { useEffect, useState } from 'react';
import data from './data';
import Proditr from './product';
import 'bootstrap/dist/css/bootstrap.min.css';
import './products.css'
import Navbar from './navbar';





function Produite() {
  const [query, setQuery] = useState(""); 
  const products = data.filter(user=>user.category.includes(query)).map((product) => (
      <Proditr key={product.id} product={product} />
  ));


  return (
    <>
    <Navbar onChange={(e) => setQuery(e.target.value)}/>
    <div className='d-flex p-3 bg-secondary text-white'>
    <div className='products'>
        {products}
    </div>
    </div>
    </>
  );
}

export default Produite;
