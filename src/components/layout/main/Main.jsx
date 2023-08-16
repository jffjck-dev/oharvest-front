import React from 'react';
import CropPage from '../../../pages/crop-page/CropPage.jsx';
import HomePage from '../../../pages/home-page/HomePage.jsx';
import ProductPage from '../../../pages/product-page/ProductPage.jsx';
import ProductsListPage from '../../../pages/products-list-page/ProductsListPage.jsx';
import FormPage from '../../../pages/booking-page/FormPage.jsx';
import ReservationPage from '../../../pages/educational-visit-page/ReservationPage.jsx';
import NotFound from '../../../pages/page-404/NotFound.jsx';
import { Routes, Route } from 'react-router-dom';

import './Main.scss';
import {Helmet} from 'react-helmet-async';

/**
 * main section of a page. Content displayed depends on path parameter (base on React Router)
 * @returns {JSX.Element}
 */
const Main = () => {
    return (
        <main className="content">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/map" element={<CropPage />} />
                <Route path="/products" element={<ProductsListPage />} />
                <Route path="/products/:id" element={<ProductPage />} />
                <Route path="/reservation" element={<ReservationPage />} />
                <Route path="/reservation/inscription" element={<FormPage />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </main>
    );
};

export default Main;