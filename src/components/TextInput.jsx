import React from 'react';

export default ({
    name,
    value,
    onChange,
}) => (
    <div>
        <label className="textInputLabel">
            <span className="textInputLabelText">{name}</span>
            <input 
                className="textInput" 
                type="text"
                value={value}
                onChange={onChange}

            />
        </label>
    </div>
)
