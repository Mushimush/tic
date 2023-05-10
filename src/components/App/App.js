import React from 'react';
import './App.css';
import Game from '../Game/Game';

function App () {
    return(
        <div className="container">
            <h1>Tic Tac Toe</h1>
            <Game/>
        </div>
    );
};

export default App;