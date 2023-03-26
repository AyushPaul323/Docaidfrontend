import React from 'react';
import './Sidenav.css'
import NavDropdown from 'react-bootstrap/NavDropdown';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBDropdownLink,
  MDBCollapse,
  MDBRipple,
  MDBBadge,
  MDBInput,
  MDBListGroup, 
  MDBListGroupItem
} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
export default function Sidenav(props) {
  const logout = () => {
    window.open(`https://docaidbackend.onrender.com/auth/logout`, "_self");
};
const Navigate = useNavigate();

function handleClick (){
  Navigate ("/contact")
}

function handleClick1 (){
  Navigate ("/Hospital")
}
function handleClick2 (){
  Navigate ("/Doctorappo")
}

  return (
    <div>
<nav class="navbar navbar-expand-lg navbar-light bg-light navv">
  <div class="container-fluid">
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <div className='logoss'>
      <a class="logoss1" href="#">
      <img src='https://res.cloudinary.com/dxxjc0u2h/image/upload/v1678007680/Screenshot__649_-removebg-preview_qgvsmh.png' 
          width="90"
          height="70"
          loading="lazy"
        />
      </a></div>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link nnn" onClick={handleClick}>Contact Us</a>
        </li>
        <NavDropdown title="More" id="basic-nav-dropdown" className='nav-link1'>
              <NavDropdown.Item  className='f4' onClick={handleClick1}>Track Bed</NavDropdown.Item>
              <NavDropdown.Item className='f5' onClick={handleClick2}>
                Doctor's Appointment
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className='f6'>Transaction</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4" className='f7'>
                About Us
              </NavDropdown.Item>
            </NavDropdown>
      </ul>
    </div>
    <div class="d-flex align-items-center">
      <a class="text-reset me-3" href="#">
        <i class="fas fa-shopping-cart"></i>
      </a>
      <div class="pic">
        <a
          class="dropdown-toggle d-flex align-items-center hidden-arrow"
          href="#"
          id="navbarDropdownMenuAvatar"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
         
          <img
            src={props.Pic} 
            class="rounded-circle"
            height="40"
            alt="Black and White Portrait of a Man"
            loading="lazy"
          />
        </a>
      </div>
      <div className='reru'>
          <button onClick={logout} className="a11" >
                Log Out
            </button>
          </div>
    </div>
  </div>
</nav>
</div>
  );
}
