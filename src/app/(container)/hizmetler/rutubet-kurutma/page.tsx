import RutubetKurutmaComp from "@/views/hizmetler/rutubet-kurutma";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rutubet Kurutma | Isınem",
  description:
    "Rutubet kurutma hizmeti ile ev, ofis ve inşaatlarda oluşan nem ve rutubeti kısa sürede gideriyoruz. Profesyonel rutubet kurutma makineleri ile kalıcı çözümler. Isınem güvencesiyle rutubet kurutma hizmeti.",
  keywords: [
    "rutubet kurutma",
    "rutubet giderme",
    "evde rutubet kurutma",
    "inşaat rutubet kurutma",
    "şantiye rutubet kurutma",
    "profesyonel rutubet kurutma",
    "rutubet kurutma makineleri",
  ],
};

const RutubetKurutma = () => {
  return (
    <div>
      <RutubetKurutmaComp />
    </div>
  );
};

export default RutubetKurutma;
