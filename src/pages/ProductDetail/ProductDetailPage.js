import { useState, useEffect } from "react";
import { useParams } from "react-router";
import ClipLoader from "react-spinners/ClipLoader";
import Toast from "react-bootstrap/Toast";
import { ToastContainer } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { add1Product } from "../../store/cartSlice";

export default function ProductDetailPage() {
  let { appleProduct } = useParams();
  let { id } = useParams();
  const dispatch = useDispatch();

  const [product, setProduct] = useState([]);
  const [srcMain, setSrcMain] = useState([]);
  const [srcThumbs, setSrcThumbs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);
  const [inputValue, setInputValue] = useState(1);
  const [notiTypeNumber, setNotiTypeNumber] = useState(false)

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

  function changeQuantity(e) {
    if(!isNaN(e.target.value) && e.target.value < 200){
      setInputValue(Number(e.target.value))
    }
  }

  function addToCart(product) {
    if(inputValue !== 0){
      var cart = localStorage.getItem("Cart");
      cart = cart ? JSON.parse(cart) : [];
      if (cart.some((p) => p.id === product.id)) {
        cart = cart.filter((p)=>p.id !==product.id);
        product.quantity = inputValue;
        cart.push(product);
        localStorage.setItem("Cart", JSON.stringify(cart));
        setShow(true);
      } else {
        product.quantity = inputValue;
        cart.push(product);
        localStorage.setItem("Cart", JSON.stringify(cart));
        setShow(true);
        dispatch(add1Product());
      }
    }
    else setNotiTypeNumber(true)
  }

  return loading ? (
    <div
      className="text-center"
      style={{ "marginTop": "300px", "marginBottom": "1000px" }}
    >
      <ClipLoader color="#36D7B7" loading={loading} size={50} />
    </div>
  ) : (
    <div className="col-10 m-auto pb-3">
      <div className="row">
        <div className="col-6">
          <div className="row">
            <div className="col-12">
              <img style={{ "maxWidth": "80%" }} src={srcMain} alt="iphone" />
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
            Gi?? t???: {formatter.format(product.price)}
          </h4>
          <p className="fw-bold">Qu?? khuy???n m??i</p>

          <ul>
            <li>Tr??? g??p 0% l??i su???t th??? t??n d???ng</li>
            <li className="pt-3">
              Gi???m 5% khi mua 1 ph??? ki???n, 10% khi mua 2 ph??? ki???n, 15% khi mua t???
              3 ph??? ki???n (kh??ng ??p d???ng cho ph??? ki???n ch??nh h??ng Apple)
            </li>
            <li className="pt-3">
              T???ng Voucher 100.000?? khi mua ph??? ki???n: Pencil, Keyboard, Magic
              Mouse, S???c / C??p, ???p l??ng / V?? da ch??nh h??ng Apple (kh??ng ??p d???ng
              v???i c??? s???c 20W)
            </li>
            <li className="pt-3">
              (L??u ??: Ch????ng tr??nh KM t??nh tr??n gi?? ni??m y???t, kh??ng ??p d???ng
              chung v???i KM kh??c)
            </li>
            <li className="pt-3">
              Back to school 2021: T???ng Voucher 200K cho H???c sinh, Sinh vi??n
            </li>
          </ul>
          <h4>Nh???p s??? l?????ng s???n ph???m</h4>
          <div className="col-2">
            <input onChange={changeQuantity} value={inputValue} type="text" className="form-control"></input>
          </div>
          {notiTypeNumber && <h6 className="pt-1 text-danger">H??y nh???p s??? l?????ng</h6>}
          <button
            onClick={() => addToCart(product)}
            type="button"
            className="btn btn-secondary mt-2"
          >
            Th??m v??o gi??? h??ng
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
                <strong className="me-auto">Th??ng B??o</strong>
                <small>1 second ago</small>
              </Toast.Header>
              <Toast.Body>S???n ph???m ???? ???????c th??m v??o gi??? h??ng</Toast.Body>
            </Toast>
          </ToastContainer>
        </div>
      </div>
    </div>
  );
}
