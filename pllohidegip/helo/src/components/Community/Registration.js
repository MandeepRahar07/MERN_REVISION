import React from 'react';
 export const CommunityRegistration=()=>
{
    return(

<>


<header className="header_top bg_brd">
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <a className="navbar-brand" href="index.html">
                {/* <img src={require('./images/logo_w.svg')} alt="logo"/> */}
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">

                    </ul>
                    <div className="btn_grp">

                        <div className="dropdown user_login">
                            <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1"
                                data-bs-toggle="dropdown" aria-expanded="false">
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
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1"
                                style={{RIGHT: '0',LEFT: 'INITIAL'}}>
                                <li><a className="dropdown-item active" href="#">Profile</a></li>
                                <li><a className="dropdown-item" href="#">Logout</a></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </nav>
    </header>




    <section className="inr_bnnr_section">
        <img className="media_img" src={require ('../../assets/images/bn.png')}alt=""/>
        <div className="banner_content">
            <h3>Welcome to PlloHide </h3>
            <p>Please provide the following information</p>
        </div>
    </section>
    <section className="regist_wrapp">
        <div className="container">
            <div className="card_box">
                <div className="head">
                    <h3> Personal Information</h3>
                </div>
                <div className="inner_bdy">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="add_img">
                                <label for="up_img">
                                    <input type="file" name="" id="up_img"/>
                                    <img src={require ('../../assets/images/add_img.png')} alt=""/>
                                </label>

                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="frm_grp">
                                <label for="">Full Name</label>
                                <input type="text" name="" id="" className="form-control" placeholder="Wilson Wong"/>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="frm_grp">
                                <label for="">E-mail ID</label>
                                <input type="text" name="" id="" className="form-control"
                                    placeholder="wilsonwong@gmail.com"/>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="frm_grp">
                                <label for="">Mobile Number</label>
                                <input type="text" name="" id="" className="form-control" placeholder="+1 665 183 4627"/>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="frm_grp">
                                <label for="">Address</label>
                                <input type="text" name="" id="" className="form-control"
                                    placeholder="3645 Landon Street, Ontario"/>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="frm_grp arrow_select">
                                <label for="">province</label>
                                <select name="" className="form-control" id="">
                                    <option value="">Ontario</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="frm_grp arrow_select">
                                <label for="">Country</label>
                                <select name="" className="form-control" id="">
                                    <option value="">Canada</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="frm_grp">
                                <label for=""> ID Proof</label>
                                <div className="frm_upload">
                                    <a href="#">Industry_license.jpg</a>
                                    <div className="upload_bx">
                                        <input type="file" className="form-control" placeholder="Jonathan Dave" id="Upload"/>
                                        <label for="Upload" className="upload_btn">Choose File</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
           
            <div className="btn_grp_com">
                <button className="btn">cancel</button>
                <button className="btn">SUBMIT</button>
            </div>

        </div>

    </section>


</>

    );
}
