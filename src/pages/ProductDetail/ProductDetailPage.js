import { useState, useEffect } from "react";
import { useParams } from "react-router";
import ClipLoader from "react-spinners/ClipLoader";
import Toast from "react-bootstrap/Toast";
import { ToastContainer } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { add1Product } from "../../store/cartSlice";

export default function ProductDetailPage() {
  let { appleProduct} = useParams();
  let { id } = useParams();
  const dispatch = useDispatch();

  const [product, setProduct] = useState([]);
  const [srcMain, setSrcMain] = useState([]);
  const [srcThumbs, setSrcThumbs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);

  useEffect(() => {
    fetch(`https://product-list1409.herokuapp.com/${appleProduct}/${id}`)
      .then((response) => response.json())
      .then((result) => {
        setProduct(result);
        setSrcMain(result.src);
        setSrcThumbs(result.smallImg);
        setLoading(false);
      });
    return () => {};
  }, [appleProduct, id]);

  var formatter = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  function changeImg(src) {
    setSrcMain(src);
  }

  function addToCart(product) {
    var cart = localStorage.getItem("Cart");
    cart = cart ? JSON.parse(cart) : [];
    if (cart.some((p) => p.id === product.id)) {
      setShow(true);
      return cart;
    } else {
      cart.push(product);
      localStorage.setItem("Cart", JSON.stringify(cart));
      setShow(true);
      dispatch(add1Product());
    }
  }

  return loading ? (
    <div
      className="text-center"
      style={{ "margin-top": "300px", "margin-bottom": "1000px" }}
    >
      <ClipLoader color="#36D7B7" loading={loading} size={50} />
    </div>
  ) : (
    <div className="col-10 m-auto pb-3">
      <div className="row">
        <div className="col-6">
          <div className="row">
            <div className="col-12">
              <img style={{"max-width":"80%"}} src={srcMain} alt="iphone" />
            </div>
          </div>
          <div className="row mt-3">
            {srcThumbs.map((src) => (
              <div className="col-2" key={src}>
                <img
                  className={srcMain === src ? "opacity-100" : "opacity-25"}
                  onClick={() => changeImg(src)}
                  src={src}
                  alt="iphone"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="col-6 ps-5">
          <h2 className="pt-5">{product.name}</h2>
          <h4 className="pt-3 pb-3">
            Giá từ: {formatter.format(product.price)}
          </h4>
          <p className="fw-bold">Quà khuyến mãi</p>

          <ul>
            <li>Trả góp 0% lãi suất thẻ tín dụng</li>
            <li className="pt-3">
              Giảm 5% khi mua 1 phụ kiện, 10% khi mua 2 phụ kiện, 15% khi mua từ
              3 phụ kiện (không áp dụng cho phụ kiện chính hãng Apple)
            </li>
            <li className="pt-3">
              Tặng Voucher 100.000đ khi mua phụ kiện: Pencil, Keyboard, Magic
              Mouse, Sạc / Cáp, Ốp lưng / Ví da chính hãng Apple (không áp dụng
              với củ sạc 20W)
            </li>
            <li className="pt-3">
              (Lưu ý: Chương trình KM tính trên giá niêm yết, không áp dụng
              chung với KM khác)
            </li>
            <li className="pt-3">
              Back to school 2021: Tặng Voucher 200K cho Học sinh, Sinh viên
            </li>
          </ul>
          <button
            onClick={() => addToCart(product)}
            type="button"
            class="btn btn-secondary"
          >
            Thêm vào giỏ hàng
          </button>

          <ToastContainer className="p-3" position="bottom-end">
            <Toast
              onClose={() => setShow(false)}
              show={show}
              delay={3000}
              autohide
            >
              <Toast.Header>
                <img
                  src="holder.js/20x20?text=%20"
                  className="rounded me-2"
                  alt=""
                />
                <strong className="me-auto">Thông Báo</strong>
                <small>1 second ago</small>
              </Toast.Header>
              <Toast.Body>Sản phẩm đã được thêm vào giỏ hàng</Toast.Body>
            </Toast>
          </ToastContainer>
        </div>
      </div>
    </div>
  );
}
