// src/components/HomePage.js
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { addToCart } from '../redux/actions';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const HomePage = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products);

    const [images, setImages] = useState([])

    // useEffect(() => {
    //     console.log(images);
    // }, [images])

    useEffect(() => {
        // Fetching products from API
        axios.get('https://dummyjson.com/products')
            .then((response) => {
                dispatch({ type: 'SET_PRODUCTS', payload: response.data.products });
                console.log(response.data.products);
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
                    <Carousel className='carousel'>
                        <div>
                            <img src={product.images[0]} alt={product.title} />
                        </div>
                        <div>
                            <img src={product.images[1]} alt={product.title} />
                        </div>
                        <div>
                            <img src={product.images[2]} alt={product.title} />
                        </div>
                    </Carousel>
                    <p>{product.title}</p>
                    <p>$ {product.price}</p>
                    <button className='btn' onClick={() => handleAddToCart(product)}>Add to Cart</button>
                </div>
            ))}
        </div>
    );
};

export default HomePage;
