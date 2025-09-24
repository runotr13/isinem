import BoyaKurutmaComp from "@/views/hizmetler/boya-kurutma";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Boya Kurutma | Isınem",
  description:
    "Boya kurutma hizmeti ile yeni yapılan boya ve kaplamalarda nemi hızlıca gideriyoruz. Endüstriyel boya kurutma makineleriyle profesyonel ve etkili çözümler. Isınem ile kısa sürede boya kurutma hizmeti alın.",
  keywords: [
    "boya kurutma",
    "boya nem kurutma",
    "endüstriyel boya kurutma",
    "boya kurutma makineleri",
    "boya nem alma",
    "profesyonel boya kurutma",
  ],
};

const BoyaKurutma = () => {
  return (
    <div>
      <BoyaKurutmaComp />
    </div>
  );
};

export default BoyaKurutma;
