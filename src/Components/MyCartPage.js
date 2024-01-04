// src/components/MyCartPage.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, checkout } from '../redux/actions';

const MyCartPage = () => {
    const dispatch = useDispatch();
    const myCart = useSelector((state) => state.myCart);

    const handleRemoveFromCart = (productId) => {
        dispatch(removeFromCart(productId));
    };

    const handleCheckout = () => {
        dispatch(checkout());
        alert('Items have been checked out!');
    };

    return (
        <div className='my-cart'>
            <div className='my-cart-items'>
                <div className='card-container'>
                    {myCart.map((item) => (
                        <div className='card' key={item.id}>
                            <img className='img-container' src={item.images[0]} alt={item.title} />
                            <p>{item.title}</p>
                            <p>${item.price}</p>
                            <button className='btn' onClick={() => handleRemoveFromCart(item.id)}>
                                Remove from Cart
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            <div className='summary'>
                <h2>Checkout List</h2>
                <ol>
                    {myCart.map((item) => (
                        <li key={item.id}>
                            <span>{item.title}</span> - <span>${item.price}</span>
                        </li>
                    ))}
                </ol>
                <p><span>Total: </span><span>${myCart.reduce((total, item) => total + item.price, 0)}</span></p>
                <button className='btn btn2' onClick={handleCheckout}>Checkout</button>
            </div>
        </div>
    );
};

export default MyCartPage;
