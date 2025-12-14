import { useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0)
  const [input, setInput] = useState(0)

  // console.log(input)
  
  return (
    <>
      <h1>Counter is {count}</h1>
      <div>Count is {count}</div>
      <div>
        <button onClick={() => setCount((prevValue) => prevValue + 1)} style={{margin: "0 5px"}}>
          Increase
        </button>
        <button onClick={() => setCount(count - 1)} style={{margin: "0 5px"}}>
          Decrease
        </button>
        <button onClick={() =>   setCount(0)} style={{margin: "0 5px"}}>
          Reset
        </button>
      </div>
      <div style={{margin: "10px 0"}}>
        <input type="text"
          style={{
            width: "100px",
            border: "1px solid white",
            margin: "0 5px",
            padding: "0.6em 0.4em",
            borderRadius: "5px"
          }}
          value={input}
          onChange={(e) => setInput(Number(e.target.value ))}
        />
        <button onClick={() => setCount(input)} style={{margin: "0 5px"}}
          >Set to 8</button>
      </div>
    </>
  )
}

export default App
