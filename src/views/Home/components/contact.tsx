import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";

const Contact = () => {
  return (
    <section id="iletisim" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            İletişime <span className="text-blue-600">Geçin</span>
          </h2>
          <p className="text-xl text-gray-600">
            Size en yakın zamanda dönüş yapalım
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
            <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Telefon</h3>
            <p className="text-gray-600 mb-4">
              7/24 destek hattımızdan bize ulaşın
            </p>
            <a href="tel:+905001234567" className="text-blue-600 font-semibold">
              0 (500) 123 45 67
            </a>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
            <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">E-posta</h3>
            <p className="text-gray-600 mb-4">
              Sorularınızı e-posta ile gönderin
            </p>
            <a
              href="mailto:info@isinem.com"
              className="text-blue-600 font-semibold"
            >
              info@isinem.com
            </a>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
            <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Adres</h3>
            <p className="text-gray-600 mb-4">
              Ofisimize gelerek görüşebiliriz
            </p>
            <p className="text-gray-800">İstanbul, Türkiye</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
