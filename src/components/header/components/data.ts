import { ROUTES } from "@/router/routes";

const menuItems = [
  {
    title: "Anasayfa",
    href: ROUTES.HOME,
  },
  {
    title: "Hizmetler",
    key: "services",
    submenu: [
      {
        title: "Nem Kurutma",
        href: ROUTES.NEM_KURUTMA,
      },
      {
        title: "Rutubet Kurutma",
        href: ROUTES.RUTUBET_KURUTMA,
      },
      {
        title: "Epoksi Kurutma",
        href: ROUTES.EPOKSI_KURUTMA,
      },
      {
        title: "Beton Kurutma",
        href: ROUTES.BETON_KURUTMA,
      },
      {
        title: "Şap Kurutma",
        href: ROUTES.SAP_KURUTMA,
      },
      {
        title: "Sıva Kurutma",
        href: ROUTES.SIVA_KURUTMA,
      },
      {
        title: "Parke Kurutma",
        href: ROUTES.PARKE_KURUTMA,
      },
      {
        title: "Boya Kurutma",
        href: ROUTES.BOYA_KURUTMA,
      },
      {
        title: "Şantiye Kurutma",
        href: ROUTES.SANTIYE_KURUTMA,
      },
      {
        title: "İnşaat Kurutma",
        href: ROUTES.INSAAT_KURUTMA,
      },
      {
        title: "Nem Alma",
        href: ROUTES.NEM_ALMA,
      },
      {
        title: "Ozonla Kötü Koku Giderme",
        href: ROUTES.OZONLA_KOKU_GIDERME,
      },
    ],
  },
  {
    title: "Ürünler",
    key: "tools",
    submenu: [
      {
        title: "Kiralık Cihazlar",
        href: ROUTES.KIRALIK_CIHAZLAR,
      },
      {
        title: "Nem Alma Cihazları",
        href: ROUTES.NEM_ALMA_CIHAZLARI,
      },
      {
        title: "Mazotlu Isıtıcılar",
        href: ROUTES.MAZOUTLU_ISITICILAR,
      },
      {
        title: "Dezenfektan Cihazları",
        href: ROUTES.DEZENFEKTAN_CIHAZLARI,
      },
    ],
  },
  {
    title: "Hakkımızda",
    href: ROUTES.ABOUT,
  },
  {
    title: "İletişim",
    href: ROUTES.CONTACT,
  },
];
export default menuItems;
