import { Link } from "react-router-dom";
import styles from "./ProductListPage.module.css";

export default function ProductList({ products }) {
  var formatter = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  return products.map((product) => (
    <div className="col-12 col-sm-4 text-center" key={product.id}>
      <Link to={`/iphone/${product.slug}/${product.id}`} className={styles.productName}>
        <img alt="iphone" src={product.src} />
        <h3>{product.name}</h3>
      </Link>
      <span className={styles.oldPrice}>{formatter.format(product.lastPrice)}</span>
      <p className={styles.price}>{formatter.format(product.price)}</p>
    </div>
  ));
}
