// src/i18n/request.ts
import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

export default getRequestConfig(async () => {
  const cookieLocale = (await cookies()).get("lang")?.value;
  const locale = cookieLocale || "tr";

  return {
    locale,
    messages: (await import(`../../public/translate/${locale}/index.json`))
      .default,
  };
});
