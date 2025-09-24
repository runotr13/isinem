import MazotluIsiticilarComp from "@/views/urunler/mazotlu-isiticilar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mazotlu Isıtıcılar | Isınem",
  description:
    "Mazotlu ısıtıcılar ile şantiye, inşaat ve açık alanlarda hızlı ve etkili ısıtma sağlayın. Endüstriyel ve taşınabilir mazotlu ısıtıcılar ile güvenilir çözümler. Isınem güvencesiyle kaliteli ısıtıcı temini.",
  keywords: [
    "mazotlu ısıtıcı",
    "diesel ısıtıcı",
    "şantiye ısıtıcı",
    "endüstriyel ısıtıcı",
    "taşınabilir mazotlu ısıtıcı",
    "profesyonel ısıtıcı",
    "inşaat ısıtıcı",
  ],
};

const MazotluIsiticilar = () => {
  return (
    <div>
      <MazotluIsiticilarComp />
    </div>
  );
};

export default MazotluIsiticilar;
