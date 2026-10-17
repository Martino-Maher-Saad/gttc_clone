"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  Phone,
  Mail,
  MapPin,
  ArrowUp,
  Building2,
  ShieldCheck,
  Globe2,
} from "lucide-react";

export default function Footer() {
  const { language, isRTL } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#F8FAFC] text-[#475569] border-t border-[#E2E8F0] relative pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#E2E8F0]">
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg overflow-hidden border border-[#CBD5E1] p-1 bg-white shadow-xs">
                <img
                  src="/images/logo.jpg"
                  alt="GTTC Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0F172A] tracking-tight">
                  GOLDEN TOWER <span className="text-[#9E7D47]">GTTC</span>
                </h3>
                <p className="text-xs text-[#64748B] tracking-wider uppercase font-semibold">
                  {language === "en"
                    ? "Trading & Contracting W.L.L"
                    : "للتجارة والمقاولات ذ.م.م"}
                </p>
              </div>
            </div>

            <p className="text-sm text-[#475569] leading-relaxed pr-4">
              {language === "en"
                ? "Golden Tower Trading & Contracting (GTTC) is a multi-disciplinary construction, engineering EPC, and international real estate investment firm operating across Qatar and Georgia. Delivering certified structural works, hospitality developments, and national infrastructure."
                : "شركة البرج الذهبي للتجارة والمقاولات (GTTC) هي شركة هندسية ومقاولات رائدة في قطر واستثمارات التطوير العقاري الدولي في جورجيا، تجمع بين الكفاءة الإنشائية وتطوير المشاريع الفندقية الكبرى."}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <div className="px-3 py-1.5 rounded-lg bg-white border border-[#E2E8F0] flex items-center gap-2 text-xs text-[#334155] shadow-xs">
                <ShieldCheck className="w-4 h-4 text-[#9E7D47]" />
                <span>{language === "en" ? "Retaj Strategic Partner" : "شراكة رتاج للضيافة"}</span>
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-white border border-[#E2E8F0] flex items-center gap-2 text-xs text-[#334155] shadow-xs">
                <Globe2 className="w-4 h-4 text-[#9E7D47]" />
                <span>{language === "en" ? "EUGBC Core Member" : "عضو مجلس الأعمال الأوروبي"}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-bold text-[#0F172A] uppercase tracking-wider">
              {language === "en" ? "Navigation" : "أقسام الموقع"}
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <a href="/" className="hover:text-[#9E7D47] transition-colors">
                  {language === "en" ? "Home" : "الرئيسية"}
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-[#9E7D47] transition-colors">
                  {language === "en" ? "About Company" : "عن الشركة"}
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-[#9E7D47] transition-colors">
                  {language === "en" ? "Services" : "الخدمات الهندسية"}
                </a>
              </li>
              <li>
                <a href="/projects" className="hover:text-[#9E7D47] transition-colors">
                  {language === "en" ? "Projects Portfolio" : "معرض المشاريع"}
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-[#9E7D47] transition-colors">
                  {language === "en" ? "Contact Us" : "اتصل بنا"}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Core Disciplines */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-bold text-[#0F172A] uppercase tracking-wider">
              {language === "en" ? "Capabilities" : "الخدمات الرئيسية"}
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <a href="/services" className="hover:text-[#9E7D47] transition-colors">
                  {language === "en" ? "Structural & Civil Engineering" : "الهندسة الإنشائية والمدنية"}
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-[#9E7D47] transition-colors">
                  {language === "en" ? "Steel & Metal Fabrication" : "تصنيع الهياكل الفولاذية"}
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-[#9E7D47] transition-colors">
                  {language === "en" ? "Project & Construction EPCM" : "إدارة المشاريع والإنشاءات"}
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-[#9E7D47] transition-colors">
                  {language === "en" ? "Architectural & Fit-out" : "التشطيبات المعمارية"}
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-[#9E7D47] transition-colors">
                  {language === "en" ? "MEP & Smart Solutions" : "الأعمال الكهروميكانيكية"}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Executive Contacts */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-bold text-[#0F172A] uppercase tracking-wider">
              {language === "en" ? "Offices" : "المكاتب"}
            </h4>
            <div className="flex flex-col gap-3 text-xs leading-relaxed text-[#475569]">
              <div>
                <p className="font-bold text-[#0F172A]">
                  {language === "en" ? "Doha Head Office:" : "المقر الرئيسي (الدوحة):"}
                </p>
                <p>7th Floor, Barwa Tower 1, Al Sadd, Doha</p>
                <p className="text-[#9E7D47] font-semibold" dir="ltr">Tel: +974 4450 8659</p>
              </div>

              <div>
                <p className="font-bold text-[#0F172A]">
                  {language === "en" ? "Workshop Plant:" : "مصنع المنطقة الصناعية:"}
                </p>
                <p>Street 15, Industrial Area, Doha</p>
                <p className="text-[#9E7D47] font-semibold" dir="ltr">Tel: +974 4495 8904</p>
              </div>

              <div>
                <p className="font-bold text-[#0F172A]">
                  {language === "en" ? "Georgia Office:" : "مكتب جورجيا:"}
                </p>
                <p>Tbilisi Central Business District</p>
                <p className="text-[#9E7D47] font-semibold" dir="ltr">Tel: +995 32 200 4580</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
          <p>
            © 2026 Golden Tower Trading & Contracting (GTTC) W.L.L.{" "}
            {language === "en" ? "All rights reserved." : "جميع الحقوق محفوظة."}
          </p>

          <div className="flex items-center gap-6">
            <span>PO Box: 9217, Doha - Qatar</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-slate-100 text-[#334155] hover:text-[#0F172A] transition-colors border border-[#CBD5E1] shadow-xs cursor-pointer"
            >
              <span>{language === "en" ? "Back to Top" : "للأعلى"}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
