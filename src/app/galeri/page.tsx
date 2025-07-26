import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
    Phone,
    MessageCircle,
    Image as ImageIcon
} from "lucide-react";

export default function GalleryPage() {
    const projectCategories = [
        {
            title: "Konut Projeleri",
            description: "Tamamladığımız konut projeleri",
            count: "15+ Proje"
        },
        {
            title: "Ticari Yapılar",
            description: "Ofis ve ticari yapı projeleri",
            count: "8+ Proje"
        },
        {
            title: "Tadilat İşleri",
            description: "Tadilat ve yenileme projeleri",
            count: "25+ Proje"
        },
        {
            title: "İzolasyon Uygulamaları",
            description: "Su, ısı ve ses yalıtım projeleri",
            count: "12+ Proje"
        }
    ];

    // Gerçek galeri resimleri
    const galleryImages = Array.from({ length: 26 }, (_, index) => ({
        id: index + 1,
        src: `/assets/gallery/photo-${index + 1}.jpeg`,
        alt: `Proje Fotoğrafı ${index + 1}`
    }));

    return (
        <div className="min-h-screen">
            <Header />

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-orange-600 to-orange-700 text-white py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Galeri
                        </h1>
                        <p className="text-xl text-orange-100">
                            Tamamladığımız projelerden örnekler
                        </p>
                    </div>
                </div>
            </section>

            {/* Project Categories */}
            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Proje Kategorilerimiz
                        </h2>
                        <p className="text-lg text-gray-600">
                            Farklı alanlarda tamamladığımız projelerimizden örnekler
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {projectCategories.map((category, index) => (
                            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <CardTitle className="text-lg">{category.title}</CardTitle>
                                    <CardDescription className="text-gray-600">
                                        {category.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold text-orange-600 mb-2">
                                        {category.count}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Proje Galerimiz
                        </h2>
                        <p className="text-lg text-gray-600">
                            Tamamladığımız projelerden seçmeler
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {galleryImages.map((image) => (
                            <Card key={image.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                                <div className="aspect-square relative overflow-hidden">
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <ImageIcon className="h-8 w-8 text-white" />
                                        </div>
                                    </div>
                                </div>
                                <CardContent className="p-4">
                                    {/* Resim bilgileri kaldırıldı */}
                                </CardContent>
                            </Card>
                        ))}
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
                        Benzer projeler için uzman ekibimizle görüşün
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