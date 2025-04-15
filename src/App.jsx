import { useState } from "react"
import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import Log from "./components/Log"
import { WINNING_COMBINATIONS } from "./winning-combinations"

const inicialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];


function deriveActivePlayer(gameTurns) {  

 

  
  let currentPlayer = 'X';

  if (gameTurns.length > 0 &&  gameTurns[0].player === 'X') {
    currentPlayer="O";
  }

  return currentPlayer;

}


function App() {

  // 
  const [gameTurns, setGameTurns] = useState([]);
  // const [activePlayer, SetActivePlayer] = useState('X');

  const activePlayer = deriveActivePlayer(gameTurns);

  let gameBoard = inicialGameBoard;

  for ( const turn of gameTurns) {
      const { square, player } = turn;
      const { row, col } = square;

      gameBoard[row][col] = player;
  }

  for (const combination of  WINNING_COMBINATIONS) {
    // const firstSquareCombination = gameBoard[0];
    // const secondSquareCombination = gameBoard[1];
    // const thirdSquareCombination = gameBoard[2];
  }
  

  function handleSelectSquare (rowIndex, colIndex) {
  // SetActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
    setGameTurns( prevTurns => {

    const currentPlayer = deriveActivePlayer(prevTurns);

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
            <GameBoard  
              onSelectSquare={handleSelectSquare}   
              board={gameBoard}
            />
          </div>

           
        </div>
     
        <Log turns={gameTurns}/>
  

      </main>
  )
}

export default App
