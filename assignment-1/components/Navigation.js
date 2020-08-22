import React, { useState, useEffect, Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CategoryPage from './CategoryPage';
import ProductPage from './ProductPage';
import '../css/navigation.css';
import Homepage from './Homepage';

function Navigation() {
  return (
    <>
      <Router>
      <div>
        <ul>
          <li className="home"> <Link to="/"></Link> </li>
          <li className="cart-logo"> <Link to="/cart/"></Link> </li>
          <li> <Link to="/">New Arrival</Link> </li>
          <li> <Link to="/">Best Seller</Link> </li>
          <li className="search"><input type="text" /></li>
        </ul>

        <Switch>
          <Route exact path="/">
            <Homepage></Homepage>
          </Route>
          <Route exact path="/cart">
            <> Cart </>
          </Route>
          <Route path="/category/:categoryId">
              <CategoryPage />
          </Route>
        </Switch>
      </div>
    </Router>
    </>
  )
}

export default Navigation;