// import styles  from"./HomePage.module.css";
import Carousel from "react-bootstrap/Carousel";
import styles from "./HomePage.module.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div className="col-10 m-auto Home mt-3">
        <h1>Home</h1>
      </div>

      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/static/optimized/rev-08c3c37/wp-content/uploads/2021/08/Banner-PC-1-back-to-school-1-2048x610.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/static/optimized/rev-08c3c37/wp-content/uploads/2021/08/Banner-PC-3-imac-2048x609.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/static/optimized/rev-08c3c37/wp-content/uploads/2021/08/U%CC%9Bu-da%CC%83i-vietin-bank-PC-2048x619.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>

      <div className="col-10 m-auto mt-4">
        <div className="row">
          <div className="col-4">
            <Link to="/products/iphone">
              <div className={`m-1 ${styles.appleProducts}`}>
                <img
                  src="https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/static/optimized/rev-08c3c37/wp-content/uploads/elementor/thumbs/family-iphone-pemr7amaprf3ro85pdsnw8bu7hwsxex4nvxp8vbl4o.png"
                  alt="iphone"
                ></img>
              </div>
            </Link>
          </div>
          <div className="col-4">
            <Link to="/products/ipad">
              <div className={`m-1 ${styles.appleProducts}`}>
                <img
                  src="https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/static/source/rev-08c3c37/wp-content/uploads/elementor/thumbs/Untitled-1___-removebg-preview-pd6f51mvlyeas5mzd43cxy64u0v15xesr4crctz7p4.png"
                  alt="ipad"
                ></img>
              </div>
            </Link>
          </div>
          <div className="col-4">
            <Link to="/products/mac">
              <div className={`m-1 ${styles.appleProducts}`}>
                <img
                  src="https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/static/optimized/rev-08c3c37/wp-content/uploads/2021/07/MacBook-Air-M1_Overview-768x768.png"
                  alt="macbook"
                ></img>
              </div>
            </Link>
          </div>
        </div>

        <div className="row text-center">
          <div className="col-4">
            <h3 className="pt-2 pb-3">
              <Link
                to="/products/iphone"
                className="text-body text-decoration-none"
              >
                iPhone
              </Link>
            </h3>
          </div>
          <div className="col-4">
            <h3 className="pt-2 pb-3">
              <Link
                to="/products/ipad"
                className="text-body text-decoration-none"
              >
                iPad
              </Link>
            </h3>
          </div>
          <div className="col-4">
            <h3 className="pt-2 pb-3">
              <Link
                to="/products/mac"
                className="text-body text-decoration-none"
              >
                Mac
              </Link>
            </h3>
          </div>
        </div>

        <div className="row">
          <div className="col-4">
            <Link to="/products/apple-watch">
              <div className={`m-1 ${styles.appleProducts}`}>
                <img
                  src="https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/static/optimized/rev-08c3c37/wp-content/uploads/2021/07/Watch-5-Nike-1-768x768.png"
                  alt="apple-watch"
                ></img>
              </div>
            </Link>
          </div>
          <div className="col-4">
            <Link to="/products/airpods">
              <div className={`m-1 ${styles.appleProducts}`}>
                <img
                  src="https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/static/optimized/rev-08c3c37/wp-content/uploads/2021/10/300x300-02-1.png"
                  alt="airpod"
                ></img>
              </div>
            </Link>
          </div>
          <div className="col-4">
            <Link to="/phu-kien">
              <div className={`m-1 ${styles.appleProducts}`}>
                <img
                  src="https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/static/optimized/rev-08c3c37/wp-content/uploads/2021/10/300x300-03-1.png"
                  alt=""
                ></img>
              </div>
            </Link>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-4">
            <h3 className="pt-2 pb-3">
              <Link
                to="/products/apple-watch"
                className="text-body text-decoration-none"
              >
                Apple Watch
              </Link>
            </h3>
          </div>
          <div className="col-4">
            <h3 className="pt-2 pb-3">
              <Link
                to="/products/apple-airpods"
                className="text-body text-decoration-none"
              >
                AirPods
              </Link>
            </h3>
          </div>
          <div className="col-4">
            <h3 className="pt-2 pb-3">
              <Link to="/phu-kien" className="text-body text-decoration-none">
                Phụ Kiện
              </Link>
            </h3>
          </div>
        </div>
      </div>

      <div className="row">
        <Link to="/">
          <img
            src="https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/static/optimized/rev-08c3c37/wp-content/uploads/2021/09/Desktop-U%CC%9Bu-da%CC%83i-nha%CC%82n-vie%CC%82n-2048x939.png"
            alt="business"
          ></img>
        </Link>
      </div>

      <div className="row">
        <Link to="/">
          <img
            src="https://www.apple.com/v/home/hf/images/overview/iphone_13_hero__fy4bx6w0wfma_large_2x.jpg"
            alt="business"
          ></img>
        </Link>
      </div>
    </div>
  );
}
