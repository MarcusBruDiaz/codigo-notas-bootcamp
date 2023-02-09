import React, {useState} from "react";

import { createRoot } from "react-dom/client";

/**No definir componentes dentro de los componentes
Empecemos a mostrar el valor de la aplicación en su propio componente Display.

Cambiaremos la aplicación definiendo un nuevo componente dentro del componente App.


 */

/*
// Este es lugar correcto para definir un componente
const Button = (props) => (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
  
  const App = () => {
    const [value, setValue] = useState(10)
  
    const setToValue = newValue => {
      setValue(newValue)
    }
  
    // No defina componentes adentro de otro componente
    const Display = props => <div>{props.value}</div>
  
    return (
      <div>
        <Display value={value} />
        <Button handleClick={() => setToValue(1000)} text="thousand" />
        <Button handleClick={() => setToValue(0)} text="reset" />
        <Button handleClick={() => setToValue(value + 1)} text="increment" />
      </div>
    )
  }*/


  /**La aplicación todavía parece funcionar, pero ¡no implemente componentes como este! Nunca defina componentes dentro de otros componentes. El método no proporciona beneficios y da lugar a muchos problemas desagradables. Los mayores problemas se deben al hecho de que React trata un componente definido dentro de otro componente como un nuevo componente en cada render. Esto hace imposible que React optimice el componente.

En su lugar, movamos la función del componente Display a su lugar correcto, que está fuera de la función del componente App: */


const Display = props => <div>{props.value}</div>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  const [value, setValue] = useState(10)

  const setToValue = newValue => {
    setValue(newValue)
  }

  return (
    <div>
      <Display value={value} />
      <Button handleClick={() => setToValue(1000)} text="thousand" />
      <Button handleClick={() => setToValue(0)} text="reset" />
      <Button handleClick={() => setToValue(value + 1)} text="increment" />
    </div>
  )
}


const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App/>)