import React from "react";

const BannerHeader = () => {
  const googleMapsUrl =
    "https://www.google.com/maps/place/DILA+K%C4%B1ymetli+Madenler/@41.0126217,28.9625671,17z/data=!3m1!4b1!4m6!3m5!1s0x14cab99a96d673fd:0xabf6f42f5c3ae340!8m2!3d41.0126178!4d28.967438!16s%2Fg%2F11wnck4b57?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D";

  return (
    <div className="bg-light-default-greyBg">
      <div className="container flex items-center justify-between py-3">
        <h2>DILA Kıymetli Madenler</h2>
        <div className="flex items-center gap-34 text-light-secondaryColors-600">
          <a href="mailto:info@dilakiymetlimadenler.com">
            info@dilakiymetlimadenler.com
          </a>
          <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
            Beyazıt Mah. Yağlıkcılar Cad. No: 8 Örücüler Kapısı Kapalı Çarşı
            Fatih / İstanbul
          </a>
          <a href="tel:+90 (212) 458 53 53">+90 (212) 458 53 53</a>
        </div>
      </div>
    </div>
  );
};

export default BannerHeader;
