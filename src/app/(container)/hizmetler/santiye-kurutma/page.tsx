import SantiyeKurutmaComp from "@/views/hizmetler/santiye-kurutma";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Şantiye Kurutma | Isınem",
  description:
    "Şantiye kurutma hizmeti ile inşaat ve şantiye alanlarında oluşan nem ve rutubeti hızlıca gideriyoruz. Beton ve şap kurutma makineleri ile profesyonel çözümler. Isınem güvencesiyle şantiye kurutma hizmeti alın.",
  keywords: [
    "şantiye kurutma",
    "inşaat kurutma",
    "şap kurutma",
    "beton kurutma",
    "şantiye nem kurutma",
    "profesyonel şantiye kurutma",
    "şantiye kurutma makineleri",
  ],
};

const SantiyeKurutma = () => {
  return (
    <div>
      <SantiyeKurutmaComp />
    </div>
  );
};

export default SantiyeKurutma;
