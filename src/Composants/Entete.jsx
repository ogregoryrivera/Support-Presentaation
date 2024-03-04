import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import './Entete.scss';
import React, {useState} from 'react';

function Entete() {
  return (
    <>
    <BrowserRouter>
    
        <nav className="entete">
          <div className="entete-container">

            <img src="/Images/logo.png" alt="" className='logo'/>

            
            <ul className='liens'>
            <Link to='#presentation' smooth>
              Présentation
            </Link>

            <Link to='#galerie' smooth>
              Galerie
            </Link>

            <Link to='#galerie' smooth>
              Inspirations
            </Link>
            </ul>

          </div>
        </nav>
    </BrowserRouter>
    </>
  )
}

export default Entete