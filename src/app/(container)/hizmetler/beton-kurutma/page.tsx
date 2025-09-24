import BetonKurutmaComp from "@/views/hizmetler/beton-kurutma";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beton Kurutma | Isınem",
  description:
    "Beton kurutma hizmeti ile inşaatlarda nem ve rutubeti hızlıca gideriyoruz. Şap ve beton kurutma makineleriyle şantiyelerde profesyonel çözümler. Isınem ile kısa sürede etkili kurutma hizmeti alın.",
  keywords: [
    "beton kurutma",
    "beton nem kurutma",
    "şap kurutma",
    "şantiye beton kurutma",
    "inşaat nem kurutma",
    "rutubet kurutma",
    "beton kurutma makineleri",
    "profesyonel beton kurutma",
  ],
};

const BetonKurutma = () => {
  return (
    <div>
      <BetonKurutmaComp />
    </div>
  );
};

export default BetonKurutma;
