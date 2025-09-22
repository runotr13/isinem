import { Button } from "@/components/button";
import { Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Cta = () => {
  return (
    <section className="md:py-20 py-10 bg-light-buttons-secondary-solidBg">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          Nem Probleminizi Çözelim
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Uzman ekibimiz sizinle iletişime geçsin, ücretsiz keşif yaparak en
          uygun çözümü sunalım.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href={"tel:+905399757069"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              className="transition-all transform hover:scale-105"
              variant="third"
            >
              <Phone className="inline-block mr-2 w-5 h-5" />
              Hemen Arayın
            </Button>
          </Link>
          <Link
            href="https://wa.me/905399757069?text=Merhaba Berkay Bey, nem problemi yaşıyorum, yardımcı olabilir misiniz?"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="third" className="flex gap-1 items-center">
              <Image
                src={"/images/footer/whatsapp-icon.png"}
                alt="Whatsapp iletişim"
                width={20}
                height={20}
              />
              WhatsApp İletişim
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cta;
