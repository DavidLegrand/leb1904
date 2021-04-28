import React from "react";
import { Redirect, Route } from "react-router-dom";
import { connect } from 'react-redux'

const PrivateRoute = ({ logged, component: Component, ...params }) => {
  return (
    <Route {...params}
      render={props =>
        logged ?
          <Component {...props} /> :
          <Redirect to={{ pathname: "/register", state: { from: props.location } }} />
      }
    />
  );
};

export default connect(
  (state) => ({ logged: state.user.logged })
)(PrivateRoute);
