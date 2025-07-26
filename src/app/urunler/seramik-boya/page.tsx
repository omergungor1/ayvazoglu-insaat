import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Palette,
    Square,
    Paintbrush,
    CheckCircle,
    Clock,
    Award,
    Users,
    Phone,
    MessageCircle,
    Star,
    Sparkles
} from "lucide-react";

export default function CeramicPaintProductsPage() {
    const products = [
        {
            icon: Square,
            title: "Seramik Ürünleri",
            description: "Farklı boyut ve desenlerde seramik ürünleri",
            features: [
                "Zemin seramikleri",
                "Duvar seramikleri",
                "Banyo seramikleri",
                "Mutfak seramikleri",
                "Dekoratif seramikler"
            ]
        },
        {
            icon: Paintbrush,
            title: "Boya Ürünleri",
            description: "İç ve dış mekan boya çeşitleri",
            features: [
                "İç mekan boyaları",
                "Dış cephe boyaları",
                "Su bazlı boyalar",
                "Dekoratif boyalar",
                "Özel efekt boyaları"
            ]
        },
        {
            icon: Palette,
            title: "Kaplama Malzemeleri",
            description: "Çeşitli kaplama ve dekoratif malzemeler",
            features: [
                "PVC kaplamalar",
                "Laminat parke",
                "Ahşap kaplamalar",
                "Mermer kaplamalar",
                "Granit kaplamalar"
            ]
        },
        {
            icon: Sparkles,
            title: "Dekoratif Ürünler",
            description: "Dekoratif ve süsleme malzemeleri",
            features: [
                "Dekoratif sıvalar",
                "Dokulu boyalar",
                "Özel efekt malzemeleri",
                "Dekoratif paneller",
                "Süsleme malzemeleri"
            ]
        }
    ];

    const additionalProducts = [
        {
            title: "Yapıştırıcılar",
            description: "Seramik ve kaplama yapıştırıcıları"
        },
        {
            title: "Dolgular",
            description: "Çeşitli dolgu ve sıva malzemeleri"
        },
        {
            title: "Aparatlar",
            description: "Uygulama aparatları ve aletler"
        },
        {
            title: "Koruyucular",
            description: "Yüzey koruyucu malzemeler"
        }
    ];

    const advantages = [
        {
            icon: Award,
            title: "Kaliteli Ürünler",
            description: "Sadece kaliteli ve güvenilir markaların ürünlerini satıyoruz"
        },
        {
            icon: Clock,
            title: "Hızlı Teslimat",
            description: "Ürünlerinizi en kısa sürede adresinize teslim ediyoruz"
        },
        {
            icon: Users,
            title: "Teknik Destek",
            description: "Ürün seçimi ve uygulama konusunda teknik destek veriyoruz"
        },
        {
            icon: CheckCircle,
            title: "Uygun Fiyat",
            description: "Toptan alım avantajlarıyla uygun fiyatlarla sunuyoruz"
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
                            Seramik, Boya ve Diğer Ürünler
                        </h1>
                        <p className="text-xl text-orange-100">
                            Dekoratif yapı malzemeleri - Kaliteli ürünler, uygun fiyatlar
                        </p>
                    </div>
                </div>
            </section>

            {/* Products */}
            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Ürün Kategorilerimiz
                        </h2>
                        <p className="text-lg text-gray-600">
                            Dekoratif yapı malzemeleri kategorilerimiz
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {products.map((product, index) => (
                            <Card key={index} className="hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                                        <product.icon className="h-6 w-6 text-orange-600" />
                                    </div>
                                    <CardTitle className="text-xl">{product.title}</CardTitle>
                                    <CardDescription className="text-gray-600">
                                        {product.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2">
                                        {product.features.map((feature, featureIndex) => (
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

            {/* Additional Products */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Tamamlayıcı Ürünlerimiz
                        </h2>
                        <p className="text-lg text-gray-600">
                            Uygulama için gerekli tamamlayıcı ürünler
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {additionalProducts.map((product, index) => (
                            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <CardTitle className="text-lg">{product.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-gray-600">
                                        {product.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Advantages */}
            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Neden Bizim Ürünlerimizi Seçmelisiniz?
                        </h2>
                        <p className="text-lg text-gray-600">
                            Kaliteli ürünler ve güvenilir hizmet
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

            {/* Quality Brands */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Çalıştığımız Markalar
                        </h2>
                        <p className="text-lg text-gray-600">
                            Sadece kaliteli ve güvenilir markaların ürünlerini satıyoruz
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card className="text-center hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Star className="h-8 w-8 text-orange-600" />
                                </div>
                                <CardTitle>Seramik Markaları</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-gray-600">
                                    VitrA, Eczacıbaşı, Kale, Çanakkale Seramik gibi güvenilir seramik markalarının ürünlerini satıyoruz.
                                </CardDescription>
                            </CardContent>
                        </Card>

                        <Card className="text-center hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Star className="h-8 w-8 text-orange-600" />
                                </div>
                                <CardTitle>Boya Markaları</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-gray-600">
                                    Marshall, Jotun, Tikkurila, Betek gibi kaliteli boya markalarının ürünlerini satıyoruz.
                                </CardDescription>
                            </CardContent>
                        </Card>

                        <Card className="text-center hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Star className="h-8 w-8 text-orange-600" />
                                </div>
                                <CardTitle>Kaplama Markaları</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-gray-600">
                                    Kaliteli yerli ve yabancı kaplama üreticilerinin ürünlerini satıyoruz.
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
                        Ürünlerimiz Hakkında Bilgi Alın
                    </h2>
                    <p className="text-xl mb-8 text-orange-100">
                        Seramik, boya ve diğer ürünlerimiz için bizimle iletişime geçin
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