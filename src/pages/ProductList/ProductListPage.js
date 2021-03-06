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
          <p>Hi???n th??? t???t c??? {numberResult} k???t qu???</p>
        </div>
        <div className="col-12 col-sm-4 text-sm-end">
          <select
            name="orderby"
            className="orderby"
            aria-label="????n h??ng c???a c???a h??ng"
            onChange={updateSelect}
          >
            <option value="popularity" defaultValue>
              Th??? t??? theo m???c ????? ph??? bi???n
            </option>
            <option value="price-increase">
              Th??? t??? theo gi??: th???p ?????n cao
            </option>
            <option value="price-decrease">
              Th??? t??? theo gi??: cao xu???ng th???p
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
