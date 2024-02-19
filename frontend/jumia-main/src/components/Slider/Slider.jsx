import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const MySlider = () => {
  const swiperElRef = useRef(null);
  const products = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPIQO-7kTAvvaep3lI1eRwxXfy-wVqE-5RK0h3rZQUUA9NCgw764sYoeThMrVuJSuXLUY&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVBxI8Awr88Rbm-oMwcN8U88NY_mtr_Rlw4Vj6J5K7MDN0Ee0a7YDn2T99lgeq3HlAqpc&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmvDZiGsAHRfG9NI2MGA6VjqqNh4XrkgCDleTYv_5VsyKybPoEmnxqOPswTdPX1WH1uhY&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN7xqFzt04LztP3KYDz4KaLy6X43ybRZelyyJxHTVV9eqkurp8_SlqeKLMASI_1z2Q_qY&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSTKxfpvt9DWVqXMjvAm3rBBySrLTj9Ewy5nD8VYR5KQcQxXGgannMiSYoLaa1F_4fUeo&usqp=CAU",
    "https://m.media-amazon.com/images/I/71TFYcVxUhL._AC_SY550_.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo387tONjKKpYkPTo6XzqJEQtDAWfWfU6qReoa3mofkjJ5ZszU3Ex2ZkrsIz0HDRDZBls&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeWPh3qqRIstM5pcqO7YY4nMZhqq-7c83cYw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_LVbJ7gwn_yPooFfSc-bEYgN_5EduTFhcEw&usqp=CAU",
    "https://images-cdn.ubuy.co.in/6540283285b4b8351817da2d-small-crossbody-bags-shoulder-bag-for.jpg",
    "https://www.southernliving.com/thmb/Dgg-t3czYk3BYcORioxWDeO7_-M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Screen-Shot-2022-10-05-at-4.23.33-PM-ea8e3abdb6344606a33cbcdb9e1c1a53.png",
  ];

  useEffect(() => {
    swiperElRef.current.addEventListener("swiperProgress", (e) => {
      const [swiper, progress] = e.detail;
      console.log(progress);
    });

    swiperElRef.current.addEventListener("swiperSlideChange", () => {
      console.log("slide changed");
    });
  }, []);

  return (
    <div className="bg-white gap-4 p-3 mb-3 rounded">
      <Swiper
        ref={swiperElRef}
        modules={[Navigation]}
        slidesPerView={8}
        navigation={true}
        pagination={true}
      >
        {products.map((product, index) => (
          <SwiperSlide
            key={index}
            className=" transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-200 "
          >
            <img
              src={product}
              alt={`Slide ${index + 1}`}
              style={{
                width: "150px",
                height: "150px",
                marginLeft: "50px",
                borderRadius: "10px",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MySlider;
