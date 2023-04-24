import React from 'react';
import PropTypes from 'prop-types';

import './Particularity.scss';


//Particularity and description of each product
const Particularity = ({description}) => {
    return (
        <div className='particularity'>
            <h2 className='particularity__title' >Particularités et description</h2>
            <p className='particularity__description' >{description}</p>
        </div>
    );
};

// Props validation
Particularity.propTypes = {
    description: PropTypes.string.isRequired,
};

export default Particularity;