"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import {
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  Globe,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export default function Header() {
  const { language, toggleLanguage, isRTL } = useLanguage();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: { en: "Home", ar: "الرئيسية" } },
    { href: "/about", label: { en: "About Us", ar: "من نحن" } },
    { href: "/services", label: { en: "Services", ar: "خدماتنا" } },
    { href: "/projects", label: { en: "Projects", ar: "المشاريع" } },
    { href: "/contact", label: { en: "Contact Us", ar: "اتصل بنا" } },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Utility Bar */}
      <div className="bg-[#F8FAFC] border-b border-[#E2E8F0] text-xs text-[#64748B] py-2 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5 text-[#334155]">
              <MapPin className="w-3.5 h-3.5 text-[#9E7D47]" />
              <span>
                {language === "en"
                  ? "Barwa Tower 1, Al Sadd, Doha, Qatar"
                  : "برج بروة 1، السد، الدوحة، قطر"}
              </span>
            </span>
            <span className="hidden md:inline-block text-[#CBD5E1]">|</span>
            <span className="hidden md:flex items-center gap-1.5 hover:text-[#9E7D47] transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#9E7D47]" />
              <a href="tel:+97444508659" dir="ltr">+974 4450 8659</a>
            </span>
            <span className="hidden md:inline-block text-[#CBD5E1]">|</span>
            <span className="hidden sm:flex items-center gap-1.5 hover:text-[#9E7D47] transition-colors">
              <Mail className="w-3.5 h-3.5 text-[#9E7D47]" />
              <a href="mailto:info@gttc.co">info@gttc.co</a>
            </span>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <span className="hidden lg:flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white border border-[#E2E8F0] text-[11px] text-[#475569] font-medium shadow-xs">
              <ShieldCheck className="w-3 h-3 text-[#9E7D47]" />
              {language === "en"
                ? "Retaj Hotels & EUGBC Member"
                : "شراكة رتاج وعضوية EUGBC"}
            </span>

            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white hover:bg-slate-50 border border-[#CBD5E1] text-[#1E293B] text-xs font-semibold transition-all cursor-pointer shadow-xs"
              aria-label="Toggle Language"
            >
              <Globe className="w-3.5 h-3.5 text-[#9E7D47]" />
              <span>{language === "en" ? "العربية" : "English"}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`transition-all duration-300 px-4 sm:px-8 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md py-3 shadow-sm border-b border-[#E2E8F0]"
            : "bg-white/90 backdrop-blur-sm py-4 border-b border-[#E2E8F0]"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-lg overflow-hidden border border-[#E2E8F0] p-0.5 bg-white shadow-xs">
              <img
                src="/images/logo.jpg"
                alt="GTTC Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold tracking-tight text-[#0F172A] flex items-center gap-1.5">
                GOLDEN TOWER
                <span className="text-[#9E7D47] text-xs font-bold px-1.5 py-0.5 rounded bg-[#FBF7EE] border border-[#E8DDC8]">
                  GTTC
                </span>
              </span>
              <span className="text-[10px] sm:text-[11px] text-[#64748B] tracking-wider uppercase font-medium">
                {language === "en"
                  ? "Trading & Contracting W.L.L"
                  : "للتجارة والمقاولات ذ.م.م"}
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-semibold transition-colors relative py-1 ${
                    isActive
                      ? "text-[#9E7D47]"
                      : "text-[#475569] hover:text-[#0F172A]"
                  }`}
                >
                  {link.label[language]}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#9E7D47] rounded-full" />
                  )}
                </a>
              );
            })}
          </div>

          {/* CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-[#9E7D47] hover:bg-[#856636] shadow-sm transition-all"
            >
              <span>{language === "en" ? "Contact Office" : "تواصل معنا"}</span>
              <ArrowRight
                className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`}
              />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-[#F8FAFC] border border-[#CBD5E1] text-[#334155] hover:text-[#0F172A]"
            aria-label="Toggle Mobile Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#E2E8F0] px-6 py-6 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-semibold py-2 px-3 rounded-lg transition-colors ${
                    isActive
                      ? "text-[#9E7D47] bg-[#FBF7EE]"
                      : "text-[#334155] hover:bg-[#F8FAFC]"
                  }`}
                >
                  {link.label[language]}
                </a>
              );
            })}

            <div className="pt-4 border-t border-[#E2E8F0] flex flex-col gap-3">
              <a
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-lg text-sm font-bold text-white bg-[#9E7D47] hover:bg-[#856636] shadow-sm"
              >
                {language === "en" ? "Contact Office" : "تواصل مع الإدارة"}
              </a>
              <div className="flex items-center justify-between text-xs text-[#64748B] px-2 pt-1 font-mono">
                <span>Doha: +974 4450 8659</span>
                <span>Tbilisi: +995 32 200 4580</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
