
import React from 'react';
import LoginBg from '../../assets/images/bg.png';
import { Link } from 'react-router-dom';
export const SupplierFlowChooseAccount = () => {
    return (
        <>
            <div class="signup_page">
                <div class="bg_inner">
                    <img src={LoginBg} className="media_img" />
                    <div class="card_success">
                        <div class="bg_inner bg_Create">
                            <h5>Create Your Account</h5>
                            <div class="form">
                                <div class="frm_grp">
                                    <label for="">Full Name</label>
                                    <input type="text" name="" id="" class="form-control" placeholder="John Thomas" />
                                </div>
                                <div class="frm_grp">
                                    <label for="">Email ID</label>
                                    <input type="text" name="" id="" class="form-control" placeholder="johnthomas@gmail.com" />
                                </div>

                                <div class="frm_grp">
                                    <label for="">Mobile Number</label>
                                    <input type="text" name="" id="" class="form-control" placeholder="+1 665 183 4627" />
                                </div>

                                <div class="frm_frog">
                                    <div class="otp_grp">
                                        <input type="text" placeholder="*" class="form-control" />
                                        <input type="text" placeholder="*" class="form-control" />
                                        <input type="text" placeholder="*" class="form-control" />
                                        <input type="text" placeholder="*" class="form-control" />
                                    </div>
                                    <div class="pass_rest">
                                        00:14 <Link to={"#"}> Resend OTP</Link>
                                    </div>
                                </div>
                                <div class="btn_grp text-center">
                                    <button class="btn">SIGN UP</button>
                                </div>
                                <p class="text_botm">Already have an account? <Link to={"/"}>Login</Link></p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};
