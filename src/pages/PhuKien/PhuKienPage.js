import { Link } from "react-router-dom";
import styles from "./PhuKienPage.module.css";

export default function ServicePage() {
  return (
    <>
      <div className="col-10 m-auto">
        <h1 className="mt-4">Phụ Kiện</h1>
        <div className="row">
          <div className="col-4 mt-2 mb-4">
            <div className={`${styles.PhuKien}`}>
              <Link to="/phu-kien">
                <img
                  src="https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/static/optimized/rev-7332b8e/wp-content/uploads/2021/07/1.-Apple-TV-768x768.png"
                  alt="apple-tv"
                ></img>
              </Link>
            </div>
            <h3 className="text-center mt-2">Apple TV</h3>
            <p className="text-center mt-2">Giá từ: 4.690.000đ</p>
          </div>

          <div className="col-4 mt-2 mb-4">
            <div className={`${styles.PhuKien}`}>
              <Link to="/phu-kien">
                <img
                  src="https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/static/optimized/rev-7332b8e/wp-content/uploads/2021/07/phu%CC%A3-kie%CC%A3%CC%82n-10-768x768.png"
                  alt="air-tags"
                ></img>
              </Link>
            </div>
            <h3 className="text-center mt-2">Apple AirTag</h3>
            <p className="text-center mt-2">Giá từ: 749.000đ</p>
          </div>

          <div className="col-4 mt-2 mb-4">
            <div className={`${styles.PhuKien}`}>
              <Link to="/phu-kien">
                <img
                  src="https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/static/optimized/rev-7332b8e/wp-content/uploads/2021/07/3.-Beats-1-768x768.png"
                  alt="beats"
                ></img>
              </Link>
            </div>
            <h3 className="text-center mt-2">Beats</h3>
            <p className="text-center mt-2">Giá từ: 1.390.000đ</p>
          </div>

          <div className="col-4 mt-2 mb-4">
            <div className={`${styles.PhuKien}`}>
              <Link to="/phu-kien">
                <img
                  src="https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/static/source/rev-7332b8e/wp-content/uploads/2021/07/4.-Op-son-mai-768x768.png"
                  alt="op"
                ></img>
              </Link>
            </div>
            <h3 className="text-center mt-2">Ốp lưng sơn mài</h3>
            <p className="text-center mt-2">Giá từ: 2.390.000đ</p>
          </div>

          <div className="col-4 mt-2 mb-4">
            <div className={`${styles.PhuKien}`}>
              <Link to="/phu-kien">
                <img
                  src="https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/static/optimized/rev-7332b8e/wp-content/uploads/2021/07/5.-Tai-nghe-Loa-768x768.png"
                  alt="speaker"
                ></img>
              </Link>
            </div>
            <h3 className="text-center mt-2">Tai nghe - Loa</h3>
            <p className="text-center mt-2">Giá từ: 900.000đ</p>
          </div>

          <div className="col-4 mt-2 mb-4">
            <div className={`${styles.PhuKien}`}>
              <Link to="/phu-kien">
                <img
                  src="https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/static/optimized/rev-7332b8e/wp-content/uploads/2021/07/Phu%CC%A3-kie%CC%A3%CC%82n-beta-768x768.png"
                  alt="phukien"
                ></img>
              </Link>
            </div>
            <h3 className="text-center mt-2">Phụ kiện iPhone chính hãng</h3>
            <p className="text-center mt-2">Giá từ: 480.000đ</p>
          </div>

          <div className="col-4 mt-2 mb-4">
            <div className={`${styles.PhuKien}`}>
              <Link to="/phu-kien">
                <img
                  src="https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/static/optimized/rev-7332b8e/wp-content/uploads/2021/07/1-01-2-768x768.png"
                  alt="mac-book"
                ></img>
              </Link>
            </div>
            <h3 className="text-center mt-2">Phụ kiện MacBook chính hãng</h3>
            <p className="text-center mt-2">Giá từ: 1.890.000đ</p>
          </div>

          <div className="col-4 mt-2 mb-4">
            <div className={`${styles.PhuKien}`}>
              <Link to="/phu-kien">
                <img
                  src="https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/static/optimized/rev-7332b8e/wp-content/uploads/2021/07/Da%CC%82y-deo-Apple-Watch-Sport-Loop-768x768.png"
                  alt="apple-watch"
                ></img>
              </Link>
            </div>
            <h3 className="text-center mt-2">Phụ kiện Apple Watch chính hãng</h3>
            <p className="text-center mt-2">Giá từ: 850.000đ</p>
          </div>

          <div className="col-4 mt-2 mb-4">
            <div className={`${styles.PhuKien}`}>
              <Link to="/phu-kien">
                <img
                  src="https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/static/optimized/rev-7332b8e/wp-content/uploads/2021/07/pk-ipad-1_optimized-768x768.png"
                  alt="ipad"
                ></img>
              </Link>
            </div>
            <h3 className="text-center mt-2">Phụ kiện iPad chính hãng</h3>
            <p className="text-center mt-2">Giá từ: 1.250.000đ</p>
          </div>
        </div>
      </div>
    </>
  );
}
