import { useState } from "react";

const initialState = {
  fname: "vamsi",
  lname: "nani",
};

const arrayState = ["Rani", "Tanya"];

const ObjectImutabilty = () => {
  const [person, setPerson] = useState(initialState);
  const [names, setNames] = useState(arrayState);
  const changeNameHandler = () => {
    const newPerson = { ...person };
    const newNames = [...names];
    newPerson.fname = "ramesh";
    newPerson.lname = "Banavathu";
    newNames.push("Lavanya");
    newNames.push("Raja");
    setNames(newNames);
    setPerson(newPerson);
  };
  console.log("comp render");
  return (
    <div>
      <h2>
        {person.fname} {person.lname}
      </h2>
      {names.map((a) => (
        <h2 key={a}>{a}</h2>
      ))}
      <button onClick={changeNameHandler}>click</button>
    </div>
  );
};
export default ObjectImutabilty;
