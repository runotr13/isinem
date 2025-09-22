import { CheckCircle } from "lucide-react";
import React from "react";

const About = () => {
  return (
    <section id="hakkimizda" className="md:py-20 py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Neden{" "}
              <span className="text-light-buttons-secondary-solidBg">
                Isınem
              </span>
              ?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Yılların deneyimi ve son teknoloji ekipmanlarımızla, nem ve
              rutubet problemlerinize kalıcı çözümler sunuyoruz. Müşteri
              memnuniyeti odaklı yaklaşımımız ve profesyonel ekibimizle sektörde
              fark yaratıyoruz.
            </p>

            <div className="space-y-4">
              {[
                "Son teknoloji nem alma ve kurutma ekipmanları",
                "Alanında uzman ve deneyimli teknik kadro",
                "7/24 acil müdahale hizmeti",
                "Çevre dostu ve güvenli çözümler",
                "Rekabetçi fiyatlar ve kalite garantisi",
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="">
            <div className="bg-gray-100 rounded-2xl p-8  text-light-buttons-secondary-solidBg">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">500+</div>
                  <div className="text-gray-900 font-semibold">
                    Tamamlanan Proje
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">%98</div>
                  <div className="text-gray-900 font-semibold">
                    Müşteri Memnuniyeti
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">7/24</div>
                  <div className="text-gray-900 font-semibold">
                    Destek Hizmeti
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">5+</div>
                  <div className="text-gray-900 font-semibold">Yıl Deneyim</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
