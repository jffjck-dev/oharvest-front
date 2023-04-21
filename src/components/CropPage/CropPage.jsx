import React, { useEffect, useState } from 'react';
import CropPlan from './CropPlan/CropPlan';
import CropTable from './CropTable/CropTable';
import axios from 'axios';

import './CropPage.scss';
import Loading from '../UI/Loading/Loading';

const CropPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [plots, setPlots] = useState([]);

    const url = 'http://kevin-hesse-server.eddi.cloud/api';

    const coordinates = [
        [[49.270339, 3.917509], [49.270723, 3.916921]],
        [[49.270453, 3.916957], [49.270847, 3.916137]],
        [[49.270643, 3.915252], [49.270899, 3.914704]]
    ];

    useEffect(() => {
        setTimeout(() => {
            axios
                .get(url + '/plots/products')
                .then((response) => {
                    response.data.forEach((plot, index) => {
                        plot.coordinate = coordinates[index];
                    });
                    setPlots(response.data);
                    setIsLoading(false);
                })
                .catch((err) => console.log(err));
        }, 3000);
    }, []);

    return (
        <section>
            {isLoading && <Loading />}
            {!isLoading && 
            <>
                <CropPlan data={plots}/>
                <CropTable data={plots}/>
            </>}
        </section>
    );
};

export default CropPage;