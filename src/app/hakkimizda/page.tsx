import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Building2,
    Award,
    Users,
    Clock,
    CheckCircle,
    Truck,
    Hammer,
    Phone,
    MessageCircle
} from "lucide-react";

export default function AboutPage() {
    const values = [
        {
            icon: Award,
            title: "Kalite",
            description: "Her projede en yüksek kalite standartlarını hedefliyoruz."
        },
        {
            icon: Users,
            title: "Güven",
            description: "Müşterilerimizle güvene dayalı uzun vadeli ilişkiler kuruyoruz."
        },
        {
            icon: Clock,
            title: "Zamanında Teslim",
            description: "Projelerimizi söz verdiğimiz tarihte teslim ediyoruz."
        },
        {
            icon: CheckCircle,
            title: "Müşteri Memnuniyeti",
            description: "Müşteri memnuniyeti bizim için en önemli önceliktir."
        }
    ];

    const services = [
        {
            icon: Building2,
            title: "Anahtar Teslim Projeler",
            description: "Konut, ticari ve endüstriyel yapıların anahtar teslim projelerini gerçekleştiriyoruz."
        },
        {
            icon: Hammer,
            title: "Taahhüt Hizmetleri",
            description: "İnşaat taahhüt işlerinde uzman ekibimizle hizmet veriyoruz."
        },
        {
            icon: Truck,
            title: "İnşaat Malzemeleri",
            description: "Toptan ve parakende inşaat malzemesi satışı yapıyoruz."
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
                            Hakkımızda
                        </h1>
                        <p className="text-xl text-orange-100">
                            Bursa&apos;da köklü inşaat firması olarak hizmet veriyoruz
                        </p>
                    </div>
                </div>
            </section>

            {/* Company Story */}
            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Şirket Hikayemiz
                            </h2>
                            <p className="text-lg text-gray-600">
                                Ayvazoğlu İnşaat olarak Bursa&apos;da kurulmuş köklü bir inşaat firmasıyız.
                            </p>
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Ayvazoğlu inşaat bursada kurulmuş köklü bir inşaat firmasıdır. Yılların bilgi birikimi ile
                                çeşitli inşaat hizmetleri vermekteyiz. Özellikle toptan ve parakende inşaat malzemesi satışı
                                yapmaktayız. Hemen hemen her türlü inşaat malzemesi tedarik ve satışını yapıyoruz. Bununla birlikte
                                inşaat taahhüt ve anahtar teslim projeler yapmaktayız.
                            </p>

                            <p className="text-gray-700 leading-relaxed mb-6">
                                Deneyimli ekibimiz ve kaliteli hizmet anlayışımızla, müşterilerimizin ihtiyaçlarını
                                en iyi şekilde karşılamak için çalışıyoruz. İnşaat sektöründeki gelişmeleri takip ederek,
                                modern teknolojileri kullanarak projelerimizi gerçekleştiriyoruz.
                            </p>

                            <p className="text-gray-700 leading-relaxed">
                                Müşteri memnuniyeti odaklı çalışma prensibimizle, her projede en yüksek kalite
                                standartlarını hedefliyoruz. Sürdürülebilir ve güvenli yapılar inşa ederek,
                                topluma değer katmaya devam ediyoruz.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Değerlerimiz
                        </h2>
                        <p className="text-lg text-gray-600">
                            Çalışma prensiplerimizi oluşturan temel değerlerimiz
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => (
                            <Card key={index} className="text-center border-0 shadow-lg">
                                <CardHeader>
                                    <div className="mx-auto w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                                        <value.icon className="h-6 w-6 text-orange-600" />
                                    </div>
                                    <CardTitle className="text-lg">{value.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-gray-600">
                                        {value.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Overview */}
            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Hizmet Alanlarımız
                        </h2>
                        <p className="text-lg text-gray-600">
                            İnşaat sektöründe kapsamlı hizmetler sunuyoruz
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <Card key={index} className="hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                                        <service.icon className="h-6 w-6 text-orange-600" />
                                    </div>
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

            {/* Stats Section */}
            <section className="py-16 bg-orange-600 text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-3xl md:text-4xl font-bold mb-2">10+</div>
                            <div className="text-orange-100">Yıllık Deneyim</div>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-bold mb-2">100+</div>
                            <div className="text-orange-100">Tamamlanan Proje</div>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-bold mb-2">50+</div>
                            <div className="text-orange-100">Mutlu Müşteri</div>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-bold mb-2">24/7</div>
                            <div className="text-orange-100">Destek</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Projeniz İçin Bizimle İletişime Geçin
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        İnşaat projeleriniz için uzman ekibimizle görüşün
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" asChild>
                            <a href="tel:+905518355670" className="flex items-center space-x-2">
                                <Phone className="h-5 w-5" />
                                <span>+90 551 835 56 70</span>
                            </a>
                        </Button>
                        <Button size="lg" variant="outline" asChild>
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