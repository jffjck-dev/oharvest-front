import React from 'react';
import PropTypes from 'prop-types';
import {useFetch} from '../../hooks/useFetch.js';
import Carousel from '../../components/ui/carousel/Carousel.jsx';
import Welcome from '../../components/home/welcome/Welcome.jsx';
import ContactSection from '../../components/home/contact-section/ContactSection.jsx';
import Loading from '../../components/ui/loading/Loading.jsx';
import Notification from '../../components/live-info/Notification.jsx';
import Error from '../../components/ui/error/Error.jsx';

/**
 * Page element when landing on the website
 * @param url {string} API URL to fetch data
 * @param config {object} config headers authorization
 * @returns {JSX.Element}
 */
const Home = ({url, config}) => {
    const {data, isLoading, hasError} = useFetch(url + '/products/available', config);

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

Home.propTypes = {
    url: PropTypes.string.isRequired,
    config: PropTypes.object.isRequired,
};

export default Home;