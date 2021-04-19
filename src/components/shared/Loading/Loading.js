import React from "react";
import { Spinner } from 'react-bootstrap'
const Loading = () => {
  return <Spinner animation="border" role="status">
    <span className="sr-only">Chargement</span>
  </Spinner>;
};

export default Loading;
