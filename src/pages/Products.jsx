import React from 'react';
import { useParams } from 'react-router-dom';

const Products = () => {
    const  {id} = useParams()
  return (
    <div>
        {" "}
        <h1>Products List</h1>
        <p>showing product with id {id}</p>
    </div>
  )
}

export default Products