import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer container-fluid pt-4">
      <div className="col-10 m-auto">
        <div className="row menu-footer">
          <div className="col">
            <ul className="ps-0">
              <li>
                <h6>Shop and Learn</h6>
              </li>
              <li>
                <Link to="/">Mac</Link>
              </li>
              <li>
                <Link to="/">iPad</Link>
              </li>
              <li>
                <Link to="/">iPhone</Link>
              </li>
              <li>
                <Link to="/">Watch</Link>
              </li>
              <li>
                <Link to="/">TV</Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <ul className="ps-0">
              <li>
                <h6>Services</h6>
              </li>
              <li>
                <Link to="/">Apple Music</Link>
              </li>
              <li>
                <Link to="/">Apple TV+</Link>
              </li>
              <li>
                <Link to="/">Apple Fitness+</Link>
              </li>
              <li>
                <Link to="/">Apple News+</Link>
              </li>
              <li>
                <Link to="/">Apple Arcade</Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <ul className="ps-0">
              <li>
                <h6>Apple Store</h6>
              </li>
              <li>
                <Link to="/">Find a store</Link>
              </li>
              <li>
                <Link to="/">Shop Online</Link>
              </li>
              <li>
                <Link to="/">Genius Bar</Link>
              </li>
              <li>
                <Link to="/">Today at Apple</Link>
              </li>
              <li>
                <Link to="/">Apple Camp</Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <ul className="ps-0">
              <li>
                <h6>For Business</h6>
              </li>
              <li>
                <Link to="/">Apple and Business</Link>
              </li>
              <li>
                <Link to="/">Shop for Business</Link>
              </li>
              <li>
                <h6 className="mt-3">For Education</h6>
              </li>
              <li>
                <Link to="/">Apple and Education</Link>
              </li>
              <li>
                <Link to="/">Shop for K-12</Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <ul className="ps-0">
              <li>
                <h6>Apple Values</h6>
              </li>
              <li>
                <Link to="/">Accessibility</Link>
              </li>
              <li>
                <Link to="/">Education</Link>
              </li>
              <li>
                <Link to="/">Environment</Link>
              </li>
              <li>
                <Link to="/">Inclusion and Diversity</Link>
              </li>
              <li>
                <Link to="/">Privacy</Link>
              </li>
            </ul>
          </div>

          <div className="col-12 ps-0">
            <p className="Footer-p" style={{ "fontSize": "13px" }}>
              More ways to shop:{" "}
              <Link
                to="/"
                style={{ color: "#2997ff", opacity: 1, "fontSize": "13px" }}
              >
                Find an Apple Store
              </Link>{" "}
              or{" "}
              <Link
                to="/"
                style={{ color: "#2997ff", opacity: 1, "fontSize": "13px" }}
              >
                other retailer{" "}
              </Link>{" "}
              near you. Or call 1-800-MY-APPLE.
            </p>
          </div>

          <div className="row">
            <div className="col-12 col-sm-4 border-top ps-0 pt-3">
              <p
                style={{ color: "#f5f5f7", opacity: 0.7, "fontSize": "13px" }}
              >
                Copyright © 2021 Apple Inc. All rights reserved.
              </p>
            </div>
            <div className="col-12 col-sm-6 border-top pb-3 pb-sm-0" style={{ "paddingTop": "12px" }}>
              <Link to="/" className="ps-2 pe-2 border-end" style={{"fontSize": "13px" }}>
                Privacy
              </Link>
              <Link to="/" className="ps-2 pe-2 border-end" style={{"fontSize": "13px" }}>
                Term of Use
              </Link>
              <Link to="/" className="ps-2 pe-2 border-end" style={{"fontSize": "13px" }}>
                Sales and Refunds
              </Link>
              <Link to="/" className="ps-2 pe-2 border-end" style={{"fontSize": "13px" }}>
                Legal
              </Link>
              <Link to="/" className="ps-2 pe-2" style={{"fontSize": "13px" }}>
                Site
              </Link>
            </div>
            <div className="col-12 col-sm-2 text-end border-top pt-3 pe-0">
              <p
                style={{ color: "#f5f5f7", opacity: 0.7, "fontSize": "13px" }}
              >
                Viet Nam
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
