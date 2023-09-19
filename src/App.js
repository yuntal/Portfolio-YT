import './App.scss';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Image } from 'react-bootstrap';
import RowTwo from './SecondRow';
import RowThree from './ThirdRow';
import RowFour from './FourthRow';
import RowFive from './FifthRow';
import RowSix from './SixthRow';
import RowSeven from './SeventhRow';

function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

function App() {
  return (
    <>
      <div className="first-row">
        <Navbar expand="lg" id="navbar">
          <Container className="con">
            <Navbar.Brand>
              <Image className='logo' src="images/newlogo.png"></Image>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link className="new-link" onClick={() => scrollToSection('row-two')}>Home</Nav.Link>
                <Nav.Link className="new-link" onClick={() => scrollToSection('row-five')}>Work</Nav.Link>
                <Nav.Link className="new-link" onClick={() => scrollToSection('row-six')}>About</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      <div id="row-two">
        <RowTwo />
      </div>
      <div id="row-three">
        <RowThree />
      </div>
      <div id="row-four">
        <RowFour />
      </div>
      <div id="row-five">
        <RowFive />
      </div>
      <div id="row-six">
        <RowSix />
      </div>
      <div id="row-seven">
        <RowSeven />
      </div>
    </>
  );
}

export default App;
