import React from 'react';

const OrderInfo = () => {
    return (
        <div class="cart__right">
            <div class="cart__address">
                <div class="cart__address__title">
                    SHIPPING ADRESS
                </div>
                <div class="cart__address__form">
                    <input type="text" name="country" id="country" class="cart__address__input"
                        placeholder="Bangladesh" />
                    <input type="text" name="region" id="region" class="cart__address__input" placeholder="State" />
                    <input type="text" name="zip" id="zip" class="cart__address__input" placeholder="Postcode / Zip" />
                    <button type="submit" class="cart__address__button">GET A QUOTE</button>
                </div>
            </div>
            <div class="cart__amount_card">
                <p class="cart__amount_card__subtotal">
                    <span>SUB TOTAL</span><span>$900</span>
                </p>
                <p class="cart__amount_card__total">
                    <span>GRAND TOTAL</span><span class="cart__amount_card__total__price">$900</span>
                </p>
                <hr class="cart__amount_card__line" />
                <a href="#" class="cart__amount_card__button">PROCEED TO CHECKOUT</a>
            </div>
        </div>
    );
}

export default OrderInfo;
