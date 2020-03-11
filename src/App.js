import React from 'react';
import { Route } from 'react-router-dom';

import NavBar from './NavBar';
import Inventory from './Inventory';
import Cart from './Cart';

import './App.css';
import ProductDetails from './ProductDetails';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path='/'>
        <Inventory />
      </Route>
      <Route exact path='/cart'>
        <Cart />
      </Route>
      <Route exact path='/products/:id'>
        <ProductDetails />
      </Route>
    </div>
  );
}

export default App;
