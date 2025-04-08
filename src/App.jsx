import { useState } from "react"

import Player from "./components/Player"
import GameBoard from "./components/GameBoard"

import Log from "./components/Log"



function App() {

  // o step 84 não teve avanços significativos, apenas explicação de conceitos
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, SetActivePlayer] = useState('X');

  function handleSelectSquare (rowIndex, colIndex) {
    SetActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
    setGameTurns( prevTurns => {

      let currentPlayer = 'X';

      if (prevTurns.length > 0 &&  prevTurns[0].player === 'X') {
        currentPlayer="O";
      }

      const updatedTurns = [ {square: {row: rowIndex, col: colIndex}, player: activePlayer} , ...prevTurns];

      return updatedTurns;
    });
  }


  return (
      <main>
        <div id="game-container">
          <ol id="players"  className="highlight-player">
            <Player inicialName="Player 1" symbol="X" isActive={activePlayer === 'X'} />
            <Player inicialName="Player 2" symbol="O" isActive={activePlayer === 'O'} />
          </ol>
          <div id="game-board">
            <GameBoard  onSelectSquare={handleSelectSquare}   activePlayerSymbol={activePlayer}/>
          </div>

           
        </div>
     
        <Log />
  

      </main>
  )
}

export default App
