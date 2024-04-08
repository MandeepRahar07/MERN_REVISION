import React from 'react';
import { Button } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LoginBg from '../../assets/images/bg.png';
import OfflinePin from '../../assets/images/OfflinePin.png';
import Logo from '../../assets/images/logo_w.svg';
import User from '../../assets/images/user.png';
import Dropdown from 'react-bootstrap/Dropdown';
export const AdminSuccessfully = () => {
    return (
        <>
            <header className="header_top succes_hd">
                <Navbar expand="lg" className="navbar navbar-expand-lg">
                    <Container>
                        <Navbar.Brand href="#home"><img src={Logo} /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                {/* <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link> */}

                            </Nav>
                            <Dropdown className='user_login'>
                                <Dropdown.Toggle id="dropdown-basic" className='btn'>
                                    <img src={User} />
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">My Profile</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Logout</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>

            <div className="signup_page">
                <div className="bg_inner">
                    <img src={LoginBg} className="media_img" />
                    <div className="card_success">
                        <div className="bg_inner">
                            <img src={OfflinePin} />
                            <h3>Your Payment has been successfully processed.</h3>
                            <p>Thank you for choosing pllohide.</p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};
