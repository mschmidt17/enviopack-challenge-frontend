import React, {useEffect, useState} from 'react';
import image from "../assets/image-product.jpg";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart, buyProduct } from '../redux/actions';
import { Link, useNavigate } from 'react-router-dom';
import "../CSS/cart.css"


function Cart() {
    const cartProducts = useSelector((state) => state.cart)
    const stateBuy = useSelector((state) => state.stateBuy)
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
        if(stateBuy){
            
        }
        navigate("/state")
    }

    return (
        <div className='container-cart'>
            <h1 className='title-cart'> Carrito </h1>
            {cartProducts.length > 0 ?
                <div className='cartCards-container'>
                    {cartProducts.map((p) => {
                        return(
                            <div key={p.id} className="cart-card">
                                <img src={image} alt="producto" width="70"/>
                                <div className='cart-card-info'>
                                    <p> {p.title} </p>
                                    <div className='cart-price'>
                                        <p> ${p.price} </p>
                                        <button className="btn-delete" onClick={(e) => handleDelete(e, p.id)}> X </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })} 
                    <div className="cart-total">
                        <p>Total</p>
                        <p>$ {total}</p>
                    </div>
                    <div className='container-btn-cart'>
                        <Link to="/" style={{"textDecoration":"none"}}> <button className='btn-cart-buy'> Volver al catálogo </button> </Link>
                        <button className='btn-cart-buy' onClick={(e) => handleBuy(e, total)}> Finalizar compra </button>
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
