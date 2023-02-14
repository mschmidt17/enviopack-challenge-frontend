import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {getProducts} from '.././redux/actions.js';


function Cart() {
    const dispatch = useDispatch()
    const cartProducts = useSelector((state) => state.cart)
    
    useEffect(() => {
        dispatch(getProducts)
    })

    return (
        <div className='container-cart'>

        </div>
    );
}

export default Cart;
