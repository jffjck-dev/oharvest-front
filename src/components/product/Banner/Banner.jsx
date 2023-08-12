import React from 'react';
import PropTypes from 'prop-types';

import './Banner.scss';

/**
 * Products image and title inside it
 * @param image {string} product image URN
 * @param name {string} product name
 * @returns {JSX.Element}
 */
const Banner = ({image, name}) => {
    return (
        <div className="banner">
            <div className="banner__img-container">
                <img className="banner__img" src= {`http://localhost:8000/images/${image}`} alt={name}></img>
                <div className="banner__title-container">
                    <h2 className="banner__title">{name}</h2>
                </div>
            </div>
        </div>
    );
};

Banner.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

export default Banner;