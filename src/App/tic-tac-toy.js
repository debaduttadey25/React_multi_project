import React from "react";
import './Style/tic-tac-toy.css';

function Tic() {
  return (
    <div className="bts">

<h1 className="der">Tic-Tac-Toe</h1>
        <div className="board" id="board">
  
            <div className="cell" data-cell onClick={console.log("click 1")}></div>
            <div className="cell" data-cell onClick={console.log("click 2")}></div>
            <div className="cell" data-cell onClick={console.log("click 3")}></div>
            <div className="cell" data-cell onClick={console.log("click 4")}></div>
            <div className="cell" data-cell onClick={console.log("click 5")}></div>
            <div className="cell" data-cell onClick={console.log("click 6")}></div>
            <div className="cell" data-cell onClick={console.log("click 7")}></div>
            <div className="cell" data-cell onClick={console.log("click 8")}></div>
            <div className="cell" data-cell onClick={console.log("click 9")}></div>
        </div>
        <button id="restartButton">Restart</button>
    </div>
  );
}

export default Tic;
