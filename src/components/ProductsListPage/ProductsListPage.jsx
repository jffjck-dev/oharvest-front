import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Carousel from '../UI/Carousel/Carousel.jsx';
import Message from '../Message/Message';
import Loading from '../UI/Loading/Loading';

const ProductsListPage = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    let url = 'http://kevin-hesse-server.eddi.cloud/api';

    useEffect(() => {
        axios
            .get(url + '/products')
            .then((response) => {
                setProducts(response.data);
            })
            .catch((err) => console.log(err));

        axios
            .get(url + '/categories')
            .then((response) => {
                setCategories(response.data);
                setIsLoading(false);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <>
            <Message />
            <h2 className="crop-page__page-title">Inventaire des produits</h2>
            {isLoading && <Loading />}
            {!isLoading && categories.map(category => (<Carousel key={category.id} category={category} products={products} />))}
        </>
    );
};

export default ProductsListPage;
