import { Row, Col } from 'react-bootstrap'
import Sidebar from "components/Sidebar";
import React from "react";
import DisplayMessages from 'components/DisplayMessages';
import NewMessageForm from 'components/NewMessageForm';

const Dashboard = () => {
  return (
    <Row className='h-100'>
      <Col className='col-3 h-100 d-flex flex-column'>
        <Sidebar />
      </Col>
      <Col className='col-9 h-100 d-flex flex-column'>
        <div className='d-flex flex-column flex-grow-1 justify-content-end overflow-auto'>
          <DisplayMessages />
          <NewMessageForm />
        </div>
      </Col>
    </Row>
  )
};

export default Dashboard;
