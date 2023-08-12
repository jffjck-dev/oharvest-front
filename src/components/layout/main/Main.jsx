import React from 'react';
import CropPage from '../../../pages/crop-page/CropPage.jsx';
import HomePage from '../../../pages/home-page/HomePage.jsx';
import ProductPage from '../../../pages/product-page/ProductPage.jsx';
import ProductsListPage from '../../../pages/products-list-page/ProductsListPage.jsx';
import FormPage from '../../FormPage/FormPage.jsx';
import ReservationPage from '../../ReservationPage/ReservationPage.jsx';
import NotFound from '../../../pages/page-404/NotFound.jsx';
import { Routes, Route } from 'react-router-dom';

import './Main.scss';

/**
 * main section of a page. Content displayed depends on path parameter (base on React Router)
 * @returns {JSX.Element}
 */
const Main = () => {
    const APIurl = import.meta.env.VITE_HARVEST_API_URL;

    const config= {
        headers: { Authorization: `${import.meta.env.VITE_HARVEST_API_TOKEN}` }
    };

    return (
        <main className="content">
            <Routes>
                <Route path="/" element={<HomePage url={APIurl} config={config} />} />
                <Route path="/map" element={<CropPage url={APIurl} config={config} />} />
                <Route path="/products" element={<ProductsListPage url={APIurl} config={config} />} />
                <Route path="/products/:id" element={<ProductPage url={APIurl} config={config} />} />
                <Route path="/reservation" element={<ReservationPage url={APIurl} config={config} />} />
                <Route path="/reservation/inscription" element={<FormPage url={APIurl} config={config} />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </main>
    );
};

export default Main;