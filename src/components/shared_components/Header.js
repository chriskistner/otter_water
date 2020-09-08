import React from 'react';
import otter from '../../images/Otter_Main.jpeg'
import { Container, Row, Col, Button, ButtonGroup } from 'reactstrap';

export default function SiteHeader() {

    return(
        <Container className="Menu-bar">
        <Row className="align-items-center ">
          <Col xs="auto">
          <img className="Header-image" src={otter} alt="Otter" />
          </Col>
          <Col xs="auto">
            <h2 className="Welcome-message">Welcome to Otter Water</h2>
            <p className="Sub-message">A Website by Ronan Kistner</p>
          </Col>
        </Row>
        <Row className="border-bottom border-white p-3">
          <ButtonGroup size="lg">
            <Button className="Menu-button">Home</Button>
            <Button className="Menu-button">Our Locations</Button>
            <Button className="Menu-button">Our Products</Button>
          </ButtonGroup>
        </Row>
      </Container>
    )
};