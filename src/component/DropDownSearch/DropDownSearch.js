
export default function DropDownSearch({ productSearch }) {
  var formatter = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  return (
      <div className="row justify-content-end m-0">
        <div style={{background: "white", height:"400px"}} className="col-6 overflow-scroll">
    {productSearch.map((product) => (
      
        <div className="row border border-3" key={product.id}>
          <div className="col-3">
            <img src={product.src} alt="product"></img>
          </div>
          <div className="col-9">
            <p className="mb-0 mt-2">{product.name}</p>
            <p>
              <span className="text-decoration-line-through pe-2 text-black-50">
                {product.lastPrice}
              </span>
              <span className="fw-bold">{formatter.format(product.price)}</span>
            </p>
          </div>
        </div>
      
    ))}
    </div>
    </div>
  )
  
}
