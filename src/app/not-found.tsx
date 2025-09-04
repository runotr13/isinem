"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/button";
import Link from "next/link";

export default function NotFound() {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          window.location.href = "/";
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        background: `linear-gradient(135deg, rgba(23, 23, 23, 1) 0%, rgba(38, 38, 38, 1) 50%, rgba(69, 69, 69, 0.8) 100%)`,
      }}
    >
      <div className="max-w-3xl w-full">
        {/* 404 Animation */}
        <div className="text-center mb-8">
          <div className="relative inline-block">
            {/* 404 Number */}
            <div
              className="text-8xl md:text-9xl font-bold mb-4 animate-pulse"
              style={{
                background: `linear-gradient(135deg, rgba(224, 2, 66, 1) 0%, rgba(240, 56, 69, 1) 50%, rgba(242, 88, 100, 1) 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              404
            </div>

            {/* Floating Icons */}
            <div className="absolute -top-4 -left-4 text-2xl animate-bounce">
              🔍
            </div>
            <div className="absolute -top-2 -right-6 text-xl animate-bounce delay-300">
              ❓
            </div>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-lg animate-bounce delay-500">
              💔
            </div>
          </div>
        </div>

        {/* Main Content Card */}
        <div
          className="rounded-2xl shadow-2xl p-8 text-center border backdrop-blur-lg mb-6"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            borderColor: "rgba(255, 255, 255, 0.08)",
          }}
        >
          <h1
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: "rgba(255, 255, 255, 1)" }}
          >
            Sayfa Bulunamadı
          </h1>

          <p
            className="text-lg mb-2"
            style={{ color: "rgba(191, 191, 191, 1)" }}
          >
            Görünüşe göre var olmayan bir sayfayı ziyaret ettiniz.
          </p>

          <p
            className="text-base mb-6"
            style={{ color: "rgba(140, 140, 140, 1)" }}
          >
            Sayfa silinmiş, taşınmış veya bağlantı hatalı olabilir.
          </p>

          {/* Countdown Timer */}
          <div
            className="rounded-xl p-4 mb-6 border"
            style={{
              backgroundColor: "rgba(38, 38, 38, 0.6)",
              borderColor: "rgba(224, 2, 66, 0.2)",
            }}
          >
            <p
              className="font-medium mb-2"
              style={{ color: "rgba(224, 2, 66, 1)" }}
            >
              ⏰ Otomatik yönlendirme
            </p>
            <p className="text-sm" style={{ color: "rgba(191, 191, 191, 1)" }}>
              Ana sayfaya {countdown} saniye içinde yönlendirileceksiniz...
            </p>
            <div
              className="w-full rounded-full h-2 mt-3"
              style={{ backgroundColor: "rgba(69, 69, 69, 1)" }}
            >
              <div
                className="h-2 rounded-full transition-all duration-1000 ease-linear"
                style={{
                  backgroundColor: "rgba(224, 2, 66, 1)",
                  width: `${((5 - countdown) / 5) * 100}%`,
                }}
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
            <Link href="/" className="flex-1 sm:flex-initial">
              <Button className="w-full sm:w-auto px-8 py-3 rounded-xl font-medium transition-all duration-200 transform hover:scale-105 shadow-lg">
                🏠 Ana Sayfaya Dön
              </Button>
            </Link>

            <button
              onClick={() => window.history.back()}
              className="w-full sm:w-auto px-8 py-3 rounded-xl font-medium transition-all duration-200 border"
              style={{
                backgroundColor: "rgba(38, 38, 38, 1)",
                color: "rgba(255, 255, 255, 1)",
                borderColor: "rgba(69, 69, 69, 1)",
              }}
            >
              ↩️ Geri Git
            </button>
          </div>

          {/* Popular Links */}
          <div>
            <p
              className="text-sm mb-3 font-medium"
              style={{ color: "rgba(140, 140, 140, 1)" }}
            >
              Bize ulaşmak için:
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              <Link
                href="/kurumsal"
                className="px-3 py-1 rounded-lg transition-colors hover:opacity-80"
                style={{
                  backgroundColor: "rgba(69, 69, 69, 0.5)",
                  color: "rgba(191, 191, 191, 1)",
                }}
              >
                📋 Hakkımızda
              </Link>
              <Link
                href="/iletisim"
                className="px-3 py-1 rounded-lg transition-colors hover:opacity-80"
                style={{
                  backgroundColor: "rgba(69, 69, 69, 0.5)",
                  color: "rgba(191, 191, 191, 1)",
                }}
              >
                📞 İletişim
              </Link>
              <Link
                href="/iletisim"
                className="px-3 py-1 rounded-lg transition-colors hover:opacity-80"
                style={{
                  backgroundColor: "rgba(69, 69, 69, 0.5)",
                  color: "rgba(191, 191, 191, 1)",
                }}
              >
                ❓ Yardım
              </Link>
            </div>
          </div>
        </div>

        {/* Fun Fact */}
        <div
          className="text-center rounded-xl p-4 border"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            borderColor: "rgba(255, 255, 255, 0.05)",
          }}
        >
          <p className="text-sm" style={{ color: "rgba(140, 140, 140, 1)" }}>
            💡 <strong>Biliyormuydunuz?</strong> 404 hatası, "File Not Found"
            anlamına gelir ve ilk kez 1990'da CERN'de kullanılmıştır.
          </p>
        </div>
      </div>
    </div>
  );
}
