import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {getProfile} from '../redux/actions.js';
import './CSS/navbar.css';



function Navbar() {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.profile)
    const cart = useSelector((state) => state.cart)
    const credit = useSelector((state) => state.credit)
    
    useEffect(() => {
        dispatch(getProfile)
    })

    return (
        <div className='container-navbar'>
            <h3> Tienda de productos </h3>
            <div>
                <h2> {user.firstName} {user.lastName} </h2>
                {cart.length > 0 ? 
                    <h2> Carrito({cart.length}) </h2> 
                : 
                    <h2> Carrito </h2>
                }
                <h2> Crédito $ {credit} </h2>
            </div>
        </div>
    );
}

export default Navbar;