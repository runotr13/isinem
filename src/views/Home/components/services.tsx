import React from "react";
import {
  Star,
  CheckCircle,
  ArrowRight,
  Droplets,
  Wind,
  Shield,
  Clock,
  Award,
  Users,
} from "lucide-react";
import Link from "next/link";
import { ROUTES } from "@/router/routes";
const Services = () => {
  const services = [
    {
      title: "Rutubet Kurutma",
      description:
        "Duvar ve tavanlardaki rutubet problemlerini hızlı ve etkili çözümlerle gideriyoruz.",
      icon: (
        <Droplets className="w-8 h-8 text-light-buttons-secondary-solidBg" />
      ),
      link: ROUTES.RUTUBET_KURUTMA,
    },
    {
      title: "Nem Kurutma",
      description:
        "Yaşam alanlarınızda optimal nem seviyesi sağlayarak sağlıklı ortam oluşturuyoruz.",
      icon: <Wind className="w-8 h-8 text-light-buttons-secondary-solidBg" />,
      link: ROUTES.NEM_KURUTMA,
    },
    {
      title: "Epoksi Kurutma",
      description:
        "Endüstriyel zeminlerde epoksi uygulamaları öncesi profesyonel kurutma hizmeti.",
      icon: <Shield className="w-8 h-8 text-light-buttons-secondary-solidBg" />,
      link: ROUTES.EPOKSI_KURUTMA,
    },
    {
      title: "Beton Kurutma",
      description:
        "Yeni dökülen betonların optimum kuruma sürecini hızlandıran uzman çözümler.",
      icon: (
        <CheckCircle className="w-8 h-8 text-light-buttons-secondary-solidBg" />
      ),
      link: ROUTES.BETON_KURUTMA,
    },
    {
      title: "Şap Kurutma",
      description:
        "İnşaat projelerinde şap kuruma sürecini hızlandıran profesyonel sistemler.",
      icon: <Award className="w-8 h-8 text-light-buttons-secondary-solidBg" />,
      link: ROUTES.SAP_KURUTMA,
    },
    {
      title: "Sıva Kurutma",
      description:
        "Duvar sıvalarının doğru ve hızlı kuruması için teknik kurutma çözümleri.",
      icon: <Clock className="w-8 h-8 text-light-buttons-secondary-solidBg" />,
      link: ROUTES.SIVA_KURUTMA,
    },
    {
      title: "Parke Kurutma",
      description:
        "Ahşap parke döşeme sonrası nem dengeleme ve kurutma hizmetleri.",
      icon: <Users className="w-8 h-8 text-light-buttons-secondary-solidBg" />,
      link: ROUTES.PARKE_KURUTMA,
    },
    {
      title: "Boya Kurutma",
      description:
        "Boyama işlemleri sonrası hızlı kuruma sağlayan profesyonel kurutma sistemleri.",
      icon: <Star className="w-8 h-8 text-light-buttons-secondary-solidBg" />,
      link: ROUTES.BOYA_KURUTMA,
    },
  ];
  return (
    <section id="hizmetler" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-light-buttons-secondary-solidBg">
              Kurutma
            </span>{" "}
            Hizmetlerimiz
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Her türlü nem ve rutubet problemine karşı özel çözümlerimizle
            yanınızdayız.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <Link href={service.link}>
                <button className="flex items-center text-light-buttons-secondary-solidBg font-semibold hover:text-blue-700 transition-colors group">
                  Detayları Gör
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
