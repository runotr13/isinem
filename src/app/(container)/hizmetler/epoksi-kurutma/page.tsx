import EpoksiKurutmaComp from "@/views/hizmetler/epoksi-kurutma";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Epoksi Kurutma | Isınem",
  description:
    "Epoksi kurutma hizmeti ile zemin kaplamalarda nem ve rutubeti hızlıca gideriyoruz. Epoksi uygulamalarında profesyonel kurutma makineleri ile etkili çözümler. Isınem güvencesiyle epoksi kurutma hizmeti.",
  keywords: [
    "epoksi kurutma",
    "epoksi zemin kurutma",
    "epoksi nem alma",
    "epoksi kaplama kurutma",
    "epoksi uygulama kurutma",
    "profesyonel epoksi kurutma",
    "endüstriyel epoksi kurutma",
  ],
};

const EpoksiKurutma = () => {
  return (
    <div>
      <EpoksiKurutmaComp />
    </div>
  );
};

export default EpoksiKurutma;
