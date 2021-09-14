import { useParams } from "react-router";
import { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";

export default function ProductDetail() {
  let { id } = useParams();

  const [product, setProduct] = useState([]);
  const [srcMain, setSrcMain] = useState([]);
  const [srcThumbs, setSrcThumbs] = useState([]);
  const [loading, setLoading] = useState(false);
  let [color, setColor] = useState("#36D7B7");

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 800);
  }, []);

  useEffect(() => {
    fetch("https://product-list1409.herokuapp.com/products/" + id)
      .then((response) => response.json())
      .then((result) => {
        setProduct(result);
        setSrcMain(result.src);
        setSrcThumbs(result.smallImg);
      });
    return () => {};
  }, []);

  var formatter = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  function changeImg(src) {
    setSrcMain(src);
  }

  return (
    <>
      {loading ? (
        <div className="text-center">
          <ClipLoader color={color} loading={loading} size={50} />
        </div>
      ) : (
        <div className="col-10 m-auto">
          <div className="row">
            <div className="col-6">
              <div className="row">
                <div className="col-12">
                  <img src={srcMain} alt="iphone" />
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
                  Giảm 5% khi mua 1 phụ kiện, 10% khi mua 2 phụ kiện, 15% khi
                  mua từ 3 phụ kiện (không áp dụng cho phụ kiện chính hãng
                  Apple)
                </li>
                <li className="pt-3">
                  Tặng Voucher 100.000đ khi mua phụ kiện: Pencil, Keyboard,
                  Magic Mouse, Sạc / Cáp, Ốp lưng / Ví da chính hãng Apple
                  (không áp dụng với củ sạc 20W)
                </li>
                <li className="pt-3">
                  (Lưu ý: Chương trình KM tính trên giá niêm yết, không áp dụng
                  chung với KM khác)
                </li>
                <li className="pt-3">
                  Back to school 2021: Tặng Voucher 200K cho Học sinh, Sinh viên
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
