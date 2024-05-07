import React from 'react';
import '../assets/css/style.css';
import logo from '../assets/images/EsoterikaSeal.jpg';

export default function MainPage () {
    return (
        <div className="Home">
          <nav>

          </nav>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className='Esoterika'>
            ESOTERIKA LODGE
          </h1>
          
          <h3>
            SEATTLE'S      PREMIER     ESOTERIC    LODGE
          </h3>
          
        </header>
      </div>
    )
}