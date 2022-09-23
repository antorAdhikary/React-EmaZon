import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'


const Cart = (props) => {
    const cart = props.cart;

    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        // console.log(product)        
        total = total + product.price ;
    }

    let shippingCost = 0;
    
    if (total > 75){
        shippingCost = 0
    }
    else if (total > 25){
        shippingCost = 12.99
    }
    else if(total > 0){
        shippingCost = 4.99
    }

    const tax = total / 10 ;

    const formatNumber = num => Number(num).toFixed(2)
    const grandTotal = total + shippingCost + tax
    return (
        <div>
            <h1><FontAwesomeIcon icon={faShoppingCart} /> {cart.length}</h1>
            <h3>Product Price : {formatNumber(total)}</h3>
            <h2>Shipping Cost : {shippingCost}</h2>
            <h2>Tax & Vat : {formatNumber(tax)}</h2>
            <h2>Total : {formatNumber(grandTotal)}</h2>
        </div>
    );
};

export default Cart;