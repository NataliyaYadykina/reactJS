import React, { useContext } from 'react';
import { ProductDataContext } from '../../../contexts/ProductDataContext';
import HeaderParametersFilter from './HeaderParametersFilter';
import CheckboxListFilter from './CheckboxListFilter';

const SizeFilter = ({ onSizeFilterChange }) => {
    const { products } = useContext(ProductDataContext);

    // Получаем уникальные размеры из данных о продуктах
    const uniqueSizes = [...new Set(products.map(product => product.size))];

    return (
        <details className="description__filters__item">
            <HeaderParametersFilter title={'Size'} />
            <CheckboxListFilter
                parameterName="size"
                parameterValues={uniqueSizes}
                onFilterChange={onSizeFilterChange}
            />
        </details>
    );
}

export default SizeFilter;
