import React from 'react';
import Header from '../base/header/Header';
import Footer from '../base/footer/Footer';
import Subscribe from '../base/subscribe/Subscribe';
import RegFormSection from './RegFormSection';
import Breadcrumbs from '../base/Breadcrumbs';

const RegistrationPage = () => {
    return (
        <div>
            <Header />
            <Breadcrumbs title={'REGISTRATION'} />
            <RegFormSection />
            <Subscribe />
            <Footer />
        </div>
    );
};

export default RegistrationPage;
