import UrunlerimizComp from "@/views/urunlerimiz";
import React from "react";

export const metadata = {
  title: "Ürünlerimiz - Isınem",
  description:
    "Isınem’in ürünleri: Kiralık Cihazlar, Nem Alma Cihazları, Mazotlu Isıtıcılar ve Dezenfektan Cihazları ile projelerinize hızlı ve güvenilir çözümler sağlayın.",
  keywords:
    "Isınem, ürünlerimiz, Kiralık Cihazlar, Nem Alma Cihazları, Mazotlu Isıtıcılar, Dezenfektan Cihazları, nem kurutma, rutubet kurutma, epoksi kurutma, beton kurutma, şap kurutma",
};

const Urunlerimiz = () => {
  return (
    <div>
      <UrunlerimizComp />
    </div>
  );
};

export default Urunlerimiz;
