import React from 'react';
import image from "../assets/image-product.jpg";
// import './CSS/search.css';


function Card({product}) {

    return (
        <div className='container-card'>
            <img src={image} alt="producto" width="60"/>
            <h3> {product.title} </h3>
            <p> ${product.price} </p>
            <button>Agregar al carrito</button>
        </div>
    );
}

export default Card;