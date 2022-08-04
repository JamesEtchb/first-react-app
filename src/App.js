import { useState } from 'react'

import logo from './logo.svg'
import './App.css'

function App() {
  // let count = 0
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>My first React app!</h1>
        <p>You clicked the button {count} times</p>
        <button
          onClick={() => {
            console.log('I clicked the button' + count)
            // count++
            setCount(count + 1)
          }}
        >
          Add one
        </button>
      </header>
    </div>
  )
}

export default App
