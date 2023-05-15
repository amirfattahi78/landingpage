import React, { Component } from 'react';
import { Routes ,Route } from 'react-router-dom'; 

import Navbar from './components/Navbar';
// import Banner from './components/Banner';

// import Cards from './components/Cards';
// import Search from './components/Search';
// import Logos from "./components/Logos";
import Footer from "./components/Footer";
import Landing from './components/Landing';
import Products from "./components/Products";
import AboutUs from "./components/AboutUs";
class App extends Component {
  render() {
    return (
      <div>
       
       <Navbar />
       
       <Routes>
      <Route path="/Products" element={<Products />} />
      <Route path="/AboutUs" element={<AboutUs />} />
      <Route path="/" element= { <Landing/> } />
    </Routes>
    
        <Footer />
      </div>
    )
  }
}

export default App;
