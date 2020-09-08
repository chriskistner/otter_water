import React from 'react';
import {Row, Col} from 'reactstrap';

export default function SiteFooter() {

    return(
        <Row className="Footer_cell border-top border-white ">
            <Col>
                <Row className="pt-2 pb-2 mx-2">
                    <Col xs='2'>
                        <b>Site Ver:</b> 1.0
                    </Col>
                    <Col xs='4'>
                        <b>Site Repository:</b> <a href="https://github.com/chriskistner/airways-front-end"> Front-End</a> | 
                        <a href="https://github.com/chriskistner/airwaves-back-end"> Back-End</a>
                    </Col>
                    <Col xs='4'>
                        <b>Contact Us:</b> <a href="https://www.linkedin.com/in/christopher-kistner-10218a5/"> Christopher Kistner</a>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
};
