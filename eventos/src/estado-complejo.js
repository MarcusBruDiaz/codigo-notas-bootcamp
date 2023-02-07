import React, { useState } from 'react'
import ReactDOM from 'react-dom'





/**
 * 
const App = () => {
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
  
    return (
      <div>
        {left}
        <button onClick={() => setLeft(left + 1)}>
          left
        </button>
        <button onClick={() => setRight(right + 1)}>
          right
        </button>
        {right}
      </div>
    )
}
 * 
 */



//El estado del componente o una parte de su estado puede ser de cualquier tipo. Podríamos implementar la misma funcionalidad guardando el recuento de clics de los botones left y right en un solo objeto:


const App =() =>{
    const [clicks, setClicks] = useState({
        left:0,
        right:0
    })


    const handleLefClick = ()=>{

        setClicks({
            ...clicks,
            left: clicks.left +1
        })
    }

    const handleRightClick=()=>{

        setClicks({
            ...clicks,
            right: clicks.right +1
        })
    }

    return(
        <>
            {clicks.left}
            <button onClick={handleLefClick}>left</button>
            <button onClick={handleRightClick}>right</button>
            {clicks.right}
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))