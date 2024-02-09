import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Cartoes from './Componentes/Cartoes/Cartoes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <header className='cabecario'>
      <h1>Katia&Gisele</h1>
    </header>
    <Cartoes />
  </React.StrictMode>
);