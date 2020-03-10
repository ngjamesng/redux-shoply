import React from 'react';
import { Route } from 'react-router-dom';

import NavBar from './NavBar';
import Inventory from './Inventory';
import Cart from './Cart';

import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact to='/'>
        <Inventory />
      </Route>
      {/* <Route exact to='/cart'>
        <Cart />
      </Route> */}
    </div>
  );
}

export default App;
