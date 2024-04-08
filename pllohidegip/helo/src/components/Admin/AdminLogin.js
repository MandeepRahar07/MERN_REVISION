
import React from 'react';
import LoginBg from '../../assets/images/bg.png';
export const AdminLogin = () => {
    return (
        <>
            <div className="signup_page">
                <div className="bg_inner">
                    <img src={LoginBg} className="media_img" />
                    <div className="card_success">
             <div className="bg_inner bg_Create">
                <h5>Admin Login</h5>
                <div className="form">
                    <div className="frm_grp">
                        <label for="">Email ID</label>
                        <input type="text" name="" id="" className="form-control" placeholder="admin@pllohide.ca " />
                    </div>
                       <div className="frm_frog">
                        <div className="otp_grp">
                            <input type="text" placeholder="*" className="form-control"/>
                            <input type="text" placeholder="*" className="form-control"/>
                            <input type="text" placeholder="*" className="form-control"/>
                            <input type="text" placeholder="*" className="form-control"/>
                        </div>
                        <div className="pass_rest">
                            00:14 <a href="#">Resend OTP</a>
                        </div>
                    </div>
                    <div className="btn_grp text-center">
                        <button className="btn">Login</button>
                    </div>
                </div>
           
               
             </div>

            </div>
               <a  className="btn_home" to={"/"}>Home</a>
          </div>
            </div>
        </>
    );
};
