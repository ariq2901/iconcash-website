import React, { Fragment } from "react";
import Phone2 from "Assets/images/phone2.png";
import AppStore from "Assets/images/app_store.png";
import PlayStore from "Assets/images/play_store.png";
import LogoIconCash from "Assets/images/logo_iconcash.png";

const Footer = () => {
  function getYear() {
    return new Date().getFullYear();
  }

  return (
    <Fragment>
      <section className="bg-footer w-full pt-3 pb-0 pl-32 font-poppins">
        <div className="w-full flex items-center">
          <div className="w-80">
            <img src={Phone2} alt="" className="w-full" />
          </div>

          <div className="flex items-baseline pt-10">
            <div className="pb-20 text-white px-10">
              <h2 className="text-white font-semibold text-xl mb-5">ICONCASH</h2>
              <ul className="list-none">
                <li className="font-light text-sm mb-2">Tentang ICONCash</li>
                <li className="font-light text-sm mb-2">Karir</li>
                <li className="font-light text-sm">Business & Enterprise</li>
              </ul>
            </div>

            <div className="pb-20 text-white px-10">
              <h2 className="text-white font-semibold text-xl mb-5">INFORMASI PENTING</h2>
              <ul className="list-none">
                <li className="font-light text-sm mb-2">Syarat & Ketentuan</li>
                <li className="font-light text-sm mb-2">FAQ</li>
                <li className="font-light text-sm mb-2">Cara Top up</li>
                <li className="font-light text-sm mb-2">Hubungi Kami</li>
                <li className="font-light text-sm">Kebijakan Privasi</li>
              </ul>
            </div>

            <div className="pb-20 text-white px-10">
              <h2 className="text-white font-semibold text-xl mb-5">DOWNLOAD SEKARANG</h2>
              <div>
                <div className="w-40">
                  <img src={AppStore} className="w-full mb-3" alt="" />
                </div>
                <div className="w-40">
                  <img src={PlayStore} className="w-full" alt="" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
      <div className="flex justify-between items-center py-3 px-16 font-poppins">
        <div className="flex items-center">
          <div className="w-8">
            <img src={LogoIconCash} alt="" className="w-full" />
          </div>
          <span className="ml-2 text-lg">icon<span className="font-semibold">cash</span></span>
        </div>
        <p className="text-right text-sm">© {getYear()} ICONCASH - PT. Indonesia Comnets Plus. All Rights Reserved.</p>
      </div>
    </Fragment>
  );
}

export default Footer;