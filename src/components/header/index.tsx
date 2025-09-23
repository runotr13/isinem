"use client";
import React, { useEffect, useState } from "react";
import Web from "./components/web";
import BannerHeader from "./components/banner";
import Mobile from "./components/mobile";

const Header = () => {
  const [hideBanner, setHideBanner] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHideBanner(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white border-b border-gray-200
    ${hideBanner ? "border-solid " : "border-none"}
    `}
    >
      {/* Desktop */}
      <div className="hidden md:block">
        <div
          className={`transition-all duration-500 overflow-hidden ${
            hideBanner ? "max-h-0 opacity-0" : "max-h-40 opacity-100"
          }`}
        >
          <BannerHeader />
        </div>
        <Web />
      </div>

      {/* Mobile */}
      <div className="block md:hidden">
        <Mobile />
      </div>
    </header>
  );
};

export default Header;
