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
export const SupplierFlowSuccessfully = () => {
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
                               <span>
                                   <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33"
                                        fill="none">
                                        <path
                                            d="M21.3327 13.8333C21.3327 15.2478 20.7708 16.6044 19.7706 17.6046C18.7704 18.6048 17.4138 19.1667 15.9994 19.1667C14.5849 19.1667 13.2283 18.6048 12.2281 17.6046C11.2279 16.6044 10.666 15.2478 10.666 13.8333C10.666 12.4188 11.2279 11.0623 12.2281 10.0621C13.2283 9.0619 14.5849 8.5 15.9994 8.5C17.4138 8.5 18.7704 9.0619 19.7706 10.0621C20.7708 11.0623 21.3327 12.4188 21.3327 13.8333Z"
                                            fill="white" />
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M15.4553 29.8227C8.34401 29.5374 2.66602 23.6814 2.66602 16.5C2.66602 9.13602 8.63535 3.16669 15.9993 3.16669C23.3633 3.16669 29.3327 9.13602 29.3327 16.5C29.3327 23.864 23.3633 29.8334 15.9993 29.8334C15.9385 29.8337 15.8776 29.8337 15.8167 29.8334C15.696 29.8334 15.5753 29.8294 15.4553 29.8227ZM7.44335 24.9134C7.34366 24.6271 7.30973 24.322 7.34407 24.0208C7.37841 23.7196 7.48015 23.43 7.64173 23.1735C7.80332 22.917 8.02059 22.7002 8.27743 22.5392C8.53427 22.3782 8.82408 22.2771 9.12535 22.2434C14.3227 21.668 17.708 21.72 22.88 22.2554C23.1817 22.2868 23.4722 22.3866 23.7295 22.5473C23.9867 22.7079 24.2039 22.9252 24.3645 23.1825C24.5251 23.4398 24.6249 23.7303 24.6562 24.032C24.6876 24.3337 24.6496 24.6385 24.5453 24.9234C26.762 22.6806 28.0033 19.6533 27.9993 16.5C27.9993 9.87269 22.6267 4.50002 15.9993 4.50002C9.37201 4.50002 3.99935 9.87269 3.99935 16.5C3.99935 19.7774 5.31335 22.748 7.44335 24.9134Z"
                                            fill="white" />
                                     </svg>
                                </span>
                                <span>John Thomas</span>
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
