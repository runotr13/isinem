import React from "react";

import Link from "next/link";
import Image from "next/image";

const CopyRight = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="py-[18px] md:py-6">
      <div className="flex justify-center md:justify-between items-center flex-wrap md:text-start text-center md:gap-0 gap-4">
        <div className="text-sm font-normal leading-18 text-light-default-baseTextWhite">
          DILA Kıymetli Madenler {currentYear} © Tüm Hakları Saklıdır.
        </div>
        <div className="flex items-center gap-2">
          <p className="text-sm font-normal leading-18 text-light-default-baseTextWhite">
            created by
          </p>
          <Link href="https://reloadcraft.com/" target="_blank">
            <Image
              src={"/images/reload-logo.png"}
              alt="ReloadCraft"
              width={105}
              height={18}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CopyRight;
