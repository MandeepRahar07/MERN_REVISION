import React, { useState } from 'react';
// import { CiSearch } from "react-icons/ci";
import { Link, NavLink } from "react-router-dom";
import { Footer } from '../Footer';
import { FaAngleDown } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { MdOutlineStar } from "react-icons/md";
import { HiMail } from "react-icons/hi";
import { FaLocationDot } from "react-icons/fa6";
import { MdBusinessCenter } from "react-icons/md";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";





import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Logo from '../../assets/images/logo.svg';

import Dropdown from 'react-bootstrap/Dropdown';

export const Manufacturer = () => {
    const starCount = 5;
    const [isProjectTypeOpen, setIsProjectTypeOpen] = useState(false);
    const [isRatingOpen, setIsRatingOpen] = useState(false);
    const [isExperienceOpen, setIsExperienceOpen] = useState(false);

    const toggleDropdownType = () => {
        setIsProjectTypeOpen(!isProjectTypeOpen);
    };

    const toggleDropdownRating = () => {
        setIsRatingOpen(!isRatingOpen);
    };

    const toggleDropdownExperience = () => {
        setIsExperienceOpen(!isExperienceOpen);
    };
    const [searchQuery, setSearchQuery] = useState('');

    const changeInput = (event) => {
        setSearchQuery(event.target.value);
    }
    const handleSearch = (event) => {
        console.log(searchQuery);
    }
    const handleKeyPress = (event) => {
        if (event.key == 'Enter') {
            handleSearch(event);
        }
    }
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);

    };
    // const [searchQuery,setSearchQuery]=useState('');

    // const changeInput=(event)=>{
    //     setSearchQuery(event.target.value);
    // }
    // const handleSearch=(event)=>
    // {
    //     console.log(searchQuery);
    // }
    // const handleKeyPress=(event)=>
    // {
    //     if(event.key=='Enter')
    //     {
    //         handleSearch(event);
    //     }
    // }
    return (
        <>

            <div className="hero">
                <div className="shade"></div>


               <div className='navigationbar'>
              
                <header className="header_top header-box">
                <Navbar expand="lg" className="navbar navbar-expand-lg">
                    <Container>
                        <Navbar.Brand to="/Find-professionals/Manufacturer"><img src={Logo} /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Dropdown className='user_login'>
                                    <Dropdown.Toggle id="dropdown-basic" className='btn'>
                                        <span>Find Professionals</span>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item as={NavLink} to="/Find-professionals">Find Manufacturers</Dropdown.Item>
                                        <Dropdown.Item as={NavLink} to="/Find-professionals/Designer">Find designers</Dropdown.Item>
                                        <Dropdown.Item as={NavLink} to="/find-professionals/Supplier">Find Suppliers</Dropdown.Item>
       

                                    </Dropdown.Menu>
                                </Dropdown>
                                <Nav.Link to="/Find-professionals/Manufacturer">Community</Nav.Link>
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



</div>


                <div className='hero-text'>
                    <span className='line1'>Get Matched With Manufacturer</span>
                    <span className='line2'>Find The Best Leather Manufacturer For Your Needs. Get Matched Quickly And Easily</span>
                </div>



            </div>

            <div className='main'>
                {/* <div className='filter-content'> */}
                <div className='filters'>
                    <div className='button-lable'>

                        <label for="dropbtn1" className='dropbtn-lable'>Location</label>
                        <button className="dropbtn1 " style={{ textAlign: 'left', padding: '5px 20px' }}>Search city, State or Zip
                            <FaCaretDown style={{ verticalAlign: 'middle', textAlign: 'left' }} /></button>

                        {/* {isDropdownOpen && (
                        <div className="filter-dropdown">
                            <a href="#"className='find-options'>1</a>
                            <a href="#"className='find-options'>2</a>
                            <a href="#"className='find-options'>3</a>
                        </div>
                    )} */}

                        <label for="dropbtn2" className='dropbtn-lable'>Distance</label>
                        <button className="dropbtn2 " style={{ textAlign: 'left', padding: '5px 20px' }}>50 MI
                            <FaCaretDown style={{ verticalAlign: 'middle', textAlign: 'left' }} /></button>

                        {/* {isDropdownOpen && (
                        <div className="filter-dropdown">
                            <a href="#"className='find-options'>1</a>
                            <a href="#"className='find-options'>2</a>
                            <a href="#"className='find-options'>3</a>
                        </div>
                    )} */}

                    </div>
                    <div className='btn-nolable'>
                        <button onClick={toggleDropdownType} className="dropbtn3 ">Project Type<FaAngleDown style={{ verticalAlign: 'middle' }} /></button>
                        {isProjectTypeOpen && (
                            <div className="filter-dropdown">
                                <a href="#" className='find-option'>1</a>
                                <a href="#" className='find-option'>2</a>
                                <a href="#" className='find-option'>3</a>
                            </div>
                        )}

                        <button onClick={toggleDropdownRating} className="dropbtn4 ">Rating<FaAngleDown style={{ horizontalAlign: 'middle' }} /></button>
                        {isRatingOpen && (
                            <div className="filter-dropdown">
                                <a href="#" className='find-option'>1 one</a>
                                <a href="#" className='find-option'>2</a>
                                <a href="#" className='find-option'>3</a>
                            </div>
                        )}


                        <button onClick={toggleDropdownExperience} className="dropbtn5 ">Experience<FaAngleDown style={{ horizontalAlign: 'middle' }} /></button>
                        {isExperienceOpen && (
                            <div className="filter-dropdown">
                                <a href="#" className='find-option'>1</a>
                                <a href="#" className='find-option'>2</a>
                                <a href="#" className='find-option'>3</a>
                            </div>
                        )}


                    </div>
                </div>




                <div className='main-page'>
                    <div className='filter-applied'>
                        <button className='category' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            Manufacturer<IoMdCloseCircle style={{
                                height: '18px',
                                width: '18px',
                            }} /></button>
                        <form onSubmit={handleSearch}>

                            {/* <CiSearch style={{ verticalAlign: 'middle' }}/> */}
                            <input className='searchbyname' type='text'
                                placeholder='Search by Name or Keyword'
                                value={searchQuery}
                                onChange={changeInput}
                                onKeyPress={handleKeyPress}
                            />
                        </form>
                    </div>



                    <div className='profiles'>
                        <div className='profile1'>
                            <div className='picture1'></div>
                            <div className='info'>
                                <div className='name-email'>

                                    <div className='profile-preview'>
                                        <div className='profile-pic'></div>
                                        <div className='name-rating'>
                                            <div className='name'>Giovanni RawHides</div>
                                            <div className='ratingstars'>
                                                <div className='score'>{starCount}.0</div>
                                                <div className='stars'>
                                                    {[...Array(starCount)].map((_, index) => (
                                                        <MdOutlineStar key={index} style={{ color: 'gold', marginRight: '2px' }} />
                                                    ))}
                                                </div>
                                                <div className='reviews'>75 reviews</div>

                                            </div>
                                        </div>
                                    </div>

                                    <button className='message' style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                                        <HiMail style={{ height: '16px', width: '16px', alignItems: 'center' }} />Send Message </button></div>

                                <div className='location'>
                                    <div className='years'><MdBusinessCenter style={{ color: '#007562', height: '15px', width: '12px', }} />15 years in business </div>
                                    <div className='address'> <FaLocationDot style={{ color: '#666666', height: '20px', width: '15px', marginRight: '8px' }} />P.O. Box 35148, Ottawa, Ontario, Canada</div>
                                </div>
                                <div className='about'>
                                    We are a Chinese group of tanners in India and have been the leather manufacturing business for more than 40 years.
                                    Our production capacity is over 5 million sq feet per year.
                                    looking to establish relationship with buyers all over the world ...<a href="#" style={{ color: '#994B00' }}>Read More {'>'}</a>

                                </div>
                            </div>

                        </div>
                        <div className='profile2'>
                            <div className='picture2'>

                            </div>
                            <div className='info'>
                                <div className='name-email'>

                                    <div className='profile-preview'>
                                        <div className='profile-pic'></div>
                                        <div className='name-rating'>
                                            <div className='name'>Giovanni RawHides</div>
                                            <div className='ratingstars'>
                                                <div className='score'>{starCount}.0</div>
                                                <div className='stars'>
                                                    {[...Array(starCount)].map((_, index) => (
                                                        <MdOutlineStar key={index} style={{ color: 'gold', marginRight: '2px' }} />
                                                    ))}
                                                </div>
                                                <div className='reviews'>75 reviews</div>

                                            </div>
                                        </div>
                                    </div>

                                    <button className='message' style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                                        <HiMail style={{ height: '16px', width: '16px', alignItems: 'center', color: '#994B00' }} />Send Message </button></div>

                                <div className='location'>
                                    <div className='years'><MdBusinessCenter style={{ color: '#007562', height: '15px', width: '12px' }} />15 years in business </div>
                                    <div className='address'> <FaLocationDot style={{ color: '#666666', height: '20px', width: '15px', marginRight: '8px' }} />P.O. Box 35148, Ottawa, Ontario, Canada</div>
                                </div>
                                <div className='about'>
                                    We are a Chinese group of tanners in India and have been the leather manufacturing business for more than 40 years.
                                    Our production capacity is over 5 million sq feet per year.
                                    looking to establish relationship with buyers all over the world ...<a href="#" style={{ color: '#994B00' }}>Read More {'>'}</a>

                                </div>
                            </div>
                        </div>
                        <div className='profile3'>
                            <div className='picture3'>

                            </div>
                            <div className='info'>
                                <div className='name-email'>

                                    <div className='profile-preview'>
                                        <div className='profile-pic'></div>
                                        <div className='name-rating'>
                                            <div className='name'>Giovanni RawHides</div>
                                            <div className='ratingstars'>
                                                <div className='score'>{starCount}.0</div>
                                                <div className='stars'>
                                                    {[...Array(starCount)].map((_, index) => (
                                                        <MdOutlineStar key={index} style={{ color: 'gold', marginRight: '2px' }} />
                                                    ))}
                                                </div>
                                                <div className='reviews'>75 reviews</div>

                                            </div>
                                        </div>
                                    </div>

                                    <button className='message' style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                                        <HiMail style={{ height: '16px', width: '16px', alignItems: 'center' }} />Send Message </button></div>

                                <div className='location'>
                                    <div className='years'><MdBusinessCenter style={{ color: '#007562', height: '15px', width: '12px' }} />15 years in business </div>
                                    <div className='address'> <FaLocationDot style={{ color: '#666666', height: '20px', width: '15px', marginRight: '8px' }} />P.O. Box 35148, Ottawa, Ontario, Canada</div>
                                </div>
                                <div className='about'>
                                    We are a Chinese group of tanners in India and have been the leather manufacturing business for more than 40 years.
                                    Our production capacity is over 5 million sq feet per year.
                                    looking to establish relationship with buyers all over the world ...<a href="#" style={{ color: '#994B00' }}>Read More  {'>'}</a>

                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='pre-nxt'>
                        <button className='prebtn'><MdKeyboardDoubleArrowLeft style={{ height: '30px', width: '41px', alignItems: 'center' }} />Previous</button>
                        <div className='buttons'>
                            <button className='btn1'>1</button>
                            <button className='btn2'>2</button>
                            <button className='btn3'>3</button>
                            <button className='btn4'>4</button>
                        </div>
                        <button className='nxtbtn'>Next<MdKeyboardDoubleArrowRight style={{ height: '30px', width: '41px', alignItems: 'center' }} /></button>
                    </div>
                </div>



            </div>


            {/* <footer> */}
            {/* <div className='foot-box'>
                <div className='foot-content'>
                    <div className='contact-info'>
                        <div className='logo-img'></div>

                        <button className='mailto'><IoIosMail style={{ height: '24px', width: '24px' }} />
                            <span>PIIoHide@company.ca</span></button>

                        <button className='call'><MdWifiCalling3 style={{ height: '24px', width: '24px', Color: ' #FFFFFF' }} />
                            <span>(021) 876 347 294</span></button>

                        <button className='loc'><FaMapLocationDot style={{ height: '50px', width: '50px', alignContent: 'top' }} />
                            <span>3891 Ranchview 765-8764 Dr. Richardson California 62639</span></button>


                    </div>
                    <div className='services'>
                        <span>Our Service</span>

                        <a href="#" className='link'>About Us</a>
                        <a href="#" className='link'>How It Works?</a>
                        <a href="#" className='link'>Our Features</a>
                        <a href="#" className='link'>Community</a>


                    </div>
                  
                    <div className='more-links'>

                        <span>More Links</span>

                        <a href="#" className='link'>Pricing</a>
                        <a href="#" className='link'> Team</a>
                        <a href="#" className='link'>FAQ</a>



                    </div>
                    <div className='platforms'>
                        <span>Platform Connect</span>

                        <div className='social'>
                            <a href="#" className='link'><RiInstagramFill style={{ height: '32px', width: '32px' }} /></a>
                            <a href="#" className='link'> <FaTwitter style={{ height: '32px', width: '32px' }} /></a>
                            <a href="#" className='link'><IoLogoYoutube style={{ height: '32px', width: '32px' }} /></a>
                            <a href="#" className='link'><FaFacebook style={{ height: '32px', width: '32px' }} /></a>
                        </div>



                    </div>



                
                </div>
                <div className='copyright'>
                    @ Copyright PlloHide 2024. All Rights Reserved
                </div>


            </div>
 */}








            <Footer></Footer>







        </>
    );
}

