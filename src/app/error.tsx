"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    console.error(error);
  }, [error]);

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
      <div className="max-w-2xl w-full">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full mb-6 animate-bounce bg-red-100">
            <svg
              className="w-12 h-12 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>

          <div className="text-6xl font-bold mb-4 text-red-500">Oops!</div>
        </div>

        <div className="rounded-2xl shadow-lg p-8 text-center border border-gray-200 bg-white">
          <h1 className="text-3xl font-bold mb-4 text-gray-900">
            Beklenmedik Bir Hata Oluştu
          </h1>

          <p className="text-lg mb-6 leading-relaxed text-gray-700">
            Üzgünüz, bir şeyler yolunda gitmedi. Teknik ekibimiz bu durumdan
            haberdar edildi ve sorunu en kısa sürede çözmeye çalışıyoruz.
          </p>

          <div className="rounded-xl p-4 mb-6 border bg-gray-50 border-red-100">
            <p className="font-medium mb-2 text-red-500">
              🔄 Otomatik yönlendirme
            </p>
            <p className="text-sm text-gray-600">
              Ana sayfaya {countdown} saniye içinde yönlendirileceksiniz...
            </p>
            <div className="w-full rounded-full h-2 mt-3 bg-gray-200">
              <div
                className="h-2 rounded-full transition-all duration-1000 ease-linear bg-red-500"
                style={{ width: `${((10 - countdown) / 10) * 100}%` }}
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="flex-1 sm:flex-initial">
              <Button className="w-full sm:w-auto px-8 py-3 rounded-xl font-medium transition-all duration-200 transform hover:scale-105 shadow">
                🏠 Ana Sayfaya Dön
              </Button>
            </Link>

            <div onClick={reset}>
              <Button
                variant="secondary"
                className="w-full sm:w-auto px-8 py-3 rounded-xl font-medium border border-gray-300 text-white hover:text-black hover:bg-gray-100 transition"
              >
                🔄 Tekrar Dene
              </Button>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm mb-3 text-gray-500">Sorun devam ederse:</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="/iletisim" className="text-red-500 hover:underline">
                📞 Destek Ekibi
              </a>
              <span className="text-gray-400">•</span>
              <a href="/iletisim" className="text-red-500 hover:underline">
                ❓ Yardım Merkezi
              </a>
            </div>
          </div>
        </div>

        {process.env.NODE_ENV === "development" && (
          <div className="mt-6 rounded-xl p-4 text-xs bg-gray-100 text-gray-700">
            <details className="cursor-pointer">
              <summary className="font-medium mb-2 hover:opacity-80 text-gray-800">
                🐛 Hata Detayları (Geliştirici Modu)
              </summary>
              <pre className="whitespace-pre-wrap break-words text-red-600">
                {error.message}
                {error.stack && (
                  <>
                    {"\n\nStack Trace:\n"}
                    {error.stack}
                  </>
                )}
              </pre>
            </details>
          </div>
        )}
      </div>
    </div>
  );
}
