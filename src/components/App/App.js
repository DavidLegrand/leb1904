import Counter2 from "components/Counter2";
import Login2 from "components/Login2";
import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";



const App = () => {


  return (
    <Container>
      <Row>
        <Col>
          <Counter2></Counter2>
          <Login2></Login2>
        </Col>
      </Row>
    </Container>)

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
