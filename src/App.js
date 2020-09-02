import React from 'react';
import otter from './images/Otter_Main.jpeg'
import { Container, Row, Col } from 'reactstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <Container className="Home-page">
        <Row className="align-items-center border-bottom border-white">
          <Col xs="auto">
          <img src={otter} alt="Otter" />
          </Col>
          <Col xs="auto">
            <h2 className="Welcome-message">Welcome to Otter Water</h2>
            <p className="Sub-message">A Website by Ronan Kistner</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
