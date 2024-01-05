// src/components/HomePage.js
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { addToCart } from '../redux/actions';
import ImageDisplay from './ImageDisplay'

const HomePage = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products);

    const [images, setImages] = useState([])

    useEffect(() => {
        // Fetching products from API
        axios.get('https://dummyjson.com/products')
            .then((response) => {
                dispatch({ type: 'SET_PRODUCTS', payload: response.data.products });
                // console.log(response.data.products);
                response.data.products.map(item => {
                    // setImages(item)
                    // console.log(item);
                })
            });
    }, []);

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };
    
    return (
        <div className='card-container'>
            {products.map((product) => (
                <div className='card' key={product.id}>
                    {/* <img className='img-container' src={product.images[0]} alt={product.title} /> */}
                    <ImageDisplay product={product} />
                    <p>{product.title}</p>
                    <p>$ {product.price}</p>
                    <button className='btn' onClick={() => handleAddToCart(product)}>Add to Cart</button>
                </div>
            ))}
        </div>
    );
};

export default HomePage;
