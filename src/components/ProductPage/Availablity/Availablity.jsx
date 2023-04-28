import React from 'react';
import PropTypes from 'prop-types';

import './Availablity.scss';


//The tag whick shwo the availablity or not of the product
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

// Props validation
Availablity.propTypes = {
    tag: PropTypes.bool.isRequired,
};

export default Availablity;