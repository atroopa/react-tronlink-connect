import React from 'react';
import Product from './Product';


const ProductList = ({products}) => {
    return(
        <div>
            {products.map((item) => {
                <Product key={item.id} title={item.title} price={item.price} />
            })}
        </div>
    );
}

export default ProductList;