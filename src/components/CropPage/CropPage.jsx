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
 * @param url API URL to fetch plots data
 * @returns {JSX.Element}
 */
const CropPage = ({url}) => {
    const {data, isLoading, hasError} = useFetch(url + '/plots/products');
    console.log(data);

    return (
        <section>
            <Notification />
            <h2 className="crop-page__page-title">Plan de la Cueillette</h2>
            {isLoading && <Loading />}
            {hasError && <Error />}
            {(!isLoading && !hasError) && data &&
            <>
                <CropPlan plots={data} />
                <CropTable plots={data} />
            </>}
        </section>
    );
};

CropPage.propTypes = {
    url: PropTypes.string.isRequired,
};
export default CropPage;