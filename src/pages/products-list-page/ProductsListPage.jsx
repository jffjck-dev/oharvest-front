import React, { useState } from 'react';
import { useFetch } from '../../hooks/useFetch.js';
import Carousel from '../../components/ui/carousel/Carousel.jsx';
import Notification from '../../components/live-info/Notification.jsx';
import Loading from '../../components/ui/loading/Loading.jsx';
import Error from '../../components/ui/error/Error.jsx';

import './ProductsListPage.scss';
import SeoMetadata from '../../components/ui/seo/SeoMetadata.jsx';

/**
 * Page listing all products (possibility to filter according to their availability)
 * @returns {JSX.Element}
 */
const ProductsListPage = () => {
    const pageInfo = 'Produits de saison - La cueillette O\'Harvest';

    const [nbProductsPerCarousel, setNbProductsPerCarousel] = useState(4);
    const [isFilterOn, setIsFilterOn] = useState(false);

    const url = import.meta.env.VITE_HARVEST_API_URL;
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
            <SeoMetadata title={pageInfo} content={pageInfo} />
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

export default ProductsListPage;
