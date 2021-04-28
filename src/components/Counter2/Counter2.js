import React from "react";

import { asyncIncrement } from 'store/actions/counter'
import { connect } from 'react-redux'

const Counter2 = ({ counter, asyncIncrement }) => {
  return (
    <>
      <span>{
        counter.loading ?
          "...Chargement" :
          counter.error ? counter.error : counter.value}</span>
      <button onClick={() => asyncIncrement()}>Async</button>
    </>
  )
}

export default connect(
  state => ({ counter: state.counter }),
  { asyncIncrement }
)(Counter2);
