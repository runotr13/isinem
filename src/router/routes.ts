export enum SITE_ROUTES {
  HOME = "/",
  ABOUT = "/hakkimizda",
  CONTACT = "/iletisim",
}

enum HIZMETLER {
  // Hizmetler
  NEM_KURUTMA = "/nem-kurutma",
  RUTUBET_KURUTMA = "/rutubet-kurutma",
  EPOKSI_KURUTMA = "/epoksi-kurutma",
  BETON_KURUTMA = "/beton-kurutma",
  SAP_KURUTMA = "/sap-kurutma",
  SIVA_KURUTMA = "/siva-kurutma",
  PARKE_KURUTMA = "/parke-kurutma",
  BOYA_KURUTMA = "/boya-kurutma",
  SANTIYE_KURUTMA = "/santiye-kurutma",
  INSAAT_KURUTMA = "/insaat-kurutma",
  NEM_ALMA = "/nem-alma",
  OZONLA_KOKU_GIDERME = "/ozonla-koku-giderme",
}

enum URUNLER {
  KIRALIK_CIHAZLAR = "/kiralik-cihazlar",
  NEM_ALMA_CIHAZLARI = "/nem-alma-cihazlari",
  MAZOUTLU_ISITICILAR = "/mazoutlu-isiticilar",
  DEZENFEKTAN_CIHAZLARI = "/dezenfektan-cihazlari",
}

export const ROUTES = {
  ...SITE_ROUTES,
  ...HIZMETLER,
  ...URUNLER,
};
