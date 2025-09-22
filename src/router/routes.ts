export enum SITE_ROUTES {
  HOME = "/",
  ABOUT = "/hakkimizda",
  CONTACT = "/iletisim",
}

enum HIZMETLER {
  // Hizmetler
  SERVICES = "/hizmetlerimiz",
  NEM_KURUTMA = "/hizmetler/nem-kurutma",
  RUTUBET_KURUTMA = "/hizmetler/rutubet-kurutma",
  EPOKSI_KURUTMA = "/hizmetler/epoksi-kurutma",
  BETON_KURUTMA = "/hizmetler/beton-kurutma",
  SAP_KURUTMA = "/hizmetler/sap-kurutma",
  SIVA_KURUTMA = "/hizmetler/siva-kurutma",
  PARKE_KURUTMA = "/hizmetler/parke-kurutma",
  BOYA_KURUTMA = "/hizmetler/boya-kurutma",
  SANTIYE_KURUTMA = "/hizmetler/santiye-kurutma",
  INSAAT_KURUTMA = "/hizmetler/insaat-kurutma",
  NEM_ALMA = "/hizmetler/nem-alma",
  OZONLA_KOKU_GIDERME = "/hizmetler/ozonla-koku-giderme",
}

enum URUNLER {
  URUNLERIMIZ = "/urunlerimiz",
  KIRALIK_CIHAZLAR = "/urunler/kiralik-cihazlar",
  NEM_ALMA_CIHAZLARI = "/urunler/nem-alma-cihazlari",
  MAZOUTLU_ISITICILAR = "/urunler/mazotlu-isiticilar",
  DEZENFEKTAN_CIHAZLARI = "/urunler/dezenfektan-cihazlari",
}

export const ROUTES = {
  ...SITE_ROUTES,
  ...HIZMETLER,
  ...URUNLER,
};
