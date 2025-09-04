import { ROUTES } from "@/router/routes";

const footerArr = [
  {
    isLogo: true,
    logo_url: "/logo-white.png",
  },
  {
    isLogo: false,
    title: "Hızı Menü",
    subChild: [
      // {
      //   link: ROUTES.PLATFORM_MITIGATE,
      //   title: 'Mitigate Hallucinations',
      // },
      {
        link: ROUTES.HOME,
        title: "Anasayfa",
      },
      {
        link: ROUTES.HOME,
        title: "Hizmetler",
      },
      {
        link: ROUTES.HOME,
        title: "Finansal Araçlar",
      },
      {
        link: ROUTES.ABOUT,
        title: "Hakkımızda",
      },
      {
        link: ROUTES.HOME,
        title: "İletişim",
      },
    ],
  },
  {
    isLogo: false,
    title: "Hizmetler",
    subChild: [
      {
        link: ROUTES.HOME,
        title: "Canlı Altın & Döviz Kurları",
      },
      {
        link: ROUTES.HOME,
        title: "Fiziki Altın Satışı",
      },
      {
        link: ROUTES.HOME,
        title: "Kurumsal Satış & Toptan",
      },
    ],
  },
  {
    isLogo: false,
    title: "Finansal Araçlar",
    subChild: [
      {
        link: ROUTES.HOME,
        title: "Kur Hesaplayıcı",
      },
      {
        link: ROUTES.HOME,
        title: "Altın / Döviz Dönüştürücü",
      },
      {
        link: ROUTES.HOME,
        title: "Geçmiş Kur Verileri",
      },
      {
        link: ROUTES.HOME,
        title: "Kâr / Zarar Analizi",
      },
    ],
  },
  {
    isLogo: false,
    title: "Sözleşmeler",
    subChild: [
      {
        link: ROUTES.HOME,
        title: "Gizlilik Politikası",
      },
      {
        link: ROUTES.HOME,
        title: "KVKK Aydınlatma Metni",
      },
      {
        link: ROUTES.HOME,
        title: "Kullanım Koşulları",
      },
      {
        link: ROUTES.HOME,
        title: "Çerez Politikası",
      },
      {
        link: ROUTES.HOME,
        title: "Yasal Uyarı",
      },
    ],
  },
];
export default footerArr;
