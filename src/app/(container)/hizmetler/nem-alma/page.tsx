import NemAlmaComp from "@/views/hizmetler/nem-alma";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nem Alma | Isınem",
  description:
    "Nem alma hizmeti ile ev, ofis ve inşaatlarda oluşan fazla nemi ve rutubeti hızlıca gideriyoruz. Profesyonel nem alma makineleri ile etkili ve kalıcı çözümler. Isınem güvencesiyle nem alma hizmeti.",
  keywords: [
    "nem alma",
    "nem alma cihazı",
    "inşaat nem alma",
    "evde nem alma",
    "rutubet giderme",
    "profesyonel nem alma",
    "nem alma makineleri",
  ],
};

const NemAlma = () => {
  return (
    <div>
      <NemAlmaComp />
    </div>
  );
};

export default NemAlma;
