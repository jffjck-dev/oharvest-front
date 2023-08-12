import React from 'react';
import PropTypes from 'prop-types';
import {useFetch} from '../../hooks/useFetch.js';
import Notification from '../../components/live-info/Notification.jsx';
import CropPlan from '../../components/crop/crop-plan/CropPlan.jsx';
import CropTable from '../../components/crop/crop-table/CropTable.jsx';
import Loading from '../../components/ui/loading/Loading.jsx';
import Error from '../../components/ui/error/Error.jsx';

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