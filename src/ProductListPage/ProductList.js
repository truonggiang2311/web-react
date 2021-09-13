import { Link } from "react-router-dom";

export default function ProductList({ products}) {
  var formatter = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  
  return products.map((product) => (
    <div className="col-12 col-sm-4 text-center" key={product.id}>
      <Link to={`/product/${product.slug}`} className="product-name">
        <img className="img" alt="iphone" src={product.src} />
        <h3>{product.name}</h3>
      </Link>

      <span className="old-price">{formatter.format(product.lastPrice)}</span>
      <p className="price">{formatter.format(product.price)}</p>
    </div>
  ));
}
