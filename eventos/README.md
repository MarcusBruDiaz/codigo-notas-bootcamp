# El controlador de eventos es una función

Definimos los controladores de eventos para nuestros botones donde declaramos sus atributos onClick:


<button onClick={() => setCounter(counter + 1)}>
  plus
</button>

¿Qué pasaría si intentáramos definir los controladores de eventos de una forma más simple?

<button onClick={setCounter(counter + 1)}> 
  plus
</button>

Mira que se pasa la funcion setCounter directamente sin pasarla dentro de una funcion flecha; Esto rompería completamente nuestra aplicación.

¿Qué está pasando? Se supone que un controlador de eventos es una función o una referencia de función, y cuando escribimos:

<button onClick={setCounter(counter + 1)}>


el controlador de eventos es en realidad una llamada a función. En muchas situaciones esto está bien, pero no en esta situación particular. Al principio, el valor de la variable counter es 0. Cuando React renderiza el componente por primera vez, ejecuta la llamada de función setCounter(0 + 1) y cambia el valor del estado del componente en 1. Esto hará que el componente se vuelva a renderizar, react ejecutará la llamada a la función setCounter nuevamente, y el estado cambiará dando lugar a otra repetición...

Definamos los controladores de eventos como lo hicimos antes

<button onClick={() => setCounter(counter + 1)}> 
  plus
</button>

Ahora el atributo del botón que define lo que sucede cuando se hace clic en el botón - onClick - tiene el valor () => setCounter (counter + 1). La función setCounter se llama solo cuando un usuario hace clic en el botón.

Por lo general, definir controladores de eventos dentro de las plantillas JSX no es una buena idea. Aquí está bien, porque nuestros controladores de eventos son muy simples.

Vamos a separar a los controladores de eventos en funciones separadas de todas formas:

const App = () => {
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  
  const setToZero = () => setCounter(0)

  return (
    <div>
      <div>{counter}</div>
      <button onClick={increaseByOne}>
        plus
      </button>
      <button onClick={setToZero}>
        zero
      </button>
    </div>
  )
}


Aquí los controladores de eventos se han definido correctamente. El valor del atributo onClick es una variable que contiene una referencia a una función:

<button onClick={increaseByOne}> 
  plus
</button>

## Pasando el estado a componentes hijos





### Estado complejo


En nuestro ejemplo anterior el estado de la aplicación era simple ya que estaba compuesto por un solo entero. ¿Y si nuestra aplicación requiere un estado más complejo?

En la mayoría de los casos, la manera más fácil y mejor de lograr esto es usando la función useState varias veces para crear "partes" de estado separadas.

En el siguiente código creamos dos partes de estado para la aplicación llamada left y right que obtienen el valor inicial de 0:

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
            left: clicks.left +1})
    }

    const handleRightClick=()=>{

        setClicks({
            ...clicks,
            right: clicks.right +1})
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
















### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
