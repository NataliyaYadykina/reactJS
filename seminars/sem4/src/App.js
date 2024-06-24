import './App.css';
import Box from './components/Box';
import List from './components/List';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ArticleList from './components/ArticleList';
import ArticleDetail from './components/ArticleDetail';

const articles = [
  { id: 1, title: 'Title 1', content: 'Content 1' },
  { id: 2, title: 'Title 2', content: 'Content 2' },
  { id: 3, title: 'Title 3', content: 'Content 3' },
];

function App() {
  return (
    <div className="App">

      <h2>Task 1</h2>
      <Box>
        <h3>Hello</h3>
        <p>World</p>
        <p>!</p>
      </Box>
      <Box>
        <h3>Other text</h3>
        <button>Button</button>
      </Box>

      <h2>Task 2</h2>
      <div>
        <h3>List Component Example</h3>
        <List renderItems={renderItems} />
      </div>

      <h2>Task 3</h2>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<ArticleList articles={articles} />} />
            <Route path="/articles/:id" element={<ArticleDetail articles={articles} />} />
            {/* <Route path="/page/:pageNumber" element={<ProductList products={products} />} />
            <Route path="/products" element={<ProductList products={products} />} />
            <Route path="/product/:productId" element={<ProductDetail products={products} />} /> */}
            <Route path="*" element={<h1>404</h1>} />
          </Routes>
        </div>
      </Router>

    </div>
  );
}

// Функция для рендера элементов списка
const renderItems = () => {
  return [
    <span key="item1" style={{ color: 'blue' }}>Item 1</span>,
    <span key="item2" style={{ color: 'green' }}>Item 2</span>,
    <span key="item3" style={{ color: 'red' }}>Item 3</span>,
  ];
};

export default App;
