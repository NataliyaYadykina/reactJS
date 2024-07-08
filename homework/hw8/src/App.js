import React from 'react';
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';
import HomePage from './components/home/HomePage';
import CartPage from './components/cart/CartPage';
import CatalogPage from './components/catalog/CatalogPage';
import ProductPage from './components/product/ProductPage';
import RegistrationPage from './components/registration/RegistrationPage';
import NotFoundPage from './components/base/NotFoundPage';
import { ProductDataProvider } from './contexts/ProductDataContext';
import { Provider } from 'react-redux';
import store from './store';
import './styles/style.css'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <ProductDataProvider>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/catalog/page/:pageNumber" element={<CatalogPage />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/registration" element={<RegistrationPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </ProductDataProvider>
      </Router>
    </Provider>
  );
}

export default App;
