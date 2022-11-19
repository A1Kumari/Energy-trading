import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import {useMoralis} from "react-moralis";
import { Link } from 'react-router-dom';
import logo from '../../../Images/logo1.jpeg';

import './Header.css';


const Header = () => {

    const User = () => {
        const { authenticate, isAuthenticated, user } = useMoralis();
      
        if (!isAuthenticated) {
          return (
              () => authenticate(
                {
                    // onComplete: ()=>document.getElementById("LoginBtn").innerHTML=
                    onComplete: ()=>document.getElementById("LoginBtn").innerHTML="Logout"
                }
              )
          );
        }
        else{
            return(
                ()=>document.getElementById("LoginBtn").innerHTML="Login"
            )
        }
      };

      const LogoutButton = () => {
        const { logout, isAuthenticating } = useMoralis();
      
        return (
          <button onClick={() => logout()} disabled={isAuthenticating}>
            Authenticate
          </button>
        )
      };

    return (
        <div className="head-bg">
            <Navbar className="navbar" collapseOnSelect expand="lg">
                <Container className="container-head">
                    <Navbar.Brand href="/home"><img src={logo} alt="errr" className="heroimg" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" expand="lg"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto align-items-center">
                            <Link to="/home" className='list-item text-decoration-none'>Home</Link>
                            <Link to="/about" className='list-item text-decoration-none'>About</Link>
                            <Link to="/service" className='list-item text-decoration-none'>Service</Link>
                            <Link to="/contact" className='list-item text-decoration-none'>Contact</Link>
                            <button id="LoginBtn" class="btn btn-danger" onClick={User()}>Login</button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;