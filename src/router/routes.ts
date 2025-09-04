export enum SITE_ROUTES {
  HOME = "/",
  ABOUT = "/hakkimizda",
  CONTACT = "/iletisim",
}

enum HIZMETLER {
  // Hizmetler
  CORPORATE_SALES = "/kurumsal-satis-ve-toptan",
  PHYSICAL_GOLD = "/fiziki-altin-satisi",
  LOGISTICS = "/uluslararasi-lojistik-cozumleri",
}

enum FINANSAL {
  // Finansal Araçlar
  EXCHANGE_CALCULATOR = "/kur-hesaplayici",
  PAST_EXCHANGE_DATA = "/gecmis-kur-verileri",
  PROFIT_LOSS_ANALYSIS = "/kar-zarar-analizi",
}

export const ROUTES = {
  ...SITE_ROUTES,
  ...HIZMETLER,
  ...FINANSAL,
};
