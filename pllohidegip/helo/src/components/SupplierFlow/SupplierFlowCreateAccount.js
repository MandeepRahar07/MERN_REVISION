
import React from 'react';
import LoginBg from '../../assets/images/bg.png';
import Designer from '../../assets/images/Designer.png';
import Supplier from '../../assets/images/Supplier.png';
import Manufacturer from '../../assets/images/Manufacturer.png';
export const SupplierFlowCreateAccount = () => {
    return (
        <>
            <div class="signup_page">
                <div class="bg_inner">
                    <img src={LoginBg} className="media_img" />
                    <div class="card_success">
                        <div class="bg_inner bg_account">
                            <h5>Choose your account</h5>
                            <div class="list_account">
                                <label for="Designer">
                                    <input type="radio" name="account" id="Designer" />
                                    <span>
                                        <div class="card_acc"> <img src={Designer} alt="" /> </div>
                                        <p>Designer</p>
                                    </span>
                                </label>
                                <label for="Supplier">
                                    <input type="radio" name="account" id="Supplier" />
                                    <span>
                                        <div class="card_acc"> <img src={Supplier} alt="" /> </div>
                                        <p>Supplier</p>
                                    </span>
                                </label>
                                <label for="Manufacturer">
                                    <input type="radio" name="account" id="Manufacturer" />
                                    <span>
                                        <div class="card_acc"> <img src={Manufacturer} alt="" /> </div>
                                        <p>Manufacturer</p>
                                    </span>
                                </label>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};
