import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Carousel from '../UI/Carousel/Carousel.jsx';
import Notification from '../Notification/Notification.jsx';
import Loading from '../UI/Loading/Loading';
import Error from '../UI/Error/Error';

import './ProductsListPage.scss';

const ProductsListPage = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [nbProductsPerCarousel, setNbProductsPerCarousel] = useState(4);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    let url = 'http://kevin-hesse-server.eddi.cloud/api';

    useEffect(() => {
        axios
            .get(url + '/products')
            .then((response) => {
                setProducts(response.data);
            })
            .catch((err) => {
                console.log(err);
                setError(true);
                setIsLoading(false);
            });

        axios
            .get(url + '/categories')
            .then((response) => {
                setCategories(response.data);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setError(true);
                setIsLoading(false);
            });
    }, []);

    const filterProducts = () => {
        const onlyAvailableProducts = products.filter(product => product.isAvailable === true );
        setProducts(onlyAvailableProducts);
        setNbProductsPerCarousel(2);
    };
    

    return (
        <>
            <Notification />
            <h2 className="products-list__page-title">Inventaire des produits</h2>
            {(!isLoading && !error) && <button className="products-list-page__button" onClick={filterProducts}>
                se limiter aux produits de saison
            </button>}
            {isLoading && <Loading />}
            {error && <Error />}
            {(!isLoading && !error) && categories.map(category => (<Carousel key={category.id} category={category} products={products} nbCardsToSHow={nbProductsPerCarousel}/>))}
        </>
    );
};

export default ProductsListPage;
