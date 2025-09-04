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
        title: "Kurumsal Satış ve Toptan",
        href: ROUTES.CORPORATE_SALES,
      },
      {
        title: "Fiziki Altın Satışı",
        href: ROUTES.PHYSICAL_GOLD,
      },
      {
        title: "Uluslararası Lojistik Çözümleri",
        href: ROUTES.LOGISTICS,
      },
    ],
  },
  {
    title: "Finansal Araçlar",
    key: "tools",
    submenu: [
      {
        title: "Kur Hesaplayıcı",
        href: ROUTES.EXCHANGE_CALCULATOR,
      },
      {
        title: "Geçmiş Kur Verileri",
        href: ROUTES.PAST_EXCHANGE_DATA,
      },
      {
        title: "Kâr / Zarar Analizi",
        href: ROUTES.PROFIT_LOSS_ANALYSIS,
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
