import React from "react";
import { Card, Col, Row} from "react-bootstrap";


function RowFive() {
  return (
    <div className="fifth-row" id="rowFive">
    <h1 className="work">Here is some of my work</h1>
     <Row className="row" id="row-2">
        <Col>
        <Card id="card1">
        <Card.Img variant="top"  src="images/supreme.png" alt="supreme-e-commerce" className="top"></Card.Img>
      <Card.Body id="card1-body">
        <Card.Title id="work-title">E-commerce store</Card.Title>
        <p className="p"> On this website, the user finds themselves in a "supreme" store, where they can interact with the products and add them to the bag.</p>
        <a href="https://github.com/yuntal/supreme-store" className="responsive-button" variant="primary">Visit</a>
      </Card.Body>
    </Card>
        </Col>
        <Col>
        <Card id="card2">
        <Card.Img variant="top"  className="top" src="images/landing.png" alt="landing-page"></Card.Img>
        <Card.Body id="card2-body">
        <Card.Title id="work-title"> Landing page </Card.Title>
        <p className="p">In this project, my purpose is to showcase my design skills. All buttons and data are disfunctional.</p>
        <a href="https://github.com/yuntal/landing-page" className="responsive-button" variant="primary">Visit</a>
      </Card.Body>
    </Card>
        </Col>
        <Col>
        <Card id="card3">
        <Card.Img variant="top" className="top"  src="images/flower.png" alt="headlesss-cms"></Card.Img>
        <Card.Body id="card3-body">
        <Card.Title id="work-title">Flower Power</Card.Title>
        <p className="p">Headless CMS: In this project, my task was to create and deploy a wordpress website from my localhost. </p>
        <a href="http://designbytalay.com/" className="responsive-button" variant="primary">Visit</a>
      </Card.Body>
    </Card>
        </Col>
      </Row>
      </div>
       );
}

export default RowFive;
