import SapKurutmaComp from "@/views/hizmetler/sap-kurutma";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Şap Kurutma | Isınem",
  description:
    "Şap kurutma hizmeti ile inşaatlarda ve şantiye alanlarında oluşan nemi hızlıca gideriyoruz. Şap kurutma makineleri ile profesyonel ve etkili çözümler. Isınem güvencesiyle şap kurutma hizmeti alın.",
  keywords: [
    "şap kurutma",
    "inşaat şap kurutma",
    "şap nem alma",
    "beton kurutma",
    "profesyonel şap kurutma",
    "şap kurutma makineleri",
    "şantiye şap kurutma",
  ],
};

const SapKurutma = () => {
  return (
    <div>
      <SapKurutmaComp />
    </div>
  );
};

export default SapKurutma;
