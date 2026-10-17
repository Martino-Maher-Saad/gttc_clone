import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Tajawal } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const tajawal = Tajawal({
  variable: "--font-arabic",
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.gttc.co"),
  title: "GTTC | Golden Tower Trading & Contracting - Qatar & Georgia",
  description:
    "Official website of Golden Tower Trading & Contracting (GTTC). Multi-disciplinary EPC contracting, structural & civil engineering, structural steel fabrication, and international real estate developments in Qatar and Georgia.",
  keywords: [
    "Golden Tower Trading & Contracting",
    "GTTC Qatar",
    "Tamara City Georgia",
    "Didi Dighomi Tower",
    "Grigoleti Beach Resort",
    "Doha Metro Green Line",
    "Lusail Plaza LRT",
    "Steel Fabrication Qatar",
    "EPC Contracting Qatar"
  ],
  openGraph: {
    title: "Golden Tower Trading & Contracting (GTTC)",
    description:
      "Engineering excellence in Qatar infrastructure and Georgia real estate developments.",
    url: "https://www.gttc.co",
    siteName: "Golden Tower Trading & Contracting",
    locale: "en_US",
    type: "website",
  },
};

import { Suspense } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${plusJakartaSans.variable} ${tajawal.variable} scroll-smooth`}
    >
      <body
        suppressHydrationWarning
        className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-[#F4EADA] selection:text-[#7C6033] font-sans antialiased"
      >
        <LanguageProvider>
          <Suspense fallback={<header className="fixed top-0 left-0 right-0 z-50 h-20 bg-white border-b border-slate-200" />}>
            <Header />
          </Suspense>
          <main className="flex-1 pt-20 sm:pt-24">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
