import React, { useState } from 'react'
//import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client';


/**Función que devuelve una función
Otra forma de definir un controlador de eventos es utilizar una función que devuelve una función.

Probablemente no necesite utilizar funciones que devuelvan funciones en ninguno de los ejercicios de este curso. Si el tema parece particularmente confuso, puede omitir esta sección por ahora y volver a ella más tarde.

Hagamos los siguientes cambios en nuestro código:



*/


const App = () => {
    const [value, setValue] = useState(10)
  

    /**Dado que la función hello devuelve una función, el controlador de eventos ahora es una función.

¿Qué sentido tiene este concepto?

Cambiemos el código un poquito: */


    const hello = (who)=> () => {console.log('hello', who) }
       
    
    
/**El código funciona correctamente aunque parece complicado.

El controlador de eventos ahora está configurado para una llamada de función:
<button onClick={hello()}>button</button>

Anteriormente dijimos que un controlador de eventos puede no ser una llamada a una función, y que tiene que ser una función o una referencia a una función. Entonces, ¿por qué funciona una llamada a función en este caso?

Cuando se procesa el componente, se ejecuta la siguiente función:

const hello = () => {
  const handler = () => console.log('hello world')

  return handler
}

El valor de retorno de la función es otra función que se asigna a la variable handler.

Cuando React renderiza la línea:

<button onClick={hello()}>button</button>

signa el valor de retorno de hello() al atributo onClick. Básicamente, la línea se transforma en:

<button onClick={() => console.log('hello world')}>
  button
</button>


Ahora la aplicación tiene tres botones con controladores de eventos definidos por la función hello que acepta un parámetro.

El primer botón se define como


Ambos botones tienen sus propios controladores de eventos individualizados.

Las funciones que devuelven funciones se pueden utilizar para definir funciones genéricas que se pueden personalizar con parámetros. La función hello que crea los controladores de eventos se puede considerar como una fábrica que produce controladores de eventos personalizados destinados a saludar a los usuarios.

Nuestra definición actual es un poco detallada:

const hello = (who) => {
  const handler = () => {
    console.log('hello', who)
  }

  return handler
}


Podemos usar el mismo truco para definir controladores de eventos que establecen el estado del componente en un valor dado. Hagamos los siguientes cambios en nuestro código:

const App = () => {
  const [value, setValue] = useState(10)
  
  const setToValue = (newValue) => () => {
    setValue(newValue)
  }
  
  return (
    <div>
      {value}
      <button onClick={setToValue(1000)}>thousand</button>
      <button onClick={setToValue(0)}>reset</button>
      <button onClick={setToValue(value + 1)}>increment</button>
    </div>
  )
}


 */

    return (
      <div>
        {value}
        <button onClick={hello('world')}>button</button>
        <button onClick={hello('react')}>button</button>
        <button onClick={hello('function')}>button</button>
      </div>
    )
}
  

const container= document.getElementById('root')
const root= createRoot(container)
root.render(<App />)

//ReactDOM.render(<App />, document.getElementById('root'))