import React from 'react';
import Header from '../base/header/Header';
import Footer from '../base/footer/Footer';
import Subscribe from '../base/subscribe/Subscribe';
import Top from './Top';
import Offers from './Offers';
import Features from '../base/features/Features';
import ProductsForHome from './ProductsForHome';

const HomePage = () => {
    return (
        <div>
            <Header />
            <Top />
            <Offers />
            <ProductsForHome />
            <Features />
            <Subscribe />
            <Footer />
        </div>
    );
};

export default HomePage;
