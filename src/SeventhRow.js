import React from 'react'
import { FaLinkedin, FaGithubSquare, FaGlobe} from 'react-icons/fa';
import { Card, Col, Row } from 'react-bootstrap';

const RowSeven = () => {
  return (
    <footer className="footer">
    <div className="footer-row">
      <Row className="row" id="row-footer">
        <Col>
          <Card id="footer-card1">
            <Card.Body id="footer-card-body">
              <a href="https://www.linkedin.com/in/yunus-talay-324074191/"><FaLinkedin className="icon3" id="linked" /></a>
              <Card.Title className="footer-title" style={{textAlign:'left'}}> My name is Yunus. I'm a 29 year old frontend student based in Stavanger, Norway</Card.Title>
              <p className="linked">Connect with me on LinkedIn</p>
            </Card.Body>
          </Card>
        </Col>
        <Col>
        <Card id="footer-card2">
        <Card.Body id="footer-card-body">
              <a href="https://github.com/yuntal"><FaGithubSquare className="icon3" /></a>
              <Card.Title className="footer-title1">Check out my projects</Card.Title>
              <p className="github" style={{textAlign:'center'}}>Connect with me on Github</p>
            </Card.Body>
          </Card>
        </Col>
        <Col>
        <Card id="footer-card3">
        <Card.Body id="footer-card-body">
              <FaGlobe className="icon3" id="globe"/>
              <Card.Title className="location">Location: Stavanger, Norway</Card.Title>
              <Card.Title style={{textAlign:'center'}}><a href="mailto:talay_03@hotmail.com" className="footer-link"><p id="p"> Email: Talay_03@hotmail.com</p></a> </Card.Title>
          </Card.Body>
          </Card>
          <p className="copyright">© Design By Talay 2023</p>
        </Col>
      </Row>
    </div>
  </footer>
  )
}


export default RowSeven;