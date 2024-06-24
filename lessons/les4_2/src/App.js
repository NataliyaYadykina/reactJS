import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ArticleList from './components/ArticleList';
import ArticleDetail from './components/ArticleDetail';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetails';

const articles = [
  { id: 1, title: 'Title 1', content: 'Content 1' },
  { id: 2, title: 'Title 2', content: 'Content 2' },
  { id: 3, title: 'Title 3', content: 'Content 3' },
];

const products = [
  { id: 1, name: 'Product 1', description: 'Description 1', price: '100 руб.' },
  { id: 2, name: 'Product 2', description: 'Description 2', price: '200 руб.' },
  { id: 3, name: 'Product 3', description: 'Description 3', price: '300 руб.' },
  { id: 4, name: 'Product 4', description: 'Description 4', price: '400 руб.' },
  { id: 5, name: 'Product 5', description: 'Description 5', price: '500 руб.' },
  { id: 6, name: 'Product 6', description: 'Description 6', price: '600 руб.' },
  { id: 7, name: 'Product 7', description: 'Description 7', price: '700 руб.' },
  { id: 8, name: 'Product 8', description: 'Description 8', price: '800 руб.' },
  { id: 9, name: 'Product 9', description: 'Description 9', price: '900 руб.' },
];

const App = () => (
  <Router>
    <div>
      <Routes>
        <Route path="/" element={<ArticleList articles={articles} />} />
        <Route path="/articles/:id" element={<ArticleDetail articles={articles} />} />
        <Route path="/page/:pageNumber" element={<ProductList products={products} />} />
        <Route path="/products" element={<ProductList products={products} />} />
        <Route path="/product/:productId" element={<ProductDetail products={products} />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </div>
  </Router>
);

export default App;
