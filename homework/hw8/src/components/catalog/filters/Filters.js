import React from 'react';
import CategoriesFilter from './CategoriesFilter';
import TrendingFilter from './TrendingFilter';
import SizeFilter from './SizeFilter';
import PriceFilter from './PriceFilter';

const Filters = ({ onSizeFilterChange }) => {
    return (
        <div className="products__filters">
            <CategoriesFilter />
            <div className="description__filters">
                <TrendingFilter />
                <SizeFilter onSizeFilterChange={onSizeFilterChange} />
                <PriceFilter />
            </div>
        </div>
    );
}

export default Filters;
