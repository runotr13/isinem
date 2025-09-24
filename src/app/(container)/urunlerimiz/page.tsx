import UrunlerimizComp from "@/views/urunlerimiz";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ürünlerimiz | Isınem",
  description:
    "Isınem’in ürünleri ile projelerinize hızlı ve güvenilir çözümler sağlayın. Kiralık Cihazlar, Nem Alma Cihazları, Mazotlu Isıtıcılar ve Dezenfektan Cihazları ile inşaat ve şantiye alanlarında etkili çözümler sunuyoruz.",
  keywords: [
    "Isınem",
    "ürünlerimiz",
    "Kiralık Cihazlar",
    "Nem Alma Cihazları",
    "Mazotlu Isıtıcılar",
    "Dezenfektan Cihazları",
    "inşaat ekipmanları",
    "şantiye cihazları",
    "nem giderme cihazları",
    "profesyonel makineler",
  ],
};

const Urunlerimiz = () => {
  return (
    <div>
      <UrunlerimizComp />
    </div>
  );
};

export default Urunlerimiz;
