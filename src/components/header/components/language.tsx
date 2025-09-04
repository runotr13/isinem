"use client";

import { ROUTES } from "@/router/routes";
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import React from "react";
import { setCookie } from "cookies-next";

const Language = () => {
  const router = useRouter();
  const currentLocale = useLocale();
  const t = useTranslations("header");
  const tb = useTranslations("buttons");

  const changeLocale = (locale: string) => {
    setCookie("lang", locale, { path: "/" });
    document.documentElement.lang = locale;
    router.refresh();
  };

  return (
    <div className="">
      <div className="relative group">
        {/* Tetikleyici */}
        <div className="flex items-center gap-1 cursor-pointer pt-2  border-t-[3px] border-solid border-light-buttons-primary-outlineBorder">
          <span className="text-sm font-medium leading-18 text-light-default-baseTextBlack">
            {currentLocale.toUpperCase()}
          </span>
          <ChevronDown className="w-4 h-4 group-hover:hidden" color="#013682" />
          <ChevronUp
            className="w-4 h-4 hidden group-hover:inline-block"
            color="#013682"
          />
        </div>

        {/* Hover içeriği */}
        <div className="absolute right-0 top-full pt-2">
          <div className="hidden group-hover:flex flex-col bg-white border border-gray-200 shadow-lg rounded-md min-w-[80px] z-50">
            {["en", "tr"].map((locale) => (
              <button
                key={locale}
                onClick={() => changeLocale(locale)}
                className="px-4 py-2 text-sm text-left hover:bg-gray-100 text-light-default-baseTextBlack"
              >
                {locale.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Language;
