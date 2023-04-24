import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Carousel from '../UI/Carousel/Carousel.jsx';
import Welcome from './Welcome/Welcome';
import ContactSection from './ContactSection/ContactSection';
import Loading from '../UI/Loading/Loading';
import Message from '../Message/Message';

const Home = () => {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    let url = 'http://kevin-hesse-server.eddi.cloud/api';

    useEffect(() => {
        setTimeout(() => {
            axios
                .get(url + '/products/available')
                .then((response) => {
                    setProducts(response.data);
                    setIsLoading(false);
                })
                .catch((err) => console.log(err));
        }, 3000);
    }, []);

    return (
        <>
            <Message />
            {isLoading && <Loading />}
            {!isLoading && <Carousel products={products} title="Produits disponibles" />}
            <Welcome />
            <ContactSection />
        </>
    );
};

export default Home;