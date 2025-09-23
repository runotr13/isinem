import { ROUTES } from "@/router/routes";
import { useTranslations } from "next-intl";

const useHeaderData = () => {
  const t = useTranslations("header");

  const data = [
    {
      title: t("home"),
      href: ROUTES.HOME,
    },
    {
      title: t("services.text"),
      key: "services",
      submenu: [
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
      ],
    },
    {
      title: t("products.text"),
      key: "products",
      submenu: [
        { title: t("products.p1"), href: ROUTES.KIRALIK_CIHAZLAR },
        { title: t("products.p2"), href: ROUTES.NEM_ALMA_CIHAZLARI },
        { title: t("products.p3"), href: ROUTES.MAZOUTLU_ISITICILAR },
        { title: t("products.p4"), href: ROUTES.DEZENFEKTAN_CIHAZLARI },
      ],
    },
    {
      title: t("about"),
      href: ROUTES.ABOUT,
    },
    {
      title: t("contact"),
      href: ROUTES.CONTACT,
    },
  ];

  return { data };
};

export default useHeaderData;
