import React from 'react';
import PropTypes from 'prop-types';

import './Availablity.scss';

/**
 * Tag element which display the availability or not of the product
 * @param tag {string} tag availability
 * @returns {JSX.Element}
 */
const Availablity = ({tag}) => {
    const availablityStatus = tag ? 'Produit disponible' : 'Produit indisponible';
    const availablityStatusClass = tag ? 'tag__available' : 'tag__unavailable';
    
    return (
        <div className='tag'>
            <h3 className={availablityStatusClass}>
                {availablityStatus}
            </h3>
        </div>
    );
};

Availablity.propTypes = {
    tag: PropTypes.bool.isRequired,
};

export default Availablity;