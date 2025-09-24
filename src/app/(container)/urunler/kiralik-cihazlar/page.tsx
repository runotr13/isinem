import KiralikCihazlarComp from "@/views/urunler/kiralik-cihazlar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kiralık Cihazlar | Isınem",
  description:
    "Kiralık cihazlar hizmeti ile inşaat ve şantiye projelerinizde beton, şap, sıva ve nem kurutma makinelerini kısa süreliğine temin edebilirsiniz. Profesyonel ve güvenilir cihaz kiralama çözümleri Isınem güvencesiyle.",
  keywords: [
    "kiralık cihazlar",
    "inşaat cihaz kiralama",
    "şantiye makineleri",
    "beton kurutma cihaz kiralama",
    "şap kurutma cihaz kiralama",
    "nem giderme cihaz kiralama",
    "profesyonel kiralık makineler",
  ],
};

const KiralikCihazlar = () => {
  return (
    <div>
      <KiralikCihazlarComp />
    </div>
  );
};

export default KiralikCihazlar;
