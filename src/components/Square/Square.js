import React from "react";
import './Square.css'

function Square({value, onSquareClick}) {
    return(
        <button className="tile" onClick={onSquareClick}>{value}</button>
    );
}
export default Square;