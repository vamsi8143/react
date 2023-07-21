import { useState } from "react";

const UseStateArray = () => {
  const [items, setItems] = useState([]);

  const clickHandler = () => {
    setItems([
      ...items,
      { id: items.length, value: Math.floor(Math.random() * 10 + 1) },
    ]);
  };

  return (
    <div>
      <button onClick={clickHandler}>add number</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
};

export default UseStateArray;
