import React from 'react';
import PropTypes from 'prop-types';
import {useFetch} from '../../hooks/useFetch.js';
import {Link, useParams} from 'react-router-dom';
import Banner from './Banner/Banner';
import Availablity from './Availablity/Availablity';
import CalendarHarvest from './CalendarHarvest/CalendarHarvest';
import RecipeProduct from './RecipeProduct/RecipeProduct';
import Particularity from './Particularity/Particularity';
import Variety from './Variety/Variety';
import Tips from './Tips/Tips';
import Loading from '../UI/Loading/Loading';
import Notification from '../Notification/Notification.jsx';

import './ProductPage.scss';

/**
 * Page displaying product image, harvesting calendar, varieties, recipes, tips and tricks
 * @param url {string} API URL
 * @param config {object} config authorization headers
 * @returns {JSX.Element}
 */
const ProductPage = ({url, config}) => {
    const { id } = useParams();
    const {data, isLoading, hasError} = useFetch(url + `/products/${id}`, config);

    return (
        <>
            {isLoading && <Loading />}
            {(!isLoading && !hasError) && data && (
                <>
                    <div className="button-container">
                        <Link to={'/products'}>
                            <button
                                className="products-page__button"
                                title="revenir à l'inventaire des produits"
                                aria-label="revenir à l'inventaire des produits"
                            >
                                précédent
                            </button>
                        </Link>
                    </div>
                    <Notification />
                    <h2 className="crop-page__page-title">Fiche Produit</h2>
                    <Banner name={data.name} image={data.image} />
                    <Availablity tag={data.isAvailable} />
                    <CalendarHarvest startingDate={data.harvestBeginAt} endingDate={data.harvestEndAt} />
                    {(data.category && data.category.name !== 'Fleur') && <RecipeProduct name={data.name} />}
                    <Particularity description={data.description} />
                    <h3 className="crop-page__page-title">Liste des variétés</h3>
                    {data.variety.length === 0 && (
                        <p className="recipe__not-exist">Il n&apos;y a pas encore de variétés répertoriées !</p>
                    )}
                    {(data.variety.length > 0) &&
                        data.variety.map((item) => (
                            <Variety key={item.id} nameVariety={item.name} descVariety={item.description} />
                        ))}
                    <Tips tip={data.tip} />
                    <div className="button-container">
                        <Link to={'/products'}>
                            <button
                                className="products-page__button"
                                title="revenir à l'inventaire des produits"
                                aria-label="revenir à l'inventaire des produits"
                            >
                                précédent
                            </button>
                        </Link>
                    </div>
                </>
            )}
        </>
    );
};

ProductPage.propTypes = {
    url: PropTypes.string.isRequired,
    config: PropTypes.object.isRequired,
};

export default ProductPage;