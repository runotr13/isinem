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
          "p-3 rounded-full border border-[#013682]",
          "bg-white text-[#013682] hover:text-white",
          "shadow-lg hover:shadow-xl",
          // Gradient arka plan - primary color ile
          "bg-[linear-gradient(to_right,#01368201F_0%,##01368201F_50%,transparent_50%,transparent_100%)]",
          "bg-[length:200%_100%] bg-left",
          // Hover durumunda arka plan pozisyonunu sağa kaydır ve rengi değiştir
          "hover:bg-right hover:bg-[#013682]",
          // Animasyon ayarları
          "transition-all duration-500 ease-in-out",
          // Z-index for visibility
          "z-50"
        )
      )}
    >
      <ArrowUp size={20} />
    </button>
  );
};

export default ScrollToTopButton;
