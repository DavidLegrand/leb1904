import React from "react";

import { Row, Col, Container } from "react-bootstrap";
import { Route, Switch } from 'react-router-dom'

import Login from "components/pages/Login";
import Regsiter from "components/pages/Regsiter";
import Dashboard from "components/pages/Dashboard";
const App = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Regsiter} />
            <Route path="/" exact component={Dashboard} />
          </Switch>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
