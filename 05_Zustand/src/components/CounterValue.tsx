// import { div } from "three/tsl"
import {useCounterStore} from "../store/counterStore"

function CounterValue() {
    const count = useCounterStore((state) => state.count)

    return (
        <div>CounterValue : {count}</div>
    )
}

export default CounterValue