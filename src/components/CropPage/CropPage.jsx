import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CropPlan from './CropPlan/CropPlan';
import CropTable from './CropTable/CropTable';
import Loading from '../UI/Loading/Loading';

import './CropPage.scss';

const CropPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [plots, setPlots] = useState([]);

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
                .catch((err) => console.log(err));
        }, 3000);
    }, []);

    return (
        <section>
            <h2 className="crop-page__page-title">Plan de la Cueillette</h2>
            {isLoading && <Loading />}
            {!isLoading && 
            <>
                <CropPlan data={plots} />
                <CropTable data={plots} />
            </>}
        </section>
    );
};

export default CropPage;