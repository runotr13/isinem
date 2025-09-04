"use client";
import React, { useState, useEffect } from "react";
import { Wrench, Clock, Mail, Globe } from "lucide-react";

export default function MaintenancePage() {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* Icon */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-24 h-24 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full flex items-center justify-center shadow-lg">
              <Wrench
                className="w-12 h-12 text-white animate-spin"
                style={{ animationDuration: "3s" }}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full animate-ping opacity-75"></div>
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
          ÇOK YAKINDA
        </h1>

        {/* Subtitle with animation */}
        <div className="text-xl md:text-2xl text-blue-100 mb-8 font-light">
          Isınem'in yepyeni web sitesi sizlerle{dots}
          <div
            className="inline-block w-1 bg-blue-400 animate-pulse ml-1"
            style={{ height: "1.2em" }}
          ></div>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
            <Globe className="w-8 h-8 text-blue-400 mx-auto mb-3" />
            <h3 className="text-white font-semibold mb-2">Yeni Tasarım</h3>
            <p className="text-blue-100 text-sm">
              Modern ve kullanıcı dostu arayüz
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
            <Clock className="w-8 h-8 text-purple-400 mx-auto mb-3" />
            <h3 className="text-white font-semibold mb-2">Hızlı Performans</h3>
            <p className="text-blue-100 text-sm">
              Optimize edilmiş hız ve performans
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
            <Mail className="w-8 h-8 text-indigo-400 mx-auto mb-3" />
            <h3 className="text-white font-semibold mb-2">İletişim</h3>
            <p className="text-blue-100 text-sm">
              Gelişmiş iletişim özellikleri
            </p>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mb-8">
          <div className="bg-white/20 rounded-full h-2 overflow-hidden">
            <div
              className="bg-gradient-to-r from-purple-400 to-blue-400 h-full rounded-full animate-pulse"
              style={{ width: "75%" }}
            ></div>
          </div>
          <p className="text-blue-100 text-sm mt-2">%75 Tamamlandı</p>
        </div>

        {/* Contact info */}
        <div className="text-blue-100">
          <p className="mb-2">Güncellemeler için bizi takip edin!</p>
          <p className="text-sm opacity-80">Yakında sizlerle buluşuyoruz...</p>
        </div>

        {/* Floating particles */}
        <div className="absolute top-0 left-0 w-2 h-2 bg-purple-400 rounded-full animate-bounce opacity-70"></div>
        <div className="absolute top-20 right-10 w-1 h-1 bg-blue-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 left-20 w-3 h-3 bg-indigo-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-1/4 w-2 h-2 bg-purple-300 rounded-full animate-bounce delay-300"></div>
      </div>
    </div>
  );
}
