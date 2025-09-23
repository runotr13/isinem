"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { useTranslations } from "next-intl";
import { useServices } from "@/hooks/useServices";

interface BreadcrumbItem {
  title: string;
  href: string;
  isActive?: boolean;
}

const BreadCrumbComp = () => {
  const pathname = usePathname();
  const services = useServices();
  const t = useTranslations("header");
  const activeService = services.find((service) => service.href === pathname);

  if (!activeService) return null;

  const breadcrumbItems: BreadcrumbItem[] = [
    { title: t("home"), href: "/" },
    { title: activeService.title, href: activeService.href, isActive: true },
  ];

  return (
    <div className="bg-gradient-to-r from-slate-50 to-blue-50 border border-slate-200 rounded-xl py-10 mb-10 shadow-sm">
      <div className="flex flex-col items-center justify-center text-center">
        {/* H1 Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
          {activeService.title}
        </h1>

        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center justify-center space-x-1">
            {breadcrumbItems.map((item, index) => (
              <li key={item.href} className="flex items-center">
                {index > 0 && (
                  <ChevronRight className="w-4 h-4 text-slate-400 mx-2" />
                )}

                {item.isActive ? (
                  <div className="flex items-center bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm">
                    {index === 0 ? (
                      <Home className="w-4 h-4 text-blue-600 mr-2" />
                    ) : (
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                    )}
                    <span className="font-medium text-slate-800 text-sm">
                      {item.title}
                    </span>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="group flex items-center px-3 py-1.5 rounded-lg hover:bg-white hover:shadow-sm border border-transparent hover:border-slate-200 transition-all duration-200"
                  >
                    <Home className="w-4 h-4 text-slate-500 group-hover:text-blue-600 mr-2 transition-colors" />
                    <span className="text-sm font-medium text-slate-600 group-hover:text-slate-800 transition-colors">
                      {item.title}
                    </span>
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  );
};
export default BreadCrumbComp;
