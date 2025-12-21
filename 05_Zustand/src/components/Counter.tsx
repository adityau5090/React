import {useCounterStore} from "../store/counterStore"

export function Counter(){

    const {count,increase,decrease,reset,mycount} = useCounterStore();
  return (
    <div>
      <p>{count}</p>
      <p>{mycount}</p>
      <div className="">
        <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={reset}>Reset</button>
      </div>
    </div>
  )
}


