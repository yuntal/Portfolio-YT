import React from 'react';
import { Col } from 'react-bootstrap';


function RowFour() {
  return (
    <div className="fourth-row"> 
    <div className="img-container">
    <img src="images/learn.webp" className="learn" alt="illustration"></img>
    </div>
        <Col md={12} id="col-id">
        <p className="learn1"> There's always something to learn</p>
        <p className="learn2"> These are my first months as a graduate, and i don't have any previous work experience in this field. Therefore my goal is to commit to a job, get a deeper understanding and gain more knowledge in this field.
</p>
        </Col>
</div>
       );
}

export default RowFour;
