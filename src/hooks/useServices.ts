// src/hooks/useServices.ts
import { ROUTES } from "@/router/routes";
import { useTranslations } from "next-intl";

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
