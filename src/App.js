import "./App.css";
import ListProduct from "./ProductListPage/App";
import ShoppingCart from "./ShoppingCartPage/App";
import ProductDetail from "./ProductDetailPage/ProductDetail";
import React from "react";
import Home from "./HomePage/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container-fluid m-0 p-0">
        <nav className="navbar navbar-expand-lg navbar-light row">
          <div className="container-fluid col-10 m-auto">
            <Link className="navbar-brand" to="/">
              Apple
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
                <Link className="nav-link" to="/product">
                  Product
                </Link>
                <Link className="nav-link" to="/shopping-cart">
                  Shopping Cart
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/product/:slug" children={<ProductDetail />} />
          <Route path="/product">
            <ListProduct />
          </Route>
          <Route path="/shopping-cart">
            <ShoppingCart />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
