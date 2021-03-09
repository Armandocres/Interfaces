import React from 'react';
import { Link } from 'react-router-dom';
import "./home.css"
const Homes = () => {
   return (
      <main className='divHome'>
         <Link className='linkshome' to="/home">
            <h1 className='Homeh2'>Exámenes en Linea</h1>
         </Link>
      </main>
   );
}
export default Homes;