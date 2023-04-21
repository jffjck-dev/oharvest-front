import React, { useEffect, useState } from 'react';
import axios from 'axios';
import HighlightBarHome from '../HighlightBarHome/HighlightBarHome';
import Welcome from './Welcome/Welcome';
import ContactSection from './ContactSection/ContactSection';
import Loading from '../UI/Loading/Loading';

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
            {isLoading && <Loading />}
            {!isLoading && <HighlightBarHome products={products} />}
            <Welcome />
            <ContactSection />
        </>
    );
};

export default Home;