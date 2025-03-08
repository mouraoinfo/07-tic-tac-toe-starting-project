import { useState } from "react";


const inicialGameBoard = [
[1, 2, 3],
[4, 5, 6],
[7, 8, 9] 
];


const meuArray = [11, 22, 33];
const segundoArray = [44, 55, 66];
const terceiroArray = [77, 88, 99];

const composto = [meuArray, segundoArray, terceiroArray];


export default function GameBoard() {

    const [gameBoard, setGameBoard] = useState(inicialGameBoard);

  


  return (
  

    <ol>
        {composto.map( 
                    (row, rowIndex) => 
                        <li key={rowIndex}>
                            <ol>
                                {row.map((item) => <li> <button>{item}</button> </li>) }
                            </ol>
                        </li> 
          )
        }
    </ol>
);
}
