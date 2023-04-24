import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './ProductTag.scss';

const ProductTag = ({id, name, image}) => {
    return (
        <li className="product-tag" key={id}>
            <Link to={`/products/${id}`}>
                <img className="product-tag__img" src={`http://kevin-hesse-server.eddi.cloud/images/${image}`} alt={name}/>
                {name}
            </Link>
        </li>
    ); 
};

ProductTag.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    isAvailable: PropTypes.bool.isRequired,
    image: PropTypes.string.isRequired,
};

export default ProductTag;