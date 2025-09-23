import HizmetlerimizComp from "@/views/hizmetlerimiz";
import React from "react";

export const metadata = {
  title: "Hizmetlerimiz - Isınem",
  description:
    "Isınem, nem ve rutubet kurutma, epoksi, beton ve şap kurutma hizmetlerinde uzman çözümler sunar. Şantiye ve inşaat projelerinizde güvenilir destek alabilirsiniz.",
  keywords:
    "Isınem, hizmetlerimiz, nem kurutma, rutubet kurutma, epoksi kurutma, beton kurutma, şap kurutma, inşaat hizmetleri, şantiye çözümleri, hızlı çözüm, güvenilir hizmet",
};

const Hizmetlerimiz = () => {
  return (
    <div>
      <HizmetlerimizComp />
    </div>
  );
};

export default Hizmetlerimiz;
