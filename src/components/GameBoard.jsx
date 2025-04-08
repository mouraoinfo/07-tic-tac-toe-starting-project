

const inicialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];



export default function GameBoard( { onSelectSquare } ) {

    // const [gameBoard, setGameBoard] = useState(inicialGameBoard);

    // function handleSelectSquare (rowIndex, colIndex) {
    //     setGameBoard(
    //         (prevGameBoard) => {
    //             const updatedBoard = [...prevGameBoard.map( innerArray => [...innerArray] )];
    //             updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
    //             return updatedBoard;
    //         }
    //     );
    //         onSelectSquare();
    // }

  // <p>No passo 84, o autor do tutorial tirou a lógica do componente GAMEBOARD.</p>


  return (
    <>
    <ol id="game-board">
        {gameBoard.map((row, rowIndex) => (
            <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) => (
                        <li key={colIndex}>
                            <button onClick={ onSelectSquare } >
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
