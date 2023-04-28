import React from 'react';
import PropTypes from 'prop-types';

import './RecipeProduct.scss';


//Section with the recipe link
const RecipeProduct = ({name}) => {
    return (
        <div className='recipe-product'>
            <h2 className='recipe-product__title' >Pour quelques idées recettes...</h2>
            <a className='recipe-product__link' href={`https://www.marmiton.org/recettes/index/ingredient/${name}`} rel="noopener noreferrer" target={'_blank'}>Cliquez ici</a>
        </div>
    );
};

// Props validation
RecipeProduct.propTypes = {
    name: PropTypes.string.isRequired,
};

export default RecipeProduct;