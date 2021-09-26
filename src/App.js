import "./App.css";
import ListProductPage from "./pages/ProductList/ProductListPage";
import ShoppingCartPage from "./pages/ShoppingCart/ShoppingCartPage";
import ProductDetailPage from "./pages/ProductDetail/ProductDetailPage";
import HomePage from "./pages/Home/HomePage";
import ServicePage from './pages/services/ServicePage';
import PhuKienPage from './pages/PhuKien/PhuKienPage';
import Menu from "./component/Menu/Menu";
import Footer from "./component/Footer/Footer";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {

  return (
    <Router>
      <div className="App container-fluid m-0 p-0">
      <Menu/>

        <Switch>
          <Route path="/products/:appleProduct/:slug/:id" children={<ProductDetailPage />} />
          <Route path="/products/:appleProduct">
            <ListProductPage />
          </Route>
          <Route path="/phu-kien">
            <PhuKienPage />
          </Route>
          <Route path="/dich-vu">
            <ServicePage />
          </Route>
          <Route path="/shopping-cart">
            <ShoppingCartPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
