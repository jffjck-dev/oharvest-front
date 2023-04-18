import React from 'react';
import PropTypes from 'prop-types';

import './Particularity.scss';


//Particularity and description of each product
const Particularity = ({feature}) => {
    return (
        <div className='particularity'>
            <h2 className='particularity__title' >Particularités et description</h2>
            <p className='particularity__description' >{feature}</p>
        </div>
    );
};

// Props validation
Particularity.propTypes = {
    feature: PropTypes.string.isRequired,
};

export default Particularity;