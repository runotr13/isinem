"use client";

// import CookieBanner from "@/components/cookie-banner";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";
// import { Toaster } from "sonner";

interface LayoutProps {
  children: ReactNode;
}
const footers = {
  home: <Footer />,
};
const headers = {
  home: <Header />,
};
const CustomLayout: React.FC<LayoutProps> = ({ children }) => {
  const pathname = usePathname();
  // const isKatalogPage = pathname === ROUTES.KATALOG;
  return (
    <>
      {/* {headers.home} */}
      <main className="">{children}</main>
      {/* <Toaster richColors position="top-right" /> */}
      {/* <CookieBanner /> */}
      {/* {footers.home} */}
    </>
  );
};

export default CustomLayout;
