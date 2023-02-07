import React, { useState } from 'react'
import ReactDOM from 'react-dom'



const Display = ({counter})=> <div>{counter}</div>


const Button = ({handleClick,text})=> <button onClick={handleClick}> {text} </button>
    


const App = ()=>{

    const [counter , setCounter] = useState(0)

    const increaseByone = () => setCounter(counter + 1)
    const decreaseByone = ()=> setCounter(counter -1)
    const setToZero = () => setCounter(0)


    return(
        <>
            <Display  counter = {counter}/>

            <Button handleClick={increaseByone} text='plus'/>
            <Button handleClick={setToZero} text='zero'/>
            <Button handleClick={decreaseByone} text='minus'/>
         
        </>
    )

}

ReactDOM.render(<App />, document.getElementById('root'))