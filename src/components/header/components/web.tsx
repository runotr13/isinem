"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { ROUTES } from "@/router/routes";
import { Button } from "@/components/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import Language from "./language";
import menuItems from "./data";

const Web = () => {
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

  const handleMouseEnter = (key: string) => setHoveredMenu(key);
  const handleMouseLeave = () => setHoveredMenu(null);

  return (
    <div className="container relative">
      <div className="flex justify-between items-center py-6">
        <Link href={ROUTES.HOME}>
          <Image src={"/logo.svg"} width={150} height={50} alt="Isınem  " />
        </Link>

        <div className="flex gap-10 items-center">
          {menuItems.map((item, index) =>
            item.submenu ? (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => handleMouseEnter(item.key!)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex items-center gap-1 cursor-pointer text-base font-medium">
                  {item.title}
                  {hoveredMenu === item.key ? (
                    <ChevronUp size={16} />
                  ) : (
                    <ChevronDown size={16} />
                  )}
                </div>

                <div className="absolute top-full left-0 pt-2 min-w-64 bg-white shadow-md rounded-md py-2 z-10 hidden group-hover:block">
                  {item.submenu.map((sub, subIndex) => (
                    <Link
                      key={subIndex}
                      href={sub.href}
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      {sub.title}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={index}
                href={item.href}
                className="text-base font-medium"
              >
                {item.title}
              </Link>
            )
          )}
        </div>

        <div className="flex items-center gap-4">
          <Button variant="secondary">İletişime Geçin</Button>
          <Language />
        </div>
      </div>
    </div>
  );
};

export default Web;
