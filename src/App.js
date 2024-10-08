import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './style.scss';

import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Products from './components/products/AllProduct';
import ProductDetails from './components/productDetails/ProductDetails';
import Login from './components/login/Login';

function App() {
  return (
    <Router>
      <Header />
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/login' element={<Login />}/>
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
