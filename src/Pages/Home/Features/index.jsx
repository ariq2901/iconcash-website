import React from "react";
import FooterFeatureCard from "Assets/images/footer_feature.png";
import BayarTagihan from "Assets/images/bayar_tagihan.png";
import BayarInternet from "Assets/images/bayar_internet.png";
import BayarMerchant from "Assets/images/bayar_merchant.png";
import KirimUang from "Assets/images/kirim_uang.png";
import KeamananSistem from "Assets/images/keamanan_sistem.png";

const Features = () => {
  return (
    <section className="pt-24 px-44 font-poppins">
      <h1 className="text-grayText mb-28 text-center text-4xl font-bold">Yang Kamu Dapat dari ICONCASH</h1>
      <div className="w-full h-56 grid grid-cols-5 gap-5">

        <div className="relative overflow-hidden rounded-md w-full h-full bg-feature-card flex justify-center pt-12">
          <div className="w-16">
            <img src={BayarTagihan} className="w-full" alt="" />
          </div>
          <div className="absolute bottom-0 w-full">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-medium text-grayText">Bayar Tagihan</span>
            </div>
            <img src={FooterFeatureCard} className="w-full object-contain" alt="" />
          </div>
        </div>

        <div className="relative overflow-hidden rounded-md w-full h-full bg-feature-card flex justify-center pt-12">
          <div className="w-36">
            <img src={BayarInternet} className="w-full" alt="" />
          </div>
          <div className="absolute bottom-0 w-full">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-medium text-grayText">Bayar Internet</span>
            </div>
            <img src={FooterFeatureCard} className="w-full object-contain" alt="" />
          </div>
        </div>

        <div className="relative overflow-hidden rounded-md w-full h-full bg-feature-card flex justify-center pt-12">
          <div className="w-16">
            <img src={BayarMerchant} className="w-full" alt="" />
          </div>
          <div className="absolute bottom-0 w-full">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-medium text-grayText">Bayar</span>
            </div>
            <img src={FooterFeatureCard} className="w-full object-contain" alt="" />
          </div>
        </div>

        <div className="relative overflow-hidden rounded-md w-full h-full bg-feature-card flex justify-center pt-12">
          <div className="w-16">
            <img src={KirimUang} className="w-full" alt="" />
          </div>
          <div className="absolute bottom-0 w-full">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-medium text-grayText">Kirim Uang</span>
            </div>
            <img src={FooterFeatureCard} className="w-full object-contain" alt="" />
          </div>
        </div>

        <div className="relative overflow-hidden rounded-md w-full h-full bg-feature-card flex justify-center pt-12">
          <div className="w-16">
            <img src={KeamananSistem} className="w-full" alt="" />
          </div>
          <div className="absolute bottom-0 w-full">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-medium text-grayText">Keamanan Sistem</span>
            </div>
            <img src={FooterFeatureCard} className="w-full object-contain" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;