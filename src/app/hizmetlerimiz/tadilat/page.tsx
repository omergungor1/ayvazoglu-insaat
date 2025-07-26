import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Paintbrush,
    Home,
    Building2,
    Wrench,
    CheckCircle,
    Clock,
    Award,
    Users,
    Phone,
    MessageCircle,
    Palette,
    Sparkles
} from "lucide-react";

export default function RenovationServicesPage() {
    const services = [
        {
            icon: Home,
            title: "İç Mekan Tadilatları",
            description: "Konut ve ofis iç mekan tadilat hizmetleri",
            features: [
                "Oda tadilatları",
                "Mutfak yenileme",
                "Banyo tadilatları",
                "Salon düzenlemeleri",
                "Ofis iç mekanları"
            ]
        },
        {
            icon: Building2,
            title: "Dış Cephe Yenileme",
            description: "Bina dış cephe yenileme ve kaplama işleri",
            features: [
                "Cephe boyama",
                "Mantolama uygulamaları",
                "Cephe kaplama",
                "Pencere değişimi",
                "Balkon tadilatları"
            ]
        },
        {
            icon: Paintbrush,
            title: "Boya ve Kaplama",
            description: "Profesyonel boya ve kaplama hizmetleri",
            features: [
                "İç mekan boyama",
                "Dış cephe boyama",
                "Özel kaplama uygulamaları",
                "Dekoratif boya",
                "Su bazlı boya"
            ]
        },
        {
            icon: Wrench,
            title: "Elektrik ve Tesisat",
            description: "Elektrik ve su tesisatı tadilat işleri",
            features: [
                "Elektrik tesisatı",
                "Su tesisatı",
                "Doğalgaz tesisatı",
                "Aydınlatma sistemleri",
                "Güvenlik sistemleri"
            ]
        }
    ];

    const processSteps = [
        {
            step: "01",
            title: "Keşif ve Planlama",
            description: "Mevcut durumu analiz ediyoruz"
        },
        {
            step: "02",
            title: "Tasarım ve Teklif",
            description: "Tadilat planı ve teklif hazırlıyoruz"
        },
        {
            step: "03",
            title: "Uygulama",
            description: "Profesyonel ekip ile tadilat yapıyoruz"
        },
        {
            step: "04",
            title: "Kontrol ve Teslim",
            description: "Kalite kontrolü sonrası teslim ediyoruz"
        }
    ];

    const advantages = [
        {
            icon: Award,
            title: "Kaliteli Malzemeler",
            description: "Sadece kaliteli ve güvenilir malzemeler kullanıyoruz"
        },
        {
            icon: Clock,
            title: "Hızlı Uygulama",
            description: "Tadilat işlerinizi kısa sürede tamamlıyoruz"
        },
        {
            icon: Users,
            title: "Uzman Ekip",
            description: "Deneyimli tadilat ekibimizle çalışıyoruz"
        },
        {
            icon: Sparkles,
            title: "Modern Tasarım",
            description: "Güncel tasarım trendlerini uyguluyoruz"
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
                            Tadilat ve Yenileme
                        </h1>
                        <p className="text-xl text-orange-100">
                            Mevcut yapıların tadilat ve yenileme işlerini profesyonelce yapıyoruz
                        </p>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Tadilat Hizmetlerimiz
                        </h2>
                        <p className="text-lg text-gray-600">
                            Kapsamlı tadilat ve yenileme hizmetleri
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
                            Tadilat Sürecimiz
                        </h2>
                        <p className="text-lg text-gray-600">
                            Tadilat projelerimizde izlediğimiz adımlar
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
                            Neden Tadilat Hizmetlerimizi Seçmelisiniz?
                        </h2>
                        <p className="text-lg text-gray-600">
                            Kaliteli hizmet ve güvenilir çözümler
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

            {/* Special Services */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Özel Tadilat Hizmetlerimiz
                        </h2>
                        <p className="text-lg text-gray-600">
                            Özel ihtiyaçlarınıza yönelik tadilat çözümleri
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card className="text-center hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Palette className="h-8 w-8 text-orange-600" />
                                </div>
                                <CardTitle>Dekoratif Uygulamalar</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-gray-600">
                                    Özel dekoratif boya ve kaplama uygulamaları ile mekanlarınıza değer katıyoruz.
                                </CardDescription>
                            </CardContent>
                        </Card>

                        <Card className="text-center hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Sparkles className="h-8 w-8 text-orange-600" />
                                </div>
                                <CardTitle>Modern Tasarım</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-gray-600">
                                    Güncel tasarım trendlerini kullanarak modern ve şık mekanlar oluşturuyoruz.
                                </CardDescription>
                            </CardContent>
                        </Card>

                        <Card className="text-center hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Award className="h-8 w-8 text-orange-600" />
                                </div>
                                <CardTitle>Kalite Garantisi</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-gray-600">
                                    Tüm tadilat işlerimizde kalite garantisi veriyoruz.
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
                        Tadilat Projeniz İçin İletişime Geçin
                    </h2>
                    <p className="text-xl mb-8 text-orange-100">
                        Tadilat ve yenileme işleriniz için uzman ekibimizle görüşün
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