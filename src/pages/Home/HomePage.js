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
            src="https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/static/optimized/wp-content/uploads/2021/08/a48666834af0edb53f94f1d99253757d.Banner-PC-1-back-to-school-1.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/static/optimized/wp-content/uploads/2021/09/ce23b0a78eec151ad1fc01de572471cf.Banner-PC-ipad-mini.jpeg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/static/optimized/wp-content/uploads/2021/09/e8525f89ef74e05f5f70db4297153519.Banner-PC-2-watch-6-1.png"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/static/optimized/wp-content/uploads/2021/09/e1256059eaf289ce4e9ccbe7f336df00.banner-PC-iPhone-11.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/static/optimized/wp-content/uploads/2021/08/b50e4a13ef7e9590eec4ea1c1fd11162.Banner-PC-3-imac.jpg"
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
                  src="https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/static/source/wp-content/uploads/2021/07/6b8edb5bf889cfd91e7d3b09133f0444.iPhone-1-768x768.png"
                  alt="iphone"
                ></img>
              </div>
            </Link>
          </div>
          <div className="col-4">
            <Link to="/products/ipad">
              <div className={`m-1 ${styles.appleProducts}`}>
                <img
                  src="https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/static/optimized/wp-content/uploads/2021/09/e3af5bcef72c817c3f0018eb70bdf90c.Untitled-1___-removebg-preview-400x400.png"
                  alt=""
                ></img>
              </div>
            </Link>
          </div>
          <div className="col-4">
            <Link to="/products/mac">
              <div className={`m-1 ${styles.appleProducts}`}>
                <img
                  src="https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/static/source/wp-content/uploads/2021/07/c1d0e36ca9de59a0829a20bd2898dc1d.Mac-1-768x768.png"
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
                  src="https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/static/source/wp-content/uploads/2021/07/fc367fa05fefb0d289c908bf4ac217cb.Watch-1-768x768.png"
                  alt=""
                ></img>
              </div>
            </Link>
          </div>
          <div className="col-4">
            <Link to="/products/airpods">
              <div className={`m-1 ${styles.appleProducts}`}>
                <img
                  src="https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/static/optimized/wp-content/uploads/2021/06/1ce0caa491dc3f4dda9532d2af16c743.AirPods-Max-768x768.png"
                  alt=""
                ></img>
              </div>
            </Link>
          </div>
          <div className="col-4">
            <Link to="/phu-kien">
              <div className={`m-1 ${styles.appleProducts}`}>
                <img
                  src="https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/static/optimized/wp-content/uploads/2021/07/47f413f15c8ec03b0187b4bad6d4679e.Phu%CC%A3-kie%CC%A3%CC%82n-1-768x768.png"
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
            src="https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/static/source/wp-content/uploads/2021/09/6b813b7bce037cf0a0342f87a5601208.Desktop-U%CC%9Bu-da%CC%83i-nha%CC%82n-vie%CC%82n-2048x939.png"
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
