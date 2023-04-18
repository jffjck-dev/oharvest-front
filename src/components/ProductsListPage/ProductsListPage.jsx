import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import HighlightBar from '../HighlightBar/HighlightBar';
import Message from '../Message/Message';

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
            })
            .catch((err) => console.log(err));
        setIsLoading(false);
    }, []);

    return (
        <div>
            {isLoading && (<p>Chargement...</p>)}
            {!isLoading && <Message />}
            {!isLoading && categories.map(category => (<HighlightBar key={category.id} category={category} products={products} />))}
        </div>
    );
};

export default ProductsListPage;