import { useState } from "react";
import Square from "./Square";

const Board = () => {
    const rows = Array(3).fill(0);
    const [xIsNext, setXIsNext] = useState(true);
    const [status, setStatus] = useState("Next move: X");
    const [squares, setSquares] = useState(Array(9).fill(null));
    const handleClick = (i) => {
        if (squares[i] || calculateWinner(squares)) return;
        const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares[i] = "X";
        } else {
            nextSquares[i] = "O";
        }
        setXIsNext(!xIsNext);
        setStatus("Next move: "+(!xIsNext?"X":"O"))
        setSquares(nextSquares);
        calculateWinner(nextSquares)
    };

    const reset = () => {
        setSquares(Array(9).fill(null));
        setStatus("Next move: X")
        setXIsNext(true)
    };

    const calculateWinner = (squares) => {
        const lines = [
            [0, 1, 2],
            [0, 3, 6],
            [0, 4, 8],
            [1, 4, 7],
            [2, 5, 8],
            [2, 4, 6],
            [3, 4, 5],
            [6, 7, 8],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (
                squares[a] &&
                squares[a] === squares[b] &&
                squares[a] === squares[c]
            ) {
                setStatus("Winner is: "+squares[a])
                return squares[a];
            }
        }
        return null;
    };

    return (
        <><div className="status">{status}</div>
            {rows.map((_, idx1) => {
                return (
                    <div className="board-row" key={idx1}>
                        {rows.map((_, idx2) => {
                            return (
                                <Square
                                    key={idx2}
                                    value={squares[3 * idx1 + idx2]}
                                    onSquareClick={() =>
                                        handleClick(3 * idx1 + idx2)
                                    }
                                />
                            );
                        })}
                    </div>
                );
            })}
            <button className="reset-btn" onClick={reset}>Start New Game</button>
        </>
    );
};
export default Board;
