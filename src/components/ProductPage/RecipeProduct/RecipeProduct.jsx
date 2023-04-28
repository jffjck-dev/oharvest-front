import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import './RecipeProduct.scss';
import Loading from '../../UI/Loading/Loading.jsx';
import Error from '../../UI/Error/Error.jsx';

/**
 * Section with the recipe card.
 * @param name {string} product name used as an ingredient in a recipe
 * @returns {JSX.Element}
 */
const RecipeProduct = ({name}) => {
    const [recipes, setRecipes] = useState([]);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            const fetchData = async () => {
                try {
                    const response = await axios.get('http://antoineperal-server.eddi.cloud/recipe');
                    setRecipes(response.data);
                    setIsLoading(false);
                } catch (error) {
                    console.error('Erreur lors de la récupération des recettes : ' , error);
                    setError(true);
                    setIsLoading(false);
                }
            };
            fetchData();
        }, 3000);

    }, []);

    const filteredRecipes = recipes.filter(recipe =>
        recipe.ingredient.some(ingredient => ingredient.label === name)
    );

    return (
        <section className='recipe'>
            <h3 className='recipe__title'>Liste des recettes</h3>
            {isLoading && <Loading />}
            {error && <Error />}
            {(!error && !isLoading) && <ul className="recipe__list">
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
