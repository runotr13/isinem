import React from "react";

import Image from "next/image";
import Link from "next/link";

import CopyRight from "./CopyRight";
import data from "./data";
import { ROUTES } from "@/router/routes";
import { Button } from "../button";
import { ChevronRight } from "lucide-react";

const Footer = () => {
  const googleMapsUrl =
    "https://www.google.com/maps/place/DILA+K%C4%B1ymetli+Madenler/@41.0126217,28.9625671,17z/data=!3m1!4b1!4m6!3m5!1s0x14cab99a96d673fd:0xabf6f42f5c3ae340!8m2!3d41.0126178!4d28.967438!16s%2Fg%2F11wnck4b57?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D";
  return (
    <div className="bg-light-default-darkBg">
      <footer>
        <div className="container py-6 md:py-20">
          <div className="flex md:justify-between flex-wrap md:flex-row flex-col md:items-start items-center md:gap-0 gap-6">
            {data.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  {item.isLogo && (
                    <Link href={ROUTES.HOME}>
                      <Image
                        alt="DILA GOLD"
                        src={item.logo_url || "/logo.png"}
                        width={214}
                        height={80}
                      />
                    </Link>
                  )}
                  <div className="flex flex-col md:gap-[18px] gap-[14px] md:items-start items-center">
                    {!item.isLogo && item.title && (
                      <span className="text-sm md:text-base font-bold leading-5 text-light-default-baseTextWhite">
                        {item.title}
                      </span>
                    )}
                    {!item.isLogo &&
                      item.title &&
                      item.subChild.length > 0 &&
                      item.subChild.map((sub, i) => (
                        <Link
                          key={i}
                          href={sub.link}
                          className="relative inline-block md:text-base text-sm font-normal leading-5 text-light-default-baseTextWhite hover:text-light-default-baseTextWhite
                      before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-[2px] before:w-0
                      before:bg-light-secondaryColors-300 before:transition-all before:duration-300 before:ease-in-out
                      hover:before:w-full"
                        >
                          {sub.title}
                        </Link>
                      ))}
                  </div>
                </React.Fragment>
              );
            })}
            <div className="flex flex-col gap-[18px] md:items-start items-center md:max-w-60 md:text-start text-center">
              <span className="text-sm md:text-base font-bold leading-5 text-light-default-baseTextWhite">
                İletişim
              </span>
              <div className="flex flex-col gap-14">
                <p>
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-block text-sm font-normal leading-22 text-light-default-baseTextWhite hover:text-light-default-baseTextWhite
                      before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-[2px] before:w-0
                      before:bg-light-secondaryColors-300 before:transition-all before:duration-300 before:ease-in-out
                      hover:before:w-full"
                  >
                    Adres <br />
                    Beyazıt Mah. Yağlıkcılar Cad. No: 8 Örücüler Kapısı Kapalı
                    Çarşı Fatih / İstanbul
                  </a>
                </p>
                <p>
                  <a
                    href="tel:+90 (212) 458 53 53"
                    className="relative inline-block text-sm font-normal leading-22 text-light-default-baseTextWhite hover:text-light-default-baseTextWhite
                      before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-[2px] before:w-0
                      before:bg-light-secondaryColors-300 before:transition-all before:duration-300 before:ease-in-out
                      hover:before:w-full"
                  >
                    Telefon <br /> +90 (212) 458 53 53
                  </a>
                </p>
                <p>
                  <a
                    href="mailto:info@dilakiymetlimadenler.com"
                    className="relative inline-block text-sm font-normal leading-22 text-light-default-baseTextWhite hover:text-light-default-baseTextWhite
                      before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-[2px] before:w-0
                      before:bg-light-secondaryColors-300 before:transition-all before:duration-300 before:ease-in-out
                      hover:before:w-full"
                  >
                    E-Posta <br /> info@dilakiymetlimadenler.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[2px] bg-light-greys-700" />
        <div className="container">
          <CopyRight />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
