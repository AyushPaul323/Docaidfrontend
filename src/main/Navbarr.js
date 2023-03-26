import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './Navbarr.css'
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
} from 'mdb-react-ui-kit';


function Navbarr() {
  return (
    <div>
    <Navbar expand="lg" className='navv' >
      <Container >
        <div className='logo'><img src='https://res.cloudinary.com/dxxjc0u2h/image/upload/v1678007680/Screenshot__649_-removebg-preview_qgvsmh.png' width="100" height="100" alt='' /></div>
        <div className='name'> <Navbar.Brand href="#home"></Navbar.Brand></div>
        <div className='name'> <Navbar.Brand href="#home"></Navbar.Brand></div>
        <div className='name'> <Navbar.Brand href="#home"></Navbar.Brand></div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="fontss">
            <Nav.Link href="#home" className='f1'>Home</Nav.Link>
            <Nav.Link href="#link"className='f2'>Contact Us</Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown" className='f3'>
              <NavDropdown.Item href="#action/3.1" className='f4'>Track Bed</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className='f5'>
                Doctor's Appointment
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className='f6'>Transaction</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4" className='f7'>
                About Us
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <div className='signbutton'>
        <div className='b1'>
        <a href='/signup'><button className='a11' variant="primary">Sign Up</button></a>
  </div>
        <div className='b2'>
        <a href='/login'><button  className='a11' variant="success">Login</button></a>
        </div>
        </div>
      </Container> 
    </Navbar>
    </div>
  );
}

export default Navbarr;