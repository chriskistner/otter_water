import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default function WelcomeMessage() {
    return(
        <Container className="Home-page">
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
    )
};