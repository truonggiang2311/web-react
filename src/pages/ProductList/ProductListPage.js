import ProductList from "./ProductList";
import { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { useParams } from "react-router";

function ProductListPage() {
  let { appleProduct } = useParams();
  const [numberResult, setNumberResult] = useState(0);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://product-list1409.herokuapp.com/${appleProduct}/`)
      .then((response) => response.json())
      .then((result) => {
        setProducts(result);
        setLoading(false);
        setNumberResult(result.length);
      });
    return () => {};
  }, [appleProduct]);

  useEffect(() => {
    setLoading(true);
  }, [appleProduct]);

  function updateSelect(event) {
    if (event.target.value === "popularity") {
      fetch(
        `https://product-list1409.herokuapp.com/${appleProduct}?_sort=id&_order=asc`
      )
        .then((response) => response.json())
        .then((result) => {
          setProducts(result);
          setLoading(false);
        });
    } else if (event.target.value === "price-increase") {
      fetch(
        `https://product-list1409.herokuapp.com/${appleProduct}?_sort=price&_order=asc`
      )
        .then((response) => response.json())
        .then((result) => {
          setProducts(result);
          setLoading(false);
        });
    } else if (event.target.value === "price-decrease") {
      fetch(
        `https://product-list1409.herokuapp.com/${appleProduct}?_sort=price&_order=desc`
      )
        .then((response) => response.json())
        .then((result) => {
          setProducts(result);
          setLoading(false);
        });
    }
  }

  function selectSort() {}
  selectSort();

  return loading ? (
    <div
      className="text-center"
      style={{ "margin-top": "300px", "margin-bottom": "1000px" }}
    >
      <ClipLoader color="#36D7B7" loading={loading} size={50} />
    </div>
  ) : (
    <div className="col-10 m-auto mt-3">
      <h1>iPhone</h1>
      <div className="row">
        <div className="col-7 col-md-8">
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
      <div className="row">
        <ProductList products={products} />
      </div>
    </div>
  );
}

export default ProductListPage;
