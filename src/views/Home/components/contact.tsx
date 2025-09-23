import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";

const Contact = () => {
  const googleMapsUrl =
    "https://www.google.com/maps/place/ISINEM+MAK%C4%B0NE+%26+Nem+Kurutma+Sistemleri+Kiralama+-+Sat%C4%B1%C5%9F/@41.0895272,28.9987541,17z/data=!3m1!4b1!4m6!3m5!1s0x14cab7c8acc0e7a5:0x92b5828d31dc4feb!8m2!3d41.0895232!4d29.001329!16s%2Fg%2F11xz5jmtr7?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D";

  return (
    <section id="iletisim" className="md:py-20 py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            İletişime{" "}
            <span className="text-light-buttons-secondary-solidBg">Geçin</span>
          </h2>
          <p className="text-xl text-gray-600">
            Size en yakın zamanda dönüş yapalım
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
            <Phone className="w-12 h-12 text-light-buttons-secondary-solidBg mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Telefon</h3>
            <p className="text-gray-600 mb-4">
              7/24 destek hattımızdan bize ulaşın
            </p>
            <a
              href="tel:+905419131424"
              className="text-light-buttons-secondary-solidBg font-semibold"
            >
              +90 (541) 913 14 24
            </a>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
            <Mail className="w-12 h-12 text-light-buttons-secondary-solidBg mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">E-posta</h3>
            <p className="text-gray-600 mb-4">
              Sorularınızı e-posta ile gönderin
            </p>
            <a
              href="mailto:isinemmakine@gmail.com"
              className="text-light-buttons-secondary-solidBg font-semibold"
            >
              isinemmakine@gmail.com
            </a>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
            <MapPin className="w-12 h-12 text-light-buttons-secondary-solidBg mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Adres</h3>
            <p className="text-gray-600 mb-4">
              Ofisimize gelerek görüşebiliriz
            </p>
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-light-buttons-secondary-solidBg  font-semibold"
            >
              Sultan Selim Mahallesi, Kağıthane/İstanbul
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
