import { useState } from "react";
import {Button} from 'antd'

function calculateWinner(squares: string[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

interface SquareProps {
  value: string
  squareClick: () => void
}
function Square({ value, squareClick }: SquareProps) {
  return (
    <div
      className="w-[100px] h-[100px] border border-black border-solid flex justify-center items-center cursor-pointer"
      onClick={squareClick}>
      <p>{value}</p>
    </div>
  )
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  const [xIsNext, setXIsNext] = useState(true)

  function handleClick(i: number) {
    if (squares[i] || calculateWinner(squares)) {
      return
    }

    const newSquares = squares.slice();

    if (xIsNext) {
      newSquares[i] = 'X';
    } else {
      newSquares[i] = 'O';
    }

    setSquares(newSquares);

    setXIsNext(!xIsNext)
  }

  // 重置数据
  function resetData() {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = '获胜者: ' + winner;
  } else {
    status = '下一个: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <>
      <div className="my-2 text-center">
        <p className="text-2xl">{status}</p>
        <Button onClick={resetData}>重置</Button>
      </div>
      <div className="grid grid-cols-3 w-[300px] text-4xl mx-auto font-bold">
      <Square value={squares[0]} squareClick={() => { handleClick(0) }}></Square>
      <Square value={squares[1]} squareClick={() => { handleClick(1) }}></Square>
      <Square value={squares[2]} squareClick={() => { handleClick(2) }}></Square>
      <Square value={squares[3]} squareClick={() => { handleClick(3) }}></Square>
      <Square value={squares[4]} squareClick={() => { handleClick(4) }}></Square>
      <Square value={squares[5]} squareClick={() => { handleClick(5) }}></Square>
      <Square value={squares[6]} squareClick={() => { handleClick(6) }}></Square>
      <Square value={squares[7]} squareClick={() => { handleClick(7) }}></Square>
      <Square value={squares[8]} squareClick={() => { handleClick(8) }}></Square>
    </div>
    </>
  
  )
}
