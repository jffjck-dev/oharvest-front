import React from 'react';
import PropTypes from 'prop-types';

import './Variety.scss';


//Variety for each product
const Variety = ({nameVariety, descVariety}) => {

    return (
        <div className='variety'>
            <h3 className='variety__name'>{nameVariety}</h3>
            <p className='variety__description'>{descVariety}</p>
        </div>
    );
};

// Props validation
Variety.propTypes = {
    nameVariety: PropTypes.string,
    descVariety: PropTypes.string,
};

export default Variety;