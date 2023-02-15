import React, {useEffect, useState} from 'react';
import image from "../assets/image-product.jpg";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart, buyProduct } from '../redux/actions';
import { Link, useNavigate } from 'react-router-dom';


function Cart() {
    const cartProducts = useSelector((state) => state.cart)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [total, setTotal] = useState(0)

    useEffect(() => {
        const cartPrices = cartProducts?.map((p) => {
            return p.price
        })
        const cartTotal = cartPrices?.reduce(function(valorAnterior, valorActual){
            return valorAnterior + valorActual;
        }, 0);
        setTotal(cartTotal)
    }, [cartProducts])

    const handleDelete = (e, id) => {
        e.preventDefault()
        dispatch(deleteFromCart(id))
    }

    const handleBuy = (e, total) => {
        e.preventDefault()
        dispatch( buyProduct(total))
        navigate("/state")
    }

    return (
        <div className='container-cart'>
            <h1> Carrito </h1>
            {cartProducts.length > 0 ?
                <div className='cartCards-container'>
                    {cartProducts.map((p) => {
                        return(
                            <div key={p.id}>
                                <img src={image} alt="producto" width="60"/>
                                <p> {p.title} </p>
                                <p> ${p.price} </p>
                                <button onClick={(e) => handleDelete(e, p.id)}> X </button>
                            </div>
                        )
                    })} 
                    <div>
                        <p>Total</p>
                        <p>$ {total}</p>
                    </div>
                    <div>
                        <Link to="/"> <button> Volver al catálogo </button> </Link>
                        <button  onClick={(e) => handleBuy(e, total)}> Finalizar compra </button>
                    </div>
                </div>
            :
                <div className='cartCards-container'>
                    <p> Aún no se han agregado productos</p>
                    <Link to="/"> <button> Volver al catálogo </button> </Link>
                </div>
            }

        </div>
    );
}

export default Cart;
