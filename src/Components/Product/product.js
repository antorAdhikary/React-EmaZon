import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart, faStar, faStarHalf,faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'

const product = (props) => {
    const { img, name, seller, price, stock } = props.product
    // console.log(props.product)
    return (
        <div className='productStyle' >
            <div className='pr-left-side'>
                <img src={img}></img>
            </div>
            <div className='pr-right-side'>

                <h3>{name}</h3>
                <p>By : {seller}</p>
                <p className='star-style'>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} /> 
                    <FontAwesomeIcon icon={faStar} />    
                    <FontAwesomeIcon icon={faStarHalfAlt} />

                </p>
                <h4>${price}</h4>
                <p>Only {stock} left in stock </p>
                <button
                onClick={() => props.handleAddProduct(props.product)}
                 className='cart-btn'> <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart </button>
            </div>
        </div>
    );
};

export default product;