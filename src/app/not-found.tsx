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
    <div className="min-h-screen flex items-center justify-center p-4 bg-white">
      <div className="max-w-3xl w-full">
        {/* 404 Animation */}
        <div className="text-center mb-8">
          <div className="relative inline-block">
            <div className="text-8xl md:text-9xl font-bold mb-4 text-red-500 animate-pulse">
              404
            </div>
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

        <div className="rounded-2xl shadow-lg p-8 text-center border border-gray-200 bg-white mb-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Sayfa Bulunamadı
          </h1>
          <p className="text-lg mb-2 text-gray-700">
            Görünüşe göre var olmayan bir sayfayı ziyaret ettiniz.
          </p>
          <p className="text-base mb-6 text-gray-500">
            Sayfa silinmiş, taşınmış veya bağlantı hatalı olabilir.
          </p>

          <div className="rounded-xl p-4 mb-6 border bg-gray-50 border-red-100">
            <p className="font-medium mb-2 text-red-500">
              ⏰ Otomatik yönlendirme
            </p>
            <p className="text-sm text-gray-600">
              Ana sayfaya {countdown} saniye içinde yönlendirileceksiniz...
            </p>
            <div className="w-full rounded-full h-2 mt-3 bg-gray-200">
              <div
                className="h-2 rounded-full transition-all duration-1000 ease-linear bg-red-500"
                style={{ width: `${((5 - countdown) / 5) * 100}%` }}
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
            <Link href="/" className="flex-1 sm:flex-initial">
              <Button className="w-full sm:w-auto px-8 py-3 rounded-xl font-medium transition-all duration-200 transform hover:scale-105 shadow">
                🏠 Ana Sayfaya Dön
              </Button>
            </Link>

            <button
              onClick={() => window.history.back()}
              className="w-full sm:w-auto px-8 py-3 rounded-xl font-medium border border-gray-300 text-gray-700 hover:bg-gray-100 transition-all duration-200"
            >
              ↩️ Geri Git
            </button>
          </div>

          <div>
            <p className="text-sm mb-3 font-medium text-gray-500">
              Bize ulaşmak için:
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              <Link
                href="/hakkimizda"
                className="px-3 py-1 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition"
              >
                📋 Hakkımızda
              </Link>
              <Link
                href="/iletisim"
                className="px-3 py-1 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition"
              >
                📞 İletişim
              </Link>
              <Link
                href="/iletisim"
                className="px-3 py-1 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition"
              >
                ❓ Yardım
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
