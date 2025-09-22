import React from "react";
import { Facebook, Instagram, Linkedin, Phone, Mail } from "lucide-react";
import CopyRight from "./CopyRight";
import { ROUTES } from "@/router/routes";
import Link from "next/link";

const Footer = () => {
  const links = [
    {
      text: "Ana Sayfa",
      href: ROUTES.HOME,
    },
    {
      text: "Hakkımızda",
      href: ROUTES.ABOUT,
    },
    {
      text: "Hizmetlerimiz",
      href: ROUTES.SERVICES,
    },
    {
      text: "Ürünlerimiz",
      href: ROUTES.URUNLERIMIZ,
    },
    {
      text: "İletişim",
      href: ROUTES.CONTACT,
    },
  ];
  const icons = [
    // {
    //   id: 1,
    //   icon: "/assets/images/footer/facebook-icons.png",
    //   link: "https://www.instagram.com/hizligotur.com.tr/",
    //   target: "_blank",
    // },
    {
      id: 2,
      icon: "/images/footer/x-icons.png",
      link: "https://x.com/isinem",
      target: "_blank",
      tooltip: "X (Twitter)",
    },
    {
      id: 3,
      icon: "/images/footer/instagram-icons.png",
      link: "https://www.instagram.com/isinem.com.tr/",
      target: "_blank",
      tooltip: "Instagram",
    },
    {
      id: 4,
      icon: "/images/footer/linkedin-icons.png",
      link: "https://www.linkedin.com/company/isinem/",
      target: "_blank",
      tooltip: "LinkedIn",
    },
  ];
  return (
    <footer className="py-6 container">
      <div className="flex md:justify-between justify-center items-center flex-wrap gap-6">
        <div className="flex flex-col md:items-start items-center gap-[6px]">
          <CopyRight />
          <div className="flex items-center gap-[14px] flex-wrap justify-center md:justify-start">
            {links.map((contract, i) => (
              <React.Fragment key={contract.text}>
                <Link
                  href={contract.href}
                  className="text-xs leading-16 font-medium text-light-greys-400 hover:text-light-secondayColors-500"
                >
                  {contract.text}
                </Link>
                {links.length - 1 !== i && (
                  <span className="text-light-greys-600 text-xs leading-16 font-medium">
                    -
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <a
              href="mailto:info@hizligotur.com"
              target="_blank"
              className="text-black hover:text-light-secondaryColors-500"
            >
              info@isinem.com
            </a>
            <a
              href="tel:+905399757069"
              target="_blank"
              className="text-black hover:text-light-secondaryColors-500"
            >
              +90 (539) 975 70 69
            </a>
          </div>
        </div>

        <div className="flex items-center gap-6">
          {icons.map((icon) => (
            <Link key={icon.id} href={"#"} target={icon.target}>
              <img
                src={icon.icon}
                alt="social-icon"
                className="w-6 h-6 cursor-pointer"
                data-tooltip-id={`tooltip-${icon.id}`}
                data-tooltip-content={icon.tooltip}
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
