function Square({ value }: { value: string }) {
  return <div className="w-[100px] h-[100px] border border-black border-solid">{value}</div>
}

export default function Board() {
  return (
    <div className="grid grid-cols-3 w-[300px] text-2xl mx-auto font-bold">
      <Square value="1"></Square>
      <Square value="2"></Square>
      <Square value="3"></Square>
      <Square value="4"></Square>
      <Square value="5"></Square>
      <Square value="6"></Square>
      <Square value="7"></Square>
      <Square value="8"></Square>
      <Square value="9"></Square>
    </div>
  )
}
