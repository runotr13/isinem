import DezenfektenCihazlariComp from "@/views/urunler/dezenfektan-cihazlari";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dezenfektan Cihazları | Isınem",
  description:
    "Dezenfektan cihazları ile ev, ofis ve iş yerlerinde hijyeninizi maksimum seviyeye çıkarın. Otomatik ve endüstriyel dezenfektan makineleri ile güvenli ve pratik çözümler. Isınem güvencesiyle sağlıklı ortam sağlayın.",
  keywords: [
    "dezenfektan cihazı",
    "otomatik dezenfektan",
    "hijyen cihazları",
    "endüstriyel dezenfektan",
    "ofis dezenfektan",
    "ev dezenfektan",
    "profesyonel dezenfektan cihazları",
  ],
};

const DezenfektenCihazlari = () => {
  return (
    <div>
      <DezenfektenCihazlariComp />
    </div>
  );
};

export default DezenfektenCihazlari;
