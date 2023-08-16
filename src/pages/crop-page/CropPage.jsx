import React from 'react';
import {useFetch} from '../../hooks/useFetch.js';
import Notification from '../../components/live-info/Notification.jsx';
import CropPlan from '../../components/crop/crop-plan/CropPlan.jsx';
import CropTable from '../../components/crop/crop-table/CropTable.jsx';
import Loading from '../../components/ui/loading/Loading.jsx';
import Error from '../../components/ui/error/Error.jsx';

import './CropPage.scss';
import SeoMetadata from '../../components/ui/seo/SeoMetadata.jsx';

/**
 * Page element displaying harvest plot geolocalized map and a table listing products per plot
 * @returns {JSX.Element}
 */
const CropPage = () => {
    const pageInfo = 'Plan des parcelles - La cueillette O\'Harvest';
    const url = import.meta.env.VITE_HARVEST_API_URL;
    const {data: plots, isLoading, hasError} = useFetch(url + '/plots/products');

    const noEmptyPlots = plots?.filter(plot => plot.products.length > 0);

    return (
        <section>
            <SeoMetadata title={pageInfo} content={pageInfo}/>
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

export default CropPage;