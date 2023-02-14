import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {getProducts} from '.././redux/actions.js';
import Search from "../components/Search.js";
import Order from "../components/Order.js";
import Card from "../components/Card.js"
import "../CSS/home.css";


function Home() {
    const dispatch = useDispatch()
    const products = useSelector((state) => state.products)
    
    useEffect(() => {
        dispatch(getProducts())
        console.log(products)
    }, [])

    return (
        <div className='container-home'>
            <h1> Catálogo </h1>
            <div className='home-search-order'>
                <Search/>
                <Order/>
            </div>
            <div className='container-productCards'>
                {products.map((p) => {
                    return(
                        <Card product={p} key={p.id}/>
                    )
                })}
            </div>
        </div>
    );
}

export default Home;