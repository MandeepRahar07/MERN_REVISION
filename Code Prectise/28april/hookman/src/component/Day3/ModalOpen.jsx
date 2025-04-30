import React, { useState } from 'react';
import './ModalOpen.css'; // We'll define styles here

function ModalOpen() {
    const [show, setShow] = useState(false);

    const toggleModal = () => setShow(!show);

    return (
        <div>
            <h2>Modal Open or Close</h2>
            <button onClick={toggleModal}>{show ? "Hide" : "Show"}</button>

            {show && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <button className="close-btn" onClick={toggleModal}>×</button>
                        <h2>Hello Man</h2>
                        <p>You are doing great buddy</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ModalOpen;
