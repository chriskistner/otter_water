import React from 'react';
import SiteHeader from "./components/shared_components/Header";
import WelcomeMessage from "./components/Welcome";
import SiteFooter from "./components/shared_components/Footer";
import { Container, Row, Col } from 'reactstrap';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
          <SiteHeader />
            <BrowserRouter>
              <Switch>
                <Route path='/' component={WelcomeMessage}/>
              </Switch>
            </BrowserRouter>
            <SiteFooter/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
