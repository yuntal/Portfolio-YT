import React from 'react';
import { Col} from 'react-bootstrap';



function RowSix() {
  return (
    <div className="sixth-row"> 
    <div className="img-container">
    <img src="images/code.png" className="code" alt="illustration"></img>
    </div>
        <Col md={12}>
        <p className="learn1" id="learn-1">About me</p>
        <p className="learn2" id="learn-2"> I'm a newly graduated frontend developer. My curiosity for details and love for computers, is what brought me where I am today.
        During my time at Noroff i've been lucky enough to learn HTML, CSS, JS, SASS and REACT. This knowledge has further been used on a lot of the frontend and backend tasks we've been given over the years: such as creating our own API, working with already existing API's and working with tokens and different functionalities.
        Now I'm eager to show some of the things that i've learned, and hopefully be a good asset to a company that's hiring. 
        </p>
        <p className='cv'><a href="cv/cv-norsk-latest.pdf">Curriculum Vitae</a></p>
        </Col>
</div>
       );
}

export default RowSix;
