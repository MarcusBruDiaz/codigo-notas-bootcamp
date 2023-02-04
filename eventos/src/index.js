import React, { useState } from 'react'
import ReactDOM from 'react-dom'


/**El controlador de eventos es una función
Definimos los controladores de eventos para nuestros botones donde declaramos sus atributos onClick:

<button onClick={() => setCounter(counter + 1)}>
  plus
</button>
*/


const App = () => {
  const [ counter, setCounter ] = useState(0)

 /**const handleClick = () => {
    setCounter(counter+1) esto tambien se puede definir directamente en el atributo del boton
  } */ 

  return (
    <div>
      <div>{counter}</div>
      <button onClick={()=>setCounter(counter+1)}>
        plus
      </button>
      <button onClick={()=> setCounter(0)}>
        zero
      </button>
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))