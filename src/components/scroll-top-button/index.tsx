"use client";

import clsx from "clsx";
import { twMerge } from "tailwind-merge";

import React from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <button
      onClick={scrollToTop}
      className={twMerge(
        clsx(
          "fixed bottom-4 right-4 md:bottom-10 md:right-10",
          "p-3 rounded-full border-primary border-[1px]",
          "bg-bg12 text-primary hover:text-primary_rgb",
          // Gradient arka plan ayarı
          "bg-[linear-gradient(to_right,#AADBFF1F_0%,#AADBFF1F_50%,transparent_50%,transparent_100%)]",
          "bg-[length:200%_100%] bg-left",
          // Hover durumunda arka plan pozisyonunu saga kaydır
          "hover:bg-right",
          // Animasyon ayarları
          "transition-all duration-500 ease-in-out"
        )
      )}
    >
      <ArrowUp size={20} />
    </button>
  );
};

export default ScrollToTopButton;
