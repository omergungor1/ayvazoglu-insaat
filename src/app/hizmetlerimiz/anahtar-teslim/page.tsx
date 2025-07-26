import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Home,
    Store,
    Factory,
    Hotel,
    Phone,
    MessageCircle,
    CheckCircle,
    Clock,
    Award,
    Users
} from "lucide-react";

export default function TurnkeyProjectsPage() {
    const projectTypes = [
        {
            icon: Home,
            title: "Konut Projeleri",
            description: "Villa, apartman ve site projeleri",
            features: [
                "Lüks villalar",
                "Çok katlı apartmanlar",
                "Site projeleri",
                "Müstakil evler",
                "Bahçeli konutlar"
            ]
        },
        {
            icon: Store,
            title: "Ticari Yapılar",
            description: "Ofis, mağaza ve ticari tesisler",
            features: [
                "Ofis binaları",
                "Alışveriş merkezleri",
                "Mağaza ve dükkanlar",
                "Showroom'lar",
                "Depo ve antrepolar"
            ]
        },
        {
            icon: Factory,
            title: "Endüstriyel Tesisler",
            description: "Fabrika ve üretim tesisleri",
            features: [
                "Üretim tesisleri",
                "Fabrika binaları",
                "Depo ve lojistik merkezleri",
                "Teknoloji parkları",
                "Endüstriyel tesisler"
            ]
        },
        {
            icon: Hotel,
            title: "Turizm Yapıları",
            description: "Otel, restoran ve turizm tesisleri",
            features: [
                "Otel ve moteller",
                "Restoran ve kafeler",
                "Spa ve wellness merkezleri",
                "Turizm tesisleri",
                "Eğlence mekanları"
            ]
        }
    ];

    const processSteps = [
        {
            step: "01",
            title: "Proje Analizi",
            description: "İhtiyaçlarınızı analiz ediyoruz"
        },
        {
            step: "02",
            title: "Tasarım ve Planlama",
            description: "Mimari ve mühendislik projeleri"
        },
        {
            step: "03",
            title: "İnşaat Süreci",
            description: "Profesyonel inşaat yönetimi"
        },
        {
            step: "04",
            title: "Teslim ve Garanti",
            description: "Anahtar teslim ve garanti hizmeti"
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
                            Anahtar Teslim Projeler
                        </h1>
                        <p className="text-xl text-orange-100">
                            Konut, ticari ve endüstriyel yapıların anahtar teslim projelerini gerçekleştiriyoruz
                        </p>
                    </div>
                </div>
            </section>

            {/* Project Types */}
            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Proje Türlerimiz
                        </h2>
                        <p className="text-lg text-gray-600">
                            Farklı sektörler için kapsamlı anahtar teslim projeler
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {projectTypes.map((project, index) => (
                            <Card key={index} className="hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                                        <project.icon className="h-6 w-6 text-orange-600" />
                                    </div>
                                    <CardTitle className="text-xl">{project.title}</CardTitle>
                                    <CardDescription className="text-gray-600">
                                        {project.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2">
                                        {project.features.map((feature, featureIndex) => (
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
                            Çalışma Sürecimiz
                        </h2>
                        <p className="text-lg text-gray-600">
                            Anahtar teslim projelerimizde izlediğimiz adımlar
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

            {/* Why Choose Us */}
            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Neden Anahtar Teslim Projelerimizi Seçmelisiniz?
                        </h2>
                        <p className="text-lg text-gray-600">
                            Kaliteli hizmet ve güvenilir çözümler
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Award className="h-8 w-8 text-orange-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Kaliteli Malzemeler</h3>
                            <p className="text-gray-600">
                                Sadece kaliteli ve güvenilir malzemeler kullanıyoruz.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Users className="h-8 w-8 text-orange-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Uzman Ekip</h3>
                            <p className="text-gray-600">
                                Deneyimli ve uzman ekibimizle çalışıyoruz.
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
                        Anahtar teslim projeleriniz için uzman ekibimizle görüşün
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