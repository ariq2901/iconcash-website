import React from "react";
import AppStore from "Assets/images/app_store.png";
import PlayStore from "Assets/images/play_store.png";
import Phone from "Assets/images/phone.png";
import Wave from "Assets/images/wave.png";

const Hero = () => {
  return (
    <section className="relative font-poppins overflow-hidden">
      <div className="flex items-center h-screen px-6">
        <div className="content w-1/2">
          <h1 className="font-bold text-grayText text-4xl mb-8" style={{ lineHeight: "45px" }}>Temukan kemudahan <br /> pembayaran melalui ICONCASH</h1>
          <p className="mb-8 text-base text-grayText">ICONCash adalah layanan uang elektronik untuk berbagai transaksi. Beli token PLN, bayar tagihan seperti listrik, air, bahkan internet, serta pengiriman uang ke sesama ICONCash.</p>
          <div className="flex">
            <div className="w-40">
              <img src={AppStore} className="w-full" alt="" />
            </div>
            <div className="w-40 ml-5">
              <img src={PlayStore} className="w-full" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-20 ">
        <div className="w-96">
          <img src={Phone} className="w-full" alt="" />
        </div>
      </div>
      <div className="absolute bottom-0" style={{ zIndex: "-1" }}>
        <div className="w-full bg-cover h-56">
          <img src={Wave} className="w-full" alt="" />
        </div>
      </div>
    </section>
  )
}

export default Hero;