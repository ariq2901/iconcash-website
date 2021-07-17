import React, { Fragment, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PromoImage from "Assets/images/promo.png";
import { CustomArrow } from "Components/CustomSlider";

const Promo = () => {
  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <div className="promo-slick-dots"></div>
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots promo-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <CustomArrow prev={false} />,
    prevArrow: <CustomArrow prev={true} />,
  }

  const [data, setData] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  return (
    <Fragment>
      <section className="bg-graySection w-full flex flex-col items-center pt-16.1 pb-20 font-poppins px-52">
        <h1 className="text-grayText mb-16 text-center text-4xl font-bold">Promo Untuk Kamu</h1>
        <div className="w-full h-96 mb-17">
          <Slider {...settings} className="w-full h-full promo-slider">
            {data.map((mn, idx) =>
              <div className="w-full h-full bg-white shadow-lg rounded-xl" key={idx}>
                <div className="w-full h-3/5 overflow-hidden">
                  <img src={PromoImage} alt="" className="h-full w-full" />
                </div>
                <div className="w-full h-2/5 px-5 pt-3 pb-4 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-base text-grayText">ELECTRIC LIFESTYLE</h4>
                    <span className="font-normal text-xs text-grayText mt-2">Berlaku sampai dengan 11 Juli 2021</span>
                  </div>
                  <div className="w-full h-9 py-2 pl-4 pr-2 bg-core rounded-md flex justify-between items-center">
                    <p className="text-sm text-gray-900">Lihat Detail Promo</p>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            )}
          </Slider>
        </div>
        <div className="w-72">
          <button className="w-full h-12 rounded-lg bg-core font-semibold focus:outline-none shadow-lg">Temukan Promo Lain</button>
        </div>
      </section>
    </Fragment>
  );
}

export default Promo;