import { BUY_ICECREAM } from "./IcecreamTypes";

const icecreamInitialState = {
  noOfIcecreams: 25,
};

const IcecreamReducer = (state = icecreamInitialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        noOfIcecreams: state.noOfIcecreams - 1,
      };
    default:
      return state;
  }
};

export default IcecreamReducer;
