import { useState } from "react"


const Square = ({position}) => {
const [value,setValue] = useState(null)
const handleClick = (val)=>{
  setValue('X')
}

  return (
    <button className="square" onClick={()=>handleClick(position)}>{value}</button>
  )
}
export default Square