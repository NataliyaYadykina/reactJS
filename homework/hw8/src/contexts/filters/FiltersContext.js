// import React, { createContext, useState, useEffect } from 'react';
// import productsData from '../../data/Products.json';

// const FiltersContext = createContext();
// const { Provider } = FiltersContext;

// const FiltersProvider = ({ children }) => {
//     const [filters, setFilters] = useState({
//         size: [], // Здесь можно добавить другие фильтры
//     });
//     const [filteredProducts, setFilteredProducts] = useState(productsData);

//     const updateFilters = (filterName, selectedValues) => {
//         setFilters(prevFilters => ({
//             ...prevFilters,
//             [filterName]: selectedValues,
//         }));
//     };

//     // Функция для фильтрации данных по текущим фильтрам
//     const applyFilters = () => {
//         let filteredData = [...productsData];

//         if (filters.size.length > 0) {
//             filteredData = filteredData.filter(product => filters.size.includes(product.size));
//         }
//         // Добавьте здесь другие фильтры по необходимости

//         setFilteredProducts(filteredData);
//     };

//     // Вызываем applyFilters каждый раз, когда filters изменяются
//     useEffect(() => {
//         applyFilters();
//     }, [filters]);

//     return (
//         <Provider value={{ filters, updateFilters, filteredProducts }}>
//             {children}
//         </Provider>
//     );
// };

// export { FiltersContext, FiltersProvider };
