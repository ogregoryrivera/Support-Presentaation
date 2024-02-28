import './Entete.scss';
import React, {useState} from 'react';

function Entete() {
  return (
    <>
      <nav className="entete">
        <div className="entete-container">
          
          <img src="/Images/logo.png" alt="" className='logo'/>

          <ul className='liens'>
            <li className='lien'>Présentation</li>
            <li className='lien'>Galerie</li>
            <li className='lien'>Inspirations</li>
          </ul>

        </div>
      </nav>
    </>
  )
}

export default Entete