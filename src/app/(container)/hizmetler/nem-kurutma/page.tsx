import NemKurutmaComp from "@/views/hizmetler/nem-kurutma";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nem Kurutma | Isınem",
  description:
    "Nem kurutma hizmeti ile inşaatlarda, ev ve iş yerlerinde oluşan fazla nemi hızlıca gideriyoruz. Profesyonel nem kurutma makineleri ile etkili ve kalıcı çözümler. Isınem güvencesiyle nem kurutma hizmeti.",
  keywords: [
    "nem kurutma",
    "inşaat nem kurutma",
    "şantiye nem kurutma",
    "rutubet kurutma",
    "evde nem kurutma",
    "profesyonel nem kurutma",
    "nem kurutma makineleri",
  ],
};

const NemKurutma = () => {
  return (
    <div>
      <NemKurutmaComp />
    </div>
  );
};

export default NemKurutma;
