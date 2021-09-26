import styles from "./ShoppingCartPage.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { remove1Product } from "../../store/cartSlice";

function ShoppingCartPage() {

  const dispatch = useDispatch()
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("Cart") || "[]")
  );

  function increaseQuantity(id) {
    let newProducts = products.map((obj) => ({ ...obj }));
    let findProducts = newProducts.find((p) => id === p.id);
    findProducts.quantity += 1;
    setProducts(newProducts);
    localStorage.setItem("Cart", JSON.stringify(newProducts));
  }

  function decreaseQuantity(id) {
    let newProducts = products.map((obj) => ({ ...obj }));
    let findProducts = newProducts.find((p) => id === p.id);
    if (findProducts.quantity > 1) {
      findProducts.quantity -= 1;
      setProducts(newProducts);
    }
    localStorage.setItem("Cart", JSON.stringify(newProducts));
  }

  function subtotal() {
    let priceProduct = products.map(
      (product) => product["price"] * product.quantity
    );
    return priceProduct.reduce((a, b) => a + b, 0);
  }

  function remove(id) {
    let newProducts = [...products];
    setProducts(newProducts.filter((product) => product.id !== id));
    localStorage.setItem(
      "Cart",
      JSON.stringify(newProducts.filter((product) => product.id !== id))
    );
    dispatch(remove1Product())
  }

  var formatter = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  return (
    <>
      <div className="App col-10 m-auto">
        <h1 className="pt-2">Review your bag.</h1>

        {products.length === 0 ? (
          <div style={{ "margin-bottom": "400px" }}>
            <h3>Không có sản phẩm nào trong giỏ hàng</h3>
            <Link className="btn btn-secondary pb-10" to="/product">
              Quay lại mua hàng
            </Link>
          </div>
        ) : (
          <>
            {products.map((product) => (
              <div
                key={product.id}
                className={`row align-items-center text-center ${styles.product}`}
              >
                <div className="col-12 col-lg-2">
                  <img className={styles.img} src={product.src} alt="product" />
                </div>
                <div className={`col-12 col-lg-4 ${styles.name}`}>
                  {product.name}
                </div>
                <div className="col-12 col-lg-2">
                  <button
                    onClick={() => decreaseQuantity(product.id)}
                    type="button"
                    className={`btn btn-light ${styles.up}`}
                  >
                    -
                  </button>
                  {product.quantity}
                  <button
                    onClick={() => increaseQuantity(product.id)}
                    type="button"
                    className={`btn btn-light ${styles.down}`}
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
            <div className={`row ${styles.checkout}`}>
              <div className="col-10">
                <div className="info-total col-5 ms-lg-auto me-lg-0 ms-auto me-auto">
                  <div className="row">
                    <div className="col-6">Subtotal :</div>
                    <div className="col-5 text-end">
                      {formatter.format(subtotal())}
                    </div>
                  </div>
                  <div className={`row ${styles.tax}`}>
                    <div className="col-6">Tax (10% VAT) :</div>
                    <div className="col-5 text-end">
                      {formatter.format(subtotal() * 0.1)}
                    </div>
                  </div>
                  <div className={`row ${styles.total}`}>
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
    </>
  );
}

export default ShoppingCartPage;
