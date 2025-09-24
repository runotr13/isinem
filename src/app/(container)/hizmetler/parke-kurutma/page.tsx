import ParkeKurutmaComp from "@/views/hizmetler/parke-kurutma";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Parke Kurutma | Isınem",
  description:
    "Parke kurutma hizmeti ile parke döşemelerinde oluşan nem ve rutubeti hızlıca gideriyoruz. Şap sonrası parke kurutma makineleri ile profesyonel ve kalıcı çözümler. Isınem güvencesiyle parke kurutma hizmeti.",
  keywords: [
    "parke kurutma",
    "parke nem alma",
    "parke rutubet kurutma",
    "şap sonrası parke kurutma",
    "zemin kurutma",
    "profesyonel parke kurutma",
    "parke kurutma makineleri",
  ],
};

const ParkeKurutma = () => {
  return (
    <div>
      <ParkeKurutmaComp />
    </div>
  );
};

export default ParkeKurutma;
