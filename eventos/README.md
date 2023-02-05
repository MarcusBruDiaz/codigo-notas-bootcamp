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

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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
