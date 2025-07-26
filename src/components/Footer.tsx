import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, MapPin, Instagram, Facebook } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <div className="bg-white rounded-lg p-2">
                                <Image
                                    src="/assets/logo1.png"
                                    alt="Ayvazoğlu İnşaat Logo"
                                    width={40}
                                    height={40}
                                    className="h-10 w-auto"
                                />
                            </div>
                            <span className="font-bold text-xl">Ayvazoğlu İnşaat</span>
                        </div>
                        <p className="text-gray-300 text-sm">
                            Bursa&apos;da kurulmuş köklü inşaat firması. Yılların bilgi birikimi ile çeşitli inşaat hizmetleri vermekteyiz.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://www.instagram.com/ayvazogluinsaat?igsh=ZnhpcjVtdnZtbDZo" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-500 transition-colors">
                                <Instagram className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Services */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Hizmetlerimiz</h3>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li><a href="/hizmetlerimiz/anahtar-teslim" className="hover:text-orange-500 transition-colors">Anahtar Teslim Projeler</a></li>
                            <li><a href="/hizmetlerimiz/tahhut" className="hover:text-orange-500 transition-colors">Taahhüt Hizmetleri</a></li>
                            <li><a href="/hizmetlerimiz/mekan-uygulamalari" className="hover:text-orange-500 transition-colors">İç-Dış Mekan Uygulamaları</a></li>
                            <li><a href="/hizmetlerimiz/tadilat" className="hover:text-orange-500 transition-colors">Tadilat ve Yenileme</a></li>
                            <li><a href="/hizmetlerimiz/mimari-proje" className="hover:text-orange-500 transition-colors">Mimari Proje Hizmetleri</a></li>
                        </ul>
                    </div>

                    {/* Products */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Ürünlerimiz</h3>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li><a href="/urunler/tugla-cemo-demir" className="hover:text-orange-500 transition-colors">Tuğla, Çimento, Demir</a></li>
                            <li><a href="/urunler/izolasyon" className="hover:text-orange-500 transition-colors">İzolasyon Ürünleri</a></li>
                            <li><a href="/urunler/seramik-boya" className="hover:text-orange-500 transition-colors">Seramik, Boya vb.</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">İletişim</h3>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                                <Phone className="h-4 w-4 text-orange-500" />
                                <a href="tel:+905518355670" className="text-sm hover:text-orange-500 transition-colors">
                                    +90 551 835 56 70
                                </a>
                            </div>
                            <div className="flex items-center space-x-3">
                                <MessageCircle className="h-4 w-4 text-orange-500" />
                                <a href="https://wa.me/905518355670" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-orange-500 transition-colors">
                                    WhatsApp
                                </a>
                            </div>
                            <div className="flex items-start space-x-3">
                                <MapPin className="h-4 w-4 text-orange-500 mt-1" />
                                <span className="text-sm text-gray-300">
                                    Bursa, Türkiye
                                </span>
                            </div>
                        </div>
                        <div className="pt-4">
                            <Button size="sm" asChild className="w-full">
                                <a href="/iletisim" className="flex items-center justify-center space-x-2">
                                    <span>İletişime Geç</span>
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 mt-8 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-sm text-gray-400">
                            © 2024 Ayvazoğlu İnşaat. Tüm hakları saklıdır.
                        </p>
                        <div className="flex space-x-6 text-sm text-gray-400">
                            <a href="/hakkimizda" className="hover:text-orange-500 transition-colors">Hakkımızda</a>
                            <a href="/galeri" className="hover:text-orange-500 transition-colors">Galeri</a>
                            <a href="/blog" className="hover:text-orange-500 transition-colors">Blog</a>
                            <a href="/iletisim" className="hover:text-orange-500 transition-colors">İletişim</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 