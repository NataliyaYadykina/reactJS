import React from 'react';
import Header from '../base/header/Header';
import Footer from '../base/footer/Footer';
import Subscribe from '../base/subscribe/Subscribe';
import Features from '../base/features/Features';
import Breadcrumbs from '../base/Breadcrumbs';
import ProductsForCatalog from './ProductsForCatalog';

const CatalogPage = () => {
    return (
        <div>
            <Header />
            <Breadcrumbs title={'NEW ARRIVALS'} />
            <ProductsForCatalog />
            <Features />
            <Subscribe />
            <Footer />
        </div>
    );
};

export default CatalogPage;
