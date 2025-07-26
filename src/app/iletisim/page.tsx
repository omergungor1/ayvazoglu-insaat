import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MessageCircle, MapPin } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="min-h-screen">
            <Header />

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-orange-600 to-orange-700 text-white py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            İletişim
                        </h1>
                        <p className="text-xl text-orange-100">
                            Projeleriniz için bizimle iletişime geçin
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Information */}
            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Phone */}
                        <Card className="text-center hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <div className="mx-auto w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                                    <Phone className="h-6 w-6 text-orange-600" />
                                </div>
                                <CardTitle>Telefon</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-lg font-medium text-gray-900 mb-2">
                                    +90 551 835 56 70
                                </CardDescription>
                                <Button asChild className="w-full">
                                    <a href="tel:+905518355670" className="flex items-center justify-center space-x-2">
                                        <Phone className="h-4 w-4" />
                                        <span>Hemen Ara</span>
                                    </a>
                                </Button>
                            </CardContent>
                        </Card>

                        {/* WhatsApp */}
                        <Card className="text-center hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                                    <MessageCircle className="h-6 w-6 text-green-600" />
                                </div>
                                <CardTitle>WhatsApp</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-lg font-medium text-gray-900 mb-2">
                                    +90 551 835 56 70
                                </CardDescription>
                                <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                                    <a href="https://wa.me/905518355670" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-2">
                                        <MessageCircle className="h-4 w-4" />
                                        <span>WhatsApp&apos;ta Aç</span>
                                    </a>
                                </Button>
                            </CardContent>
                        </Card>

                        {/* Address */}
                        <Card className="text-center hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                                    <MapPin className="h-6 w-6 text-blue-600" />
                                </div>
                                <CardTitle>Adres</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-gray-600 mb-4">
                                    Bursa, Türkiye
                                </CardDescription>
                                <Button variant="outline" asChild className="w-full">
                                    <a href="#map" className="flex items-center justify-center space-x-2">
                                        <MapPin className="h-4 w-4" />
                                        <span>Haritada Göster</span>
                                    </a>
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Contact Form */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                Bize Ulaşın
                            </h2>
                            <p className="text-gray-600">
                                Projeleriniz için bizimle iletişime geçin. En kısa sürede size dönüş yapacağız.
                            </p>
                        </div>

                        <Card>
                            <CardHeader>
                                <CardTitle>İletişim Formu</CardTitle>
                                <CardDescription>
                                    Aşağıdaki formu doldurarak bizimle iletişime geçebilirsiniz.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                                                Ad
                                            </label>
                                            <input
                                                type="text"
                                                id="firstName"
                                                name="firstName"
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                                                Soyad
                                            </label>
                                            <input
                                                type="text"
                                                id="lastName"
                                                name="lastName"
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                            E-posta
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                            Telefon
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                                            Hizmet Türü
                                        </label>
                                        <select
                                            id="service"
                                            name="service"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                            required
                                        >
                                            <option value="">Seçiniz</option>
                                            <option value="anahtar-teslim">Anahtar Teslim Projeler</option>
                                            <option value="tahhut">Taahhüt Hizmetleri</option>
                                            <option value="tadilat">Tadilat ve Yenileme</option>
                                            <option value="malzeme">İnşaat Malzemeleri</option>
                                            <option value="diger">Diğer</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                            Mesajınız
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={4}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                            placeholder="Projeniz hakkında detayları yazabilirsiniz..."
                                            required
                                        ></textarea>
                                    </div>

                                    <Button type="submit" className="w-full">
                                        Mesaj Gönder
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section id="map" className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Konumumuz</h2>
                        <p className="text-gray-600">Bursa&apos;da hizmet veriyoruz</p>
                    </div>
                    <div className="max-w-4xl mx-auto">
                        <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-lg">
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