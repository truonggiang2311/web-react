import "bootstrap/dist/css/bootstrap.min.css";
import "./ShoppingCartPage.css";
import { useState, useEffect } from "react";
import PRODUCTS from "./PRODUCTS";
import { Link } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

function App() {
  const [products, setProducts] = useState(PRODUCTS);
  const [loading, setLoading] = useState(false);
  let [color, setColor] = useState("#36D7B7");

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);

  function increaseQuantity(id) {
    let newProducts = products.map((obj) => ({ ...obj }));
    let findProducts = newProducts.find((p) => id === p.id);
    findProducts.quantity += 1;
    setProducts(newProducts);
  }

  function decreaseQuantity(id) {
    let newProducts = products.map((obj) => ({ ...obj }));
    let findProducts = newProducts.find((p) => id === p.id);
    if (findProducts.quantity > 1) {
      findProducts.quantity -= 1;
      setProducts(newProducts);
    }
  }

  function subtotal() {
    let priceProduct = products.map(
      (product) => product.price * product.quantity
    );
    return priceProduct.reduce((a, b) => a + b, 0);
  }

  function remove(id) {
    let newProducts = [...products];
    setProducts(newProducts.filter((product) => product.id !== id));
  }

  var formatter = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  return (
    <>
      {loading ? (
        <div className="text-center">
          <ClipLoader color={color} loading={loading} size={50} />
        </div>
      ) : (
        <div className="App col-10 m-auto">
          <h1>Review your bag.</h1>

          {products.length === 0 ? (
            <Link className="btn btn-secondary" to="/product">
              Quay lại mua hàng
            </Link>
          ) : (
            <>
              {products.map((product) => (
                <div
                  key={product.id}
                  className="row align-items-center text-center product"
                >
                  <div className="col-12 col-lg-2">
                    <img src={product.src} alt="product" />
                  </div>
                  <div className="col-12 col-lg-4 name">{product.name}</div>
                  <div className="col-12 col-lg-2">
                    <button
                      onClick={() => decreaseQuantity(product.id)}
                      type="button"
                      className="btn btn-light up"
                    >
                      -
                    </button>
                    {product.quantity}
                    <button
                      onClick={() => increaseQuantity(product.id)}
                      type="button"
                      className="btn btn-light down"
                    >
                      +
                    </button>
                  </div>
                  <div className="col-12 col-lg-2">
                    {formatter.format(product.price * product.quantity)}
                  </div>
                  <div className="col-12 col-lg-2">
                    <button
                      onClick={() => remove(product.id)}
                      type="button"
                      className="btn btn-secondary"
                    >
                      remove
                    </button>
                  </div>
                </div>
              ))}
              <div className="row checkout">
                <div className="col-10">
                  <div className="info-total col-5 ms-auto">
                    <div className="row">
                      <div className="col-6">Subtotal :</div>
                      <div className="col-5 text-end">
                        {formatter.format(subtotal())}
                      </div>
                    </div>
                    <div className="row tax">
                      <div className="col-6">Tax (10% VAT) :</div>
                      <div className="col-5 text-end">
                        {formatter.format(subtotal() * 0.1)}
                      </div>
                    </div>
                    <div className="row total">
                      <div className="col-6">TOTAL :</div>
                      <div className="col-5 text-end">
                        {formatter.format(subtotal() * 1.1)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}

export default App;
