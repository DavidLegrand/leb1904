import React from "react";

import { Row, Col, Container } from "react-bootstrap";

import Header from "components/Header";
import Router from "components/Router";
const App = () => {
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col>
            <Router />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
