import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageDisplay = ({product}) => {

    console.log(product);
    return (
        <Carousel className='carousel' autoPlay autoFocus infiniteLoop>
             {product.images.map((imageUrl, index) => (
                <div key={index}>
                    <img src={imageUrl} alt={product.title} />
                </div>
            ))}
        </Carousel>
    )
}

export default ImageDisplay;