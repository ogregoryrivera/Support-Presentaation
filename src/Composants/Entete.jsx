import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import './Entete.scss';
import React, {useState} from 'react';

function Entete() {

  /*-------------------- Code pour le menu burger ----------------------*/

  const [burgerClass, setBurgerClass] = useState("burger-bar unclicked");
  const [menuClass, setMenuClass] = useState("menu hidden");
  const [menuClicke, setMenuClicke] = useState(false);

  const updateMenu = () => {
    if(!menuClicke) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    }
    else{
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setMenuClicke(!menuClicke)
  }

  return (
    <>
    <BrowserRouter>
    
        <nav className="entete">
          <div className="entete-container">

            
            <img src="/Images/logo.png" alt="" className='logo'/>

            
            
            <ul className='liens'>

            <div className="burger-menu" onClick={updateMenu}>
              <div className={burgerClass}></div>
              <div className={burgerClass}></div>
              <div className={burgerClass}></div>
            </div>

            <div className={menuClass}>
              <Link to='#presentation' smooth className='lien' onClick={updateMenu}>
                Présentation
              </Link>

              <Link to='#galerie' smooth className='lien' onClick={updateMenu}>
                Galerie
              </Link>

              <Link to='#inspiration' smooth className='lien' onClick={updateMenu}>
                Inspirations
              </Link>
            </div>
            
            </ul>

          </div>
        </nav>
    </BrowserRouter>
    </>
  )
}

export default Entete