import React, { useState } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './Inspiration.scss';

function Inspirations() {

  /*---------------------- Code pour ajouter des classes active ou inactive -------------*/

  /*--------------- ajouterClasse est le statue de la valeur actuel et setAjouterClasse va update la ce statue en temps réel ---------*/
  const [ajouterClasse, setajouterClasse] = useState(false);

  /*--------------- une fonction qui change le statue de la valeur ci-dessus de false à true ---------*/
  const toggleInfo = () => {
    setajouterClasse(!ajouterClasse);
  };

  const [ajouterClasse2, setajouterClasse2] = useState(false);

  
  const toggleInfo2 = () => {
    setajouterClasse2(!ajouterClasse2);
  };

  const [ajouterClasse3, setajouterClasse3] = useState(false);

  
  const toggleInfo3 = () => {
    setajouterClasse3(!ajouterClasse3);
  };

  const [ajouterClasse4, setajouterClasse4] = useState(false);

  
  const toggleInfo4 = () => {
    setajouterClasse4(!ajouterClasse4);
  };

  return (
    <div className="inspiration-container" id='inspiration'>
      <div className='titre-inspiration'>
        <p className='partie3'>Partie 3</p>
        <p className='titre-inspiration'>Inspirations</p>
      </div>

      <div className='galerie-base'>
        <p className='galerie-base-titre'>Base</p>

        <div className='carte'>
          <img src="/Images/bracelet.png" alt="" />
          {/*------------- Si la valeur ajouterClasse est true on met la classe "actif", sinon on ne met pas de classe---------------*/}
          <div className={`bas-carte ${ajouterClasse ? 'actif' : ''}`}>

            <ArrowForwardIosIcon onClick={toggleInfo} className="fleche" />

            <p className='info'>Informations</p>

            <p className='desc'>
            La montre Oakley Blade, en acier inoxydable, présente un design agressif et solide, avec 16 millions de livres de force utilisées pour façonner sa lame.<span>OakleyForum.com</span>            
            </p>

          </div>
          
        </div>
        
        <div className='carte'>
          <img src="/Images/bracelet3.png" alt="" />
          {/*------------- Si la valeur ajouterClasse est true on met la classe "actif", sinon on ne met pas de classe---------------*/}
          <div className={`bas-carte ${ajouterClasse2 ? 'actif' : ''}`}>

            <ArrowForwardIosIcon onClick={toggleInfo2} className="fleche" />

            <p className='info'>Informations</p>

            <p className='desc'>
            Chrome Hearts, marque de luxe d'Hollywood, fondée en 1988 par Richard Stark, Leonard Kamhout et John Bowman. Connue pour ses bijoux et accessoires haut de gamme.<span>Wikipedia.com</span>
            </p>

          </div>
          
        </div>

      </div>




      <div className='galerie-theme'>
        <p className='galerie-theme-titre'>Thème</p>

        <div className='carte'>
          <img src="/Images/theme.png" alt="" />
          {/*------------- Si la valeur ajouterClasse est true on met la classe "actif", sinon on ne met pas de classe---------------*/}
          <div className={`bas-carte ${ajouterClasse3 ? 'actif' : ''}`}>

            <ArrowForwardIosIcon onClick={toggleInfo3} className={`fleche ${ajouterClasse3 ? 'actif' : ''}`} />

            <p className='info'>Informations</p>

            <p className='desc'>
             Le "Dragon Blanc aux Yeux Bleus" est une carte emblématique de "Yu-Gi-Oh!". C'est l'un des monstres principaux de Seto Kaiba.<span>Wikipedia.com</span>            
            </p>

          </div>
          
        </div>
        
        <div className='carte'>
          <img src="/Images/theme2.png" alt="" />
          {/*------------- Si la valeur ajouterClasse est true on met la classe "actif", sinon on ne met pas de classe---------------*/}
          <div className={`bas-carte ${ajouterClasse4 ? 'actif' : ''}`}>

            <ArrowForwardIosIcon onClick={toggleInfo4} className="fleche" />

            <p className='info'>Informations</p>

            <p className='desc'>
            Chanel ou Chanel SAS est une entreprise française productrice de haute couture, ainsi que de prêt-à-porter, accessoires, parfums et divers produits de luxe.<span>Wikipedia.com</span>
            </p>

          </div>
          
        </div>

      </div>

    </div>
  );
}

export default Inspirations;
