// dependencies
import React from 'react';

// css
import './styles.css';

function CloseButtonPresetation(props) {
    const { onClick } = props;

    return (
        <div onClick={onClick} className="button-container">
            x
        </div>
    )
}

export default CloseButtonPresetation;