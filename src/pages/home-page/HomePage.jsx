import React from 'react';
import {useFetch} from '../../hooks/useFetch.js';
import Carousel from '../../components/ui/carousel/Carousel.jsx';
import Welcome from '../../components/home/welcome/Welcome.jsx';
import ContactSection from '../../components/home/contact-section/ContactSection.jsx';
import Loading from '../../components/ui/loading/Loading.jsx';
import Notification from '../../components/live-info/Notification.jsx';
import Error from '../../components/ui/error/Error.jsx';

/**
 * Page element when landing on the website
 * @returns {JSX.Element}
 */
const Home = () => {
    const url = import.meta.env.VITE_HARVEST_API_URL;
    const {data, isLoading, hasError} = useFetch(url + '/products/available');

    return (
        <>
            {<Notification/>}
            {isLoading && <Loading />}
            {hasError && <Error />}
            {data && <Carousel products={data} title="Produits disponibles" />}
            <Welcome />
            <ContactSection />
        </>
    );
};

export default Home;