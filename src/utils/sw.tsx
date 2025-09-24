"use client";

import { useEffect } from "react";

export default function ServiceWorkerRegister() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/serviceworker.js")
        .then((registration) => {
          console.log("Service Worker registered:", registration);
        })
        .catch((err) => console.log("SW registration failed:", err));
    }
  }, []);

  return null;
}
