import React from 'react';
import Product from './Product';


const ProductList = ({products}) => {
    return(
        <div className="mx-20 my-20 grid grid-cols-3 gap-4 mx-auto" >
            {
                products.map((item) => {
                    return(<Product key={item.id} title={item.title} price={item.price} />)
                    }
                )
            }
        </div>
    );
}

export default ProductList;