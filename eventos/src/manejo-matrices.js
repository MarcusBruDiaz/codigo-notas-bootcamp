import React, { useState } from 'react'
//import ReactDOM from 'react-dom'
import {createRoot} from 'react'





//Manejo de matrices


//Agreguemos un fragmento de estado a nuestra aplicación que contenga un array allClicks que recuerda cada clic que ha ocurrido en la aplicación.


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
            <button onClick={handleLefClick}>left</button>
            <button onClick={handleRightClick}>right</button>
            {right}
            <button onClick={reset}>REINICIAR</button>
            <p>{allClicks.join(' ')}</p>   
        </>
    )
}


const container= document.getElementById('root')
const root= createRoot(container)

root.render(<App tab="home"/>)
//ReactDOM.render(<App />, document.getElementById('root'))