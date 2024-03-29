import './App.scss';
import Entete from './Composants/Entete';
import Presentation from './Composants/Presentation';
import Galerie from './Composants/Galerie';
import Inspirations from './Composants/Inspirations';
import { Scroll } from './Composants/Scroll';
import { Canvas } from '@react-three/fiber';
import { useEffect, useState } from 'react';

const getWindowDimensions = () => {
  const {innerWidth: width, innerHeight: height} = window;
  return{
    width,
    height
  };
}

function App() {

  /*------------------ Code pour déterminer les dimensions de la page en temps réel ---------------------*/

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  /*------------------ useEffect fera le code quand le statue de la valeur change (dans ce cas c'est les dimensions de la page) ------------*/
  useEffect(() => {
    const handleResize = () =>{
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener('resize', handleResize);
    console.log(windowDimensions);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowDimensions]);

  

  const canvasStyle = {
    width: "100vw",
    height: "50vh",
    marginTop: windowDimensions.width === 2560 ? "200px" : "0"
  };

  return (
    <>

      <Entete /> 

      <div className='section-ring' id='presentation'>
          <Canvas camera={{position: [0,3,0]}} style={canvasStyle} className='canvas'>
            <directionalLight intensity={15} />
            <ambientLight intensity={1} />
            <Scroll />
          </Canvas>
          

          <Presentation />
          
        </div>
        
        
        <Galerie />

      
      

        <Inspirations />
    </>
  );
}

export default App;
