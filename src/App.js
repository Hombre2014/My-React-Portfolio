import React from 'react';

import './App.scss';
import { Navbar } from './components';
import { About, Footer, Header, Skills, Testimonial, Work } from './container';

const App = () => (
  <div className="app">
    <Navbar />
    <Header />
    <About />
    <Work />
    <Skills />
    <Testimonial />
    <Footer />
  </div>
);

export default App;
