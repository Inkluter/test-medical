import React from 'react';

export default ({
    name,
    value,
    onChange,
}) => (
    <div>
        <label 
            className="checkboxLabel"
            
        >
            <span className="checkboxText">{name}</span>
            <input 
                type="checkbox"
                checked={value}
                onChange={onChange}
                readOnly
            />            
        </label>
    </div>
)
