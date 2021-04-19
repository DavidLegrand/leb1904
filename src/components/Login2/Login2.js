import { connect } from "react-redux";
import React from "react";

import { login } from 'store/actions/user'

const Login2 = ({ user, login }) => {
  return (<>
    {JSON.stringify(user)}
    <button onClick={() => login({ login: 'Bob', email: 'bob@yahoo.com' })}>LOGIN</button>
  </>);
};

export default connect(
  state => ({ user: state.user }),
  { login }
)(Login2);
