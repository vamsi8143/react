import { Provider } from "react-redux";
import "./App.css";
// import BoardLogic from "./Components/BoardLogic";
// import Counter from "./HooksCompones/Counter";
// import ReducerCounter from "./HooksCompones/ReducerCounter";
// import ObjectImutabilty from "./HooksCompones/ObjectImutabilty";
// import UseStateHook from "./HooksCompones/UseStateHook";
// import UseStateArray from "./HooksCompones/UseStateArray";
import CakeContainer from "./ShopComponent/CakeComponent/CakeContainer";
import store from "./redux/store";
import IcecreamContainer from "./ShopComponent/IcecreamComponent/IcecreamContainer";
import UserContainer from "./UserComponent/UserContainer";

function App() {
  // const [xIsnext, setXIsnext] = useState(true);
  // const [history, setHistory] = useState([Array(9).fill(null)]);
  // const [currentMove, setCurrentMove] = useState(0);
  // const currentSquare = history[currentMove];

  // const onHandlePlay = (nextSquare) => {
  //   const nextHistory = [...history.slice(0, currentMove + 1), nextSquare];
  //   setHistory(nextHistory);
  //   setCurrentMove(nextHistory.length - 1);
  //   setXIsnext(!xIsnext);
  // };

  // const JumpMove = (nextMove) => {
  //   setXIsnext(nextMove % 2 === 0);
  //   setCurrentMove(nextMove);
  // };

  return (
    <Provider store={store}>
      {/* <BoardLogic xIsnext={xIsnext} squares={currentSquare} onPlay={onHandlePlay} /> */}
      {/* <Counter /> */}
      {/* <ReducerCounter /> */}
      {/* <ObjectImutabilty /> */}
      {/* <UseStateHook /> */}
      {/* <UseStateArray /> */}

      <IcecreamContainer />
      <CakeContainer />
      <UserContainer />
    </Provider>
  );
}

export default App;
