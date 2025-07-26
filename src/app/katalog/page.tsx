import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Download,
    FileText,
    Package,
    Shield,
    Paintbrush,
    Phone,
    MessageCircle,
    CheckCircle
} from "lucide-react";

export default function CatalogPage() {
    const catalogs = [
        {
            title: "İnşaat Malzemeleri Kataloğu",
            description: "Tüm inşaat malzemelerimizin detaylı kataloğu",
            size: "2.5 MB",
            format: "PDF",
            icon: Package
        },
        {
            title: "İzolasyon Ürünleri Kataloğu",
            description: "Su, ısı ve ses yalıtım ürünlerimiz",
            size: "1.8 MB",
            format: "PDF",
            icon: Shield
        },
        {
            title: "Kaplama Malzemeleri Kataloğu",
            description: "Seramik, boya ve kaplama ürünlerimiz",
            size: "3.2 MB",
            format: "PDF",
            icon: Paintbrush
        }
    ];

    const features = [
        "Detaylı ürün bilgileri",
        "Teknik özellikler",
        "Fiyat listeleri",
        "Uygulama örnekleri",
        "Kalite belgeleri",
        "Güncel stok durumu"
    ];

    return (
        <div className="min-h-screen">
            <Header />

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-orange-600 to-orange-700 text-white py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Ürün Kataloğumuz
                        </h1>
                        <p className="text-xl text-orange-100">
                            Tüm ürünlerimizi detaylı olarak inceleyin
                        </p>
                    </div>
                </div>
            </section>

            {/* Catalog Downloads */}
            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Kataloglarımızı İndirin
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            İnşaat malzemelerimizin detaylı kataloglarını indirerek tüm ürünlerimizi inceleyebilirsiniz.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {catalogs.map((catalog, index) => (
                            <Card key={index} className="hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                                        <catalog.icon className="h-6 w-6 text-orange-600" />
                                    </div>
                                    <CardTitle className="text-xl">{catalog.title}</CardTitle>
                                    <CardDescription className="text-gray-600">
                                        {catalog.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="text-sm text-gray-500">
                                            <FileText className="h-4 w-4 inline mr-1" />
                                            {catalog.format}
                                        </div>
                                        <div className="text-sm text-gray-500">
                                            {catalog.size}
                                        </div>
                                    </div>
                                    <Button asChild className="w-full">
                                        <a href="#" className="flex items-center justify-center space-x-2">
                                            <Download className="h-4 w-4" />
                                            <span>İndir</span>
                                        </a>
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Kataloglarımızda Neler Var?
                        </h2>
                        <p className="text-lg text-gray-600">
                            Kataloglarımızda bulabileceğiniz detaylı bilgiler
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-center space-x-3">
                                <CheckCircle className="h-5 w-5 text-orange-500" />
                                <span className="text-gray-700">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact for More Info */}
            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="bg-orange-50 rounded-lg p-8">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                Daha Fazla Bilgi İçin İletişime Geçin
                            </h2>
                            <p className="text-lg text-gray-600 mb-6">
                                Kataloglarımız hakkında sorularınız varsa veya özel ürün bilgileri istiyorsanız bizimle iletişime geçin.
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
                    </div>
                </div>
            </section>

            {/* Why Download Our Catalogs */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Neden Kataloglarımızı İndirmelisiniz?
                        </h2>
                        <p className="text-lg text-gray-600">
                            Kataloglarımızın size sağladığı avantajlar
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FileText className="h-8 w-8 text-orange-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Detaylı Bilgi</h3>
                            <p className="text-gray-600">
                                Tüm ürünlerimizin teknik özellikleri ve uygulama detayları
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <CheckCircle className="h-8 w-8 text-orange-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Güncel Fiyatlar</h3>
                            <p className="text-gray-600">
                                Güncel fiyat listeleri ve toptan alım avantajları
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Shield className="h-8 w-8 text-orange-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Kalite Belgeleri</h3>
                            <p className="text-gray-600">
                                Ürünlerimizin kalite belgeleri ve standartları
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
} 