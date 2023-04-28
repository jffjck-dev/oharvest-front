import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CropPlan from './CropPlan/CropPlan';
import CropTable from './CropTable/CropTable';
import Loading from '../UI/Loading/Loading';
import Error from '../UI/Error/Error';

import './CropPage.scss';
import Notification from '../Notification/Notification.jsx';

const CropPage = () => {
    const [plots, setPlots] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    const url = 'http://kevin-hesse-server.eddi.cloud/api';

    useEffect(() => {
        setTimeout(() => {
            axios
                .get(url + '/plots/products')
                .then((response) => {
                    const newArray = response.data.filter(plot => plot.products.length > 0);
                    setPlots(newArray);
                    setIsLoading(false);
                })
                .catch((err) => {
                    console.log(err);
                    setError(true);
                    setIsLoading(false);
                });
        }, 3000);
    }, []);

    return (
        <section>
            <Notification />
            <h2 className="crop-page__page-title">Plan de la Cueillette</h2>
            {isLoading && <Loading />}
            {error && <Error />}
            {(!isLoading && !error) &&
            <>
                <CropPlan data={plots} />
                <CropTable data={plots} />
            </>}
        </section>
    );
};

export default CropPage;