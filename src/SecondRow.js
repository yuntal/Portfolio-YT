import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaGithubSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',     
      inline: 'nearest'  
    });
  }
}

function RowTwo() {
  return (
    <Container fluid className="second-row" id="row-two">
      <Row className="row-">
        <Col id="text-col">
          <h1 style={{ color: '#ACACE6' }}> Hi! My name is</h1>
          <h2 style={{ color: 'white' }}>Yunus</h2>
          <h3 style={{ color: '#ACACE6' }}> I'm a frontend developer based in Stavanger, Norway.</h3>
          <p className="lorem-ipsem">  I recently completed my frontend development degree at Noroff - School of Technology and Digital Media. As I step into my first year as a graduate, I'm enthusiastic about gaining more knowledge and hands-on experience in the field. My aim is to contribute effectively while continually expanding my skill set.</p>
          <Button className="button1" id="button1" onClick={() => scrollToSection('row-three')}>Read more</Button>
        </Col>
        <Col>
          <div className="image-container">
            <img className="me" src="images/me.png" alt="image of me" />
          </div>
          <div className="icon-container">
            <a href="https://github.com/yuntal" target="_blank" rel="noopener noreferrer">
              <FaGithubSquare className="square"/>
            </a>
            <a href="https://www.linkedin.com/in/yunus-talay-324074191/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin  className="in"/>
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default RowTwo;
