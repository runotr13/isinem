import React from "react";

import { Droplets } from "lucide-react";

const Footer = () => {
  const googleMapsUrl =
    "https://www.google.com/maps/place/%C3%87eliktepe,+34413+Ka%C4%9F%C4%B1thane%2F%C4%B0stanbul/@41.0841085,28.9977611,17z/data=!3m1!4b1!4m6!3m5!1s0x14cab661c4d1c769:0x833d42567d76db24!8m2!3d41.0827955!4d28.9979805!16s%2Fg%2F122hv9cd?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D";
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <Droplets className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">İsinem</span>
            </div>
            <p className="text-gray-400 mb-4">
              Profesyonel kurutma ve nem alma çözümleri ile yaşam alanlarınızı
              sağlıklı hale getiriyoruz.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Hizmetlerimiz</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Rutubet Kurutma
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Nem Kurutma
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Epoksi Kurutma
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Beton Kurutma
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Kurumsal</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Hakkımızda
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Referanslar
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Kariyer
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">İletişim</h4>
            <ul className="space-y-2 text-gray-400">
              <li>0 (500) 123 45 67</li>
              <li>info@isinem.com</li>
              <li>İstanbul, Türkiye</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 İsinem. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
