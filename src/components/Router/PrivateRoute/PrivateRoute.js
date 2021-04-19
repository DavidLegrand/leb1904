import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...params }) => {
  return (
    <Route {...params}
      render={props =>
        false ?
          <Component {...props} /> :
          <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
      }
    />);
};

export default PrivateRoute;
