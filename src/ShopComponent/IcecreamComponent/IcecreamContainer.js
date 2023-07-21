import { connect } from "react-redux";
import { buyIcecream } from "./IcecreamAction";
import { compose } from "redux";

const IcecreamContainer = (props) => {
  return (
    <div>
      <h2>Credit IceCream Shop</h2>
      <h3>Icecreams available in shop {props.noOfIcecreams}</h3>
      <button onClick={props.icecream}>Buy Icecream</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    noOfIcecreams: state.icecream.noOfIcecreams,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    icecream: () => dispatch(buyIcecream()),
  };
};
export default compose(connect(mapStateToProps, mapDispatchToProps))(
  IcecreamContainer
);
