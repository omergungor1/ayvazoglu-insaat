import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Building2,
    Hammer,
    Paintbrush,
    Ruler,
    Shield,
    Truck,
    Phone,
    MessageCircle,
    CheckCircle,
    Clock,
    Award
} from "lucide-react";

export default function ServicesPage() {
    const services = [
        {
            icon: Building2,
            title: "Anahtar Teslim Projeler",
            description: "Konut, ticari ve endüstriyel yapıların anahtar teslim projelerini gerçekleştiriyoruz.",
            details: [
                "Konut projeleri",
                "Ticari yapılar",
                "Endüstriyel tesisler",
                "Otel ve restoran projeleri",
                "Ofis binaları"
            ],
            href: "/hizmetlerimiz/anahtar-teslim"
        },
        {
            icon: Hammer,
            title: "Taahhüt Hizmetleri",
            description: "İnşaat taahhüt işlerinde uzman ekibimizle hizmet veriyoruz.",
            details: [
                "İnşaat taahhüt işleri",
                "Yapı denetimi",
                "Proje yönetimi",
                "Şantiye kurulumu",
                "Kalite kontrol"
            ],
            href: "/hizmetlerimiz/tahhut"
        },
        {
            icon: Paintbrush,
            title: "Tadilat ve Yenileme",
            description: "Mevcut yapıların tadilat ve yenileme işlerini profesyonelce yapıyoruz.",
            details: [
                "İç mekan tadilatları",
                "Dış cephe yenileme",
                "Boya ve kaplama işleri",
                "Elektrik tesisatı",
                "Su tesisatı"
            ],
            href: "/hizmetlerimiz/tadilat"
        },
        {
            icon: Ruler,
            title: "Mimari Proje Hizmetleri",
            description: "Mimari tasarım ve proje hizmetleri sunuyoruz.",
            details: [
                "Mimari tasarım",
                "İç mimari projeleri",
                "3D görselleştirme",
                "Statik projeler",
                "Mekanik tesisat projeleri"
            ],
            href: "/hizmetlerimiz/mimari-proje"
        },
        {
            icon: Shield,
            title: "İzolasyon ve Yalıtım",
            description: "Su, ısı ve ses yalıtımı konularında uzman hizmet veriyoruz.",
            details: [
                "Su yalıtımı",
                "Isı yalıtımı",
                "Ses yalıtımı",
                "Çatı izolasyonu",
                "Temel izolasyonu"
            ],
            href: "/hizmetlerimiz/izolasyon"
        },
        {
            icon: Truck,
            title: "İnşaat Malzemeleri",
            description: "Toptan ve parakende inşaat malzemesi satışı yapıyoruz.",
            details: [
                "Tuğla ve çimento",
                "Demir ve çelik",
                "Seramik ve fayans",
                "Boya ve kaplama",
                "İzolasyon malzemeleri"
            ],
            href: "/urunler"
        }
    ];

    const additionalServices = [
        {
            title: "Cephe Sistemleri",
            description: "Modern cephe sistemleri ve dış kaplama uygulamaları"
        },
        {
            title: "Peyzaj ve Bahçe",
            description: "Peyzaj tasarımı ve bahçe düzenleme hizmetleri"
        },
        {
            title: "Altyapı Hizmetleri",
            description: "Altyapı ve hafriyat işleri"
        },
        {
            title: "Prefabrik Yapılar",
            description: "Prefabrik ve hafif çelik yapı sistemleri"
        }
    ];

    return (
        <div className="min-h-screen">
            <Header />

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-orange-600 to-orange-700 text-white py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Hizmetlerimiz
                        </h1>
                        <p className="text-xl text-orange-100">
                            İnşaat sektöründe kapsamlı hizmetler sunuyoruz
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Services */}
            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Ana Hizmetlerimiz
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            İnşaat sektöründe uzman ekibimizle kapsamlı hizmetler sunuyoruz.
                            Anahtar teslim projelerden malzeme satışına kadar her ihtiyacınız için yanınızdayız.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <Card key={index} className="hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                                        <service.icon className="h-6 w-6 text-orange-600" />
                                    </div>
                                    <CardTitle className="text-xl">{service.title}</CardTitle>
                                    <CardDescription className="text-gray-600">
                                        {service.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 mb-6">
                                        {service.details.map((detail, detailIndex) => (
                                            <li key={detailIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                                                <CheckCircle className="h-4 w-4 text-orange-500" />
                                                <span>{detail}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Button variant="outline" asChild className="w-full">
                                        <a href={service.href}>Detayları Gör</a>
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Additional Services */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Diğer Hizmetlerimiz
                        </h2>
                        <p className="text-lg text-gray-600">
                            İnşaat sektöründe sunduğumuz diğer uzmanlık alanlarımız
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {additionalServices.map((service, index) => (
                            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <CardTitle className="text-lg">{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-gray-600">
                                        {service.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Neden Bizi Seçmelisiniz?
                        </h2>
                        <p className="text-lg text-gray-600">
                            Kaliteli hizmet ve müşteri memnuniyeti odaklı çalışma prensibimiz
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Award className="h-8 w-8 text-orange-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Kaliteli Hizmet</h3>
                            <p className="text-gray-600">
                                Her projede en yüksek kalite standartlarını hedefliyoruz.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Clock className="h-8 w-8 text-orange-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Zamanında Teslim</h3>
                            <p className="text-gray-600">
                                Projelerimizi söz verdiğimiz tarihte teslim ediyoruz.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <CheckCircle className="h-8 w-8 text-orange-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Müşteri Memnuniyeti</h3>
                            <p className="text-gray-600">
                                Müşteri memnuniyeti bizim için en önemli önceliktir.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
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

            <Footer />
        </div>
    );
} 