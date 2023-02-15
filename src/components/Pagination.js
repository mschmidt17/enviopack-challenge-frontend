import React from 'react';




function Pagination({ productsPerPage, allProducts, paginado }) {
    
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
                            <button className='pageButton' onClick={() => paginado(number)} >{number}</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default Pagination;