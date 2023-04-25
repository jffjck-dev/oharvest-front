import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Carousel from '../UI/Carousel/Carousel.jsx';
import Message from '../Message/Message';
import Loading from '../UI/Loading/Loading';
import Error from '../UI/Error/Error';

import './ProductsListPage.scss';

const ProductsListPage = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
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

    return (
        <>
            <Message />
            <h2 className="products-list__page-title">Inventaire des produits</h2>
            {isLoading && <Loading />}
            {error && <Error />}
            {(!isLoading && !error) && categories.map(category => (<Carousel key={category.id} category={category} products={products} />))}
        </>
    );
};

export default ProductsListPage;
