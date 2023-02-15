import React from 'react';
import {orderByPrice} from '../redux/actions.js';
import { useDispatch } from "react-redux";

// import './CSS/order.css';



function Order() {
    const dispatch = useDispatch()

    const handleOrdenar = (e) => {
        e.preventDefault();
        dispatch(orderByPrice(e.target.value));
    }

    return (
        <div className='container-search'>
            <select name="select" onChange={e=> handleOrdenar(e)}>
                <option value="all" selected>Seleccionar</option>
                <option value="low" >Mas baratos</option>
                <option value="high">Mas caros</option>
            </select>
        </div>
    );
}

export default Order;