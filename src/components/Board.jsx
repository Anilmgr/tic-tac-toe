import { useState } from "react";
import Square from "./Square";
import SweetAlert2 from 'react-sweetalert2';

const Board = ({ confetti }) => {
    const rows = Array(3).fill(0);
    const [xIsNext, setXIsNext] = useState(true);
    const [gameFinish, setGameFinish] = useState(false);
    const [status, setStatus] = useState("Next move: X");
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [moves, setMoves] = useState(0);

    const handleClick = (i) => {
        if (squares[i] || gameFinish) return;

        const nextSquares = squares.slice();
        nextSquares[i] = xIsNext ? "X" : "O";

        setSquares(nextSquares);
        setXIsNext(!xIsNext);
        setMoves((prevMoves) => prevMoves + 1);

        const winner = calculateWinner(nextSquares);
        if (winner) {
            setStatus(`Winner is: ${winner}`);
            confetti(true);
            setGameFinish(true);
        } else if (moves + 1 === 9) {
            setStatus("It's a draw!");
            setGameFinish(true);
        } else {
            setStatus(`Next move: ${xIsNext ? "O" : "X"}`);
        }
    };

    const reset = () => {
        setSquares(Array(9).fill(null));
        setStatus("Next move: X");
        setXIsNext(true);
        confetti(false);
        setGameFinish(false);
        setMoves(0);
    };

    const calculateWinner = (squares) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (const [a, b, c] of lines) {
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    };

    return (
        <>
            <div className="status">{status}</div>
            {rows.map((_, rowIdx) => (
                <div className="board-row" key={rowIdx}>
                    {rows.map((_, colIdx) => (
                        <Square
                            key={colIdx}
                            value={squares[rowIdx * 3 + colIdx]}
                            onSquareClick={() => handleClick(rowIdx * 3 + colIdx)}
                        />
                    ))}
                </div>
            ))}
            <button className="reset-btn" onClick={reset}>Start New Game</button>
            <SweetAlert2
                show={gameFinish}
                title={status}
                icon={status.includes("Winner") ? 'success' : 'info'}
                onConfirm={reset}
                confirmButtonText="Start new game"
            />
        </>
    );
};

export default Board;
