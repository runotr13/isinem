"use client";
import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  User,
  MessageSquare,
  Building,
  CheckCircle,
  Calendar,
  Globe,
  Package,
  Wrench,
} from "lucide-react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import { useTranslations } from "next-intl";
import { Button } from "@/components/button";
import Services from "../Home/components/services";
interface FormValues {
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
  serviceType: string;
  products: string[];
  services: string[];
}
const IletisimSayfasi = () => {
  const th = useTranslations("header");

  const initialValues: FormValues = {
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    serviceType: "",
    products: [],
    services: [],
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "Ad soyad en az 2 karakter olmalıdır")
      .required("Ad soyad zorunludur"),
    email: Yup.string()
      .email("Geçerli bir e-posta adresi girin")
      .required("E-posta zorunludur"),
    phone: Yup.string()
      .matches(/^[0-9+\s\-\(\)]+$/, "Geçerli bir telefon numarası girin")
      .min(10, "Telefon numarası en az 10 haneli olmalıdır")
      .required("Telefon numarası zorunludur"),
    company: Yup.string(),
    subject: Yup.string(),
    message: Yup.string()
      .min(10, "Mesaj en az 10 karakter olmalıdır")
      .required("Mesaj zorunludur"),
    serviceType: Yup.string(),
    products: Yup.array(),
    services: Yup.array(),
  });

  const productOptions = [
    { value: th("products.p1"), label: th("products.p1") },
    { value: th("products.p2"), label: th("products.p2") },
    { value: th("products.p3"), label: th("products.p3") },
    { value: th("products.p4"), label: th("products.p4") },
  ];

  const serviceOptions = [
    { value: th("services.s1"), label: th("services.s1") },
    { value: th("services.s2"), label: th("services.s2") },
    { value: th("services.s3"), label: th("services.s3") },
    { value: th("services.s4"), label: th("services.s4") },
    { value: th("services.s5"), label: th("services.s5") },
    { value: th("services.s6"), label: th("services.s6") },
    { value: th("services.s7"), label: th("services.s7") },
    { value: th("services.s8"), label: th("services.s8") },
    { value: th("services.s9"), label: th("services.s9") },
    { value: th("services.s10"), label: th("services.s10") },
    { value: th("services.s11"), label: th("services.s11") },
    { value: th("services.s12"), label: th("services.s12") },
  ];

  const handleSubmit = (
    values: FormValues,
    { setSubmitting, resetForm }: FormikHelpers<FormValues>
  ) => {
    console.log("values", values);
    setTimeout(() => {
      setSubmitting(false);
      setTimeout(() => {
        resetForm();
      }, 3000);
    }, 1000);
  };

  return (
    <div className=" bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="relative bg-gradient-to-r from-[#364C94] to-[#6B82D6] text-white py-14 px-4 md:px-0">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
            İLETİŞİM
          </h1>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
            Bizimle iletişime geçin, size yardımcı olmaktan mutluluk duyarız.
            Profesyonel ekibimiz, nem kurutma sistemleri konusunda tüm
            ihtiyaçlarınız için hizmetinizdedir.
          </p>
        </div>
      </div>
      {/* Harita */}
      <div className="my-8  shadow-lg overflow-hidden bg-gray-50 ">
        <div className="flex items-center justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.5969784973447!2d28.996834976192507!3d41.08952717133441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7c8acc0e7a5%3A0x92b5828d31dc4feb!2sISINEM%20MAK%C4%B0NE%20%26%20Nem%20Kurutma%20Sistemleri%20Kiralama%20-%20Sat%C4%B1%C5%9F!5e0!3m2!1sen!2str!4v1727179800000!5m2!1sen!2str"
            width="100%"
            height="400px"
            style={{ border: 0 }}
            referrerPolicy="no-referrer-when-downgrade"
            title="ISINEM MAKİNE Konum"
          ></iframe>
        </div>
      </div>
      <div className="container  bg-gray-50 ">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          {/* İletişim Bilgileri */}
          <div className="lg:col-span-1 space-y-6">
            {/* Şirket Bilgisi */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                ISINEM MAKİNE
              </h2>
              <p className="text-gray-600 mb-4">
                Nem Kurutma Sistemleri Kiralama & Satış
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Adres</p>
                    <p className="text-gray-600 text-sm">
                      Sultan Selim Mahallesi, Kağıthane/İstanbul
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-green-500 mr-3 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Telefon</p>
                    <a
                      href="tel:+905419131424"
                      className="text-blue-600 hover:text-blue-800 text-sm"
                    >
                      +90 (541) 913 14 24
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-red-500 mr-3 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">E-posta</p>
                    <a
                      href="mailto:isinemmakine@gmail.com"
                      className="text-blue-600 hover:text-blue-800 text-sm"
                    >
                      isinemmakine@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-orange-500 mr-3 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">
                      Çalışma Saatleri
                    </p>
                    <div className="text-sm text-gray-600">
                      <p>Pazartesi - Cuma: 08:00 - 20:00</p>
                      <p>Cumartesi: 09:00 - 18:00</p>
                      <p>Pazar: Kapalı</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hizmetlerimiz */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Hizmetlerimiz
              </h3>
              <div className="space-y-2">
                <div className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  <span className="text-gray-700">
                    Nem Kurutma Sistemi Kiralama
                  </span>
                </div>
                <div className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  <span className="text-gray-700">
                    Nem Kurutma Sistemi Satış
                  </span>
                </div>
                <div className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  <span className="text-gray-700">Teknik Destek & Bakım</span>
                </div>
                <div className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  <span className="text-gray-700">Proje Danışmanlığı</span>
                </div>
                <div className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  <span className="text-gray-700">7/24 Acil Servis</span>
                </div>
              </div>
            </div>
          </div>

          {/* İletişim Formu */}
          <div className="lg:col-span-2">
            <div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">
                  Bize Mesaj Gönderin
                </h2>

                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  {({ isSubmitting, values, setFieldValue }) => (
                    <Form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            <User className="w-4 h-4 inline mr-1" />
                            Ad Soyad *
                          </label>
                          <Field
                            type="text"
                            name="name"
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#364C94] focus:ring-0 focus:ring-[#364C94] transition-colors"
                            placeholder="Adınızı ve soyadınızı girin"
                          />
                          <ErrorMessage
                            name="name"
                            component="div"
                            className="text-red-500 text-sm mt-1"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            <Mail className="w-4 h-4 inline mr-1" />
                            E-posta *
                          </label>
                          <Field
                            type="email"
                            name="email"
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#364C94] focus:ring-0 focus:ring-[#364C94] transition-colors"
                            placeholder="E-posta adresinizi girin"
                          />
                          <ErrorMessage
                            name="email"
                            component="div"
                            className="text-red-500 text-sm mt-1"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            <Phone className="w-4 h-4 inline mr-1" />
                            Telefon *
                          </label>
                          <Field
                            type="tel"
                            name="phone"
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#364C94] focus:ring-0 focus:ring-[#364C94] transition-colors"
                            placeholder="Telefon numaranızı girin"
                          />
                          <ErrorMessage
                            name="phone"
                            component="div"
                            className="text-red-500 text-sm mt-1"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            <Building className="w-4 h-4 inline mr-1" />
                            Şirket
                          </label>
                          <Field
                            type="text"
                            name="company"
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#364C94] focus:ring-0 focus:ring-[#364C94] transition-colors"
                            placeholder="Şirket adınızı girin"
                          />
                        </div>
                      </div>

                      {/* Ürünler Çoklu Seçim */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                          <Package className="w-4 h-4 inline mr-1" />
                          İlgilendiğiniz Ürünler
                        </label>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {productOptions.map((product) => (
                            <label
                              key={product.value}
                              className="flex items-center"
                            >
                              <Field
                                type="checkbox"
                                name="products"
                                value={product.value}
                                className="w-4 h-4 text-[#364C94] border-gray-300 rounded focus:ring-[#364C94]"
                              />
                              <span className="ml-2 text-sm text-gray-700">
                                {product.label}
                              </span>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Hizmetler Çoklu Seçim */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                          <Wrench className="w-4 h-4 inline mr-1" />
                          İhtiyaç Duyduğunuz Hizmetler
                        </label>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {serviceOptions.map((service) => (
                            <label
                              key={service.value}
                              className="flex items-center"
                            >
                              <Field
                                type="checkbox"
                                name="services"
                                value={service.value}
                                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                              />
                              <span className="ml-2 text-sm text-gray-700">
                                {service.label}
                              </span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Konu
                        </label>
                        <Field
                          type="text"
                          name="subject"
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#364C94] focus:ring-0 focus:ring-[#364C94] transition-colors"
                          placeholder="Mesaj konusunu girin"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <MessageSquare className="w-4 h-4 inline mr-1" />
                          Mesajınız *
                        </label>
                        <Field
                          as="textarea"
                          name="message"
                          rows="6"
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#364C94] focus:ring-0 focus:ring-[#364C94] transition-colors"
                          placeholder="Detaylı mesajınızı yazın..."
                        />
                        <ErrorMessage
                          name="message"
                          component="div"
                          className="text-red-500 text-sm mt-1"
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full"
                        variant="secondary"
                      >
                        <Send className="w-5 h-5 mr-2" />
                        {isSubmitting ? "Gönderiliyor..." : "Mesaj Gönder"}
                      </Button>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Services />
    </div>
  );
};

export default IletisimSayfasi;
