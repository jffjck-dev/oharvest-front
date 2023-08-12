import React from 'react';
import PropTypes from 'prop-types';

import './Variety.scss';

/**
 * Section element about one product variety
 * @param nameVariety {string} name of the product variety
 * @param descVariety {string} description of the product variety
 * @returns {JSX.Element}
 */
const Variety = ({nameVariety, descVariety}) => {

    return (
        <div className='variety'>
            <h3 className='variety__name'>{nameVariety}</h3>
            <p className='variety__description'>{descVariety}</p>
        </div>
    );
};

Variety.propTypes = {
    nameVariety: PropTypes.string,
    descVariety: PropTypes.string,
};

export default Variety;