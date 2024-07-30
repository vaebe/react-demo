import { useState } from 'react'

function calculateWinner(squares: string[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}

interface SquareProps {
  value: string
  squareClick: () => void
}
function Square({ value, squareClick }: SquareProps) {
  return (
    <div
      className="h-[100px] w-[100px] flex cursor-pointer items-center justify-center border border-black border-solid"
      onClick={squareClick}
    >
      <p>{value}</p>
    </div>
  )
}

interface BoardProps {
  xIsNext: boolean
  squares: string[]
  onPlay: (list: string[]) => void
}
function Board({ xIsNext, squares, onPlay }: BoardProps) {
  function handleClick(i: number) {
    if (squares[i] || calculateWinner(squares)) {
      return
    }

    const newSquares = squares.slice()

    if (xIsNext) {
      newSquares[i] = 'X'
    }
    else {
      newSquares[i] = 'O'
    }

    onPlay(newSquares)
  }

  const winner = calculateWinner(squares)
  let status
  if (winner) {
    status = `获胜者: ${winner}`
  }
  else {
    status = `下一个: ${xIsNext ? 'X' : 'O'}`
  }

  return (
    <>
      <div className="my-2 text-center text-2xl">
        {status}
      </div>

      <div className="grid grid-cols-3 mx-auto w-[300px] text-4xl font-bold">
        {squares.map((_, index) => (<Square key={index} value={squares[index]} squareClick={() => { handleClick(index) }}></Square>))}
      </div>
    </>
  )
}

export default function Game() {
  // 使用二维数组存储棋盘数据-默认初始化空的棋盘
  const [history, setHistory] = useState([Array(9).fill(null)])

  // 保存当前的棋盘位置
  const [curIndex, setCurIndex] = useState(0)

  // 判断下一个应该输入什么 x  or o
  const xIsNext = curIndex % 2 === 0

  // 当前的棋盘数组 - setCurIndex 默认等于 0 初始化空棋盘
  const currentSquares = history[curIndex]

  function handlePlay(nextSquares: string[]) {
    // 获取棋盘历史数据 - 在指定的位置插入棋盘数据
    const nextHistory = [...history.slice(0, curIndex + 1), nextSquares]

    // 更新棋盘历史数据
    setHistory(nextHistory)

    // 设置当前棋盘位置 - 下到了哪一步
    setCurIndex(nextHistory.length - 1)
  }

  const moves = history.map((_, index) => {
    let description
    if (index > 0) {
      description = `移动到${index}`
    }
    else {
      description = '开始状态'
    }
    return (
      <p className="mb-2 cursor-pointer" key={index} onClick={() => setCurIndex(index)}>{description}</p>
    )
  })

  return (
    <div className="flex justify-center">
      <div className="">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="ml-4 mt-10">
        {moves}
      </div>
    </div>
  )
}
