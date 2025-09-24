import OzonlaKokuGidermeComp from "@/views/hizmetler/ozonla-koku-giderme";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ozonla Koku Giderme | Isınem",
  description:
    "Ozonla koku giderme hizmeti ile ev, iş yeri ve araçlarda oluşan kötü kokuları kalıcı olarak yok ediyoruz. Profesyonel ozon makineleriyle sigara kokusu, rutubet kokusu ve diğer istenmeyen kokulara etkili çözümler.",
  keywords: [
    "ozonla koku giderme",
    "koku giderme",
    "evde koku giderme",
    "sigara kokusu giderme",
    "rutubet kokusu giderme",
    "ozon makineleri",
    "profesyonel koku giderme",
  ],
};

const OzonlaKokuGiderme = () => {
  return (
    <div>
      <OzonlaKokuGidermeComp />
    </div>
  );
};

export default OzonlaKokuGiderme;
