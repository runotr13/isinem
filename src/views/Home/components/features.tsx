import React from "react";
import { Award, Clock, Shield, Star } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Shield />,
      title: "7/24 Hizmet",
      description: "Acil durumlarda 7 gün 24 saat hizmetinizdeyiz",
    },
    {
      icon: <Award />,
      title: "Uzman Ekip",
      description: "Alanında deneyimli ve sertifikalı teknik ekibimiz",
    },
    {
      icon: <Clock />,
      title: "Hızlı Çözüm",
      description: "En kısa sürede profesyonel çözüm sağlıyoruz",
    },
    {
      icon: <Star />,
      title: "Garanti",
      description: "Tüm hizmetlerimizde kalite garantisi sunuyoruz",
    },
  ];
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-16">
            Neden Bizi
            <span className="text-light-buttons-secondary-solidBg">
              {" "}
              Seçmelisiniz?
            </span>{" "}
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl border border-solid border-gray-200 hover:shadow-lg transition-all"
            >
              <div className="w-16 h-16 bg-light-default-greyBg rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-light-buttons-secondary-solidBg w-8 h-8 flex items-center justify-center">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
