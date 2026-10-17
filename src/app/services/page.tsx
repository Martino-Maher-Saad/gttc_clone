"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import servicesData from "@/data/services.json";
import CtaStrip from "@/components/CtaStrip";
import {
  Building2,
  Hammer,
  Briefcase,
  Palette,
  Compass,
  Zap,
  Cpu,
  CheckCircle2,
  ArrowRight,
  Layers,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Building2,
  Hammer,
  Briefcase,
  Palette,
  Compass,
  Zap,
  Cpu,
};

export default function ServicesPage() {
  const { language, isRTL } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>(servicesData[0].id);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Page Hero */}
      <section className="relative py-16 sm:py-20 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#CBD5E1] text-xs font-semibold text-[#475569] mb-4 shadow-xs">
            <Building2 className="w-3.5 h-3.5 text-[#9E7D47]" />
            <span>
              {language === "en"
                ? "EPC Contracting & Fabrication"
                : "خدمات المقاولات والتصنيع الهندسي"}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            {language === "en" ? (
              <>
                Our Engineering <span className="text-[#9E7D47]">Disciplines</span>
              </>
            ) : (
              <>
                خدماتنا <span className="text-[#9E7D47]">وقطاعاتنا الهندسية</span>
              </>
            )}
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#64748B] max-w-3xl mx-auto leading-relaxed">
            {language === "en"
              ? "Comprehensive engineering solutions backed by specialized fabrication plants and experienced site teams across civil, structural, and mechanical disciplines."
              : "حلول هندسية متكاملة مدعومة بمصانع تصنيع متخصصة وفرق عمل ذات خبرة عالية في كافة التخصصات المدنية والإنشائية والكهروميكانيكية."}
          </p>
        </div>
      </section>

      {/* Services Nav Pills */}
      <section className="sticky top-20 z-30 bg-white/95 backdrop-blur-md border-b border-[#E2E8F0] py-3.5 px-4 sm:px-8 shadow-xs">
        <div className="max-w-7xl mx-auto flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
          {servicesData.map((svc) => (
            <a
              key={svc.id}
              href={`#${svc.id}`}
              onClick={() => setActiveTab(svc.id)}
              className={`whitespace-nowrap px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all border ${
                activeTab === svc.id
                  ? "bg-[#9E7D47] text-white border-[#9E7D47] shadow-xs font-bold"
                  : "bg-[#F8FAFC] text-[#475569] hover:text-[#0F172A] border-[#E2E8F0]"
              }`}
            >
              <span>{svc.number}. </span>
              <span>{svc.title[language]}</span>
            </a>
          ))}
        </div>
      </section>

      {/* Industrial Workshop Banner */}
      <section className="py-12 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="rounded-2xl bg-[#F8FAFC] border border-[#CBD5E1] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white border border-[#CBD5E1] flex items-center justify-center text-[#9E7D47] flex-shrink-0 shadow-xs">
                <Hammer className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#9E7D47] uppercase tracking-wider">
                  {language === "en"
                    ? "In-House Fabrication Plant"
                    : "مصنع وورش التصنيع المباشر"}
                </span>
                <h3 className="text-lg font-bold text-[#0F172A] mt-0.5">
                  {language === "en"
                    ? "Industrial Area Workshop — Street 15, Doha"
                    : "مصنع المنطقة الصناعية — شارع رقم 15، الدوحة"}
                </h3>
                <p className="text-xs text-[#64748B] mt-0.5">
                  {language === "en"
                    ? "Structural steel fabrication, certified welding, aluminum works, and architectural stainless steel."
                    : "تصنيع وتوريد الهياكل الفولاذية، لحام معتمد، ألومنيوم وواجهات معمارية ستانلس ستيل."}
                </p>
              </div>
            </div>

            <a
              href="/contact"
              className="px-6 py-2.5 rounded-lg text-xs font-bold text-white bg-[#9E7D47] hover:bg-[#856636] shadow-xs transition-all flex-shrink-0"
            >
              {language === "en" ? "Fabrication Inquiries" : "طلب تصنيع وتوريد"}
            </a>
          </div>
        </div>
      </section>

      {/* Deep-dive into each service */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-20">
          {servicesData.map((svc, index) => {
            const Icon = iconMap[svc.icon] || Building2;

            return (
              <div
                key={svc.id}
                id={svc.id}
                className="scroll-mt-36 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] p-8 sm:p-12 shadow-xs"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                  {/* Left Column */}
                  <div className="lg:col-span-8 space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-white border border-[#CBD5E1] flex items-center justify-center text-[#9E7D47] shadow-xs">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-2xl font-mono font-extrabold text-[#0F172A]">
                        {svc.number}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] leading-snug">
                      {svc.title[language]}
                    </h2>

                    <p className="text-base text-[#334155] leading-relaxed">
                      {svc.fullDesc[language]}
                    </p>

                    {/* Capabilities */}
                    <div className="pt-4 border-t border-[#E2E8F0]">
                      <h4 className="text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-4 flex items-center gap-2">
                        <Layers className="w-4 h-4 text-[#9E7D47]" />
                        {language === "en" ? "Scope of Work & Capabilities" : "نطاق العمل والقدرات المعتمدة"}
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {svc.capabilities.map((cap, cIdx) => (
                          <div
                            key={cIdx}
                            className="flex items-start gap-2.5 p-3.5 rounded-xl bg-white border border-[#E2E8F0] text-xs text-[#334155]"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#9E7D47] mt-0.5 flex-shrink-0" />
                            <span className="font-medium">{cap[language]}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 border-t border-[#E2E8F0] flex flex-wrap items-center gap-4">
                      <a
                        href="/contact"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-xs font-bold text-white bg-[#9E7D47] hover:bg-[#856636] shadow-xs transition-all"
                      >
                        <span>{language === "en" ? "Request Service Quotation" : "طلب تسعير ومناقصة"}</span>
                        <ArrowRight
                          className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`}
                        />
                      </a>

                      <a
                        href="/projects"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#64748B] hover:text-[#0F172A] transition-colors"
                      >
                        <span>{language === "en" ? "View Executed Projects" : "المشاريع المنفذة"}</span>
                        <ArrowRight
                          className={`w-3.5 h-3.5 ${isRTL ? "rotate-180" : ""}`}
                        />
                      </a>
                    </div>
                  </div>

                  {/* Right Column: Specifications */}
                  <div className="lg:col-span-4">
                    <div className="rounded-xl bg-white border border-[#CBD5E1] p-6 shadow-xs space-y-5">
                      <div className="flex items-center justify-between pb-3 border-b border-[#E2E8F0]">
                        <span className="text-xs font-mono font-semibold text-[#64748B]">
                          GTTC-{svc.number}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-[#F8FAFC] border border-[#CBD5E1] text-[11px] font-semibold text-[#0F172A]">
                          {language === "en" ? "EPC Standard" : "معيار EPC"}
                        </span>
                      </div>

                      <div className="space-y-3 text-xs text-[#64748B]">
                        <div className="flex items-center justify-between py-1.5 border-b border-[#F1F5F9]">
                          <span>{language === "en" ? "Supervision" : "الإشراف"}</span>
                          <span className="text-[#0F172A] font-bold">
                            {language === "en" ? "Senior Lead Engineers" : "مهندسون استشاريون"}
                          </span>
                        </div>
                        <div className="flex items-center justify-between py-1.5 border-b border-[#F1F5F9]">
                          <span>{language === "en" ? "Quality Standard" : "معايير الجودة"}</span>
                          <span className="text-[#0F172A] font-bold">QCS & ISO Standards</span>
                        </div>
                      </div>

                      <div className="p-3.5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-[#475569] leading-relaxed">
                        {svc.shortDesc[language]}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Strip */}
      <CtaStrip />
    </div>
  );
}
