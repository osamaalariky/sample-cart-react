import React from 'react';

const CountingNavBar = ({totalCounters}) => {
    console.log("Nav - Rendered");
    return ( 
        <nav className="navbar navbar-light bg-light">
     <a className="navbar-brand" href="#">
            <h1> Sample Shopping Cart</h1>
        products added to your cart <span className='badge badge-pill badge-secondary'>
            {totalCounters}
         </span>
         </a>
    </nav>
     );
}
 
export default CountingNavBar;