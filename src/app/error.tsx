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
    // Log the error to an error reporting service
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
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        background: `linear-gradient(135deg, rgba(23, 23, 23, 1) 0%, rgba(38, 38, 38, 1) 50%, rgba(69, 69, 69, 0.8) 100%)`,
      }}
    >
      <div className="max-w-2xl w-full">
        {/* Animated Error Icon */}
        <div className="text-center mb-8">
          <div
            className="inline-flex items-center justify-center w-24 h-24 rounded-full mb-6 animate-bounce"
            style={{ backgroundColor: "rgba(215, 5, 21, 0.1)" }}
          >
            <svg
              className="w-12 h-12"
              style={{ color: "rgba(240, 56, 69, 1)" }}
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

          {/* Error Code */}
          <div
            className="text-6xl font-bold mb-4"
            style={{
              background: `linear-gradient(135deg, rgba(240, 56, 69, 1) 0%, rgba(224, 2, 66, 1) 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Oops!
          </div>
        </div>

        {/* Main Content Card */}
        <div
          className="rounded-2xl shadow-2xl p-8 text-center border backdrop-blur-lg"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            borderColor: "rgba(255, 255, 255, 0.08)",
          }}
        >
          <h1
            className="text-3xl font-bold mb-4"
            style={{ color: "rgba(255, 255, 255, 1)" }}
          >
            Beklenmedik Bir Hata Oluştu
          </h1>

          <p
            className="text-lg mb-6 leading-relaxed"
            style={{ color: "rgba(191, 191, 191, 1)" }}
          >
            Üzgünüz, bir şeyler yolunda gitmedi. Teknik ekibimiz bu durumdan
            haberdar edildi ve sorunu en kısa sürede çözmeye çalışıyoruz.
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
              🔄 Otomatik yönlendirme
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
                  width: `${((10 - countdown) / 10) * 100}%`,
                }}
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="flex-1 sm:flex-initial">
              <Button className="w-full sm:w-auto px-8 py-3 rounded-xl font-medium transition-all duration-200 transform hover:scale-105 shadow-lg">
                🏠 Ana Sayfaya Dön
              </Button>
            </Link>

            <div onClick={reset}>
              <Button
                variant="dark"
                className="w-full sm:w-auto px-8 py-3 rounded-xl font-medium transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                🔄 Tekrar Dene
              </Button>
            </div>
          </div>

          {/* Help Section */}
          <div
            className="mt-8 pt-6 border-t"
            style={{ borderColor: "rgba(69, 69, 69, 1)" }}
          >
            <p
              className="text-sm mb-3"
              style={{ color: "rgba(140, 140, 140, 1)" }}
            >
              Sorun devam ederse:
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a
                href="/iletisim"
                className="transition-colors hover:underline"
                style={{ color: "rgba(224, 2, 66, 1)" }}
              >
                📞 Destek Ekibi
              </a>
              <span style={{ color: "rgba(89, 89, 89, 1)" }}>•</span>
              <a
                href="/iletisim"
                className="transition-colors hover:underline"
                style={{ color: "rgba(224, 2, 66, 1)" }}
              >
                ❓ Yardım Merkezi
              </a>
            </div>
          </div>
        </div>

        {/* Error Details (Development) */}
        {process.env.NODE_ENV === "development" && (
          <div
            className="mt-6 rounded-xl p-4 text-xs"
            style={{
              backgroundColor: "rgba(23, 23, 23, 1)",
              color: "rgba(191, 191, 191, 1)",
            }}
          >
            <details className="cursor-pointer">
              <summary
                className="font-medium mb-2 hover:opacity-80"
                style={{ color: "rgba(255, 255, 255, 1)" }}
              >
                🐛 Hata Detayları (Geliştirici Modu)
              </summary>
              <pre
                className="whitespace-pre-wrap break-words"
                style={{ color: "rgba(240, 56, 69, 1)" }}
              >
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
