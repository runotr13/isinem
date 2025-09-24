import InsaatKurutmaComp from "@/views/hizmetler/insaat-kurutma";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İnşaat Kurutma | Isınem",
  description:
    "İnşaat kurutma hizmeti ile şantiyelerde nem ve rutubeti hızlıca gideriyoruz. Beton ve şap kurutma makineleriyle profesyonel çözümler. Isınem ile güvenilir inşaat kurutma hizmeti.",
  keywords: [
    "inşaat kurutma",
    "şantiye kurutma",
    "inşaat nem kurutma",
    "şap kurutma",
    "beton kurutma",
    "inşaat rutubet kurutma",
    "profesyonel inşaat kurutma",
  ],
};

const InsaatKurutma = () => {
  return (
    <div>
      <InsaatKurutmaComp />
    </div>
  );
};

export default InsaatKurutma;
