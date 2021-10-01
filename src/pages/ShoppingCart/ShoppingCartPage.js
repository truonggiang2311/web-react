import styles from "./ShoppingCartPage.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { remove1Product } from "../../store/cartSlice";
import CheckOut from "./CheckOut";

function ShoppingCartPage() {
  const dispatch = useDispatch();
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("Cart") || "[]")
  );
  const [inputValue, setInputValue] = useState("");
  const [promotion, setPromotion] = useState(0);
  const [isCodeWrong, setIsCodeWrong] = useState(false);
  const [isCodeRight, setIsCodeRight] = useState(false);
  const [promotionCodeName, setPromotionCodeName] = useState("");

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
    dispatch(remove1Product());
  }

  var formatter = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  function inputPromotion(e) {
    if(e.target.value === ""){
      setIsCodeRight(false);
      setIsCodeWrong(false)
    }
    setInputValue(e.target.value);
  }

  function addPomotion() {
    if (inputValue === "M-5") {
      setPromotionCodeName("M-5");
      setPromotion(0.05);
      setIsCodeRight(true);
      setIsCodeWrong(false);
    } else if (inputValue === "M-10") {
      setPromotionCodeName("M-10");
      setPromotion(0.1);
      setIsCodeRight(true);
      setIsCodeWrong(false);
    } else if (inputValue === "M-15") {
      setPromotionCodeName("M-15");
      setPromotion(0.15);
      setIsCodeRight(true);
      setIsCodeWrong(false);
    } else if (
      inputValue !== "M-5" &&
      inputValue !== "M-10" &&
      inputValue !== "M-15" &&
      inputValue !== ""
    ) {
      setIsCodeWrong(true);
      setIsCodeRight(false);
    }
  }

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
                <div className="row">
                  <div className="col-6 ps-5">
                    <h3>Nhập mã giảm giá</h3>
                    <div className="row">
                      <div className="col-6 p-0">
                        <input
                          type="text"
                          value={inputValue}
                          onChange={inputPromotion}
                          className="form-control"
                        ></input>
                      </div>
                      <div className="col-6 p-0">
                        <button
                          class="btn btn-secondary"
                          type="submit"
                          onClick={addPomotion}
                        >
                          Nhập mã
                        </button>
                      </div>
                    </div>
                    {isCodeWrong && <p className="text-danger">Nhập sai mã</p>}
                    {isCodeRight && <p className="text-success">Mã hợp lệ</p>}
                    <p className="mt-2">M-5 : Discount 5%</p>
                    <p>M-10 : Discount 10%</p>
                    <p>M-15 : Discount 15%</p>
                  </div>
                  <div className="info-total col-5 ms-lg-auto me-lg-0 ms-auto me-auto">
                    <h3>Thanh toán</h3>
                    <div className="row">
                      <div className="col-6">Subtotal :</div>
                      <div className="col-5 text-end">
                        {formatter.format(subtotal())}
                      </div>
                    </div>
                    {/* Promotion */}
                    <div className={`row ${styles.tax} pt-2`}>
                      <div className="col-6">
                        Promotion : {promotionCodeName}
                      </div>
                      <div className="col-5 text-end">
                        - {formatter.format(subtotal() * promotion)}
                      </div>
                    </div>
                    <div className={`row ${styles.tax}`}>
                      <div className="col-6">Tax (10% VAT) :</div>
                      <div className="col-5 text-end">
                        {formatter.format(
                          (subtotal() - subtotal() * promotion) * 0.1
                        )}
                      </div>
                    </div>
                    <div className={`row ${styles.total} pb-2`}>
                      <div className="col-6">TOTAL :</div>
                      <div className="col-5 text-end">
                        {formatter.format(
                          subtotal() -
                            subtotal() * promotion +
                            (subtotal() - subtotal() * promotion) * 0.1
                        )}
                      </div>
                    </div>
                    <CheckOut />
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
