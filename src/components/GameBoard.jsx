import { useState } from "react";

const inicialGameBoard = [
[null, null, null],
[null, null, null],
[null, null, null] 
];

export default function GameBoard() {

    const [gameBoard, setGameBoard] = useState(inicialGameBoard);

    function handleSelectSquare (rowIndex, cellIndex) {
        setGameBoard((prevGameBoard) => {
            const updateBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
            
            let simbolo =  prevGameBoard.flat().filter(cell => cell !== null).length % 2 === 0 ? 'X' : '0';

            updateBoard[rowIndex][cellIndex]  = simbolo;
            return updateBoard;
        }

        );
    }


  return (
    <ol id="game-board">
        {gameBoard.map((row, rowIndex) => (
            
            <li key={rowIndex}>
           
                <ol>
                    {row.map((cell, cellIndex) => (
                        <li key={cellIndex} className="cell">
                            <button className="cell-button" onClick={() =>handleSelectSquare(rowIndex, cellIndex)}>
                                {cell}
                            </button>
                        </li>
      
                    ))}
                </ol>
            </li>
        ))}

    </ol>
);
}