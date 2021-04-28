import Router from "components/Router";
import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";



const App = () => {


  return (
    <Container>
      <Row>
        <Col>
          <Router></Router>
        </Col>
      </Row>
    </Container>
  )

}





















// import { Row, Col, Container } from "react-bootstrap";

// import Header from "components/Header";
// import Router from "components/Router";

// const App = () => {
//   return (
//     <>
//       <Header />
//       <Container>
//         <Row>
//           <Col>
//             <Router />
//           </Col>
//         </Row>
//       </Container>
//     </>
//   );
// };

export default App;
