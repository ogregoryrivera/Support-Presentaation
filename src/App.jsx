import './App.scss';
import { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, Stage, PresentationControls } from '@react-three/drei';
import Entete from './Composants/Entete';
import Presentation from './Composants/Presentation';
import Galerie from './Composants/Galerie';
import Inspirations from './Composants/Inspirations';
import { Scroll } from './Composants/Scroll';
import PanToolAltIcon from '@mui/icons-material/PanToolAlt';
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <>

      <Entete /> 

      <div className='section-ring' id='presentation'>
      <PanToolAltIcon className='doigt'/>
          <Canvas camera={{position: [0,3,0]}}  style={{width:"50vw", height:"50vh"}} className='canvas'>
            <directionalLight intensity={15} />
            <ambientLight intensity={1} />
            <Scroll />
          </Canvas>
          

          <Presentation />
          
        </div>
        
        
        <Galerie />
        
      

      {/*<Canvas dpr={[1,2]} shadows camera={{ fov:45 }} style={{width:"50vw", height:"500px"}}>
        <color attach="background" args={["#6f1d1b"]} />
        <PresentationControls speed={1.5} global zoom={.5} polar={[-0.1, Math.PI / 4]}>
          <Stage environment={"sunset"}>
            <Model scale={0.01} />
          </Stage>
        </PresentationControls>
  </Canvas>*/}

      
      

      <Inspirations />
    </>
  );
}

export default App;
