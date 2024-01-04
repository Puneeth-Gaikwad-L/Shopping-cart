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
    <div>
      <h1>My Cart</h1>
      {myCart.map((item) => (
        <div key={item.id}>
          <img src={item.image} alt={item.title} />
          <p>{item.title}</p>
          <p>${item.price}</p>
          <button onClick={() => handleRemoveFromCart(item.id)}>
            Remove from Cart
          </button>
        </div>
      ))}
      <div>
        <h2>Checkout Summary</h2>
        <ul>
          {myCart.map((item) => (
            <li key={item.id}>
              {item.title} - ${item.price}
            </li>
          ))}
        </ul>
        <p>Total: ${myCart.reduce((total, item) => total + item.price, 0)}</p>
        <button onClick={handleCheckout}>Checkout</button>
      </div>
    </div>
  );
};

export default MyCartPage;
