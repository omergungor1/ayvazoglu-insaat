import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Ruler,
    Palette,
    CheckCircle,
    Clock,
    Award,
    Users,
    Phone,
    MessageCircle,
    FileText,
    Eye,
    Layers
} from "lucide-react";

export default function ArchitecturalServicesPage() {
    const services = [
        {
            icon: Ruler,
            title: "Mimari Tasarım",
            description: "Modern ve fonksiyonel mimari tasarım hizmetleri",
            features: [
                "Konut mimari tasarımı",
                "Ticari yapı tasarımı",
                "Endüstriyel tesis tasarımı",
                "Peyzaj tasarımı",
                "İç mekan tasarımı"
            ]
        },
        {
            icon: FileText,
            title: "Statik Projeler",
            description: "Yapısal mühendislik ve statik proje hizmetleri",
            features: [
                "Yapısal analiz",
                "Statik hesaplamalar",
                "Betonarme projeleri",
                "Çelik yapı projeleri",
                "Temel tasarımı"
            ]
        },
        {
            icon: Eye,
            title: "3D Görselleştirme",
            description: "Profesyonel 3D modelleme ve görselleştirme",
            features: [
                "3D modelleme",
                "İç mekan görselleştirme",
                "Dış cephe görselleştirme",
                "Animasyon hazırlama",
                "VR/AR uygulamaları"
            ]
        },
        {
            icon: Layers,
            title: "Mekanik Tesisat",
            description: "Mekanik tesisat proje ve uygulama hizmetleri",
            features: [
                "Isıtma sistemleri",
                "Soğutma sistemleri",
                "Havalandırma sistemleri",
                "Su tesisatı projeleri",
                "Yangın tesisatı"
            ]
        }
    ];

    const processSteps = [
        {
            step: "01",
            title: "İhtiyaç Analizi",
            description: "Müşteri ihtiyaçlarını detaylı analiz ediyoruz"
        },
        {
            step: "02",
            title: "Konsept Tasarım",
            description: "İlk konsept tasarımları hazırlıyoruz"
        },
        {
            step: "03",
            title: "Detay Projeler",
            description: "Teknik detay projeleri çiziyoruz"
        },
        {
            step: "04",
            title: "Uygulama Desteği",
            description: "Proje uygulamasında teknik destek veriyoruz"
        }
    ];

    const advantages = [
        {
            icon: Award,
            title: "Uzman Ekip",
            description: "Deneyimli mimar ve mühendislerden oluşan ekibimiz"
        },
        {
            icon: Clock,
            title: "Hızlı Teslim",
            description: "Projelerinizi kısa sürede tamamlıyoruz"
        },
        {
            icon: Users,
            title: "Müşteri Odaklı",
            description: "Her projede müşteri memnuniyetini ön planda tutuyoruz"
        },
        {
            icon: CheckCircle,
            title: "Kalite Standartları",
            description: "Uluslararası kalite standartlarında çalışıyoruz"
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
                            Mimari Proje Hizmetleri
                        </h1>
                        <p className="text-xl text-orange-100">
                            Mimari tasarım ve proje hizmetleri sunuyoruz
                        </p>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Mimari Hizmetlerimiz
                        </h2>
                        <p className="text-lg text-gray-600">
                            Kapsamlı mimari tasarım ve proje hizmetleri
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                                    <ul className="space-y-2">
                                        {service.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                                                <CheckCircle className="h-4 w-4 text-orange-500" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Steps */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Proje Sürecimiz
                        </h2>
                        <p className="text-lg text-gray-600">
                            Mimari projelerimizde izlediğimiz adımlar
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {processSteps.map((step, index) => (
                            <div key={index} className="text-center">
                                <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                                    {step.step}
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                                <p className="text-gray-600">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Advantages */}
            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Neden Mimari Hizmetlerimizi Seçmelisiniz?
                        </h2>
                        <p className="text-lg text-gray-600">
                            Kaliteli tasarım ve güvenilir çözümler
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {advantages.map((advantage, index) => (
                            <div key={index} className="text-center">
                                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <advantage.icon className="h-8 w-8 text-orange-600" />
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{advantage.title}</h3>
                                <p className="text-gray-600 text-sm">
                                    {advantage.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Special Features */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Özel Hizmetlerimiz
                        </h2>
                        <p className="text-lg text-gray-600">
                            Mimari projeleriniz için özel çözümler
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card className="text-center hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Palette className="h-8 w-8 text-orange-600" />
                                </div>
                                <CardTitle>Yaratıcı Tasarım</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-gray-600">
                                    Özgün ve yaratıcı tasarım çözümleri ile projelerinizi farklılaştırıyoruz.
                                </CardDescription>
                            </CardContent>
                        </Card>

                        <Card className="text-center hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Eye className="h-8 w-8 text-orange-600" />
                                </div>
                                <CardTitle>3D Görselleştirme</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-gray-600">
                                    Projelerinizi 3D görselleştirme ile hayata geçiriyoruz.
                                </CardDescription>
                            </CardContent>
                        </Card>

                        <Card className="text-center hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <FileText className="h-8 w-8 text-orange-600" />
                                </div>
                                <CardTitle>Teknik Destek</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-gray-600">
                                    Proje uygulamasında teknik destek ve danışmanlık hizmeti veriyoruz.
                                </CardDescription>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-orange-600 text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Mimari Projeniz İçin İletişime Geçin
                    </h2>
                    <p className="text-xl mb-8 text-orange-100">
                        Mimari tasarım ve proje hizmetleriniz için uzman ekibimizle görüşün
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