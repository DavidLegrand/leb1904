import React from "react";

import { increment } from 'store/actions/counter'
import { connect } from 'react-redux'

const Counter2 = ({ counter, increment }) => {
  const handleIncrement = () => increment()
  return (
    <><span>{counter}</span>  <button onClick={handleIncrement}>+1</button></>
  )
}

export default connect(
  state => ({ counter: state.counter }),
  { increment }
)(Counter2);
