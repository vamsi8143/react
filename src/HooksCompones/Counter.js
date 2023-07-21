import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  console.log("comp render");
  return (
    <div
      style={{
        position: "absolute",
        top: "10%",
        left: "50%",
        margin: "0",
        width: "100px",
        height: "30px",
      }}
    >
      <button onClick={() => setCount(count + 1)}>count-{count}</button>
      <button onClick={() => setCount(0)}>count-0</button>
      <button onClick={() => setCount(5)}>count-5</button>
    </div>
  );
};
export default Counter;
