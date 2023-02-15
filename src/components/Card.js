import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import { addToCart } from '../redux/actions';
import image from "../assets/image-product.jpg";
import {Link} from "react-router-dom";
import '../CSS/card.css';


function Card({product}) {
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart)
    const [addedToCart, setAddedToCart] = useState(false)

    useEffect(() => {
        setAddedToCart(cart?.find((p) => product.id === p.id));
    }, [])

    const handleClick = (e) => {
        e.preventDefault()
        dispatch(addToCart(product))
        setAddedToCart(true)
    }

    return (
        <div className='container-card'>
            <img src={image} alt="producto" width="160"/>
            <h3> {product.title} </h3>
            <p> ${product.price} </p>
            {!addedToCart ?
                <button onClick={handleClick}> Agregar al carrito </button>
            :
                <Link to="/cart">
                    <button> Ver carrito</button>
                </Link>
            }
        </div>
    );
}

export default Card;