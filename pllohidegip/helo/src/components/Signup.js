import React from 'react';
import { Button } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import LoginBg from '../assets/images/bg.png';
export const Signup = () => {
    return (
        <>
            <div className="signup_page">
                <div className="bg_inner">
                    <img src={LoginBg} alt="" className="media_img" />
                    <div className="card_success">
                        <div className="bg_inner bg_Create">
                            <h5>Create Your Account</h5>
                            <div className="form">
                                <div className="frm_grp">
                                    <label for="">Full Name</label>
                                    <input type="text" name="" id="" className="form-control" placeholder="John Thomas" />
                                </div>
                                <div className="frm_grp">
                                    <label for="">Email ID</label>
                                    <input type="text" name="" id="" className="form-control" placeholder="johnthomas@gmail.com" />
                                </div>

                                <div className="frm_grp">
                                    <label for="">Mobile Number</label>
                                    <input type="text" name="" id="" className="form-control" placeholder="+1 665 183 4627" />
                                </div>

                                <div className="frm_frog">
                                    <div className="otp_grp">
                                        <input type="text" placeholder="*" className="form-control" />
                                        <input type="text" placeholder="*" className="form-control" />
                                        <input type="text" placeholder="*" className="form-control" />
                                        <input type="text" placeholder="*" className="form-control" />
                                    </div>
                                    <div className="pass_rest">
                                        00:14 <a href="#">Resend OTP</a>
                                    </div>
                                </div>
                                <div className="btn_grp text-center">
                                    <button className="btn">SIGN UP</button>
                                </div>
                                <p className="text_botm">Already have an account? <Link to={"/"}>Login</Link></p>


                            </div>


                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};
