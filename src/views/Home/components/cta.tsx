import { Phone } from "lucide-react";
import React from "react";

const Cta = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          Nem Probleminizi Çözelim
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Uzman ekibimiz sizinle iletişime geçsin, ücretsiz keşif yaparak en
          uygun çözümü sunalım.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all transform hover:scale-105">
            <Phone className="inline-block mr-2 w-5 h-5" />
            Hemen Arayın
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all">
            WhatsApp İletişim
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cta;
