import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Carousel from '../UI/Carousel/Carousel.jsx';
import Welcome from './Welcome/Welcome';
import ContactSection from './ContactSection/ContactSection';
import Loading from '../UI/Loading/Loading';
import Message from '../Message/Message';
import Error from '../UI/Error/Error';

const Home = () => {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    let url = 'http://kevin-hesse-server.eddi.cloud/api';

    useEffect(() => {
        setTimeout(() => {
            axios
                .get(url + '/products/available')
                .then((response) => {
                    setProducts(response.data);
                    setIsLoading(false);
                })
                .catch((err) => {
                    console.log(err);
                    setIsLoading(false);
                    setError(true);
                });
        }, 3000);
    }, []);

    return (
        <>
            <Message />
            {isLoading && <Loading />}
            {error && <Error />}
            {(!isLoading && !error) && <Carousel products={products} title="Produits disponibles" />}
            <Welcome />
            <ContactSection />
        </>
    );
};

export default Home;