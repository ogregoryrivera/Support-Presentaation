import React from 'react'
import './Galerie.scss';
import { useState } from 'react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { CSSTransition } from 'react-transition-group';



function Galerie() {

  
  const [IndexCurrent, setIndexCurrent] = useState(0);
  
  
  
  const nomImages = ['semaine1.png', 'semaine2.png', 'semaine3.png'];
  
  const slideSuivant = () => {
    setIndexCurrent((indexPrev) => (indexPrev === nomImages.length - 1 ? 0 : indexPrev + 1));
    
  }
  
  const slideAvant = () => {
    setIndexCurrent((indexPrev) => (indexPrev === 0 ? nomImages.length - 1 : indexPrev -1));
    
  }

  const videoID = 'FGHbeWO7aGw';

  return (
    <>
    <div className='titre-galerie'>
            <p className='partie2'>Partie 2</p>
            <p className='titre-galerie'>Galerie</p>
    </div>

    
    
    <div className="galerie-container" id='galerie'>

        

      <div className='slider'>

        
        <KeyboardArrowLeftIcon className='fleche' onClick={slideAvant}/>


          <div className="slide">
            <div className='descSlide'>Semaine {[IndexCurrent+2]}</div>
            <img src={`${process.env.PUBLIC_URL}/Images/${nomImages[IndexCurrent]}`} alt="" />
          </div>

    
        <KeyboardArrowRightIcon className='fleche' onClick={slideSuivant}/>

      </div>


        <iframe className='video'
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${videoID}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
        />
    
    </div>

    

    {/*<div className="galerie-container" id='galerie'>
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

  </div>*/}
  </>
  )
}

export default Galerie