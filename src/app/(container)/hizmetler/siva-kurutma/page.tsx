import SivaKurutmaComp from "@/views/hizmetler/siva-kurutma";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sıva Kurutma | Isınem",
  description:
    "Sıva kurutma hizmeti ile inşaat ve şantiye alanlarında oluşan nem ve rutubeti hızlıca gideriyoruz. Profesyonel sıva kurutma makineleri ile etkili ve kalıcı çözümler. Isınem güvencesiyle sıva kurutma hizmeti alın.",
  keywords: [
    "sıva kurutma",
    "inşaat sıva kurutma",
    "şap ve sıva kurutma",
    "sıva nem giderme",
    "profesyonel sıva kurutma",
    "sıva kurutma makineleri",
    "şantiye sıva kurutma",
  ],
};

const SivaKurutma = () => {
  return (
    <div>
      <SivaKurutmaComp />
    </div>
  );
};

export default SivaKurutma;
