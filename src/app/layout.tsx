import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ayvazoğlu İnşaat - Bursa İnşaat Firması",
  description: "Bursa'da kurulmuş köklü inşaat firması. Toptan ve parakende inşaat malzemesi satışı, taahhüt hizmetleri, anahtar teslim projeler.",
  keywords: "inşaat, bursa, inşaat malzemesi, taahhüt, anahtar teslim, yapı malzemeleri",
  authors: [{ name: "Ayvazoğlu İnşaat" }],
  openGraph: {
    title: "Ayvazoğlu İnşaat - Bursa İnşaat Firması",
    description: "Bursa'da kurulmuş köklü inşaat firması. Toptan ve parakende inşaat malzemesi satışı, taahhüt hizmetleri, anahtar teslim projeler.",
    type: "website",
    locale: "tr_TR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
