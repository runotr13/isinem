import { ROUTES } from "../../router/routes";

const breadcrumbLists = [
  { path: ROUTES.HOME, name: "Ana Sayfa" },
  { path: ROUTES.ABOUT, name: "Hakkımızda" },
  { path: ROUTES.CONTACT, name: "İletişim" },

  // Hizmetler
  { path: ROUTES.SERVICES, name: "Hizmetlerimiz" },
  { path: ROUTES.NEM_KURUTMA, name: "Nem Kurutma" },
  { path: ROUTES.RUTUBET_KURUTMA, name: "Rutubet Kurutma" },
  { path: ROUTES.EPOKSI_KURUTMA, name: "Epoksi Kurutma" },
  { path: ROUTES.BETON_KURUTMA, name: "Beton Kurutma" },
  { path: ROUTES.SAP_KURUTMA, name: "Şap Kurutma" },
  { path: ROUTES.SIVA_KURUTMA, name: "Sıva Kurutma" },
  { path: ROUTES.PARKE_KURUTMA, name: "Parke Kurutma" },
  { path: ROUTES.BOYA_KURUTMA, name: "Boya Kurutma" },
  { path: ROUTES.SANTIYE_KURUTMA, name: "Şantiye Kurutma" },
  { path: ROUTES.INSAAT_KURUTMA, name: "İnşaat Kurutma" },
  { path: ROUTES.NEM_ALMA, name: "Nem Alma" },
  { path: ROUTES.OZONLA_KOKU_GIDERME, name: "Ozonla Koku Giderme" },

  // Ürünler
  { path: ROUTES.URUNLERIMIZ, name: "Ürünlerimiz" },
  { path: ROUTES.KIRALIK_CIHAZLAR, name: "Kiralık Cihazlar" },
  { path: ROUTES.NEM_ALMA_CIHAZLARI, name: "Nem Alma Cihazları" },
  { path: ROUTES.MAZOUTLU_ISITICILAR, name: "Mazotlu Isıtıcılar" },
  { path: ROUTES.DEZENFEKTAN_CIHAZLARI, name: "Dezenfektan Cihazları" },
];

export { breadcrumbLists };
