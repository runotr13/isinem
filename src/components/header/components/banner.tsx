import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";

const BannerHeader = () => {
  const googleMapsUrl =
    "https://www.google.com/maps/place/Sultan+Selim,+G%C3%BCzel+Yonca+Soka%C4%9F%C4%B1+20a,+34415+Ka%C4%9F%C4%B1thane%2F%C4%B0stanbul/@41.0895272,28.9987541,17z/data=!3m1!4b1!4m6!3m5!1s0x14cab662cf23dfa3:0x752cc8b3d95e0cd4!8m2!3d41.0895232!4d29.001329!16s%2Fg%2F11nnk_ks1t?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D";

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
          <a href="tel:+905399757069" className="flex items-center gap-2">
            <Phone size={16} /> +90 (539) 975 70 69
          </a>
        </div>
      </div>
    </div>
  );
};

export default BannerHeader;
