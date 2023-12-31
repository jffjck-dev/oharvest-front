import React from 'react';
import {useFetch} from '../../hooks/useFetch.js';
import {Link, useParams} from 'react-router-dom';
import Banner from '../../components/product/banner/Banner.jsx';
import Availability from '../../components/product/availability/Availablity.jsx';
import CalendarHarvest from '../../components/product/calendar-harvest/CalendarHarvest.jsx';
import RecipeProduct from '../../components/product/recipe-product/RecipeProduct.jsx';
import Particularity from '../../components/product/particularity/Particularity.jsx';
import Variety from '../../components/product/variety/Variety.jsx';
import Tips from '../../components/product/tips/Tips.jsx';
import Loading from '../../components/ui/loading/Loading.jsx';
import Notification from '../../components/live-info/Notification.jsx';

import './ProductPage.scss';
import SeoMetadata from '../../components/ui/seo/SeoMetadata.jsx';
import img from '../../assets/carrot-in-plate.png';
import {FaHandPointRight} from 'react-icons/fa';

/**
 * Page displaying product image, harvesting calendar, varieties, recipes, tips and tricks
 * @returns {JSX.Element}
 */
const ProductPage = () => {
    const pageInfo = 'Produit de saison - La cueillette O\'Harvest';

    const { id } = useParams();
    const url = import.meta.env.VITE_HARVEST_API_URL;
    const {data, isLoading, hasError} = useFetch(url + `/products/${id}`);

    return (
        <>
            <SeoMetadata title={pageInfo} content={pageInfo} />
            {isLoading && <Loading />}
            {(!isLoading && !hasError) && data && (
                <>
                    
                    <Notification />
                    <Link to={'/products'}>
                        <div className="button-container">
                            <button
                                className="products-page__button"
                                title="revenir à l'inventaire des produits"
                                aria-label="revenir à l'inventaire des produits">précédent
                            </button>
                        </div>
                    </Link>
                    <h2 className="crop-page__page-title">Fiche Produit</h2>
                    <Banner name={data.name} image={data.image} />
                    <Availability tag={data.isAvailable} />
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

export default ProductPage;