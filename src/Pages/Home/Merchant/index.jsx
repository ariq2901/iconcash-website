import React, { Fragment } from "react";
import PlnLogo from "Assets/images/pln.png";
import HpLogo from "Assets/images/hp.png";
import IconnetLogo from "Assets/images/iconnet.png";
import IndomaretLogo from "Assets/images/indomaret.png";
import AlfamartLogo from "Assets/images/alfamart.png";

const Merchant = () => {
  return (
    <Fragment>
      <section className="w-full pt-16.1 font-poppins flex flex-col items-center">
        <h1 className="text-grayText text-center text-4xl font-bold mb-24">Merchant Kami</h1>
        <div className="w-full grid grid-cols-3 lg:grid-cols-5 place-items-center lg:px-17 mb-32">
          <div className="w-20">
            <img src={PlnLogo} className="w-full" alt="" />
          </div>
          <div className="w-full lg:px-10">
            <img src={HpLogo} className="w-full" alt="" />
          </div>
          <div className="w-full lg:px-10">
            <img src={IconnetLogo} className="w-full" alt="" />
          </div>
          <div className="w-full lg:px-10">
            <img src={IndomaretLogo} className="w-full" alt="" />
          </div>
          <div className="w-full lg:px-10">
            <img src={AlfamartLogo} className="w-full" alt="" />
          </div>
        </div>
        <div className="w-72">
          <button className="w-full h-12 rounded-lg border bg-white text-sm border-core font-normal text-grayText2 focus:outline-none shadow-lg">Temukan Merchant Lain</button>
        </div>
      </section>
    </Fragment>
  );
}

export default Merchant;