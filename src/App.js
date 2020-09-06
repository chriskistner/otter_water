import React from 'react';
import otter from './images/Otter_Main.jpeg'
import { Container, Row, Col } from 'reactstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <Container className="Home-page">
        <Row className="align-items-center border-bottom border-white pb-2">
          <Col xs="auto">
          <img className="Header-image" src={otter} alt="Otter" />
          </Col>
          <Col xs="auto">
            <h2 className="Welcome-message">Welcome to Otter Water</h2>
            <p className="Sub-message">A Website by Ronan Kistner</p>
          </Col>
        </Row>
        <Row className="justify-content-md-start">
          <Col xs="auto">
            <h2 className="text-white text-left pt-2">
              Introduction:
            </h2>
            <h4 className="text-white text-left">
              Hi Otter fans, I wanted to tell you about my little shop called, Otter Water. 
              These shops are either at my Gramsy & Grandpa's house or my house outside. I 
              wanted to say that we will be putting in other locations of Otter Water Stores,
              and that will make Otter Water better. By Otter fans!!
            </h4>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
