"use client";
import { ROUTES } from "@/router/routes";
import Link from "next/link";
import { ReactNode, useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/button";
import { useTranslations } from "next-intl";
import BreadCrumbComp from "@/views/hizmetler/breadCrumbComp";

export const useServices = () => {
  const t = useTranslations("header");
  const services = [
    { title: t("services.s1"), href: ROUTES.NEM_KURUTMA },
    { title: t("services.s2"), href: ROUTES.RUTUBET_KURUTMA },
    { title: t("services.s3"), href: ROUTES.EPOKSI_KURUTMA },
    { title: t("services.s4"), href: ROUTES.BETON_KURUTMA },
    { title: t("services.s5"), href: ROUTES.SAP_KURUTMA },
    { title: t("services.s6"), href: ROUTES.SIVA_KURUTMA },
    { title: t("services.s7"), href: ROUTES.PARKE_KURUTMA },
    { title: t("services.s8"), href: ROUTES.BOYA_KURUTMA },
    { title: t("services.s9"), href: ROUTES.SANTIYE_KURUTMA },
    { title: t("services.s10"), href: ROUTES.INSAAT_KURUTMA },
    { title: t("services.s11"), href: ROUTES.NEM_ALMA },
    { title: t("services.s12"), href: ROUTES.OZONLA_KOKU_GIDERME },
  ];
  return services;
};

export default function HizmetlerLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const services = useServices();
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => setIsOpen((prev) => !prev);

  return (
    <div>
      <BreadCrumbComp />
      <div className="container mx-auto grid grid-cols-12 gap-4">
        {/* Sidebar */}
        <aside
          className={`bg-gray-100 border-r border-gray-300 p-4 flex flex-col transition-all duration-500 overflow-hidden col-span-3 ${
            isOpen ? "max-h-[1000px]" : "max-h-48"
          }`}
        >
          <h2
            className={`text-2xl font-bold text-black mb-4 transition-opacity duration-300 `}
          >
            Hizmetler
          </h2>
          <ul className="flex flex-col gap-2 flex-1 transition-all duration-500">
            {services
              .filter((service) => {
                const isActive = pathname === service.href;
                return isOpen ? true : isActive;
              })
              .map((service) => {
                const isActive = pathname === service.href;
                return (
                  <li key={service.href} className="min-w-44">
                    <Link href={service.href}>
                      <Button
                        variant={isActive ? "secondary" : "third"}
                        className="w-full justify-start"
                      >
                        {service.title}
                      </Button>
                    </Link>
                  </li>
                );
              })}
          </ul>

          {/* Toggle Button */}
          <Button variant="primary" onClick={toggleSidebar} className="mt-4">
            {isOpen ? "Küçült" : "Genişlet"}
          </Button>
        </aside>

        {/* Ana içerik */}
        <main className="flex-1 col-span-9">{children}</main>
      </div>
    </div>
  );
}
