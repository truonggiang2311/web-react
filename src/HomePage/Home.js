import "./style.css";
export default function Home() {
  return (
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
