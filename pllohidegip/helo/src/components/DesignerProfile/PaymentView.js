import React, { useState } from 'react';
import { Button } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import Logo from '../../assets/images/logo.svg';
import User from '../../assets/images/user.png';
import master from '../../assets/images/master.png';
import check_vef from '../../assets/images/check_vef.png'; 
import crd_wif from '../../assets/images/crd_wif.png';
import dot_crd from '../../assets/images/dot_crd.png';
import Dropdown from 'react-bootstrap/Dropdown';
import { Container } from "react-bootstrap";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import InputMask from 'react-input-mask';
import { Footer } from '../Footer';

export const PaymentView = () => {
    
   
        const [cardNumber, setCardNumber] = useState('');
        const [cardHolderName, setCardHoldeName] = useState('Card Holder name');
        const [ExpiryMonth, setExpiryMonth] = useState('MM');
        const [ExpiryYear, setExpiryYear] = useState('YY');




        const handleExpiryMonth = (e) => {
            const expiryM = e.target.value;

            setExpiryMonth(expiryM);
        };
        const handleExpiryYear = (e) => {
            const expiryY= e.target.value;

            setExpiryYear(expiryY);
        };

        const handleCardNameChange = (e) => {
            const name = e.target.value;

             setCardHoldeName(name);
        };





    
        const handleCardNumberChange = (e) => {
            const input = e.target.value;
        let maskedInput = '';

      
        for (let i = 0; i <input.length; i++) {
       
            if (/\d/.test(input[i]) && i<14) {
             
                maskedInput += '*';
            } 
            else {
                maskedInput += input[i];
            }
           
          
        }

        setCardNumber(maskedInput);
        };

    return (
        <>
          <header className="header_top">
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
          <div className="Subscrip_sect invdi_sect">
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <div className="box_plan">
                        <h3>Payment Method</h3>
                        <p className="brd_underline">Select your payment method and enter your payment information.</p>
                        <div className="row">
                            <div className="col-lg-7 col-md-12 col-sm-12">
                                <div className="credit_card_bx mt-3">
                                    <ul>
                                      <li><span className="fa fa-credit-card"></span> net banking </li>
                                      <li><span className="fa fa-credit-card"></span> credit/debit card
                                      </li>
                                      <li><span className="fa fa-credit-card"></span> Add New Card </li>
                                    </ul>
                                <h3>Card Number</h3>
                                <div className="frm_grp">
                                    <label className="label_nrm" for="">Enter the 16- digit card number</label>
                                    <InputMask 
                                     mask="9999 9999 9999 9999"
                                     type="text"
                                     placeholder="xxxx xxxx xxxx xxxx"
                                     className="form-control "
                                    //  required 
                                     onChange={handleCardNumberChange}></InputMask>

                                    <span className="icon_bx">
                                        <img src={master} alt="" />
                                        <img src={check_vef} alt="" />
    
                                    </span>
                                </div>
                                <h3>Card Holder Name</h3>
                                <div className="frm_grp">
                                    <label className="label_nrm" for="">Enter Card holder name </label>
                                    <input type="text" placeholder="Maria Barrymore" className="form-control"  onChange={handleCardNameChange} required />
                                    <span className="icon_bx">
                                    <img src={check_vef} alt="" /></span>
                                </div>
                                <div className="grp_sect mb-3">
                                   <div className="lft_bx">
                                    <h3>CVV Number</h3>
                                    <label className="label_nrm" for="">Enter the 3 digit number</label>
                                   </div>
                                   <div className="lft_bx">
                                    <input type="text" className="form-control"   maxLength="3" required  />
                                   </div>
                                </div>
                                <div className="grp_sect">
                                    <div className="lft_bx">
                                     <h3>Expiry Date</h3>
                                     <label className="label_nrm" for="">Enter the Expiration date of the card</label>
                                    </div>
                                    <div className="rgt_bx">
                                     <input type="text" className="form-control" placeholder="MM"   maxLength="2"onChange={handleExpiryMonth}  required   />
                                     <span>/</span>
                                     <input type="text" className="form-control" placeholder="YY" maxLength="2" onChange={handleExpiryYear} required />
                                    </div>
                                 </div>
                                 <div className="btn_grp_com">
                                    <button  className="btn bg_btn">Confirm and Pay</button>
                                </div>
                                </div>
    
                            </div>
                            <div className="col-lg-5 col-md-12 col-sm-12">
                                <div className="paym_card">
                                    
                                    <div className="crd_details">
                                        <div className="crd_img_wif">
                                            <img src={crd_wif} alt="" />
                                        </div>
                                        {/* <h3>Card Holder name</h3> */}
                                        <h3>{cardHolderName}</h3>
                                        <p>{cardNumber}</p>
                                        <div className="crd_det">
                                            {/* <h3>9/27</h3> */}
                                            <h3>{ExpiryMonth}/{ExpiryYear}</h3>
                                            
                                            <div className="crd_name ">
                                                <img src={master} alt="" />
                                                <p>Visa card</p>
                                            </div>
                                        </div>
    
                                    </div>
                                    <p className="text">Amount to Pay</p>
                                     <div className="pay__bx">
                                        <p><span>CAD 400</span></p>
                                     </div>
                                </div>
    
                            </div>
                        </div>
                    </div>
    
                </div>
            </div>
    
        </div>
    </div>

    <Footer></Footer>
        </>

    );
};
