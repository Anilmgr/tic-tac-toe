import Square from "./Square"

const Board = () => {
    const rows = Array(3).fill(0);
    
  return (
    <>
    {
        rows.map((_,idx1)=>{            
            return  <div className="board-row" key={idx1}>
                {rows.map((_,idx2)=>{
                   return <Square key={idx2} position={3*idx1+idx2}/>
                })}
            </div>
        })
    }
    </>
  )
}
export default Board