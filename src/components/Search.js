import { React, useState, useEffect} from "react";
import {getProducts, searchProduct} from '../redux/actions.js';
import { useDispatch, useSelector } from "react-redux";
// import './CSS/search.css';



function Search() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products)
    const [name, setName] = useState("");

    const handleInputChange = (e) => {
        e.preventDefault();
        setName(e.target.value);
    }
    
    useEffect(() => {
        if(name.length > 1){
            dispatch(searchProduct(name));
            console.log("name", name)
        } else {
            dispatch(getProducts());
        }
    }, [name])


    return (
        <div className='container-search'>
            <div className="search">
                <input
                type="text"
                value={name}
                placeholder='Buscar productos por nombre'
                onChange={(e) => handleInputChange(e)} 
                />
            </div> 
        </div>
    );
}

export default Search;