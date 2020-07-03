import React from 'react';
import logo from './logo.svg';
import './App.css';
import Quotes from './Quotes.js';
import Images from './Images.js';

function App() {
  return (
    <div class="box">
        <header>
        <h1>
            Black Self Care App
        </h1>
        
        <Quotes />
        <Images />
        </header>
    </div>
  );
}

export default App;
