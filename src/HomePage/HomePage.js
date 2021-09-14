import "./HomePage.css";
import { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";

export default function Home() {
  const [loading, setLoading] = useState(false);
  let [color, setColor] = useState("#36D7B7");

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);

  return loading ? (
    <div className="text-center">
      <ClipLoader color={color} loading={loading} size={50} />
    </div>
  ) : (
    <div className="">
      <div className="col-10 m-auto">
        <h1>Home</h1>
      </div>

      <img
        className="mb-3"
        src="https://www.apple.com/vn/home/images/heroes/iphone-12/iphone_12_updated__jepm2xpxncuy_large_2x.jpg"
        alt="iphone11"
      />
      <img
        className="mb-3"
        src="https://www.apple.com/v/home/ab/images/heroes/iphone-12-pro/iphone_12_pro_us__e5oyysg4k0ya_large_2x.jpg"
        alt="iphone12"
      />
      <img
        src="https://www.apple.com/v/home/ab/images/heroes/ipad-pro/hero_ipad_pro_non_avail__fcrsmhs4b7ma_large.jpg"
        alt="ipad"
      />
    </div>
  );
}
