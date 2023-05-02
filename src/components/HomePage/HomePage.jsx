import React from 'react';
import PropTypes from 'prop-types';
import {useFetch} from '../../hooks/useFetch.js';
import Carousel from '../UI/Carousel/Carousel.jsx';
import Welcome from './Welcome/Welcome';
import ContactSection from './ContactSection/ContactSection';
import Loading from '../UI/Loading/Loading';
import Notification from '../Notification/Notification.jsx';
import Error from '../UI/Error/Error';

/**
 * Page element when landing on the website
 * @param url {string} API URL to fetch data
 * @param config {object} config headers authorization
 * @returns {JSX.Element}
 */
const Home = ({url, config}) => {
    const {data, isLoading, hasError} = useFetch(url + '/products/available', config);
    console.log(data);
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