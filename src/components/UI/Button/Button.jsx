import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = ({text, modifier, onClick}) => {
    return (
        <button type="button" className={modifier ? `button --${modifier}` : 'button'} onClick={onClick}>{text}</button>
    );
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    modifier: PropTypes.string,
    onClick: PropTypes.func.isRequired,
};

export default Button;