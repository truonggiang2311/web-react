import "./App.css";
import ListProductPage from "./ProductListPage/ProductListPage";
import ShoppingCartPage from "./ShoppingCartPage/ShoppingCartPage";
import ProductDetailPage from "./ProductDetailPage/ProductDetailPage";
import React, { useState, useEffect } from "react";
import HomePage from "./HomePage/HomePage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

function App() {
  const [loading, setLoading] = useState(false);
  let [color, setColor] = useState("#36D7B7");

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <>
      {loading ? (
        <div className="text-center">
          <ClipLoader color={color} loading={loading} size={50} />
        </div>
      ) : (
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
                <div
                  className="collapse navbar-collapse"
                  id="navbarNavAltMarkup"
                >
                  <div className="navbar-nav">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/"
                    >
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
              <Route path="/product/:id" children={<ProductDetailPage />} />
              <Route path="/product">
                <ListProductPage />
              </Route>
              <Route path="/shopping-cart">
                <ShoppingCartPage />
              </Route>
              <Route path="/">
                <HomePage />
              </Route>
            </Switch>
          </div>
        </Router>
      )}
    </>
  );
}

export default App;
