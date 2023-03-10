import React from 'react';
import "../CSS/pagination.css"


function Pagination({ productsPerPage, allProducts, paginado, currentPage }) {
    
    const page = [];
    for (let i = 0; i < Math.ceil(allProducts/productsPerPage); i++) {
        page.push(i+1);
    }

    return (
        <div className='container-pagination'>    
            <ul className="ul-pagination">
                {page.length > 1 && page.map((number) => {
                    return (
                        <li className="pages" key={number}>
                            {console.log(currentPage, number)}
                            <button className={`pageButton ${currentPage === number ? 'active': "" }`} onClick={() => paginado(number)} >{number}</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default Pagination;