import HizmetlerimizComp from "@/views/hizmetlerimiz";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hizmetlerimiz | Isınem",
  description:
    "Isınem ile inşaat ve şantiye projelerinizde beton, şap, sıva, epoksi, parke ve nem kurutma hizmetlerinde hızlı ve etkili çözümler sunuyoruz. Profesyonel makineler ve deneyimli ekip ile güvenilir destek alın.",
  keywords: [
    "beton kurutma",
    "şap kurutma",
    "sıva kurutma",
    "epoksi kurutma",
    "parke kurutma",
    "nem kurutma",
    "rutubet kurutma",
    "şantiye hizmetleri",
    "inşaat kurutma",
    "Isınem hizmetler",
  ],
};

const Hizmetlerimiz = () => {
  return (
    <div>
      <HizmetlerimizComp />
    </div>
  );
};

export default Hizmetlerimiz;
