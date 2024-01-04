// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import HomePage from './Components/HomePage';
import MyCartPage from './Components/MyCartPage';
import './App.css'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <nav className='navBar'>
            <div className='brand'>
              Shopping Cart
            </div>
            <ul>
              <li>
                <Link className='menuItems' to="/">Home</Link>
              </li>
              <li>
                <Link className='cart' to="/my-cart">My Cart</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/my-cart" element={<MyCartPage />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
