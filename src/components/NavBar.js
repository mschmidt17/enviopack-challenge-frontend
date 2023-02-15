import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {getProfile} from '../redux/actions.js';
import { Link } from 'react-router-dom';
import '../CSS/navbar.css';



function Navbar() {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.profile)
    const cart = useSelector((state) => state.cart)
    const credit = useSelector((state) => state.credit)
    
    useEffect(() => {
        dispatch(getProfile())
    }, [])

    return (
        <div className='container-navbar'>
            <Link to="/" style={{"textDecoration":"none"}}>
                <h2> Tienda de productos </h2>
            </Link>
            <div className='profile-navbar'>
                <h3> {user.firstName} {user.lastName} </h3>
                <Link to="/cart" style={{"textDecoration":"none"}}>
                    <h2> Carrito({cart.length}) </h2> 
                </Link>
                <h3> Crédito $ {credit} </h3>
            </div>
        </div>
    );
}

export default Navbar;