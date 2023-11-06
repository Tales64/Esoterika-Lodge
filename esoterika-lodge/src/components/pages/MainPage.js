import React from 'react';
import '../assets/style.css';
import logo from '../assets/images/EsoterikaSeal.jpg';

export default function MainPage () {
    return (
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className='Esoterika'>
            ESOTERIKA LODGE
          </h1>
          <p>
          <h3>
            S   E   A   T  T  L  E  '  S      P R E M I E R
          </h3>
          </p>
        </header>
      </div>
    )
}