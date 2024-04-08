import React from 'react';
import { Button } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import Logo from '../../assets/images/logo_w.svg';
import User from '../../assets/images/user_def.png';
import cover01 from '../../assets/images/cover01.png';
import user_p01 from '../../assets/images/user_p01.png';
import cover02 from '../../assets/images/cover02.png';
import user_p02 from '../../assets/images/user_p02.png';
import Portfolio01 from '../../assets/images/Portfolio01.png';
import Portfolio02 from '../../assets/images/Portfolio02.png';
import Portfolio03 from '../../assets/images/Portfolio03.png';
import Portfolio04 from '../../assets/images/Portfolio04.png';
import Dropdown from 'react-bootstrap/Dropdown';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

export const AdminProfile = () => {
    return (
        <>
            <div className="container-fluid page-body-wrapper">
                <div className="flare__grid">
                    <div className="left__sidebar d-inline-block">
                        <div className="page-body-wrapper">
                            <nav className="sidebar sidebar-offcanvas" id="sidebar">
                                <div className="sidebar-head">
                                    <Link className="navbar-toggler navbar-toggler align-self-center" data-toggle="minimize">
                                        <span></span>
                                    </Link>
                                    <div className="sidebar-brand">
                                        <Link to={"/Admin"} className="hide-logo">PlloHide</Link>
                                        <Link to={"/Admin"} className="logo-link nk-sidebar-logo">
                                            <img src={Logo} className="logo-light logo-img" />
                                        </Link>
                                    </div>
                                </div>
                                <ul className="nav">
                                    <li className="nav-item ">
                                        <Link to={"/Admin/Dashboard"} className="nav-link">
                                        <span className="icon-bg">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25"
                                            viewBox="0 0 24 25" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M16 9.5C16 10.5609 15.5786 11.5783 14.8284 12.3284C14.0783 13.0786 13.0609 13.5 12 13.5C10.9391 13.5 9.92172 13.0786 9.17157 12.3284C8.42143 11.5783 8 10.5609 8 9.5C8 8.43913 8.42143 7.42172 9.17157 6.67157C9.92172 5.92143 10.9391 5.5 12 5.5C13.0609 5.5 14.0783 5.92143 14.8284 6.67157C15.5786 7.42172 16 8.43913 16 9.5ZM14 9.5C14 10.0304 13.7893 10.5391 13.4142 10.9142C13.0391 11.2893 12.5304 11.5 12 11.5C11.4696 11.5 10.9609 11.2893 10.5858 10.9142C10.2107 10.5391 10 10.0304 10 9.5C10 8.96957 10.2107 8.46086 10.5858 8.08579C10.9609 7.71071 11.4696 7.5 12 7.5C12.5304 7.5 13.0391 7.71071 13.4142 8.08579C13.7893 8.46086 14 8.96957 14 9.5Z"
                                                fill="#1E1E4E" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M12 1.5C5.925 1.5 1 6.425 1 12.5C1 18.575 5.925 23.5 12 23.5C18.075 23.5 23 18.575 23 12.5C23 6.425 18.075 1.5 12 1.5ZM3 12.5C3 14.59 3.713 16.514 4.908 18.042C5.74723 16.9399 6.8299 16.0467 8.07143 15.4323C9.31297 14.8179 10.6797 14.4988 12.065 14.5C13.4323 14.4987 14.7819 14.8095 16.0109 15.4088C17.2399 16.008 18.316 16.8799 19.157 17.958C20.0234 16.8216 20.6068 15.4952 20.8589 14.0886C21.111 12.682 21.0244 11.2355 20.6065 9.86898C20.1886 8.50243 19.4512 7.25505 18.4555 6.23004C17.4598 5.20503 16.2343 4.43186 14.8804 3.97451C13.5265 3.51716 12.0832 3.38877 10.6699 3.59997C9.25652 3.81117 7.91379 4.35589 6.75277 5.18905C5.59175 6.02222 4.64581 7.11987 3.99323 8.3912C3.34065 9.66252 3.00018 11.071 3 12.5ZM12 21.5C9.93395 21.5031 7.93027 20.7923 6.328 19.488C6.97293 18.5647 7.83134 17.8109 8.83019 17.2907C9.82905 16.7705 10.9388 16.4992 12.065 16.5C13.1772 16.4991 14.2735 16.7636 15.2629 17.2714C16.2524 17.7793 17.1064 18.5159 17.754 19.42C16.1393 20.7667 14.1026 21.5029 12 21.5Z"
                                                fill="#1E1E4E" />
                                        </svg>
                                    </span>
                                    <span className="menu-title">Dashboard</span>
                                        </Link>
                                    </li>
                                    <li className="nav-item menu_toggle menu_open nav-active">
                                    <Link to={"javascript:void(0);"} className="nav-link">
                                            <span className="icon-bg">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25"
                                            viewBox="0 0 24 25" fill="none">
                                            <g clip-path="url(#clip0_15840_1924)">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M4 5.5C4 4.70435 4.31607 3.94129 4.87868 3.37868C5.44129 2.81607 6.20435 2.5 7 2.5H17C17.7956 2.5 18.5587 2.81607 19.1213 3.37868C19.6839 3.94129 20 4.70435 20 5.5V21.5C19.9999 21.6883 19.9466 21.8728 19.8462 22.0322C19.7459 22.1916 19.6025 22.3194 19.4327 22.4009C19.2629 22.4824 19.0736 22.5143 18.8864 22.4929C18.6993 22.4715 18.522 22.3977 18.375 22.28L16.5 20.78L14.625 22.28C14.4329 22.4339 14.1908 22.5115 13.945 22.4981C13.6993 22.4846 13.4671 22.381 13.293 22.207L12 20.914L10.707 22.207C10.533 22.3811 10.3009 22.4849 10.0551 22.4986C9.80938 22.5122 9.56721 22.4348 9.375 22.281L7.5 20.78L5.625 22.28C5.47797 22.3977 5.30069 22.4715 5.11356 22.4929C4.92643 22.5143 4.73707 22.4824 4.56727 22.4009C4.39747 22.3194 4.25414 22.1916 4.15378 22.0322C4.05342 21.8728 4.00012 21.6883 4 21.5V5.5ZM7 4.5C6.73478 4.5 6.48043 4.60536 6.29289 4.79289C6.10536 4.98043 6 5.23478 6 5.5V19.42L6.875 18.72C7.05236 18.578 7.27279 18.5006 7.5 18.5006C7.72721 18.5006 7.94764 18.578 8.125 18.72L9.925 20.16L11.293 18.793C11.4805 18.6055 11.7348 18.5002 12 18.5002C12.2652 18.5002 12.5195 18.6055 12.707 18.793L14.074 20.16L15.875 18.72C16.0524 18.578 16.2728 18.5006 16.5 18.5006C16.7272 18.5006 16.9476 18.578 17.125 18.72L18 19.42V5.5C18 5.23478 17.8946 4.98043 17.7071 4.79289C17.5196 4.60536 17.2652 4.5 17 4.5H7ZM8 9.5C8 9.23478 8.10536 8.98043 8.29289 8.79289C8.48043 8.60536 8.73478 8.5 9 8.5H15C15.2652 8.5 15.5196 8.60536 15.7071 8.79289C15.8946 8.98043 16 9.23478 16 9.5C16 9.76522 15.8946 10.0196 15.7071 10.2071C15.5196 10.3946 15.2652 10.5 15 10.5H9C8.73478 10.5 8.48043 10.3946 8.29289 10.2071C8.10536 10.0196 8 9.76522 8 9.5ZM9 12.5C8.73478 12.5 8.48043 12.6054 8.29289 12.7929C8.10536 12.9804 8 13.2348 8 13.5C8 13.7652 8.10536 14.0196 8.29289 14.2071C8.48043 14.3946 8.73478 14.5 9 14.5H12C12.2652 14.5 12.5196 14.3946 12.7071 14.2071C12.8946 14.0196 13 13.7652 13 13.5C13 13.2348 12.8946 12.9804 12.7071 12.7929C12.5196 12.6054 12.2652 12.5 12 12.5H9Z"
                                                    fill="white" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_15840_1924">
                                                    <rect width="24" height="24" fill="white"
                                                        transform="translate(0 0.5)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                            </span>
                                            <span className="menu-title">Manage User</span>
                                        </Link>
                                        <ul className="nk-menu-sub">
                                            <li className='active'> <Link to={"/Admin/Designer2"}> Designer</Link></li>
                                            <li > <Link to={"/Admin/Supplier"}>Supplier</Link></li>
                                            <li > <Link to={"/Admin/AdminManufacturer"}>Manufacturer</Link></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item menu_toggle">
                                    <Link to={"javascript:void(0);"} className="nav-link">
                                            <span className="icon-bg">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25"
                                                    viewBox="0 0 24 25" fill="none">
                                                    <g clip-path="url(#clip0_15840_1924)">
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                            d="M4 5.5C4 4.70435 4.31607 3.94129 4.87868 3.37868C5.44129 2.81607 6.20435 2.5 7 2.5H17C17.7956 2.5 18.5587 2.81607 19.1213 3.37868C19.6839 3.94129 20 4.70435 20 5.5V21.5C19.9999 21.6883 19.9466 21.8728 19.8462 22.0322C19.7459 22.1916 19.6025 22.3194 19.4327 22.4009C19.2629 22.4824 19.0736 22.5143 18.8864 22.4929C18.6993 22.4715 18.522 22.3977 18.375 22.28L16.5 20.78L14.625 22.28C14.4329 22.4339 14.1908 22.5115 13.945 22.4981C13.6993 22.4846 13.4671 22.381 13.293 22.207L12 20.914L10.707 22.207C10.533 22.3811 10.3009 22.4849 10.0551 22.4986C9.80938 22.5122 9.56721 22.4348 9.375 22.281L7.5 20.78L5.625 22.28C5.47797 22.3977 5.30069 22.4715 5.11356 22.4929C4.92643 22.5143 4.73707 22.4824 4.56727 22.4009C4.39747 22.3194 4.25414 22.1916 4.15378 22.0322C4.05342 21.8728 4.00012 21.6883 4 21.5V5.5ZM7 4.5C6.73478 4.5 6.48043 4.60536 6.29289 4.79289C6.10536 4.98043 6 5.23478 6 5.5V19.42L6.875 18.72C7.05236 18.578 7.27279 18.5006 7.5 18.5006C7.72721 18.5006 7.94764 18.578 8.125 18.72L9.925 20.16L11.293 18.793C11.4805 18.6055 11.7348 18.5002 12 18.5002C12.2652 18.5002 12.5195 18.6055 12.707 18.793L14.074 20.16L15.875 18.72C16.0524 18.578 16.2728 18.5006 16.5 18.5006C16.7272 18.5006 16.9476 18.578 17.125 18.72L18 19.42V5.5C18 5.23478 17.8946 4.98043 17.7071 4.79289C17.5196 4.60536 17.2652 4.5 17 4.5H7ZM8 9.5C8 9.23478 8.10536 8.98043 8.29289 8.79289C8.48043 8.60536 8.73478 8.5 9 8.5H15C15.2652 8.5 15.5196 8.60536 15.7071 8.79289C15.8946 8.98043 16 9.23478 16 9.5C16 9.76522 15.8946 10.0196 15.7071 10.2071C15.5196 10.3946 15.2652 10.5 15 10.5H9C8.73478 10.5 8.48043 10.3946 8.29289 10.2071C8.10536 10.0196 8 9.76522 8 9.5ZM9 12.5C8.73478 12.5 8.48043 12.6054 8.29289 12.7929C8.10536 12.9804 8 13.2348 8 13.5C8 13.7652 8.10536 14.0196 8.29289 14.2071C8.48043 14.3946 8.73478 14.5 9 14.5H12C12.2652 14.5 12.5196 14.3946 12.7071 14.2071C12.8946 14.0196 13 13.7652 13 13.5C13 13.2348 12.8946 12.9804 12.7071 12.7929C12.5196 12.6054 12.2652 12.5 12 12.5H9Z"
                                                            fill="white" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_15840_1924">
                                                            <rect width="24" height="24" fill="white"
                                                                transform="translate(0 0.5)" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </span>
                                            <span className="menu-title">RFQ</span>
                                        </Link>
                                        <ul className="nk-menu-sub">
                                            <li> <Link to={"/Admin/Rfq"}> -- Raised RFQ</Link></li>
                                            <li > <Link to={"/Admin/ReceivedQuotation"}>Received Quotation</Link></li>
                                           
                                        </ul>
                                    </li>
                             

                                    <li className="nav-item ">
                                        <Link to={"/Admin/Orders"} className="nav-link">
                                            <span className="icon-bg">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25"
                                                    viewBox="0 0 24 25" fill="none">
                                                    <path
                                                        d="M23.1956 11.4688L21.8831 8.1875C21.7718 7.90988 21.5796 7.67209 21.3316 7.50494C21.0835 7.33778 20.791 7.24897 20.4919 7.25H17.25V6.5C17.25 6.30109 17.171 6.11032 17.0303 5.96967C16.8897 5.82902 16.6989 5.75 16.5 5.75H2.25C1.85218 5.75 1.47064 5.90804 1.18934 6.18934C0.908035 6.47064 0.75 6.85218 0.75 7.25V17.75C0.75 18.1478 0.908035 18.5294 1.18934 18.8107C1.47064 19.092 1.85218 19.25 2.25 19.25H3.84375C4.00898 19.8953 4.38428 20.4673 4.91048 20.8757C5.43669 21.2842 6.08387 21.5059 6.75 21.5059C7.41613 21.5059 8.06331 21.2842 8.58952 20.8757C9.11572 20.4673 9.49102 19.8953 9.65625 19.25H14.3437C14.509 19.8953 14.8843 20.4673 15.4105 20.8757C15.9367 21.2842 16.5839 21.5059 17.25 21.5059C17.9161 21.5059 18.5633 21.2842 19.0895 20.8757C19.6157 20.4673 19.991 19.8953 20.1562 19.25H21.75C22.1478 19.25 22.5294 19.092 22.8107 18.8107C23.092 18.5294 23.25 18.1478 23.25 17.75V11.75C23.2503 11.6536 23.2318 11.5581 23.1956 11.4688ZM17.25 8.75H20.4919L21.3919 11H17.25V8.75ZM2.25 7.25H15.75V13.25H2.25V7.25ZM6.75 20C6.45333 20 6.16332 19.912 5.91664 19.7472C5.66997 19.5824 5.47771 19.3481 5.36418 19.074C5.25065 18.7999 5.22094 18.4983 5.27882 18.2074C5.3367 17.9164 5.47956 17.6491 5.68934 17.4393C5.89912 17.2296 6.16639 17.0867 6.45736 17.0288C6.74834 16.9709 7.04994 17.0006 7.32402 17.1142C7.59811 17.2277 7.83238 17.42 7.9972 17.6666C8.16203 17.9133 8.25 18.2033 8.25 18.5C8.25 18.8978 8.09196 19.2794 7.81066 19.5607C7.52935 19.842 7.14782 20 6.75 20ZM14.3437 17.75H9.65625C9.49102 17.1047 9.11572 16.5327 8.58952 16.1243C8.06331 15.7158 7.41613 15.4941 6.75 15.4941C6.08387 15.4941 5.43669 15.7158 4.91048 16.1243C4.38428 16.5327 4.00898 17.1047 3.84375 17.75H2.25V14.75H15.75V15.9041C15.4051 16.1034 15.1032 16.3692 14.8619 16.6861C14.6205 17.0029 14.4444 17.3646 14.3437 17.75ZM17.25 20C16.9533 20 16.6633 19.912 16.4166 19.7472C16.17 19.5824 15.9777 19.3481 15.8642 19.074C15.7506 18.7999 15.7209 18.4983 15.7788 18.2074C15.8367 17.9164 15.9796 17.6491 16.1893 17.4393C16.3991 17.2296 16.6664 17.0867 16.9574 17.0288C17.2483 16.9709 17.5499 17.0006 17.824 17.1142C18.0981 17.2277 18.3324 17.42 18.4972 17.6666C18.662 17.9133 18.75 18.2033 18.75 18.5C18.75 18.8978 18.592 19.2794 18.3107 19.5607C18.0294 19.842 17.6478 20 17.25 20ZM21.75 17.75H20.1562C19.989 17.1063 19.613 16.5362 19.0871 16.129C18.5612 15.7218 17.9151 15.5006 17.25 15.5V12.5H21.75V17.75Z"
                                                        fill="white" />
                                                </svg>
                                            </span>
                                            <span className="menu-title">Orders</span>
                                        </Link>
                                    </li>
                                    <li className="nav-item ">
                                        <Link to={"/Admin/Payment"} className="nav-link">
                                            <span className="icon-bg">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25"
                                                    viewBox="0 0 24 25" fill="none">
                                                    <g clip-path="url(#clip0_15840_1902)">
                                                        <path
                                                            d="M20 8.5H4V6.5H20V8.5ZM18 2.5H6V4.5H18V2.5ZM10.312 21.6L7.012 18.3L8.412 16.9L10.312 18.8L15.612 13.5L17.012 14.9L10.312 21.6Z"
                                                            fill="white" />
                                                        <path
                                                            d="M22 10.5H2C1.46957 10.5 0.960859 10.7107 0.585786 11.0858C0.210714 11.4609 0 11.9696 0 12.5L0 22.5C0 23.0304 0.210714 23.5391 0.585786 23.9142C0.960859 24.2893 1.46957 24.5 2 24.5H22C22.5304 24.5 23.0391 24.2893 23.4142 23.9142C23.7893 23.5391 24 23.0304 24 22.5V12.5C24 11.9696 23.7893 11.4609 23.4142 11.0858C23.0391 10.7107 22.5304 10.5 22 10.5ZM22 22.5H2V12.5H22V22.5Z"
                                                            fill="white" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_15840_1902">
                                                            <rect width="24" height="24" fill="white"
                                                                transform="translate(0 0.5)" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>

                                            </span>
                                            <span className="menu-title">Payment</span>
                                        </Link>
                                    </li>
                                
                                    <li className="nav-item ">
                                        <Link to={"/Admin/Notifications"} className="nav-link">
                                            <span className="icon-bg">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    viewBox="0 0 24 24" fill="none">
                                                    <path
                                                        d="M5 19C4.71667 19 4.479 18.904 4.287 18.712C4.095 18.52 3.99934 18.2827 4 18C4 17.7167 4.096 17.479 4.288 17.287C4.48 17.095 4.71734 16.9993 5 17H6V10C6 8.61667 6.41667 7.38734 7.25 6.312C8.08334 5.23667 9.16667 4.53267 10.5 4.2V3.5C10.5 3.08334 10.646 2.729 10.938 2.437C11.23 2.145 11.584 1.99934 12 2C12.4167 2 12.771 2.146 13.063 2.438C13.355 2.73 13.5007 3.084 13.5 3.5V4.2C14.8333 4.53334 15.9167 5.23767 16.75 6.313C17.5833 7.38834 18 8.61734 18 10V17H19C19.2833 17 19.521 17.096 19.713 17.288C19.905 17.48 20.0007 17.7173 20 18C20 18.2833 19.904 18.521 19.712 18.713C19.52 18.905 19.2827 19.0007 19 19H5ZM12 22C11.45 22 10.979 21.804 10.587 21.412C10.195 21.02 9.99934 20.5493 10 20H14C14 20.55 13.804 21.021 13.412 21.413C13.02 21.805 12.5493 22.0007 12 22ZM8 17H16V10C16 8.9 15.6083 7.95834 14.825 7.175C14.0417 6.39167 13.1 6 12 6C10.9 6 9.95834 6.39167 9.175 7.175C8.39167 7.95834 8 8.9 8 10V17Z"
                                                        fill="white" />
                                                </svg>
                                            </span>
                                            <span className="menu-title">Notifications</span>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={"/"} className="nav-link" >
                                            <span className="icon-bg">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    viewBox="0 0 24 24" fill="none">
                                                    <path
                                                        d="M15.325 16.275C15.1417 16.0583 15.05 15.8127 15.05 15.538C15.05 15.2633 15.1417 15.034 15.325 14.85L17.175 13H10C9.71667 13 9.479 12.904 9.287 12.712C9.095 12.52 8.99934 12.2827 9 12C9 11.7167 9.096 11.479 9.288 11.287C9.48 11.095 9.71734 10.9993 10 11H17.175L15.325 9.15C15.125 8.95 15.025 8.71234 15.025 8.437C15.025 8.16167 15.125 7.92434 15.325 7.725C15.5083 7.525 15.7377 7.425 16.013 7.425C16.2883 7.425 16.5173 7.51667 16.7 7.7L20.3 11.3C20.4 11.4 20.471 11.5083 20.513 11.625C20.555 11.7417 20.5757 11.8667 20.575 12C20.575 12.1333 20.5543 12.2583 20.513 12.375C20.4717 12.4917 20.4007 12.6 20.3 12.7L16.7 16.3C16.4833 16.5167 16.2457 16.6127 15.987 16.588C15.7283 16.5633 15.5077 16.459 15.325 16.275ZM5 21C4.45 21 3.979 20.804 3.587 20.412C3.195 20.02 2.99934 19.5493 3 19V5C3 4.45 3.196 3.979 3.588 3.587C3.98 3.195 4.45067 2.99934 5 3H11C11.2833 3 11.521 3.096 11.713 3.288C11.905 3.48 12.0007 3.71734 12 4C12 4.28334 11.904 4.521 11.712 4.713C11.52 4.905 11.2827 5.00067 11 5H5V19H11C11.2833 19 11.521 19.096 11.713 19.288C11.905 19.48 12.0007 19.7173 12 20C12 20.2833 11.904 20.521 11.712 20.713C11.52 20.905 11.2827 21.0007 11 21H5Z"
                                                        fill="white" />
                                                </svg>
                                            </span>
                                            <span className="menu-title">Logout</span>
                                        </Link>
                                    </li>

                                </ul>
                            </nav>

                        </div>
                    </div>


                    <div className="main-panel ">
                        <div className="header_dash">
                            <div className="head_title">
                             
                            </div>
                            <div className="user_hd">

                                <button className="btn notif_btn"><NotificationsNoneIcon></NotificationsNoneIcon> <span></span></button>
                                {/*<div className=" dropdown">
                                     <a className="btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        <span> <img src={User} /></span>
                                    </a>

                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                        <li><a className="dropdown-item" href="#">My Profile</a></li>
                                        <li><a className="dropdown-item" href="#">Logout</a></li>
                                    </ul> 
                                   
                                </div>*/}
                                <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic" className='btn'>
                                       
                                        <span> <img src={User} /></span>
                                <span>Alex Cooper</span>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">My Profile</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Logout</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>

                        </div>
                        <div className="content-wrapper">
                    <div className="dashboard_inner">
                        <div className="heading_bx">
                            <h3>Personal Information</h3>
                           
                        </div>
                        <div className="Profile_info">
                            <div className="cover_prof">
                                <img src={cover01} alt=""/>
                                <div className="cover_details">
                                    <div className="user">
                                        <img src={user_p01} alt=""/>
                                    </div>
                                    <h3>John Thomas</h3>
                                    <p>Supplier</p>
                                    <p><span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none">
                                                <path
                                                    d="M20.6201 8.45C19.5701 3.83 15.5401 1.75 12.0001 1.75C12.0001 1.75 12.0001 1.75 11.9901 1.75C8.4601 1.75 4.4201 3.82 3.3701 8.44C2.2001 13.6 5.3601 17.97 8.2201 20.72C9.2801 21.74 10.6401 22.25 12.0001 22.25C13.3601 22.25 14.7201 21.74 15.7701 20.72C18.6301 17.97 21.7901 13.61 20.6201 8.45ZM12.0001 13.46C10.2601 13.46 8.8501 12.05 8.8501 10.31C8.8501 8.57 10.2601 7.16 12.0001 7.16C13.7401 7.16 15.1501 8.57 15.1501 10.31C15.1501 12.05 13.7401 13.46 12.0001 13.46Z"
                                                    fill="#292D32" />
                                            </svg></span><span>Toronto, CA</span></p>

                                </div>
                            </div>
                            <div className="Contact_info">
                                <ul>
                                    <li>
                                        <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15" fill="none">
                                                <path d="M17.2449 2.36492C17.2449 1.423 16.4742 0.652344 15.5323 0.652344H1.83171C0.889799 0.652344 0.119141 1.423 0.119141 2.36492V12.6404C0.119141 13.5823 0.889799 14.3529 1.83171 14.3529H15.5323C16.4742 14.3529 17.2449 13.5823 17.2449 12.6404V2.36492ZM15.5323 2.36492L8.68201 6.64635L1.83171 2.36492H15.5323ZM15.5323 12.6404H1.83171V4.07749L8.68201 8.35893L15.5323 4.07749V12.6404Z" fill="#673821"></path>
                                              </svg>
                                        </span>
                                            <span>johnthomas@gmail.com</span>
                                        </li>
                                   
                                    <li><span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                        <path d="M19.5664 21.138C19.7281 21.138 19.8979 21.1338 20.0758 21.1253C20.2537 21.1169 20.4235 21.105 20.5852 21.0894V15.4132L15.7337 14.4429L12.9199 17.2568C11.6908 16.5129 10.5627 15.6315 9.53546 14.6127C8.50824 13.5939 7.65535 12.5023 6.97678 11.338L9.74213 8.54835L8.84461 3.67261H3.16837C3.13602 3.83433 3.11985 4.00413 3.11985 4.18202V4.69142C3.11985 6.77756 3.58463 8.8113 4.51417 10.7927C5.44372 12.774 6.67276 14.5325 8.2013 16.0682C9.72984 17.6045 11.4845 18.8335 13.4652 19.7553C15.4459 20.6771 17.4796 21.138 19.5664 21.138ZM6.055 9.49439C5.78008 8.8637 5.56985 8.22492 5.42431 7.57806C5.27876 6.93119 5.16556 6.27624 5.0847 5.61321H7.24362L7.65599 7.8934L6.055 9.49439ZM14.7392 18.1786L16.3644 16.5533L18.6446 17.0142V19.1489C17.9816 19.1003 17.3224 18.9952 16.6671 18.8335C16.0119 18.6718 15.3692 18.4535 14.7392 18.1786Z" fill="#673821"></path>
                                      </svg>
                                        </span>
                                        <span>+1 665 183 4627</span>
                                    </li>
                                </ul>

                            </div>

                        </div>
                        <div className="heading_bx mt-3">
                            <h3>business Information</h3>
                         
                        </div>
                        <div className="Profile_info">
                            <div className="cover_prof">
                                <img src={cover02} alt=""/>
                                <div className="cover_details">
                                    <div className="user">
                                        <img src={user_p02} alt=""/>
                                    </div>
                                    <h3>Montreal Baole </h3>
                                   
                                    <p><span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none">
                                                <path
                                                    d="M20.6201 8.45C19.5701 3.83 15.5401 1.75 12.0001 1.75C12.0001 1.75 12.0001 1.75 11.9901 1.75C8.4601 1.75 4.4201 3.82 3.3701 8.44C2.2001 13.6 5.3601 17.97 8.2201 20.72C9.2801 21.74 10.6401 22.25 12.0001 22.25C13.3601 22.25 14.7201 21.74 15.7701 20.72C18.6301 17.97 21.7901 13.61 20.6201 8.45ZM12.0001 13.46C10.2601 13.46 8.8501 12.05 8.8501 10.31C8.8501 8.57 10.2601 7.16 12.0001 7.16C13.7401 7.16 15.1501 8.57 15.1501 10.31C15.1501 12.05 13.7401 13.46 12.0001 13.46Z"
                                                    fill="#292D32" />
                                            </svg></span><span>Toronto, CA</span></p>

                                </div>
                            </div>
                            <div className="Contact_info">
                                <ul>
                                    <li>
                                        <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
  <path d="M22.9181 12.5921C22.9196 14.64 22.3174 16.6429 21.1868 18.3505C20.0563 20.0581 18.4475 21.3945 16.5615 22.1928C14.6756 22.991 12.5962 23.2157 10.5833 22.8387C8.57041 22.4617 6.71327 21.4998 5.24405 20.0732C3.77482 18.6465 2.7587 16.8184 2.32269 14.8175C1.88669 12.8165 2.05014 10.7314 2.79263 8.82286C3.53511 6.91429 4.82369 5.2669 6.49727 4.08662C8.17086 2.90635 10.1552 2.24555 12.2023 2.18683C12.3993 2.16136 12.5987 2.16136 12.7957 2.18683C15.5053 2.26219 18.0786 3.39125 19.9688 5.33404C21.859 7.27684 22.9171 9.8815 22.9181 12.5921ZM9.01413 20.8395C9.23693 20.9333 9.46281 21.018 9.69176 21.0934C8.32703 18.7249 7.6134 16.0375 7.62334 13.3039H3.5707C3.70292 14.9375 4.28022 16.5035 5.23988 17.832C6.19955 19.1605 7.50489 20.2007 9.01413 20.8395ZM4.2457 9.10789C3.87658 9.97923 3.64958 10.9041 3.57334 11.8474H7.62334C7.61511 9.1303 8.31824 6.45842 9.66281 4.09736C9.44439 4.17017 9.22816 4.25175 9.01413 4.3421C6.86675 5.25219 5.15698 6.96101 4.2457 9.10789ZM15.9168 11.8474C15.8844 10.8266 15.7695 9.81014 15.5733 8.80789C15.3815 7.7825 15.0665 6.78405 14.6352 5.8342C14.047 4.58157 13.3075 3.76446 12.6654 3.64078C12.5545 3.63912 12.4435 3.63912 12.3325 3.64078C11.6904 3.76446 10.951 4.58157 10.3628 5.83552C9.93197 6.78542 9.61742 7.78388 9.42597 8.8092C9.22986 9.81102 9.11501 10.827 9.08255 11.8474H15.9168ZM14.6352 19.3158C15.0665 18.3659 15.3815 17.3675 15.5733 16.3421C15.769 15.3402 15.8834 14.3242 15.9154 13.3039H9.08386C9.1163 14.3247 9.23115 15.3412 9.42728 16.3434C9.6188 17.3683 9.93335 18.3663 10.3641 19.3158C11.0049 20.6789 11.8233 21.5263 12.501 21.5263C13.1786 21.5263 13.997 20.6789 14.6365 19.3158H14.6352ZM20.7562 16.0763C21.1295 15.1947 21.3574 14.2584 21.4312 13.3039H17.376C17.3865 16.0384 16.6728 18.7268 15.3075 21.096C15.5365 21.0206 15.7632 20.9355 15.9878 20.8408C18.1349 19.931 19.8447 18.2227 20.7562 16.0763ZM15.9878 4.3421C15.7735 4.25165 15.5558 4.16957 15.3352 4.09604C16.6799 6.45706 17.383 9.12897 17.3747 11.846H21.4286C21.2912 10.2183 20.7118 8.65905 19.7529 7.33658C18.7941 6.01411 17.4922 4.97869 15.9878 4.3421Z" fill="#333BA4"/>
</svg>
                                        </span>
                                            <span>www.montrealboale.com</span>
                                        </li>
                                     <li>
                                        <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12 12C12.55 12 13.021 11.804 13.413 11.412C13.805 11.02 14.0007 10.5493 14 10C14 9.45 13.804 8.979 13.412 8.587C13.02 8.195 12.5493 7.99933 12 8C11.45 8 10.979 8.196 10.587 8.588C10.195 8.98 9.99933 9.45067 10 10C10 10.55 10.196 11.021 10.588 11.413C10.98 11.805 11.4507 12.0007 12 12ZM12 19.35C14.0333 17.4833 15.5417 15.7873 16.525 14.262C17.5083 12.7367 18 11.3827 18 10.2C18 8.38333 17.4207 6.896 16.262 5.738C15.1033 4.58 13.6827 4.00067 12 4C10.3167 4 8.89567 4.57933 7.737 5.738C6.57833 6.89667 5.99933 8.384 6 10.2C6 11.3833 6.49167 12.7377 7.475 14.263C8.45833 15.7883 9.96667 17.484 12 19.35ZM12 22C9.31667 19.7167 7.31267 17.596 5.988 15.638C4.66333 13.68 4.00067 11.8673 4 10.2C4 7.7 4.80433 5.70833 6.413 4.225C8.02167 2.74167 9.884 2 12 2C14.1167 2 15.9793 2.74167 17.588 4.225C19.1967 5.70833 20.0007 7.7 20 10.2C20 11.8667 19.3373 13.6793 18.012 15.638C16.6867 17.5967 14.6827 19.7173 12 22Z" fill="#333BA4"/>
</svg>
                                        </span>
                                            <span>Modern House Suites No. 187, Toronto, CA</span></li>
                          
                                    <li>
                                       <div>
                                        <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M15 5C13.906 5 13 5.906 13 7V8H4V26H28V8H19V7C19 5.906 18.094 5 17 5H15ZM15 7H17V9H15V7ZM6 10H13V11H19V10H26V24H6V10ZM16 12C13.8 12 12 13.8 12 16C12.001 16.533 12.1091 17.0603 12.3178 17.5508C12.5265 18.0412 12.8316 18.4847 13.215 18.855C12.5345 19.3116 11.9766 19.9284 11.5904 20.6512C11.2042 21.3739 11.0014 22.1805 11 23H13C13 21.332 14.332 20 16 20C17.668 20 19 21.332 19 23H21C20.9986 22.1805 20.7958 21.3739 20.4096 20.6512C20.0234 19.9284 19.4655 19.3116 18.785 18.855C19.1684 18.4847 19.4735 18.0412 19.6822 17.5508C19.8909 17.0603 19.999 16.533 20 16C20 13.8 18.2 12 16 12ZM16 14C17.117 14 18 14.883 18 16C18 17.117 17.117 18 16 18C14.883 18 14 17.117 14 16C14 14.883 14.883 14 16 14Z" fill="#333BA4"/>
</svg>
                                            </span>
                                            <span>Industry license.jpg</span>
                                       </div>
                                        <label for="Choose" className="Choose_file">
                                            <input type="file" name="" id="Choose" className="form-control"/>
                                            <span>Choose File</span>
                                        </label>
                                    </li>
                                </ul>

                            </div>

                        </div>
                        <div className="heading_bx mt-3">
                            <h3>Portfolio</h3>
                          
                        </div>
                        <div className="Portfolio_wrapp">
                            <ul>
                                <li><img src={Portfolio01} alt=""/> <h3>Backpacks</h3></li>
                                <li><img src={Portfolio04} alt=""/> <h3>Wallet</h3></li>
                                <li><img src={Portfolio03} alt=""/> <h3>Handbags</h3></li>
                                <li><img src={Portfolio02} alt=""/><h3>Belts</h3></li>
                            </ul>
            
                        </div>

                        <div className="btn_grp_com ">
                            <button className="btn Delete_bg">Delete Account</button>
                            <button className="btn bg_btn">UPDATE ACCOUNT</button>
                            <button className="btn">Save</button>
                        </div>

                    </div>



                </div>
                    </div>
                </div>
            </div>
        </>
    );
};