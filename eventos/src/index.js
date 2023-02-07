import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import {createRoot} from 'react'


const App = () => {
    const [value, setValue] = useState(10)
  
    const reset = ()=>{
        setValue(0)
    }
    return (
      <div>
        {value}
        <button onClick={reset}>reset to zero</button>
      </div>
    )
}
  

/*const container= document.getElementById('root')
const root= createRoot(container)
root.render(<App tab="home"/>)*/

ReactDOM.render(<App />, document.getElementById('root'))