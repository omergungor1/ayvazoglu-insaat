import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Building2,
  Truck,
  Hammer,
  Paintbrush,
  Phone,
  MessageCircle,
  CheckCircle,
  Award,
  Users,
  Clock
} from "lucide-react";

export default function HomePage() {
  const services = [
    {
      icon: Building2,
      title: "Anahtar Teslim Projeler",
      description: "Konut, ticari ve endüstriyel yapıların anahtar teslim projelerini gerçekleştiriyoruz.",
      href: "/hizmetlerimiz/anahtar-teslim"
    },
    {
      icon: Hammer,
      title: "Taahhüt Hizmetleri",
      description: "İnşaat taahhüt işlerinde uzman ekibimizle hizmet veriyoruz.",
      href: "/hizmetlerimiz/tahhut"
    },
    {
      icon: Paintbrush,
      title: "Tadilat ve Yenileme",
      description: "Mevcut yapıların tadilat ve yenileme işlerini profesyonelce yapıyoruz.",
      href: "/hizmetlerimiz/tadilat"
    },
    {
      icon: Truck,
      title: "İnşaat Malzemeleri",
      description: "Toptan ve parakende inşaat malzemesi satışı yapıyoruz.",
      href: "/urunler"
    }
  ];

  const features = [
    {
      icon: Award,
      title: "Kaliteli Hizmet",
      description: "Yılların deneyimi ile kaliteli hizmet sunuyoruz."
    },
    {
      icon: Users,
      title: "Uzman Ekip",
      description: "Deneyimli ve uzman ekibimizle çalışıyoruz."
    },
    {
      icon: Clock,
      title: "Zamanında Teslim",
      description: "Projelerimizi zamanında teslim ediyoruz."
    },
    {
      icon: CheckCircle,
      title: "Müşteri Memnuniyeti",
      description: "Müşteri memnuniyeti odaklı çalışıyoruz."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-600 to-orange-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Ayvazoğlu İnşaat
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-orange-100">
              Bursa&apos;da köklü inşaat firması. Toptan ve parakende inşaat malzemesi satışı,
              taahhüt hizmetleri ve anahtar teslim projeler.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-white text-orange-600 hover:bg-gray-100">
                <a href="tel:+905518355670" className="flex items-center space-x-2">
                  <Phone className="h-5 w-5" />
                  <span>Hemen Ara</span>
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-orange-600">
                <a href="https://wa.me/905518355670" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                  <MessageCircle className="h-5 w-5" />
                  <span>WhatsApp</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Hakkımızda
            </h2>
            <p className="text-lg text-gray-600">
              Ayvazoğlu inşaat Bursa&apos;da kurulmuş köklü bir inşaat firmasıdır. Yılların bilgi birikimi ile
              çeşitli inşaat hizmetleri vermekteyiz. Özellikle toptan ve parakende inşaat malzemesi satışı
              yapmaktayız. Hemen hemen her türlü inşaat malzemesi tedarik ve satışını yapıyoruz. Bununla birlikte
              inşaat taahhüt ve anahtar teslim projeler yapmaktayız.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-orange-600" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Hizmetlerimiz
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              İnşaat sektöründe kapsamlı hizmetler sunuyoruz.
              Anahtar teslim projelerden malzeme satışına kadar her ihtiyacınız için yanınızdayız.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors">
                    <service.icon className="h-6 w-6 text-orange-600" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                  <Button variant="link" className="p-0 h-auto text-orange-600 hover:text-orange-700 mt-4">
                    <a href={service.href}>Detayları Gör →</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Projeniz İçin Bizimle İletişime Geçin
          </h2>
          <p className="text-xl mb-8 text-orange-100">
            İnşaat projeleriniz için uzman ekibimizle görüşün
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-orange-600">
              <a href="tel:+905518355670" className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>+90 551 835 56 70</span>
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-orange-600">
              <a href="https://wa.me/905518355670" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                <MessageCircle className="h-5 w-5" />
                <span>WhatsApp</span>
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Konumumuz</h2>
            <p className="text-gray-600">Bursa&apos;da hizmet veriyoruz</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1522.6980708646076!2d29.071371589114438!3d40.24472666313474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2str!4v1753541218505!5m2!1str!2str"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
