import React from 'react';
import { useSelector } from "react-redux";
import { Link} from 'react-router-dom';




function StateBuy() {
    const stateBuy = useSelector((state) => state.stateBuy)
    

    return (
        <div className='container-state'>
            <h1> Estado de la compra </h1>
            {
                stateBuy === true ? <p>La compra se realizo con exito</p>
                :
                <p> Ocurrio un error con la compra, revisa que el importe no supere el credito disponible en tu cuenta </p>
            }

            <Link to="/"> <button> Volver al catálogo </button> </Link>
           
        </div>
    );
}

export default StateBuy;