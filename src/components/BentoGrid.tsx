"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ProjectData } from "@/components/ProjectModal";
import {
  TrendingUp,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle,
  MapPin,
} from "lucide-react";

interface BentoGridProps {
  projects: ProjectData[];
}

export default function BentoGrid({ projects }: BentoGridProps) {
  const { language, isRTL } = useLanguage();

  const tamara = projects.find((p) => p.id === "tamara-city");
  const didi = projects.find((p) => p.id === "didi-dighomi-tower");
  const grigoleti = projects.find((p) => p.id === "grigoleti-beach-resort");
  const metro = projects.find((p) => p.id === "green-line-metro");
  const msheireb = projects.find((p) => p.id === "msheireb-downtown");

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F8FAFC] border border-[#CBD5E1] text-xs font-semibold text-[#475569] mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-[#9E7D47]" />
              <span>
                {language === "en"
                  ? "Flagship Real Estate Developments"
                  : "المشروعات الكبرى والتطوير العقاري"}
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
              {language === "en" ? (
                <>
                  Major Projects in{" "}
                  <span className="text-[#9E7D47]">Georgia & Qatar</span>
                </>
              ) : (
                <>
                  مشروعات كبرى رائدة بين{" "}
                  <span className="text-[#9E7D47]">قطر وجورجيا</span>
                </>
              )}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#64748B] max-w-2xl">
              {language === "en"
                ? "Explore our master-planned communities, high-yield hotel-apartment towers, and transport infrastructure."
                : "مدن متكاملة، أبراج شقق فندقية بعوائد مجزية، ومشاريع بنية تحتية وطنية."}
            </p>
          </div>

          <a
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#9E7D47] hover:text-[#7C6033] transition-colors group self-start md:self-auto"
          >
            <span>
              {language === "en" ? "View Full Portfolio" : "عرض كافة المشروعات"}
            </span>
            <ArrowUpRight
              className={`w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                isRTL ? "rotate-270" : ""
              }`}
            />
          </a>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Card 1: Tamara City (8 cols) */}
          {tamara && (
            <a
              href={`/projects/${tamara.slug}`}
              className="lg:col-span-8 group relative rounded-2xl overflow-hidden bg-slate-900 border border-[#CBD5E1] hover:border-[#9E7D47] transition-all duration-300 shadow-sm hover:shadow-md min-h-[440px] flex flex-col justify-end p-6 sm:p-10"
            >
              <div className="absolute inset-0 z-0">
                <img
                  src={tamara.image}
                  alt={tamara.title[language]}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
              </div>

              <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-xs text-xs font-bold text-[#0F172A] flex items-center gap-1.5 shadow-xs">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#9E7D47]" />
                    {language === "en" ? "100,000 m² Master City" : "مدينة متكاملة 100 ألف م²"}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-black/60 text-xs font-medium text-white backdrop-blur-xs">
                    {language === "en" ? "3 Retaj Hotels" : "3 فنادق تحت إدارة رتاج"}
                  </span>
                </div>
              </div>

              <div className="relative z-10 text-white">
                <div className="flex items-center gap-1.5 text-xs text-[#E8DDC8] mb-1 font-mono">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{tamara.location[language]}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2 group-hover:text-[#F2E8D5] transition-colors">
                  {tamara.title[language]}
                </h3>

                <p className="text-xs sm:text-sm text-slate-200 line-clamp-2 mb-4 leading-relaxed max-w-2xl">
                  {tamara.description[language]}
                </p>

                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="px-3 py-1 rounded-lg bg-white/20 backdrop-blur-xs text-white">
                    {language === "en" ? "16% Built / 84% Nature" : "16% بناء / 84% مساحات خضراء"}
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-white/20 backdrop-blur-xs text-white">
                    {language === "en" ? "Hospital & School" : "مستشفى ومدرسة وفيلات"}
                  </span>
                </div>
              </div>
            </a>
          )}

          {/* Card 2: Didi Dighomi Tower (4 cols) */}
          {didi && (
            <a
              href={`/projects/${didi.slug}`}
              className="lg:col-span-4 group relative rounded-2xl overflow-hidden bg-slate-900 border border-[#CBD5E1] hover:border-[#9E7D47] transition-all duration-300 shadow-sm hover:shadow-md min-h-[440px] flex flex-col justify-end p-6"
            >
              <div className="absolute inset-0 z-0">
                <img
                  src={didi.image}
                  alt={didi.title[language]}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
              </div>

              <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10">
                <span className="px-3 py-1 rounded-full bg-white/95 text-xs font-bold text-[#856636] flex items-center gap-1 shadow-xs">
                  <TrendingUp className="w-3.5 h-3.5 text-[#9E7D47]" />
                  {language === "en" ? "12% - 17% ROI" : "عائد سنوي 12-17%"}
                </span>
              </div>

              <div className="relative z-10 text-white">
                <span className="text-xs text-[#E8DDC8] font-mono mb-1 block">
                  {language === "en" ? "Tbilisi, Georgia" : "تبليسي، جورجيا"}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  {didi.title[language]}
                </h3>
                <p className="text-xs text-slate-200 line-clamp-2 mb-3 leading-relaxed">
                  {didi.description[language]}
                </p>
                <div className="text-xs text-slate-300 pt-3 border-t border-white/20 space-y-1">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-[#E8DDC8]" />
                    <span>{language === "en" ? "16 Floors Hotel Apartments" : "16 طابقاً فندقياً"}</span>
                  </div>
                </div>
              </div>
            </a>
          )}

          {/* Card 3: Grigoleti Beach Resort (4 cols) */}
          {grigoleti && (
            <a
              href={`/projects/${grigoleti.slug}`}
              className="lg:col-span-4 group relative rounded-2xl overflow-hidden bg-slate-900 border border-[#CBD5E1] hover:border-[#9E7D47] transition-all duration-300 shadow-sm hover:shadow-md min-h-[380px] flex flex-col justify-end p-6"
            >
              <div className="absolute inset-0 z-0">
                <img
                  src={grigoleti.image}
                  alt={grigoleti.title[language]}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
              </div>

              <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10">
                <span className="px-3 py-1 rounded-full bg-white/95 text-xs font-bold text-[#0F172A] shadow-xs">
                  {language === "en" ? "Direct Black Sea Front" : "على البحر الأسود مباشرة"}
                </span>
              </div>

              <div className="relative z-10 text-white">
                <span className="text-xs text-[#E8DDC8] font-mono mb-1 block">
                  {language === "en" ? "Retaj Management" : "إدارة وتشغيل رتاج"}
                </span>
                <h3 className="text-xl font-bold text-white mb-2">
                  {grigoleti.title[language]}
                </h3>
                <p className="text-xs text-slate-200 line-clamp-2 mb-3">
                  {grigoleti.description[language]}
                </p>
                <div className="text-xs text-slate-300 pt-2 border-t border-white/20">
                  <span>{language === "en" ? "2,001 m² Plot | 45m to Batumi" : "قطعة 2001 م² | 45 دقيقة لمطار باتومي"}</span>
                </div>
              </div>
            </a>
          )}

          {/* Card 4: Doha Metro Green Line (4 cols) */}
          {metro && (
            <a
              href={`/projects/${metro.slug}`}
              className="lg:col-span-4 group relative rounded-2xl overflow-hidden bg-slate-900 border border-[#CBD5E1] hover:border-[#9E7D47] transition-all duration-300 shadow-sm hover:shadow-md min-h-[380px] flex flex-col justify-end p-6"
            >
              <div className="absolute inset-0 z-0">
                <img
                  src={metro.image}
                  alt={metro.title[language]}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
              </div>

              <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10">
                <span className="px-3 py-1 rounded-full bg-white/95 text-xs font-semibold text-[#0F172A] shadow-xs">
                  {language === "en" ? "Qatar Rail Metro" : "مترو الدوحة (الريل)"}
                </span>
              </div>

              <div className="relative z-10 text-white">
                <span className="text-xs text-[#E8DDC8] font-mono mb-1 block">
                  {language === "en" ? "Client: HBK Contracting" : "العميل: شركة حمد بن خالد"}
                </span>
                <h3 className="text-xl font-bold text-white mb-2">
                  {metro.title[language]}
                </h3>
                <p className="text-xs text-slate-200 line-clamp-2 mb-3">
                  {metro.description[language]}
                </p>
                <div className="text-xs text-slate-300 pt-2 border-t border-white/20">
                  <span>{language === "en" ? "Civil Works & Steel Erection" : "أعمال مدنية وتركيب الهياكل الفولاذية"}</span>
                </div>
              </div>
            </a>
          )}

          {/* Card 5: Msheireb Downtown (4 cols) */}
          {msheireb && (
            <a
              href={`/projects/${msheireb.slug}`}
              className="lg:col-span-4 group relative rounded-2xl overflow-hidden bg-slate-900 border border-[#CBD5E1] hover:border-[#9E7D47] transition-all duration-300 shadow-sm hover:shadow-md min-h-[380px] flex flex-col justify-end p-6"
            >
              <div className="absolute inset-0 z-0">
                <img
                  src={msheireb.image}
                  alt={msheireb.title[language]}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
              </div>

              <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10">
                <span className="px-3 py-1 rounded-full bg-white/95 text-xs font-semibold text-[#0F172A] shadow-xs">
                  {language === "en" ? "LEED Platinum" : "مشروع مستدام رائد"}
                </span>
              </div>

              <div className="relative z-10 text-white">
                <span className="text-xs text-[#E8DDC8] font-mono mb-1 block">
                  {language === "en" ? "Msheireb Properties" : "مشيرب العقارية"}
                </span>
                <h3 className="text-xl font-bold text-white mb-2">
                  {msheireb.title[language]}
                </h3>
                <p className="text-xs text-slate-200 line-clamp-2 mb-3">
                  {msheireb.description[language]}
                </p>
                <div className="text-xs text-slate-300 pt-2 border-t border-white/20">
                  <span>{language === "en" ? "Structural Steel Erection" : "تركيب الهياكل الفولاذية المعمارية"}</span>
                </div>
              </div>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
