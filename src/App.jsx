import './App.scss';
import Entete from './Composants/Entete';
import Presentation from './Composants/Presentation';
import Galerie from './Composants/Galerie';
import Inspirations from './Composants/Inspirations';
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Entete /> 
      <Presentation />
      <Galerie />
      <Inspirations />
    </>
  );
}

export default App;
