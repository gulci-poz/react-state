import React from 'react';
import './App.css';
import Game from './Game';
import Rando from "./Rando";
import Button from "./Button";
import BrokenClick from "./BrokenClick";
import BrokenClickAlt from "./BrokenClickAlt";
import Clicker from "./Clicker";

function App() {
    return (
        <div className="App">
            <h1>react-state</h1>
            <Game/>
            <Rando maxNum={7}/>
            <Button/>
            <BrokenClick/>
            <BrokenClickAlt/>
            <Clicker/>
        </div>
    );
}

export default App;
