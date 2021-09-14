import ProductList from "./ProductList";
import { useState, useEffect } from "react";
import "./ProductListPage.css";
import ClipLoader from "react-spinners/ClipLoader";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [numberResult, setNumberResult] = useState(7);
  const [selectValue, setSelectValue] = useState("popularity");
  const [products, setProducts] = useState([]);
  const [PRODUCTS, setPRODUCTS] = useState([]);
  const [loading, setLoading] = useState(false);
  let [color, setColor] = useState("#36D7B7");

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
    fetch("https://product-list1409.herokuapp.com/products")
      .then((response) => response.json())
      .then((result) => {
        setProducts(result);
        setPRODUCTS(result);
      });
    return () => {};
  }, []);

  function handleChangeValue(event) {
    setInputValue(event.target.value);
  }

  function search() {
    let productSearch = PRODUCTS.filter((product) =>
      product.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    setProducts(productSearch);
    setNumberResult(productSearch.length);
    if (inputValue === "") {
      setProducts(PRODUCTS);
    }
  }

  function updateSelect(event) {
    setSelectValue(event.target.value);
  }

  function selectSort() {
    if (selectValue === "popularity") {
      products.sort((a, b) => a.id - b.id);
    } else if (selectValue === "price-increase") {
      products.sort((a, b) => a.price - b.price);
    } else if (selectValue === "price-decrease") {
      products.sort((a, b) => b.price - a.price);
    }
  }
  selectSort();

  return (
    <>
      {loading ? (
        <div className="text-center">
          <ClipLoader color={color} loading={loading} size={50} />
        </div>
      ) : (
        <div className="col-10 m-auto">
          <h1>iPhone</h1>
          <div className="row">
            <div className="col-7 col-md-8">
              <input
                type="text"
                placeholder="Nhap san pham"
                onChange={handleChangeValue}
              ></input>
              <button onClick={search}>Search</button>
              <p>Hiển thị tất cả {numberResult} kết quả</p>
            </div>
            <div className="col-5 col-sm-4 text-end">
              <select
                name="orderby"
                className="orderby"
                aria-label="Đơn hàng của cửa hàng"
                onChange={updateSelect}
              >
                <option value="popularity" defaultValue>
                  Thứ tự theo mức độ phổ biến
                </option>
                <option value="price-increase">
                  Thứ tự theo giá: thấp đến cao
                </option>
                <option value="price-decrease">
                  Thứ tự theo giá: cao xuống thấp
                </option>
              </select>
            </div>
          </div>
          <div className="row list-product">
            <ProductList products={products} />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
