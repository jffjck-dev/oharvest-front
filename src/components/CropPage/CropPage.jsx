import React from 'react';
import PropTypes from 'prop-types';
import {useFetch} from '../../hooks/useFetch.js';
import Notification from '../Notification/Notification.jsx';
import CropPlan from './CropPlan/CropPlan';
import CropTable from './CropTable/CropTable';
import Loading from '../UI/Loading/Loading';
import Error from '../UI/Error/Error';

import './CropPage.scss';

/**
 * Page element displaying harvest plot geolocalized map and a table listing products per plot
 * @param url {string} API URL to fetch plots data
 * @param config {object} config authorization headers
 * @returns {JSX.Element}
 */
const CropPage = ({url, config}) => {
    const {data: plots, isLoading, hasError} = useFetch(url + '/plots/products', config);

    const noEmptyPlots = plots?.filter(plot => plot.products.length > 0);

    return (
        <section>
            <Notification />
            <h2 className="crop-page__page-title">Plan de la Cueillette</h2>
            {isLoading && <Loading />}
            {hasError && <Error />}
            {(!isLoading && !hasError) && noEmptyPlots &&
            <>
                <CropPlan plots={noEmptyPlots} />
                <CropTable plots={noEmptyPlots} />
            </>}
        </section>
    );
};

CropPage.propTypes = {
    url: PropTypes.string.isRequired,
    config: PropTypes.object.isRequired,
};
export default CropPage;