import React from 'react';
import Header from '../base/header/Header';
import Footer from '../base/footer/Footer';
import Subscribe from '../base/subscribe/Subscribe';
import Breadcrumbs from '../base/Breadcrumbs';
import Cart from './Cart';

const CartPage = () => {
    return (
        <div>
            <Header />
            <Breadcrumbs title={'SHOPPING CART'} />
            <Cart />
            <Subscribe />
            <Footer />
        </div>
    );
};

export default CartPage;
