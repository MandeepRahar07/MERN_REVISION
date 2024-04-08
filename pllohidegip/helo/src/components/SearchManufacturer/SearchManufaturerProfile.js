import React from 'react';
import { Button } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../../assets/images/logo.svg';
import bg01 from '../../assets/images/bg01.png';
import LeatherBags from '../../assets/images/LeatherBags.png';
import Portfolio01 from '../../assets/images/Portfolio01.png';
import Portfolio02 from '../../assets/images/Portfolio02.png';
import Portfolio03 from '../../assets/images/Portfolio03.png';
import Portfolio04 from '../../assets/images/Portfolio04.png';
import Modal from 'react-bootstrap/Modal';
import send from '../../assets/images/send.png';
import Smileyman from '../../assets/images/Smileyman.png';
import user_def from "../../assets/images/user_def.png"
import Dropdown from 'react-bootstrap/Dropdown';
import { Footer } from '../Footer';




function MyVerticallyCenteredModal(props) {
 

    return (
      <Modal className='custom_modal'
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
       
        <Modal.Body>
        <button type="button" className="btn-close"  onClick={props.onHide} ><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                        <path d="M8.36358 20.3636C8.01211 20.7151 8.01211 21.2849 8.36358 21.6364C8.71504 21.9878 9.2849 21.9878 9.63637 21.6364L8.36358 20.3636ZM15.6363 15.6364C15.9878 15.2849 15.9878 14.7151 15.6363 14.3636C15.2849 14.0122 14.7151 14.0122 14.3636 14.3636L15.6363 15.6364ZM14.3636 14.3636C14.0121 14.7151 14.0121 15.2849 14.3636 15.6364C14.7151 15.9878 15.2849 15.9878 15.6363 15.6364L14.3636 14.3636ZM21.6363 9.6364C21.9878 9.28493 21.9878 8.71508 21.6363 8.36361C21.2849 8.01214 20.7151 8.01214 20.3636 8.36361L21.6363 9.6364ZM15.6363 14.3636C15.2849 14.0122 14.7151 14.0122 14.3636 14.3636C14.0121 14.7151 14.0121 15.2849 14.3636 15.6364L15.6363 14.3636ZM20.3636 21.6364C20.7151 21.9878 21.2849 21.9878 21.6363 21.6364C21.9878 21.2849 21.9878 20.7151 21.6363 20.3636L20.3636 21.6364ZM14.3636 15.6364C14.7151 15.9878 15.2849 15.9878 15.6363 15.6364C15.9878 15.2849 15.9878 14.7151 15.6363 14.3636L14.3636 15.6364ZM9.63637 8.36361C9.2849 8.01214 8.71504 8.01214 8.36358 8.36361C8.01211 8.71508 8.01211 9.28493 8.36358 9.6364L9.63637 8.36361ZM9.63637 21.6364L15.6363 15.6364L14.3636 14.3636L8.36358 20.3636L9.63637 21.6364ZM15.6363 15.6364L21.6363 9.6364L20.3636 8.36361L14.3636 14.3636L15.6363 15.6364ZM14.3636 15.6364L20.3636 21.6364L21.6363 20.3636L15.6363 14.3636L14.3636 15.6364ZM15.6363 14.3636L9.63637 8.36361L8.36358 9.6364L14.3636 15.6364L15.6363 14.3636Z" fill="black"/>
                      </svg>
        </button>
        <div class="connect_popup">
                <h3>Contact With Manufacturer</h3>
                <p>To: <span></span></p>
                <div class="avtar">
                    <div class="user_img">
                        <img src={user_def} alt=""/>
                    </div>
                    <div class="cont_bx">
                        <h3>Giovanni RawHides</h3>
                        <p>Wilson Wong</p>
                    </div>

                </div>
                <p>Message:</p>
                <div class="frm_grp_connect">
                    <textarea type="text" class="form-control" name="" id="" cols="10" rows="3" placeholder="Hi Wilson Wong"></textarea>
    
                </div>
                <div class="btn_grp_com">
                    <button class="btn" onClick={props.onHide} >cancel</button>
                    <button class="btn" >send</button>
                </div>
    
               </div>
        </Modal.Body>
      
      </Modal>
    );
}
function MyVerticallyCenteredModal2(props) {

    return (
      <Modal className='custom_modal'
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
       
        <Modal.Body>
        <button type="button" className="btn-close" onClick={props.onHide} ><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                        <path d="M8.36358 20.3636C8.01211 20.7151 8.01211 21.2849 8.36358 21.6364C8.71504 21.9878 9.2849 21.9878 9.63637 21.6364L8.36358 20.3636ZM15.6363 15.6364C15.9878 15.2849 15.9878 14.7151 15.6363 14.3636C15.2849 14.0122 14.7151 14.0122 14.3636 14.3636L15.6363 15.6364ZM14.3636 14.3636C14.0121 14.7151 14.0121 15.2849 14.3636 15.6364C14.7151 15.9878 15.2849 15.9878 15.6363 15.6364L14.3636 14.3636ZM21.6363 9.6364C21.9878 9.28493 21.9878 8.71508 21.6363 8.36361C21.2849 8.01214 20.7151 8.01214 20.3636 8.36361L21.6363 9.6364ZM15.6363 14.3636C15.2849 14.0122 14.7151 14.0122 14.3636 14.3636C14.0121 14.7151 14.0121 15.2849 14.3636 15.6364L15.6363 14.3636ZM20.3636 21.6364C20.7151 21.9878 21.2849 21.9878 21.6363 21.6364C21.9878 21.2849 21.9878 20.7151 21.6363 20.3636L20.3636 21.6364ZM14.3636 15.6364C14.7151 15.9878 15.2849 15.9878 15.6363 15.6364C15.9878 15.2849 15.9878 14.7151 15.6363 14.3636L14.3636 15.6364ZM9.63637 8.36361C9.2849 8.01214 8.71504 8.01214 8.36358 8.36361C8.01211 8.71508 8.01211 9.28493 8.36358 9.6364L9.63637 8.36361ZM9.63637 21.6364L15.6363 15.6364L14.3636 14.3636L8.36358 20.3636L9.63637 21.6364ZM15.6363 15.6364L21.6363 9.6364L20.3636 8.36361L14.3636 14.3636L15.6363 15.6364ZM14.3636 15.6364L20.3636 21.6364L21.6363 20.3636L15.6363 14.3636L14.3636 15.6364ZM15.6363 14.3636L9.63637 8.36361L8.36358 9.6364L14.3636 15.6364L15.6363 14.3636Z" fill="black"/>
                      </svg>
        </button>
        <div class="connect_popup">
                <h3>Request for Quotation</h3>
                <p>This information will be shared with the Manufacturer</p>
                <div class="quot_frm">
                    <div class="frm_grp">
                        <label for="">Name</label>
                        <input type="text" name="" id="" placeholder="Alex Cooper" class="form-control"/>
                    </div>
                    <div class="frm_grp">
                        <label for="">Email ID</label>
                        
                        <input type="text" name="" id="" placeholder="alexcooper@gmail.com" class="form-control"/>
                    </div>
                    <div class="frm_grp">
                        <label for="">Mobile Number</label>
                        <input type="text" name="" id="" placeholder="8893xxxxxx" class="form-control"/>
                    </div>
                    <div class="frm_grp">
                        <label for="">Delivery Address</label>
                       
                        <input type="text" name="" id="" placeholder="3645 Landon Street, Ontario" class="form-control"/>
                    </div>
                    <div class="frm_grp arrow_select">
                        <label for="">Product Category</label>
                        <select name="" id="" class="form-control">
                            <option value="">Bag</option>
                        </select>
                    </div>
                    <div class="frm_grp arrow_select">
                        <label for="">Leather Category</label>
                        <select name="" id="" class="form-control">
                            <option value="">Split Leather</option>
                        </select>
                    </div>
                    <div class="frm_grp">
                        <label for="">Units of Product</label>
                        <input type="text" name="" id="" placeholder="60" class="form-control"/>
                    </div>
                    <div class="frm_grp">
                        <label for="">Expected Delivery time</label>
                        <input type="text" name="" id="" placeholder="Alex Cooper" class="form-control"/>
                    </div>
                   
                    <div class="frm_grp">
                        <label for="">Design Prototype</label>
                        <div class="frm_upload">
                            <a href="#">Request.pdf</a>
                            <div class="upload_bx">
                                <input type="file" class="form-control" placeholder="Request" id="Upload"/>
                                <label for="Upload" class="Verified_btn"> Upload</label>
                              
                            </div>
                        </div>
                    </div>
                    <div class="frm_grp">
                        <label for="">Additional Request</label>
                        <input type="text" name="" id=""  class="form-control"/>
                    </div>
                </div>
               
               
                <div class="btn_grp_com">
                    <button class="btn" onClick={props.onHide} >cancel</button>
                    <button class="btn" >send</button>
                </div>
    
               </div>
        </Modal.Body>
      
      </Modal>
    );
}
function MyVerticallyCenteredModal3(props) {

    return (
      <Modal className='custom_modal'
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
       
        <Modal.Body>
        <button type="button" className="btn-close" onClick={props.onHide}  ><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                        <path d="M8.36358 20.3636C8.01211 20.7151 8.01211 21.2849 8.36358 21.6364C8.71504 21.9878 9.2849 21.9878 9.63637 21.6364L8.36358 20.3636ZM15.6363 15.6364C15.9878 15.2849 15.9878 14.7151 15.6363 14.3636C15.2849 14.0122 14.7151 14.0122 14.3636 14.3636L15.6363 15.6364ZM14.3636 14.3636C14.0121 14.7151 14.0121 15.2849 14.3636 15.6364C14.7151 15.9878 15.2849 15.9878 15.6363 15.6364L14.3636 14.3636ZM21.6363 9.6364C21.9878 9.28493 21.9878 8.71508 21.6363 8.36361C21.2849 8.01214 20.7151 8.01214 20.3636 8.36361L21.6363 9.6364ZM15.6363 14.3636C15.2849 14.0122 14.7151 14.0122 14.3636 14.3636C14.0121 14.7151 14.0121 15.2849 14.3636 15.6364L15.6363 14.3636ZM20.3636 21.6364C20.7151 21.9878 21.2849 21.9878 21.6363 21.6364C21.9878 21.2849 21.9878 20.7151 21.6363 20.3636L20.3636 21.6364ZM14.3636 15.6364C14.7151 15.9878 15.2849 15.9878 15.6363 15.6364C15.9878 15.2849 15.9878 14.7151 15.6363 14.3636L14.3636 15.6364ZM9.63637 8.36361C9.2849 8.01214 8.71504 8.01214 8.36358 8.36361C8.01211 8.71508 8.01211 9.28493 8.36358 9.6364L9.63637 8.36361ZM9.63637 21.6364L15.6363 15.6364L14.3636 14.3636L8.36358 20.3636L9.63637 21.6364ZM15.6363 15.6364L21.6363 9.6364L20.3636 8.36361L14.3636 14.3636L15.6363 15.6364ZM14.3636 15.6364L20.3636 21.6364L21.6363 20.3636L15.6363 14.3636L14.3636 15.6364ZM15.6363 14.3636L9.63637 8.36361L8.36358 9.6364L14.3636 15.6364L15.6363 14.3636Z" fill="black"/>
                      </svg>
        </button>
        <div class="connect_popup send_popup">
                <img src={send} alt=""/>
                <h4>Your request has been sent to our Manufacturer.  <span>
                    He will get back to you soon.</span></h4>
               
                <div class="btn_grp_com">
                    <button class="btn bg_btn" onClick={props.onHide} >ok</button>
                </div>
    
               </div>
        </Modal.Body>
      
      </Modal>
    );
  }








export const SearchManufaturerProfile = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const [modalShow2, setModalShow2] = React.useState(false);
    const [modalShow3, setModalShow3] = React.useState(false);
    return (
        <>
            <header className="header_top">
                <Navbar expand="lg" className="navbar navbar-expand-lg">
                    <Container>
                        <Navbar.Brand to="/SearchManufacturer"><img src={Logo} /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Dropdown className='user_login'>
                                    <Dropdown.Toggle id="dropdown-basic" className='btn'>
                                        <span>Find Professionals</span>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item to="#">Patient Health Questionnairee</Dropdown.Item>
                                        <Dropdown.Item to="#">GAD</Dropdown.Item>
                                        <Dropdown.Item to="#">Postnatal Depression Scale</Dropdown.Item>

                                    </Dropdown.Menu>
                                </Dropdown>
                                <Nav.Link to="/SearchManufacturer/Portfolio">Community</Nav.Link>
                            </Nav>
                            <div className="btn_grp">
                                <div className="search_bar">
                                    <input type="text" className="form-control" placeholder="Search" />
                                    <span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="31" height="30"
                                        viewBox="0 0 31 30" fill="none">
                                        <g clip-path="url(#clip0_15819_25)">
                                            <mask id="mask0_15819_25" maskUnits="userSpaceOnUse"
                                                x="0" y="0" width="31" height="30">
                                                <path d="M30.1636 0H0.163574V30H30.1636V0Z" fill="white" />
                                            </mask>
                                            <g mask="url(#mask0_15819_25)">
                                                <path
                                                    d="M13.2886 21.25C17.7759 21.25 21.4136 17.6123 21.4136 13.125C21.4136 8.63769 17.7759 5 13.2886 5C8.80126 5 5.16357 8.63769 5.16357 13.125C5.16357 17.6123 8.80126 21.25 13.2886 21.25Z"
                                                    stroke="#C0C0C0" stroke-width="1.5" stroke-linejoin="round" />
                                                <path
                                                    d="M24.7216 25.442C24.9657 25.686 25.3614 25.686 25.6056 25.442C25.8496 25.1979 25.8496 24.8021 25.6056 24.558L24.7216 25.442ZM25.6056 24.558L19.3556 18.308L18.4716 19.192L24.7216 25.442L25.6056 24.558Z"
                                                    fill="#C0C0C0" />
                                            </g>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_15819_25">
                                                <rect width="30" height="30" fill="white" transform="translate(0.163574)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    </span>

                                </div>
                                <Dropdown className='user_login'>
                                    <Dropdown.Toggle id="dropdown-basic" className='btn'>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"
                                                fill="none">
                                                <path
                                                    d="M21.3333 13.3333C21.3333 14.7478 20.7714 16.1044 19.7712 17.1046C18.771 18.1048 17.4145 18.6667 16 18.6667C14.5855 18.6667 13.2289 18.1048 12.2288 17.1046C11.2286 16.1044 10.6667 14.7478 10.6667 13.3333C10.6667 11.9188 11.2286 10.5623 12.2288 9.5621C13.2289 8.5619 14.5855 8 16 8C17.4145 8 18.771 8.5619 19.7712 9.5621C20.7714 10.5623 21.3333 11.9188 21.3333 13.3333Z"
                                                    fill="#C0C0C0" />
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M15.456 29.3226C8.34466 29.0373 2.66666 23.1813 2.66666 16C2.66666 8.63596 8.63599 2.66663 16 2.66663C23.364 2.66663 29.3333 8.63596 29.3333 16C29.3333 23.364 23.364 29.3333 16 29.3333C15.9391 29.3337 15.8782 29.3337 15.8173 29.3333C15.6967 29.3333 15.576 29.3293 15.456 29.3226ZM7.44399 24.4133C7.3443 24.127 7.31037 23.8219 7.34471 23.5208C7.37905 23.2196 7.48079 22.93 7.64237 22.6735C7.80396 22.417 8.02123 22.2002 8.27807 22.0391C8.53491 21.8781 8.82472 21.777 9.12599 21.7433C14.3233 21.168 17.7087 21.22 22.8807 21.7553C23.1823 21.7867 23.4728 21.8866 23.7301 22.0472C23.9874 22.2079 24.2046 22.4251 24.3651 22.6824C24.5257 22.9397 24.6255 23.2303 24.6569 23.532C24.6882 23.8336 24.6503 24.1385 24.546 24.4233C26.7626 22.1806 28.004 19.1533 28 16C28 9.37263 22.6273 3.99996 16 3.99996C9.37266 3.99996 3.99999 9.37263 3.99999 16C3.99999 19.2773 5.31399 22.248 7.44399 24.4133Z"
                                                    fill="#C0C0C0" />
                                            </svg>
                                        </span>
                                        <span> Alex Cooper</span>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item to="#">My Profile</Dropdown.Item>
                                        <Dropdown.Item to="#">Logout</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
            <div className="inr_bnnr_section" >
                <img className="media_img" src={bg01} alt="" />
            </div>
            <section className="user_profile">
                <div className="container">
                    <div className="profile_cover">
                        <div className="user_img">
                        <img src={Smileyman} alt="" />
                        </div>
                        <div className="cont_prf">
                            <h3>Manufacturer</h3>
                            <h4>Giovanni RawHides</h4>
                            <p>Wilson Wong</p>
                            <div className="Review_btn">
                                <button className="btn">
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none">
                                        <path
                                            d="M11.245 4.174C11.4765 3.50808 11.5922 3.17513 11.7634 3.08285C11.9115 3.00298 12.0898 3.00298 12.238 3.08285C12.4091 3.17513 12.5248 3.50808 12.7563 4.174L14.2866 8.57639C14.3525 8.76592 14.3854 8.86068 14.4448 8.93125C14.4972 8.99359 14.5641 9.04218 14.6396 9.07278C14.725 9.10743 14.8253 9.10947 15.0259 9.11356L19.6857 9.20852C20.3906 9.22288 20.743 9.23007 20.8837 9.36432C21.0054 9.48051 21.0605 9.65014 21.0303 9.81569C20.9955 10.007 20.7146 10.2199 20.1528 10.6459L16.4387 13.4616C16.2788 13.5829 16.1989 13.6435 16.1501 13.7217C16.107 13.7909 16.0815 13.8695 16.0757 13.9507C16.0692 14.0427 16.0982 14.1387 16.1563 14.3308L17.506 18.7919C17.7101 19.4667 17.8122 19.8041 17.728 19.9793C17.6551 20.131 17.5108 20.2358 17.344 20.2583C17.1513 20.2842 16.862 20.0829 16.2833 19.6802L12.4576 17.0181C12.2929 16.9035 12.2106 16.8462 12.1211 16.8239C12.042 16.8043 11.9593 16.8043 11.8803 16.8239C11.7908 16.8462 11.7084 16.9035 11.5437 17.0181L7.71805 19.6802C7.13937 20.0829 6.85003 20.2842 6.65733 20.2583C6.49056 20.2358 6.34626 20.131 6.27337 19.9793C6.18915 19.8041 6.29123 19.4667 6.49538 18.7919L7.84503 14.3308C7.90313 14.1387 7.93218 14.0427 7.92564 13.9507C7.91986 13.8695 7.89432 13.7909 7.85123 13.7217C7.80246 13.6435 7.72251 13.5829 7.56262 13.4616L3.84858 10.6459C3.28678 10.2199 3.00588 10.007 2.97101 9.81569C2.94082 9.65014 2.99594 9.48051 3.11767 9.36432C3.25831 9.23007 3.61074 9.22289 4.31559 9.20852L8.9754 9.11356C9.176 9.10947 9.27631 9.10743 9.36177 9.07278C9.43726 9.04218 9.50414 8.99359 9.55657 8.93125C9.61593 8.86068 9.64887 8.76592 9.71475 8.57639L11.245 4.174Z"
                                            stroke="#673821" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </svg>
                                    </span> Review
                                </button>
                                <button className="btn">
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25"
                                        fill="none">
                                        <rect width="25" height="25" fill="white" />
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M6 4.95975L6.92857 4H18.0714L19 4.95975V22L12.5 18.0188L6 22V4.95975ZM7.85714 5.91949V18.6314L12.5 15.7876L17.1429 18.6314V5.91949H7.85714Z"
                                            fill="#673821" />
                                        <path d="M17 6V18.5L12.5 15.5L8 18.5V6H17Z" fill="#673821" stroke="#673821" />
                                    </svg>
                                    </span>Save
                                </button>
                            </div>
                            <div className="btn_grp">
                                <button className="btn" onClick={() => setModalShow(true)}>Send Message</button>
                                <button className="btn" onClick={() => setModalShow2(true)}>Request for Quotation</button>
                            </div>

                        </div>

                    </div>
                    <div className="tab_prof">
                        <ul>
                            <li className="active"><Link  to={"/SearchManufacturer"}>About</Link></li>
                            <li><Link  to={"/SearchManufacturer/Portfolio"} >Portfolio</Link></li>
                            <li><Link  to={"#"} >Reviews</Link></li>
                        </ul>

                    </div>
                    <div className="card_bx">
                        <div className="About_wrapp">
                            <h3>About</h3>
                            <p>Giovanni RawHides is
                                a premier leather manufacturing company dedicated to crafting exquisite leather goods of unparalleled quality and craftsmanship. With decades of experience and a commitment to excellence, we pride ourself on producing timeless pieces that blend Italian tradition with modern elegance. From luxurious handbags to sophisticated accessories, each  product is meticulously crafted to stand the test of time and elevate your style.
                            </p>
                        </div>
                    </div>
                    <div className="card_bx">
                        <div className="Portfolio_wrapp">
                            <h3>Portfolio</h3>
                            <ul>
                                <li>  <Link to={"#"}><img src={Portfolio01} alt="" /> <h3>Backpacks</h3></Link></li>
                                <li>  <Link to={"#"} ><img src={Portfolio04} alt="" /> <h3>Wallet</h3></Link></li>
                                <li>  <Link to={"#"} ><img src={Portfolio03} alt="" /> <h3>Handbags</h3></Link></li>
                                <li>  <Link to={"#"} ><img src={Portfolio02} alt="" /><h3>Belts</h3></Link></li>
                            </ul>

                        </div>
                    </div>
                    <div className="card_bx">
                        <h3>reviews</h3>
                        <div className="rating_wrapp">
                            <div className="rating">
                                <input type="radio" id="star5" name="rating" value="5" />
                                <label className="star" for="star5" title="Awesome" aria-hidden="true"></label>
                                <input type="radio" id="star4" name="rating" value="4" />
                                <label className="star" for="star4" title="Great" aria-hidden="true"></label>
                                <input type="radio" id="star3" name="rating" value="3" />
                                <label className="star" for="star3" title="Very good" aria-hidden="true"></label>
                                <input type="radio" id="star2" name="rating" value="2" />
                                <label className="star" for="star2" title="Good" aria-hidden="true"></label>
                                <input type="radio" id="star1" name="rating" value="1" />
                                <label className="star" for="star1" title="Bad" aria-hidden="true"></label>
                            </div>
                        </div>
                    </div>

                </div>

            </section>
            <Footer></Footer>
        
        <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
       <MyVerticallyCenteredModal2
        show={modalShow2}
        onHide={() => setModalShow2(false)}
            />
            <MyVerticallyCenteredModal3
        show={modalShow3}
        onHide={() => setModalShow3(false)}
      />
        </>
    
    );
};
