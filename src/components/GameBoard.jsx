import { useState } from "react";

const inicialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

/* O método  HandleSelectSquare, ainda não foi implementado nos tutoriais do curso.
Ele deve ser implementado nos passos seguintes. 
Este que está presente no arquivo, trata-se de um teste feito com ajuda de IA */

export default function GameBoard() {

    const [gameBoard, setGameBoard] = useState(inicialGameBoard);

    function handleSelectSquare (rowIndex, colIndex) {
        setGameBoard((prevGameBoard) => {
            const updateBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
            
          

            if (prevGameBoard[rowIndex][colIndex] === null) {

                let simbolo =  prevGameBoard.flat().filter(cell => cell !== null).length % 2 === 0 ? 'X' : '0';
                updateBoard[rowIndex][colIndex]  = simbolo;
                return updateBoard;
            } 

           return prevGameBoard;
        }

        );
    }


  return (
    <>
    <ol id="game-board">
        {gameBoard.map((row, rowIndex) => (
            <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) => (
                        <li key={colIndex}>
                            <button onClick={ () => handleSelectSquare(rowIndex, colIndex) } >
                                {playerSymbol}
                            </button>
                        </li>
                    )

                    )
                    }
                </ol>
            </li>
        )

        )
        }
    </ol>
    </>
);

}
