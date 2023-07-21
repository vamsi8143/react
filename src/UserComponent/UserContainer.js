import axios from "axios";
import { useEffect } from "react";
import { connect } from "react-redux";
import { userFetchAction } from "./UserAction";

const UserContainer = ({ fetchUser, user }) => {
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>USER LIST</h2>
      {user.loading
        ? "loading"
        : user.error
        ? user.error
        : user &&
          user.userData &&
          user.userData.map((user) => <h4 key={user.id}>{user.name}</h4>)}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: () => dispatch(userFetchAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
