import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Banner from './Banner/Banner';
import CalendarHarvest from './CalendarHarvest/CalendarHarvest';
import Particularity from './Particularity/Particularity';
import Variety from './Variety/Variety';
import Tips from './Tips/Tips';
import Loading from '../UI/Loading/Loading';

import './ProductPage.scss';

/* 
|* Container component for the Product page(Banner/CalendarHArvest/Particularity/Variety/Tips)
*/
const ProductPage = () => {
    const [product, setProduct] = useState({});
    const [varieties, setVarieties] = useState({});
    const [isLoading, setisLoading] = useState(true);
    const { id } = useParams();
    const url = 'http://kevin-hesse-server.eddi.cloud/api';

    useEffect(() => {
        const fetchData = async () => {
            try { 
                const response = await axios.get(url + `/products/${id}`, { 
                    headers: {
                        'accept': 'application/json',
                    },
                });
                setProduct(response.data);
                setisLoading(false);
            } catch (error) {
                console.error('Erreur lors de la récupération des données:', error);
            }
        };
        fetchData();
    }, [id]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url + `/varieties/${id}`, {
                    headers: {
                        'accept': 'application/json',
                    },
                }); 
                console.log(response.data);
                setVarieties(response.data);
                setisLoading(false);
            } catch (error) {
                console.error('Erreur lors de la récupération des données:', error);
            }
        };
        fetchData();
    }, [id]);

    
    return (
        <>
            {isLoading && <Loading /> }
            {!isLoading && (<>
                <Banner name={product.name} image={product.image} />
                <CalendarHarvest startingDate={product.harvestBeginAt} endingDate={product.harvestEndAt} />
                <Particularity feature={product.feature} />
                <Variety name={varieties.name} />
                <Tips trick={product.trick}/>
            </>)}
        </>
    );
};

export default ProductPage;