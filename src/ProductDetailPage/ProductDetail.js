import { useParams } from "react-router";
import PRODUCTS from "../ProductListPage/PRODUCTS";
export default function ProductDetail() {
  let { slug } = useParams();

    let foundProduct = PRODUCTS.find((product)=> product.slug===slug)
    console.log(foundProduct)
  
  return (
    <div className="col-10 m-auto">
       <h1>Day la trang chi tiet san pham</h1>
      
     <h3>Slug: {slug}</h3>
    <img src={foundProduct.src}/>
     </div>
  )
}
