import React, { useState } from 'react'

function ShowHidePassword() {
    const [show, setShow] = useState(false);

    const ToggalShowHide = () => {
        setShow(!show)
    }

    return (
        <div>
            <div>
                <h1>Show Hide Password</h1>
            </div>
            <div>
                <label htmlFor=""> Passoword</label>
                <input type={show ? "password" : "text"}

                />
            </div>
            <div>
                <button onClick={ToggalShowHide}>{show ? "Hide" : "Show"}</button>
            </div>
        </div>
    )
}

export default ShowHidePassword