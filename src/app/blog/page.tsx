import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Calendar,
    User,
    Tag,
    ArrowRight,
    Phone,
    MessageCircle
} from "lucide-react";

export default function BlogPage() {
    const blogPosts = [
        {
            id: 1,
            title: "İnşaat Malzemeleri Seçerken Dikkat Edilmesi Gerekenler",
            excerpt: "Kaliteli inşaat malzemeleri seçimi, projenizin başarısı için kritik öneme sahiptir. Bu yazımızda doğru malzeme seçimi hakkında önemli ipuçları paylaşıyoruz.",
            author: "Ayvazoğlu İnşaat",
            date: "15 Aralık 2024",
            category: "İnşaat Malzemeleri",
            readTime: "5 dk"
        },
        {
            id: 2,
            title: "Su Yalıtımının Önemi ve Doğru Uygulama Yöntemleri",
            excerpt: "Su yalıtımı, yapıların ömrünü uzatan en önemli faktörlerden biridir. Bu yazımızda su yalıtımının önemi ve doğru uygulama yöntemlerini ele alıyoruz.",
            author: "Ayvazoğlu İnşaat",
            date: "10 Aralık 2024",
            category: "İzolasyon",
            readTime: "7 dk"
        },
        {
            id: 3,
            title: "Modern İnşaat Teknolojileri ve Yenilikler",
            excerpt: "İnşaat sektörü sürekli gelişen teknolojilerle birlikte evrim geçiriyor. Bu yazımızda güncel inşaat teknolojilerini ve yenilikleri inceliyoruz.",
            author: "Ayvazoğlu İnşaat",
            date: "5 Aralık 2024",
            category: "Teknoloji",
            readTime: "6 dk"
        },
        {
            id: 4,
            title: "Sürdürülebilir İnşaat ve Çevre Dostu Malzemeler",
            excerpt: "Sürdürülebilir inşaat, çevre dostu malzemeler ve yeşil bina konseptleri hakkında detaylı bilgi veriyoruz.",
            author: "Ayvazoğlu İnşaat",
            date: "1 Aralık 2024",
            category: "Sürdürülebilirlik",
            readTime: "8 dk"
        },
        {
            id: 5,
            title: "Tadilat Projelerinde Dikkat Edilmesi Gerekenler",
            excerpt: "Tadilat projelerinde başarılı sonuçlar almak için dikkat edilmesi gereken önemli noktaları paylaşıyoruz.",
            author: "Ayvazoğlu İnşaat",
            date: "25 Kasım 2024",
            category: "Tadilat",
            readTime: "4 dk"
        },
        {
            id: 6,
            title: "İnşaat Projelerinde Kalite Kontrol Süreçleri",
            excerpt: "İnşaat projelerinde kalite kontrolünün önemi ve etkili kalite kontrol süreçlerinin nasıl uygulanacağını açıklıyoruz.",
            author: "Ayvazoğlu İnşaat",
            date: "20 Kasım 2024",
            category: "Kalite Kontrol",
            readTime: "6 dk"
        }
    ];

    const categories = [
        "Tümü",
        "İnşaat Malzemeleri",
        "İzolasyon",
        "Teknoloji",
        "Sürdürülebilirlik",
        "Tadilat",
        "Kalite Kontrol"
    ];

    return (
        <div className="min-h-screen">
            <Header />

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-orange-600 to-orange-700 text-white py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Blog
                        </h1>
                        <p className="text-xl text-orange-100">
                            İnşaat sektörü hakkında güncel bilgiler ve ipuçları
                        </p>
                    </div>
                </div>
            </section>

            {/* Categories */}
            <section className="py-8 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap gap-2 justify-center">
                        {categories.map((category, index) => (
                            <Button
                                key={index}
                                variant={index === 0 ? "default" : "outline"}
                                size="sm"
                                className="rounded-full"
                            >
                                {category}
                            </Button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Blog Posts */}
            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Son Yazılarımız
                        </h2>
                        <p className="text-lg text-gray-600">
                            İnşaat sektörü hakkında güncel bilgiler ve uzman görüşlerimiz
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post) => (
                            <Card key={post.id} className="hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                                        <Calendar className="h-4 w-4" />
                                        <span>{post.date}</span>
                                        <span>•</span>
                                        <span>{post.readTime}</span>
                                    </div>
                                    <CardTitle className="text-lg line-clamp-2">{post.title}</CardTitle>
                                    <CardDescription className="text-gray-600 line-clamp-3">
                                        {post.excerpt}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                                            <User className="h-4 w-4" />
                                            <span>{post.author}</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Tag className="h-4 w-4 text-orange-500" />
                                            <span className="text-sm text-orange-600">{post.category}</span>
                                        </div>
                                    </div>
                                    <Button variant="link" className="p-0 h-auto text-orange-600 hover:text-orange-700 mt-4">
                                        <span>Devamını Oku</span>
                                        <ArrowRight className="h-4 w-4 ml-1" />
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="py-16 bg-orange-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Güncel Yazılarımızdan Haberdar Olun
                        </h2>
                        <p className="text-lg text-gray-600 mb-6">
                            İnşaat sektörü hakkındaki güncel yazılarımızdan haberdar olmak için e-posta listemize katılın.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="E-posta adresiniz"
                                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                            />
                            <Button>Abone Ol</Button>
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
                        İnşaat projeleriniz için uzman ekibimizle görüşün
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