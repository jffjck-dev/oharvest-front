import React, { useState } from 'react';
import { useFetch } from '../../hooks/useFetch.js';
import Carousel from '../UI/Carousel/Carousel.jsx';
import Notification from '../Notification/Notification.jsx';
import Loading from '../UI/Loading/Loading';
import Error from '../UI/Error/Error';

import './ProductsListPage.scss';
import PropTypes from 'prop-types';

/**
 * Page listing all products (possibility to filter according to their availability)
 * @param url {string} API url used to fetch data
 * @returns {JSX.Element}
 */
const ProductsListPage = ({url}) => {
    const [nbProductsPerCarousel, setNbProductsPerCarousel] = useState(4);
    const [isFilterOn, setIsFilterOn] = useState(false);

    const { data: products, isLoading, hasError } = useFetch(url + '/products');
    const { data: onlyAvailableProducts} = useFetch(url + '/products/available');
    const { data: categories} = useFetch(url + '/categories');

    const filterProducts = () => {
        if (!isFilterOn) {
            setIsFilterOn(true);
            setNbProductsPerCarousel(2);
        } else {
            setIsFilterOn(false);
            setNbProductsPerCarousel(4);
        }
    };

    return (
        <>
            <Notification />
            <h2 className="products-list__page-title">Inventaire des produits</h2>
            {(!isLoading && !hasError) && onlyAvailableProducts && <button className="products-list-page__button" onClick={filterProducts}>
                se limiter aux produits de saison
            </button>}
            {isLoading && <Loading />}
            {hasError && <Error />}
            {(!isLoading && !hasError) && categories && categories.map(category => (<Carousel key={category.id} category={category} products={isFilterOn ? onlyAvailableProducts : products} nbCardsToSHow={nbProductsPerCarousel}/>))}
        </>
    );
};

ProductsListPage.propTypes = {
    url: PropTypes.string.isRequired,
};

export default ProductsListPage;
