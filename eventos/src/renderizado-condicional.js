import React, { useState } from 'react'
import ReactDOM from 'react-dom'



/**Renderizado condicional
Modifiquemos nuestra aplicación para que el renderizado del historial de clics sea manejada por un nuevo componente History:




El componente History representa elementos React completamente diferentes según el estado de la aplicación. Esto se llama renderizado condicional.

React también ofrece muchas otras formas de hacer renderizado condicional. Veremos esto más de cerca en la parte 2.

Hagamos una última modificación a nuestra aplicación refactorizándola para usar el componente Button que definimos anteriormente:
 */



const Button = ({handleClick,text})=> <button onClick={handleClick}> {text} </button>

const History = (props) => {
    if (props.allClicks.length === 0) {
      return (
        <div>
          the app is used by pressing the buttons
        </div>
      )
    }
  
    return (
      <div>
        button press history: {props.allClicks.join(' ')}
      </div>
    )
  }
  


const App = ()=>{

    const [left, setLeft] = useState(0)
    const [right,setRight]= useState(0)
    const [allClicks, setAll]= useState([])

    const handleLefClick =()=>{
        setAll(allClicks.concat('L'))
        setLeft(left+1)
    }

    const handleRightClick =()=>{
        setAll(allClicks.concat('R'))
        setRight(right+1)
    }

    const reset = ()=>{
        setAll([])
        setLeft(0)
        setRight(0)
    }

    return(
/*el metodo join une todos los caracteres del arrey en una sola linea separados por la cadena pasada por parametro en este caso es un espacio vacio*/
        <>


            {left}
            <Button handleClick={handleLefClick} text='left'></Button>
            <Button handleClick={handleRightClick} text='right'></Button>
            {right}
            <button onClick={reset}>REINICIAR</button>
            <History allClicks={allClicks}></History>
        </>
    )
}



ReactDOM.render(<App />, document.getElementById('root'))