import { useEffect, useState } from 'react';
import CropPlan from './CropPlan/CropPlan';
import CropTable from './CropTable/CropTable';
import axios from 'axios';

import { plots } from '../plots';

import './CropPage.scss';

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
                console.log(response.data);
                setPlots(response.data);
            })
            .catch((err) => console.log(err));
            setIsLoading(false);
        }, 3000);
    }, [])

    return (
        <section>
            {isLoading && <p>Chargement...</p>}
            {!isLoading && 
            <>
                <CropPlan data={plots}/>
                <CropTable data={plots}/>
            </>}
        </section>
    );
};

export default CropPage;