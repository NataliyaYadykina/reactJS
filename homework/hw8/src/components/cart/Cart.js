import React from 'react';
import Order from './Order';
import OrderInfo from './OrderInfo';

const Cart = () => {
    return (
        <section class="cart center">
            <Order />
            <OrderInfo />
        </section>
    );
}

export default Cart;
