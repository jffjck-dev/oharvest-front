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
import Message from '../Message/Message.jsx';

/* 
|* Container component for the Product page(Banner/CalendarHArvest/Particularity/Variety/Tips)
*/
const ProductPage = () => {
    const [product, setProduct] = useState({});
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
                console.log(response.data);
                setProduct(response.data);
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
                <Message />
                <h2 className="crop-page__page-title">Fiche Produit</h2>
                <Banner name={product.name} image={product.image} />
                <CalendarHarvest startingDate={product.harvestBeginAt} endingDate={product.harvestEndAt} />
                <Particularity description={product.description} />
                {(product.variety.length !== []) && product.variety.map(item => <Variety key={item.id} nameVariety={item.name} descVariety={item.description} />)}
                <Tips tip={product.tip}/>
            </>)}
        </>
    );
};

export default ProductPage;