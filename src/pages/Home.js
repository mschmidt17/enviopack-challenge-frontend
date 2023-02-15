import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {getProducts} from '.././redux/actions.js';
import Search from "../components/Search.js";
import Order from "../components/Order.js";
import Card from "../components/Card.js"
import Pagination from "../components/Pagination.js"
import "../CSS/home.css";


function Home() {
    const dispatch = useDispatch()
    const products = useSelector((state) => state.products)
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 6;
    const indexOfLastProduct = currentPage * productsPerPage; 
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct,indexOfLastProduct);

    
    const paginado = (page) => {
      setCurrentPage(page);
    };

    const handleNext = (e) => {
        e.preventDefault()
        const nextPage = currentPage + 1;
        setCurrentPage(nextPage);
    }

    const handlePrev = (e) => {
        e.preventDefault()
        const prevPage = currentPage - 1;
        setCurrentPage(prevPage);
    }
    
    useEffect(() => {
        dispatch(getProducts())
        setCurrentPage(1);
    }, [])


    return (
        <div className='container-home'>
            <h1> Catálogo </h1>
            <div className='home-search-order'>
                <Search/>
                <Order/>
            </div>
            <div className='container-productCards'>
                {currentProducts.map((p) => {
                    return(
                        <Card product={p} key={p.id}/>
                    )
                })}
            </div>

            <div className='renderPages'>    
                <button className='btnPages' onClick={e => handlePrev(e)}  disabled={currentPage === 1 ? true : false}> ◄ </button>    
                <Pagination
                    productsPerPage = {productsPerPage}
                    allProducts = {products.length}
                    paginado = {paginado}
                />
                <button className='btnPages' onClick={e => handleNext(e)} disabled={currentPage === 4 ? true : false} > ► </button>
            </div>

        </div>
    );
}

export default Home;