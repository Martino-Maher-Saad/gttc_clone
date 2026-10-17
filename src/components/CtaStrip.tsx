"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Phone, ArrowRight, ShieldCheck, Building } from "lucide-react";

export default function CtaStrip() {
  const { language, isRTL } = useLanguage();

  return (
    <section className="py-16 sm:py-20 bg-[#FBF7EE] border-t border-[#E8DDC8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E8DDC8] text-xs font-semibold text-[#856636] mb-4 shadow-xs">
          <ShieldCheck className="w-3.5 h-3.5 text-[#9E7D47]" />
          <span>
            {language === "en"
              ? "EPC Contracting & Strategic Real Estate Investments"
              : "المقاولات المتكاملة والاستثمارات العقارية"}
          </span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0F172A] max-w-3xl mx-auto tracking-tight">
          {language === "en" ? (
            <>
              Partner with <span className="text-[#9E7D47]">GTTC</span> on Your Next Project
            </>
          ) : (
            <>
              انطلق بمشروعك القادم مع <span className="text-[#9E7D47]">البرج الذهبي</span>
            </>
          )}
        </h2>

        <p className="mt-3 text-sm sm:text-base text-[#64748B] max-w-2xl mx-auto leading-relaxed">
          {language === "en"
            ? "Whether you require structural EPC contracting in Qatar or seek prime property investments in Georgia with Retaj management, our executive team is ready to assist."
            : "سواء كنت تبحث عن تنفيذ مقاولات هندسية في قطر أو ترغب في الاستثمار بمشاريع جورجيا الفندقية بإدارة رتاج، فريقنا التنفيذي جاهز لخدمتكم."}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="/contact"
            className="px-7 py-3.5 rounded-xl text-sm font-bold text-white bg-[#9E7D47] hover:bg-[#856636] shadow-sm transition-all flex items-center gap-2"
          >
            <span>
              {language === "en" ? "Request a Consultation" : "طلب استشارة أو تسعير"}
            </span>
            <ArrowRight
              className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`}
            />
          </a>

          <a
            href="tel:+97444508659"
            className="px-7 py-3.5 rounded-xl text-sm font-semibold text-[#0F172A] bg-white hover:bg-slate-50 border border-[#CBD5E1] transition-all flex items-center gap-2 shadow-xs"
            dir="ltr"
          >
            <Phone className="w-4 h-4 text-[#9E7D47]" />
            <span>+974 4450 8659</span>
          </a>
        </div>

        {/* Office strip */}
        <div className="mt-10 pt-8 border-t border-[#E8DDC8] flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs text-[#64748B]">
          <span className="flex items-center gap-1.5">
            <Building className="w-3.5 h-3.5 text-[#9E7D47]" />
            <span>
              {language === "en"
                ? "Doha HQ: Barwa Tower 1, Al Sadd"
                : "المكتب الرئيسي: برج بروة 1، السد"}
            </span>
          </span>
          <span className="hidden sm:inline text-[#CBD5E1]">|</span>
          <span className="flex items-center gap-1.5">
            <Building className="w-3.5 h-3.5 text-[#9E7D47]" />
            <span>
              {language === "en"
                ? "Industrial Area: Street 15"
                : "المنطقة الصناعية: شارع 15"}
            </span>
          </span>
          <span className="hidden sm:inline text-[#CBD5E1]">|</span>
          <span className="flex items-center gap-1.5">
            <Building className="w-3.5 h-3.5 text-[#9E7D47]" />
            <span>
              {language === "en"
                ? "Georgia Office: Tbilisi"
                : "مكتب جورجيا: تبليسي"}
            </span>
          </span>
        </div>
      </div>
    </section>
  );
}
