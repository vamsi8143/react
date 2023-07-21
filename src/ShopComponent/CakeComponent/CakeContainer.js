import { connect } from "react-redux";
import { compose } from "redux";
import { buycake } from "./CakeAction";
const CakeContainer = (props) => {
  return (
    <div>
      <h2>Credit Cake Shop</h2>
      <h4>Cakes In Shop {[props.noOfCakes]}</h4>
      <button onClick={props.cake}>buy cake</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    noOfCakes: state.cake.noOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    cake: () => dispatch(buycake()),
  };
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(
  CakeContainer
);
