import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Package,
    Truck,
    Shield,
    Paintbrush,
    Phone,
    MessageCircle,
    Download,
    CheckCircle
} from "lucide-react";

export default function ProductsPage() {
    const productCategories = [
        {
            icon: Package,
            title: "Tuğla, Çimento, Demir",
            description: "Temel yapı malzemeleri",
            products: [
                "Tuğla çeşitleri",
                "Çimento türleri",
                "Demir ve çelik ürünler",
                "Hazır beton",
                "Kum ve çakıl"
            ],
            href: "/urunler/tugla-cemo-demir"
        },
        {
            icon: Shield,
            title: "İzolasyon Ürünleri",
            description: "Su, ısı ve ses yalıtım malzemeleri",
            products: [
                "Su yalıtım membranları",
                "Isı yalıtım levhaları",
                "Ses yalıtım malzemeleri",
                "Çatı izolasyonu",
                "Temel izolasyonu"
            ],
            href: "/urunler/izolasyon"
        },
        {
            icon: Paintbrush,
            title: "Seramik, Boya vb.",
            description: "Kaplama ve bitirme malzemeleri",
            products: [
                "Seramik ve fayans",
                "Boya çeşitleri",
                "Sıva ve alçı",
                "Döşeme malzemeleri",
                "Dekoratif ürünler"
            ],
            href: "/urunler/seramik-boya"
        }
    ];

    const additionalProducts = [
        {
            title: "Elektrik Malzemeleri",
            description: "Kablolar, pano, aydınlatma ürünleri"
        },
        {
            title: "Su Tesisatı",
            description: "Boru, vana, fitting ürünleri"
        },
        {
            title: "Çatı Malzemeleri",
            description: "Çatı kaplama ve su yalıtım ürünleri"
        },
        {
            title: "Bahçe Ürünleri",
            description: "Peyzaj ve bahçe düzenleme malzemeleri"
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
                            Ürünlerimiz
                        </h1>
                        <p className="text-xl text-orange-100">
                            Toptan ve parakende inşaat malzemesi satışı
                        </p>
                    </div>
                </div>
            </section>

            {/* Product Categories */}
            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Ürün Kategorilerimiz
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Hemen hemen her türlü inşaat malzemesi tedarik ve satışını yapıyoruz.
                            Kaliteli ürünler ve uygun fiyatlarla hizmetinizdeyiz.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {productCategories.map((category, index) => (
                            <Card key={index} className="hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                                        <category.icon className="h-6 w-6 text-orange-600" />
                                    </div>
                                    <CardTitle className="text-xl">{category.title}</CardTitle>
                                    <CardDescription className="text-gray-600">
                                        {category.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 mb-6">
                                        {category.products.map((product, productIndex) => (
                                            <li key={productIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                                                <CheckCircle className="h-4 w-4 text-orange-500" />
                                                <span>{product}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Button variant="outline" asChild className="w-full">
                                        <a href={category.href}>Ürünleri İncele</a>
                                    </Button>
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
                            Diğer Ürünlerimiz
                        </h2>
                        <p className="text-lg text-gray-600">
                            İnşaat sektöründe ihtiyacınız olan tüm malzemeler
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

            {/* Catalog Download */}
            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="bg-orange-50 rounded-lg p-8">
                            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Download className="h-8 w-8 text-orange-600" />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                Ürün Kataloğumuzu İndirin
                            </h2>
                            <p className="text-lg text-gray-600 mb-6">
                                Tüm ürünlerimizi detaylı olarak incelemek için kataloğumuzu indirebilirsiniz.
                            </p>
                            <Button size="lg" asChild>
                                <a href="/katalog" className="flex items-center space-x-2">
                                    <Download className="h-5 w-5" />
                                    <span>Katalog İndir</span>
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Our Products */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Neden Bizim Ürünlerimizi Seçmelisiniz?
                        </h2>
                        <p className="text-lg text-gray-600">
                            Kaliteli ürünler ve güvenilir hizmet
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Shield className="h-8 w-8 text-orange-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Kaliteli Ürünler</h3>
                            <p className="text-gray-600">
                                Sadece kaliteli ve güvenilir markaların ürünlerini satıyoruz.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Truck className="h-8 w-8 text-orange-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Hızlı Teslimat</h3>
                            <p className="text-gray-600">
                                Siparişlerinizi en kısa sürede adresinize teslim ediyoruz.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <CheckCircle className="h-8 w-8 text-orange-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Uygun Fiyat</h3>
                            <p className="text-gray-600">
                                Toptan alım avantajlarıyla uygun fiyatlarla sunuyoruz.
                            </p>
                        </div>
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
                        İhtiyacınız olan ürünler için bizimle iletişime geçin
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