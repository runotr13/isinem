import NemAlmaCihazlariComp from "@/views/urunler/nem-alma-cihazlari";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nem Alma Cihazları | Isınem",
  description:
    "Nem alma cihazları ile ev, ofis, inşaat ve şantiye alanlarında nem ve rutubeti hızlıca giderin. Endüstriyel ve taşınabilir nem alma makineleri ile güvenilir ve etkili çözümler. Isınem güvencesiyle nem alma hizmeti.",
  keywords: [
    "nem alma cihazı",
    "nem giderme cihazı",
    "endüstriyel nem alma",
    "şantiye nem alma",
    "profesyonel nem alma makineleri",
    "evde nem alma",
    "ofis nem alma",
  ],
};

const NemAlmaCihazlari = () => {
  return (
    <div>
      <NemAlmaCihazlariComp />
    </div>
  );
};

export default NemAlmaCihazlari;
