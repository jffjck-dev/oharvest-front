import React from 'react';
import PropTypes from 'prop-types';
import {useFetch} from '../../../hooks/useFetch.js';

import './RecipeProduct.scss';
import Loading from '../../UI/Loading/Loading.jsx';
import Error from '../../UI/Error/Error.jsx';

/**
 * Section with the recipe card.
 * @param name {string} product name used as an ingredient in a recipe
 * @returns {JSX.Element}
 */
const RecipeProduct = ({name}) => {
    const foodAPIurl= import.meta.env.VITE_FOOD_API_URL;
    const { data: recipes, hasError, isLoading } = useFetch(foodAPIurl);

    const filteredRecipes = recipes?.filter(recipe =>
        recipe.ingredient.some(ingredient => ingredient.label === name)
    );

    return (
        <section className='recipe'>
            <h3 className='recipe__title'>Liste des recettes</h3>
            {isLoading && <Loading />}
            {hasError && <Error />}
            {(!hasError && !isLoading) && filteredRecipes && <ul className="recipe__list">
                {filteredRecipes.length > 0 ? (
                    filteredRecipes.map((recipe, index) => (
                        <li className="recipe__list-card" key={index}>
                            <img className="recipe__list-card-img" alt={recipe.name}
                                src={`http://antoineperal-server.eddi.cloud${recipe.picture}`}></img>
                            <h3 className="recipe__list-card-title">{recipe.label}</h3>
                            <p className="recipe__list-card-difficulty">Difficulté: {recipe.difficulty}</p>
                            <p className="recipe__list-card-time">Temps de préparation: {recipe.time}</p>
                            <a className="recipe__list-card-link" href="/">La recette c&apos;est par ici</a>
                        </li>
                    ))
                ) : (
                    <p className="recipe__not-exist">Il n&apos;y a pas encore de recettes pour ce produit !</p>
                )}
            </ul>
            }
        </section>
    );
};

RecipeProduct.propTypes = {
    name: PropTypes.string.isRequired,
};

export default RecipeProduct;
