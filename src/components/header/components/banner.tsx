import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";

const BannerHeader = () => {
  const googleMapsUrl =
    "https://www.google.com/maps/place/ISINEM+MAK%C4%B0NE+%26+Nem+Kurutma+Sistemleri+Kiralama+-+Sat%C4%B1%C5%9F/@41.0895272,28.9987541,17z/data=!3m1!4b1!4m6!3m5!1s0x14cab7c8acc0e7a5:0x92b5828d31dc4feb!8m2!3d41.0895232!4d29.001329!16s%2Fg%2F11xz5jmtr7?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D";

  return (
    <div className="bg-light-default-greyBg">
      <div className="container flex items-center justify-between py-3">
        <h2>ISINEM Kurutma Nem Alma</h2>
        <div className="flex items-center gap-34 text-light-secondaryColors-600">
          <a href="mailto:info@isinem.com" className="flex items-center gap-2">
            <Mail size={16} /> info@isinem.com
          </a>
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <MapPin size={16} /> Sultan Selim Mahallesi, Kağıthane/İstanbul
          </a>

          <a href="tel:+905419131424" className="flex items-center gap-2">
            <Phone size={16} /> +90 (541) 913 14 24
          </a>
        </div>
      </div>
    </div>
  );
};

export default BannerHeader;
