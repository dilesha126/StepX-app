// src/App.js
import React from 'react';
import './App.css';
import Header from './command/Header';    
import Footer from './command/Footer';

import Home from './Pages/Home';
import About from './Pages/About';
import Men from './Pages/Men';
import Women from './Pages/Women';
import Collection from './Pages/Collection';
import ProductDetail from './Pages/ProductDetail';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />

        <main style={{ flex: 1 }}>
          <Routes>
            {/* Home Page → Puri Website Ek Saath Dikhegi */}
            <Route
              path="/"
              element={
                <>
                  <Home />
                  <About />
                  <Men />
                  <Women />
                  {/* <Collectio /> */}
                  {/* <Contact /> */}
                </>
              }
            />

            {/* Individual Sections (Future ke liye alag pages) */}
            <Route path="/about" element={<About />} />
            <Route path="/men" element={<Men />} />
            <Route path="/women" element={<Women />} />
            <Route path="/Collection" element={<Collection />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
           <Route path="/product/:slug" element={<ProductDetail />} />

            {/* return in Home page*/}
            <Route path="*" element={
              <>
                  <Home />
                  <About />
                  <Men />
                  <Women />
                  <Collection />
                  {/* <Contact /> */}
              </>
            } />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
    // Test for new build
  );
}

export default App;