import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import cakeReducer from "../ShopComponent/CakeComponent/CakeReducer";
import userReducer from "../UserComponent/UserReducer";
// import { composeWithDevTools } from "redux-devtools-extension";
import IcecreamReducer from "../ShopComponent/IcecreamComponent/IcecreamReducer";
// import logger from "redux-logger";
const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: IcecreamReducer,
  user: userReducer,
});
// const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
