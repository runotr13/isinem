import React from "react";
import Web from "./components/web";
import BannerHeader from "./components/banner";
import Mobile from "./components/mobile";

const Header = () => {
  return (
    <div>
      <div className="md:block hidden">
        <BannerHeader />
        <Web />
      </div>
      <div className="md:hidden block">
        <Mobile />
      </div>
    </div>
  );
};

export default Header;
