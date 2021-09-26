import MenuLink from "./MenuLink";
import DropDownSearch from "../DropDownSearch/DropDownSearch";
import "./Menu.css"
import { debounce } from "lodash";
import { Collapse } from "bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function Menu() {
  const [inputValue, setInputValue] = useState("");
  const [productSearch, setProductSearch] = useState([]);
  const numberItems = useSelector((state) => state.cart.numberItems)

  function changeValue(e) {
    if (e.target.value !== "") {
      fetch(
        "https://product-list1409.herokuapp.com/products?q=" + e.target.value
      )
        .then((response) => response.json())
        .then((result) => {
          setProductSearch(result);
        });
    } else setProductSearch([]);
    setInputValue(e.target.value);
  }

  function search() {}

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light mb-0">
        <div className="container-fluid col-10 m-auto ps-0">
          <div className="navbar-brand pe-3">
            <MenuLink activeOnlyWhenExact={true} to="/" label="Apple" />
          </div>
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
              <div className="nav-link pe-3">
                <MenuLink
                  className="nav-link pe-3"
                  to="/iphone"
                  label="iPhone"
                />
              </div>
              <div className="nav-link pe-3">
                <MenuLink to="/ipad" label="iPad" />
              </div>
              <div className="nav-link pe-3">
                <MenuLink to="/mac" label="Mac" />
              </div>
              <div className="nav-link pe-3">
                <MenuLink to="/apple-watch" label="Apple Watch" />
              </div>
              <div className="nav-link pe-3">
                <MenuLink to="/airpods" label="AirPods" />
              </div>
              <div className="nav-link pe-3">
                <MenuLink to="/phu-kien" label="Phụ kiện" />
              </div>
              <div className="nav-link pe-3">
                <MenuLink to="/dich-vu" label="Dịch vụ" />
              </div>
              <div className="nav-link pe-3">
                <MenuLink to="/khuyen-mai" label="Khuyến mãi" />
              </div>
              <div className="nav-link pe-3">
                <MenuLink to="/tra-gop" label="Trả góp" />
              </div>

              <input
                onChange={debounce(changeValue, 500)}
                type="text"
                placeholder="Bạn muốn mua gì?"
              ></input>

              <button
                onClick={search}
                type="button"
                className="btn btn-light btn-sm me-4"
              >
                Search
              </button>

              <Link className="nav-link shopping-cart" to="/shopping-cart">
                <FontAwesomeIcon icon={faShoppingBag} size="lg" color="white" />
                <div className="number-shopping-cart text-center">{numberItems}</div>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div className="DropDownSearch">
        <DropDownSearch productSearch={productSearch} inputValue={inputValue} />
      </div>
    </>
  );
}
