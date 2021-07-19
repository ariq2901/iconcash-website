import React, { Fragment, useEffect, useState } from "react";
import Logo from "Assets/images/logo_iconcash.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const addDropShadow = () => {
    if (window.scrollY >= 150) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', addDropShadow);

    return () => {
      window.removeEventListener('scroll', addDropShadow);
    }
  })

  return (
    <Fragment>
      <nav className={`fixed top-0 inset-x-0 z-20 bg-white transition ease-in-out flex justify-between items-center font-poppins px-6 py-5 ${navbar ? 'active' : ''}`}>
        <div className="flex items-center">
          <div className="w-12">
            <img src={Logo} className="w-full" />
          </div>
          <span className="ml-2 text-2xl"><span>icon</span><span className="font-semibold">cash</span></span>
        </div>
        <div className="flex">
          <div className="px-4 text-grayText">
            <Link>Fitur Kami</Link>
          </div>
          <div className="px-4 text-grayText">
            <Link>Promo</Link>
          </div>
          <div className="px-4 text-grayText">
            <Link>Merchant</Link>
          </div>
          <div className="px-4 text-grayText">
            <Link>Hubungi Kami</Link>
          </div>
          <div className="px-4 text-grayText">
            <Link>Artikel</Link>
          </div>
        </div>
        <div className="flex justify-center items-center font-semibold cursor-pointer bg-core w-36 h-10 rounded-md shadow-md">DOWNLOAD</div>
      </nav>
    </Fragment>
  );
}

export default Navbar;