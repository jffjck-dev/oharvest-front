import React from 'react';
import PropTypes from 'prop-types';

import './Variety.scss';


//Variety for each product
const Variety = ({name}) => { //!feature !!!!!!!!!!!!!!!!!!!!

    return (
        <div className='variety'>
            <h2 className='variety__title' >Nos variétés</h2>
            <h3 className='variety__name'>{name}</h3>
            {/* <p className='variety__description'>{feature}</p> */}
        </div>
    );
};

// Props validation
Variety.propTypes = {
    name: PropTypes.string,
    /* feature: PropTypes.string.isRequired, */ //! props !!!!!!!!!!!!!!!!!!
};

export default Variety;