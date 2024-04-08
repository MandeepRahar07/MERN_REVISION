import React from 'react';
import { Button } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import LoginBg from '../../assets/images/bg.png';
export const SupplierFlowLogin = () => {
    return (
        <>
            <div className="signup_page">
                <div className="bg_inner">
                    <img src={LoginBg} alt="" className="media_img" />
                    <div className="card_success">
                        <div className="bg_inner bg_Create">
                            <h5 className="text-left">Welcome Back</h5>
                            <div className="form">
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
                                    <button className="btn">LOGIN</button>
                                </div>
                                <p className="text_botm">You don’t have an account ? <Link to={"/Signup"}>Signup</Link></p>


                            </div>


                        </div>

                    </div>
                   
                </div>
            </div>
        </>
    );
};
