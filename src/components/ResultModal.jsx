import React from 'react';

export default ({
    isOpen,
    handleClose,
    result,
}) => isOpen && (
    <div className="resultModalHolder">
        <div className="resultModalBg" onClick={handleClose}></div>
        <div className="resultModal">
            <h3 className="resultModalHeader">Your Result:</h3>
            <div className="resultText">{result}</div>
            <button 
                className="button" 
                onClick={handleClose}
            >
                Close
            </button>
        </div>
    </div>
)
