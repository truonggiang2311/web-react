import { Link } from "react-router-dom";
import styles from "./ServicePage.module.css";

export default function ServicePage() {
  return (
    <>
      <div className="col-10 m-auto">
        <h1 className="mt-4">Dịch vụ</h1>
        <div className="row">
          <div className="col-4 mt-2">
            <div className={`${styles.appleService}`}>
              <Link to="/">
                <img
                  src="https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/static/optimized/wp-content/uploads/2021/07/aa766edcd7a8bd29142695de6c28bc97.apple-care-logo-03-768x769.png"
                  alt="apple-care"
                ></img>
              </Link>
            </div>
            <h3 className="text-center mt-2">Apple Care</h3>
            <p className="text-center mt-2">Giá từ: 690.000đ</p>
          </div>
          <div className="col-4 mt-2">
            <div className={`${styles.appleService}`}>
              <Link to="/">
                <img
                  src="https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/static/optimized/wp-content/uploads/2021/07/00ee65e04fda95ea292d990d7cad68a0.1-02-5-768x768.png"
                  alt="microsoft-office"
                ></img>
              </Link>
            </div>
            <h3 className="text-center mt-2">Microsoft Office</h3>
            <p className="text-center mt-2">Giá từ: 990.000đ</p>
          </div>
        </div>
      </div>
    </>
  );
}
