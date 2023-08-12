import React, { useState } from 'react';
import { useFetch } from '../../hooks/useFetch.js';
import Carousel from '../../components/UI/Carousel/Carousel.jsx';
import Notification from '../../components/Notification/Notification.jsx';
import Loading from '../../components/UI/Loading/Loading.jsx';
import Error from '../../components/UI/Error/Error.jsx';

import './ProductsListPage.scss';
import PropTypes from 'prop-types';

/**
 * Page listing all products (possibility to filter according to their availability)
 * @param url {string} API url used to fetch data
 * @param config {object} config authorization headers
 * @returns {JSX.Element}
 */
const ProductsListPage = ({url, config}) => {
    const [nbProductsPerCarousel, setNbProductsPerCarousel] = useState(4);
    const [isFilterOn, setIsFilterOn] = useState(false);

    const { data: products, isLoading, hasError } = useFetch(url + '/products', config);
    const { data: onlyAvailableProducts} = useFetch(url + '/products/available', config);
    const { data: categories} = useFetch(url + '/categories', config);

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
            {(!isLoading && !hasError) && onlyAvailableProducts && (
                <div>
                    <input className="products-list__checkbox" type="checkbox" id="filter" name="filter" onClick={filterProducts} title="cliquer pour n'afficher que les produits disponible" aria-label="cliquer pour n'afficher que les produits disponible" />
                    <label className="products-list__checkbox-label" htmlFor="filter">produits <strong style={{fontWeight: 700}}>disponibles</strong> uniquement</label>
                </div>)
            }
            {isLoading && <Loading />}
            {hasError && <Error />}
            {(!isLoading && !hasError) && categories && categories.map(category => (<Carousel key={category.id} category={category} products={isFilterOn ? onlyAvailableProducts : products} nbCardsToSHow={nbProductsPerCarousel}/>))}
        </>
    );
};

ProductsListPage.propTypes = {
    url: PropTypes.string.isRequired,
    config: PropTypes.object.isRequired,
};

export default ProductsListPage;
