import React from 'react';

const Button = ({ linkClassName, spanClassName, spanText }) => {
    return (
        <a href="https://newrepublique.com/work/" className={linkClassName} target="_blank" rel="noopener noreferrer">
            <span className={spanClassName}>
                {spanText}
            </span>
        </a>
    );
}

export default Button;