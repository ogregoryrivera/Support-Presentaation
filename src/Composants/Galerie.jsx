import React from 'react'
import './Galerie.scss';

function Galerie() {
  return (
    <div className="galerie-container" id='galerie'>
        <div className='titre-galerie'>
            <p className='partie2'>Partie 2</p>
            <p className='titre-galerie'>Galerie</p>
        </div>

        <div className='timeline'>

          <div className="evenement eve-droit">
            <div className="date">Semaine 2</div>
            <div className="description">Prototype des premiers produits</div>
            <img src="/Images/semaine1.png" alt="" className='image-tl'/>
          </div>

          <div className="evenement eve-gauche">
            <div className="date">Semaine 3</div>
            <div className="description">Prototype des premiers produits</div>
            <img src="/Images/semaine2.png" alt="" className='image-tl'/>
          </div>

          <div className="evenement eve-droit">
            <div className="date">La date de le aujourd'hui</div>
            <div className="description">Prototype des premiers produits</div>
            <img src="/Images/semaine3.png" alt="" className='image-tl'/>
          </div>

          <div className="evenement eve-gauche">
            <div className="date">La date de le aujourd'hui</div>
            <div className="description">Prototype des premiers produits</div>
            <img src="/Images/deux2.jpg" alt="" className='image-tl'/>
          </div>
          
        </div>

    </div>
  )
}

export default Galerie