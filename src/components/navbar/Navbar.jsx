import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./navbar.css"
import Button from 'react-bootstrap/Button';
import { BsWhatsapp } from "react-icons/bs"
import RomboIMG from "../../assets/images/Rombo.png"
import { Link } from "react-router-dom"

const Navbar1 = () => {
  return (
    <>
      <div className='col-12' id="navbardiv">

        <Navbar bg="dark" variant="dark" id='navbar' expand="lg">
          <div className="col-4" id="navbar-logo">
            <Navbar.Brand >
              <img src={RomboIMG} id='img-brand' alt='Rombo' />
            </Navbar.Brand >
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div className='col-6' id="navbar-link">

              <Nav className='me-auto' id='nav-link' >
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/About">About</Nav.Link>
                <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
              </Nav>
            </div>
            <div className="col-6 d-flex justify-content-end" id='navbar-wsp'>
              <Button variant='success' id='navbar-btn'>
                <BsWhatsapp />
              </Button>

            </div>
          </Navbar.Collapse>
        </Navbar>

      </div>

    </>
  )
}

export { Navbar1 }