import { Button } from "@/components/button";
import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Profesyonel{" "}
            <span className="  text-light-buttons-secondary-solidBg">
              Kurutma
            </span>{" "}
            ve{" "}
            <span className="  text-light-buttons-secondary-solidBg">
              Nem Alma
            </span>{" "}
            Çözümleri
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Ev, ofis , şantiye ve endüstriyel alanlarınızda nem problemlerinizi
            son teknoloji ekipmanlarımız ve uzman ekibimizle kalıcı olarak
            çözüyoruz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button>Ücretsiz Keşif Talep Et</Button>
            <Button variant="secondary">Hizmetlerimizi İncele</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
