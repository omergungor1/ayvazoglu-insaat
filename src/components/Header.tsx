"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Menu, Phone, MessageCircle } from "lucide-react";

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navigationItems = [
        { name: "Anasayfa", href: "/" },
        { name: "Hakkımızda", href: "/hakkimizda" },
        {
            name: "Hizmetlerimiz",
            href: "/hizmetlerimiz",
            subItems: [
                { name: "Anahtar Teslim Projeler", href: "/hizmetlerimiz/anahtar-teslim" },
                { name: "Taahhüt Hizmetleri", href: "/hizmetlerimiz/tahhut" },
                { name: "İç-Dış Mekan Uygulamaları", href: "/hizmetlerimiz/mekan-uygulamalari" },
                { name: "Tadilat ve Yenileme", href: "/hizmetlerimiz/tadilat" },
                { name: "Mimari Proje Hizmetleri", href: "/hizmetlerimiz/mimari-proje" },
            ]
        },
        {
            name: "Ürünler",
            href: "/urunler",
            subItems: [
                { name: "Tuğla, Çimento, Demir", href: "/urunler/tugla-cemo-demir" },
                { name: "İzolasyon Ürünleri", href: "/urunler/izolasyon" },
                { name: "Seramik, Boya vb.", href: "/urunler/seramik-boya" },
            ]
        },
        { name: "Galeri", href: "/galeri" },
        { name: "Blog", href: "/blog" },
        { name: "İletişim", href: "/iletisim" },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center space-x-2">
                            <Image
                                src="/assets/logo1.png"
                                alt="Ayvazoğlu İnşaat Logo"
                                width={40}
                                height={40}
                                className="h-10 w-auto"
                            />
                            <span className="font-bold text-xl text-gray-900">Ayvazoğlu İnşaat</span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        <NavigationMenu>
                            <NavigationMenuList>
                                {navigationItems.map((item) => (
                                    <NavigationMenuItem key={item.name}>
                                        {item.subItems ? (
                                            <>
                                                <NavigationMenuTrigger className="text-gray-700 hover:text-orange-600">
                                                    {item.name}
                                                </NavigationMenuTrigger>
                                                <NavigationMenuContent>
                                                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                                        {item.subItems.map((subItem) => (
                                                            <li key={subItem.name}>
                                                                <NavigationMenuLink asChild>
                                                                    <a
                                                                        href={subItem.href}
                                                                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                                                    >
                                                                        <div className="text-sm font-medium leading-none">{subItem.name}</div>
                                                                    </a>
                                                                </NavigationMenuLink>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </NavigationMenuContent>
                                            </>
                                        ) : (
                                            <NavigationMenuLink asChild>
                                                <a
                                                    href={item.href}
                                                    className="text-gray-700 hover:text-orange-600 transition-colors"
                                                >
                                                    {item.name}
                                                </a>
                                            </NavigationMenuLink>
                                        )}
                                    </NavigationMenuItem>
                                ))}
                            </NavigationMenuList>
                        </NavigationMenu>
                    </nav>

                    {/* Contact Buttons */}
                    <div className="hidden lg:flex items-center space-x-4">
                        <Button variant="outline" size="sm" asChild>
                            <a href="tel:+905518355670" className="flex items-center space-x-2">
                                <Phone className="h-4 w-4" />
                                <span>Ara</span>
                            </a>
                        </Button>
                        <Button size="sm" asChild>
                            <a href="https://wa.me/905518355670" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                                <MessageCircle className="h-4 w-4" />
                                <span>WhatsApp</span>
                            </a>
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden">
                        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="sm">
                                    <Menu className="h-6 w-6" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-[300px] sm:w-[400px] h-full overflow-y-auto">
                                <SheetTitle className="sr-only">Menü</SheetTitle>
                                <div className="flex flex-col space-y-4 mt-8 px-4 pb-8">
                                    {navigationItems.map((item) => (
                                        <div key={item.name}>
                                            <a
                                                href={item.href}
                                                className="block text-lg font-medium text-gray-900 hover:text-orange-600 py-2"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                {item.name}
                                            </a>
                                            {item.subItems && (
                                                <div className="ml-4 mt-2 space-y-2">
                                                    {item.subItems.map((subItem) => (
                                                        <a
                                                            key={subItem.name}
                                                            href={subItem.href}
                                                            className="block text-sm text-gray-600 hover:text-orange-600 py-1"
                                                            onClick={() => setIsMobileMenuOpen(false)}
                                                        >
                                                            {subItem.name}
                                                        </a>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                    <div className="pt-4 border-t">
                                        <Button variant="outline" size="sm" asChild className="w-full mb-2">
                                            <a href="tel:+905518355670" className="flex items-center justify-center space-x-2">
                                                <Phone className="h-4 w-4" />
                                                <span>Ara</span>
                                            </a>
                                        </Button>
                                        <Button size="sm" asChild className="w-full">
                                            <a href="https://wa.me/905518355670" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-2">
                                                <MessageCircle className="h-4 w-4" />
                                                <span>WhatsApp</span>
                                            </a>
                                        </Button>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header; 