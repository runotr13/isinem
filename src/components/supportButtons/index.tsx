// components/SupportButtons.tsx
"use client";

import clsx from "clsx";
import { MessageCircle, Mail, ArrowUp, Phone } from "lucide-react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { Button } from "../button";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function SupportButtons() {
  const tb = useTranslations("buttons");
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="fixed bottom-4 right-4 flex flex-col gap-3 z-50 items-center">
      {/* WhatsApp Destek Hattı */}
      <Link
        href="https://wa.me/905419131424text=Merhaba Berkay Bey, destek hattından ulaşmak istiyorum."
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          variant="primary"
          className="flex gap-1 items-center transition-all transform hover:scale-105"
        >
          <Image
            src={"/images/footer/whatsapp-icon.png"}
            alt="Whatsapp iletişim"
            width={20}
            height={20}
            className="md:inline hidden"
          />
          <Image
            src={"/images/footer/whatsapp-icon.png"}
            alt="Whatsapp iletişim"
            width={30}
            height={30}
            className="md:hidden inline"
          />
          <span className="md:inline hidden">{tb("wphelp")}</span>
        </Button>
      </Link>

      {/* Bize Ulaşın */}
      <Link href={"tel:+905419131424"} className="w-full">
        <Button
          className="w-full transition-all transform hover:scale-105"
          variant="secondary"
        >
          <Phone className="inline-block md:mr-2 md:w-5 md:h-5 w-7 h-7" />

          <span className="md:inline hidden">{tb("callhelp")}</span>
        </Button>
      </Link>
      <button
        onClick={scrollToTop}
        className={twMerge(
          clsx(
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
            "z-50 w-12"
          )
        )}
      >
        <ArrowUp size={20} />
      </button>
    </div>
  );
}
