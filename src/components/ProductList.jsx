import React from 'react';

const products = [
    {id: 1, title: 'fucking apple wtach'},
    {id: 2, title: 'asshole apple wtach'},
    {id: 3, title: 'pusssy apple wtach'},
    {id: 4, title: 'dick apple wtach'}
];

const ProductList = () => {
  return (
    <div>
        {products.map((item) => {
            return(
                <p>{item.title}</p>
            );
        })}
    </div>
  );
}

export default ProductList;