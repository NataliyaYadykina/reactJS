import React from 'react';
import HeaderParametersFilter from './HeaderParametersFilter';

const PriceFilter = () => {
    return (
        <details className="description__filters__item">
            <HeaderParametersFilter title={'PRICE'} />
            <div className="description__filters__item-show">
                <form action="#">
                    <label>1000<input type="range" name="range_price" id="range_price" min="1000"
                        max="100000" />100000</label>
                </form>
            </div>
        </details>
    );
}

export default PriceFilter;
