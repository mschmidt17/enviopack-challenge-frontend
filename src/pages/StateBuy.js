import React from 'react';
import { useSelector } from "react-redux";
import { Link} from 'react-router-dom';
import "../CSS/statebuy.css"


function StateBuy() {
    const stateBuy = useSelector((state) => state.stateBuy)
    

    return (
        <div className='container-state'>
            <h1 title-state> Estado de la compra </h1>

                    {
                        stateBuy === true ?
                        <div className='statebuy-item'>
                            <p className='state-important'>La compra se realizó con éxito</p>
                            <Link to="/"> <button className='back-btn-state'> Volver al catálogo </button> </Link>
                        </div>
                        :
                        <div className='statebuy-item'>
                            <p className='state-important'> Ocurrió un error con la compra, revisa que el importe no supere el credito disponible en tu cuenta </p>
                            <Link to="/cart"> <button className='back-btn-state'> Volver al carrito </button> </Link>
                        </div>
                    }

           
        </div>
    );
}

export default StateBuy;