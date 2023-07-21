import { useReducer } from "react";

const initailVlaue = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initailVlaue;
    default:
      return state;
  }
};
const ReducerCounter = () => {
  // const [count, setCount] = useState(initailVlaue);
  const [count, dispatch] = useReducer(reducer, initailVlaue);
  console.log("reducer comp render");
  return (
    <div style={{ textAlign: "center" }}>
      <h2>count-{count}</h2>
      <button onClick={() => dispatch("increment")}>increment</button>
      <button onClick={() => dispatch("decrement")}>decrement</button>
      {/* <button onClick={() => dispatch("increment")}>increment 5</button>
      <button onClick={() => dispatch("decrement")}>decrement 5</button> */}
      <button onClick={() => dispatch("reset")}>reset</button>
    </div>
  );
};
export default ReducerCounter;
