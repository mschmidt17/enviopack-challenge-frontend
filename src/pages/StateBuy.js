import React from 'react';
import { useSelector } from "react-redux";
import {getProducts} from '.././redux/actions.js';



function StateBuy() {
    const credit = useSelector((state) => state.credit)
    

    return (
        <div className='container-state'>
           
        </div>
    );
}

export default StateBuy;