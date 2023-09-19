import React from 'react';
import { Card,  Row, Col } from 'react-bootstrap';


function RowThree() {
  return (
    <div> 
    <div className="header">
        <h1 className="card-header">I build things </h1>
    </div>
    <div className="third-row">
       <Row className="row" id="row">
        <Col>
        <Card className="card1">
      <Card.Body>
        <img className="icon" src="images/html.png" alt="icon"></img>
        <Card.Title className="coding">HTML5</Card.Title>
</Card.Body>
</Card>
  </Col>
  <Col>
  <Card className="card2">
<Card.Body>
<img className="icon" src="images/css.png" alt="icon"></img>
<Card.Title className="coding"> CSS3 </Card.Title>
</Card.Body>
</Card>
  </Col>
  <Col>
  <Card className="card3">
<Card.Body>
<img className="icon" src="images/java.png" alt="icon"></img>
<Card.Title className="coding">JavaScript</Card.Title>
</Card.Body>
</Card>
        </Col>
      </Row>
    </div>
    </div>
  );
}

export default RowThree;


