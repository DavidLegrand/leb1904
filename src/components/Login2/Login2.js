import { connect } from "react-redux";
import React from "react";

import { loginUser } from 'store/actions/user'

const Login2 = ({ user, loginUser }) => {
  return (<>
    {user.loading && <p>Chargement</p>}
    {user.error && <p>{user.error}</p>}
    {user.value && (
      <>
        <p>{user.value.name}</p>
        <p>{user.value.username}</p>
        <p>{user.value.email}</p>
      </>
    )}
    <button onClick={() => loginUser(1)}>LOGIN</button>
  </>);
};

export default connect(
  state => ({ user: state.user }),
  { loginUser }
)(Login2);
