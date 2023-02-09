import React, { useState } from 'react'
import { createRoot } from 'react-dom/client';




/**Pasando controladores de eventos a componentes secundarios
Extraigamos el botón en su propio componente:

 */


const Button = (props)=>{
    return(
        <>
            <button onClick={props.handleClick}> {props.text}</button>
        </>
        
    )
}


const App = ()=>{

    const [value,setValue]= useState(0)

    const setToValue = (newValue)=> ()=>{ /** esto funciona por que una funcion devuelve otra funcion y en el atributo del botton no es ncesesario ejecutar con una funcion de flecha */
        setValue(newValue)
        console.log(newValue)
    }


    return(
        <>
            <Button handleClick={setToValue(1000)} text="thousand"/>
            <Button handleClick={setToValue(0)} text="reset"/>
            <Button handleClick={setToValue(value+1)} text="increment"/>

        </>
    )
}


const container= document.getElementById('root')
const root= createRoot(container)
root.render(<App />)
