import React from 'react'
import './Galerie.scss';
import { useState } from 'react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { CSSTransition } from 'react-transition-group';



function Galerie() {

  /*--------------------- Code pour le carrousel ----------------------*/

  
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

        {/*-------- Quand on clique on appelle la fonction slideAvant --------*/}
        <KeyboardArrowLeftIcon className='fleche' onClick={slideAvant}/>


          <div className="slide">
            <div className='descSlide'>Semaine {[IndexCurrent+2]}</div>
            {/*-------- On cherche l'image par rapport à son index --------*/}
            <img src={`${process.env.PUBLIC_URL}/Images/${nomImages[IndexCurrent]}`} alt="" />
          </div>

        {/*-------- Quand on clique on appelle la fonction slideSuivant --------*/}
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

    
  </>
  )
}

export default Galerie