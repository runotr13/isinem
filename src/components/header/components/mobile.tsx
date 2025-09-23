"use client";
import { Button } from "@/components/button";
import { ROUTES } from "@/router/routes";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Language from "./language";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import clsx from "clsx";
import useHeaderData from "./data";
import { useTranslations } from "next-intl";

const Mobile = () => {
  const tb = useTranslations("buttons");
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState<Record<string, boolean>>({});
  const { data } = useHeaderData();

  const toggleSubmenu = (key: string) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <>
      <div className="flex justify-between items-center py-[14px] container relative z-50">
        <div className="flex items-center gap-2">
          <button onClick={() => setIsOpen(true)}>
            <Menu size={26} className="text-light-default-baseTextBlack" />
          </button>
          <Link href={ROUTES.HOME}>
            <Image src={"/logo.svg"} width={108} height={42} alt="Isınem" />
          </Link>
        </div>
        <div className="flex gap-14 items-center">
          <Button variant="secondary">{tb("contact")}</Button>
          <Language />
        </div>
      </div>

      {/* Slide-out Menu */}
      <div
        className={clsx(
          "fixed top-0 left-0 w-[80%] max-w-[300px] h-full bg-white z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <span className="text-lg font-semibold">Menü</span>
          <button onClick={() => setIsOpen(false)}>
            <X size={24} />
          </button>
        </div>
        <nav className="flex flex-col p-4 gap-2">
          {data?.map((item) => (
            <div key={item.title}>
              {item.submenu ? (
                <button
                  onClick={() => toggleSubmenu(item.title)}
                  className="w-full flex justify-between items-center py-2 text-sm font-medium text-gray-800 hover:text-primary"
                >
                  <span>{item.title}</span>
                  {openSubmenus[item.title] ? (
                    <ChevronUp size={16} />
                  ) : (
                    <ChevronDown size={16} />
                  )}
                </button>
              ) : (
                <Link
                  href={item.href || "#"}
                  className="block py-2 text-sm font-medium text-gray-800 hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              )}

              {item.submenu && openSubmenus[item.title] && (
                <div className="pl-4 border-l border-gray-200 ml-2">
                  {item.submenu.map((sub) => (
                    <Link
                      key={sub.title}
                      href={sub.href}
                      className="block py-1 text-sm text-gray-600 hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      {sub.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
        />
      )}
    </>
  );
};

export default Mobile;
