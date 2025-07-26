import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Building2,
    Shield,
    CheckCircle,
    Clock,
    Award,
    Users,
    Phone,
    MessageCircle,
    FileText,
    Settings
} from "lucide-react";

export default function ContractingServicesPage() {
    const services = [
        {
            icon: Building2,
            title: "İnşaat Taahhüt İşleri",
            description: "Kapsamlı inşaat taahhüt hizmetleri",
            features: [
                "Konut inşaatları",
                "Ticari yapı inşaatları",
                "Endüstriyel tesis inşaatları",
                "Altyapı projeleri",
                "Yol ve köprü inşaatları"
            ]
        },
        {
            icon: Shield,
            title: "Yapı Denetimi",
            description: "Profesyonel yapı denetim hizmetleri",
            features: [
                "Yapı denetim raporları",
                "Kalite kontrol süreçleri",
                "Güvenlik denetimleri",
                "Teknik raporlama",
                "Uygunluk kontrolleri"
            ]
        },
        {
            icon: Settings,
            title: "Proje Yönetimi",
            description: "Kapsamlı proje yönetim hizmetleri",
            features: [
                "Proje planlama",
                "Zaman yönetimi",
                "Maliyet kontrolü",
                "Risk yönetimi",
                "İletişim koordinasyonu"
            ]
        },
        {
            icon: FileText,
            title: "Şantiye Kurulumu",
            description: "Profesyonel şantiye kurulum hizmetleri",
            features: [
                "Şantiye planlaması",
                "Geçici yapılar",
                "Güvenlik önlemleri",
                "Ekipman kurulumu",
                "Lojistik organizasyonu"
            ]
        }
    ];

    const advantages = [
        {
            icon: Award,
            title: "Kalite Garantisi",
            description: "Her projede en yüksek kalite standartlarını hedefliyoruz"
        },
        {
            icon: Clock,
            title: "Zamanında Teslim",
            description: "Projelerimizi söz verdiğimiz tarihte teslim ediyoruz"
        },
        {
            icon: Users,
            title: "Uzman Ekip",
            description: "Deneyimli ve uzman ekibimizle çalışıyoruz"
        },
        {
            icon: CheckCircle,
            title: "Müşteri Memnuniyeti",
            description: "Müşteri memnuniyeti odaklı çalışma prensibimiz"
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
                            Taahhüt Hizmetleri
                        </h1>
                        <p className="text-xl text-orange-100">
                            İnşaat taahhüt işlerinde uzman ekibimizle hizmet veriyoruz
                        </p>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Taahhüt Hizmetlerimiz
                        </h2>
                        <p className="text-lg text-gray-600">
                            Kapsamlı inşaat taahhüt ve yönetim hizmetleri
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

            {/* Advantages */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Neden Bizi Seçmelisiniz?
                        </h2>
                        <p className="text-lg text-gray-600">
                            Taahhüt hizmetlerimizin avantajları
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

            {/* Process */}
            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Çalışma Sürecimiz
                        </h2>
                        <p className="text-lg text-gray-600">
                            Taahhüt projelerimizde izlediğimiz adımlar
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                                    1
                                </div>
                                <h3 className="text-lg font-semibold mb-2">Proje Analizi</h3>
                                <p className="text-gray-600 text-sm">
                                    İhtiyaçlarınızı detaylı olarak analiz ediyoruz
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                                    2
                                </div>
                                <h3 className="text-lg font-semibold mb-2">Teklif Hazırlama</h3>
                                <p className="text-gray-600 text-sm">
                                    Detaylı teklif ve planlama yapıyoruz
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                                    3
                                </div>
                                <h3 className="text-lg font-semibold mb-2">Uygulama</h3>
                                <p className="text-gray-600 text-sm">
                                    Profesyonel ekip ile uygulama yapıyoruz
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                                    4
                                </div>
                                <h3 className="text-lg font-semibold mb-2">Kontrol ve Teslim</h3>
                                <p className="text-gray-600 text-sm">
                                    Kalite kontrolü sonrası teslim ediyoruz
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-orange-600 text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Taahhüt Projeniz İçin İletişime Geçin
                    </h2>
                    <p className="text-xl mb-8 text-orange-100">
                        İnşaat taahhüt işleriniz için uzman ekibimizle görüşün
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