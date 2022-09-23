import React, { useState } from 'react';
import fakeData from '../../fakeData/products.json';
import './Shop.css';

import Product from '../Product/product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const[products, setProduct] = useState(first10);
    const [cart, setCart] = useState([]);

    const handleAddProduct = (product) => {
        // console.log("product added", product);
        const newCart = [...cart, product];
        setCart(newCart)
    }

    return (
        <div className='container'>
            <div className='left-side'>                
            {
                products.map(pro => <Product handleAddProduct={handleAddProduct} product={pro}> </Product>)
            }  
            </div>
            <div  className='right-side'>
                <Cart cart={cart}></Cart>
            </div>            
        </div>
    );
};

export default Shop;