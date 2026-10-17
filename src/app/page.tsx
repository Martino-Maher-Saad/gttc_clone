"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import StatsCounter from "@/components/StatsCounter";
import BentoGrid from "@/components/BentoGrid";
import PartnershipSection from "@/components/PartnershipSection";
import ServiceCard from "@/components/ServiceCard";
import CtaStrip from "@/components/CtaStrip";
import { ProjectData } from "@/components/ProjectModal";

import companyData from "@/data/company.json";
import servicesData from "@/data/services.json";
import projectsData from "@/data/projects.json";
import newsData from "@/data/news.json";

import {
  ArrowRight,
  ShieldCheck,
  Building,
  Award,
  Globe2,
  Calendar,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export default function HomePage() {
  const { language, isRTL } = useLanguage();

  const qatarLandmarks = (projectsData as unknown as ProjectData[]).filter(
    (p) => p.category === "qatar-infrastructure" || p.category === "qatar-commercial"
  );

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* ===================== HERO SECTION ===================== */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-[#F8FAFC] border-b border-[#E2E8F0] pt-12 pb-24 overflow-hidden">
        {/* Subtle Architectural Pattern & Image */}
        <div className="absolute inset-0 z-0 opacity-15">
          <img
            src="/images/projects/tamara-city.jpg"
            alt="GTTC Architecture"
            className="w-full h-full object-cover object-center filter grayscale"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC]/90 via-[#F8FAFC]/95 to-[#F8FAFC]" />
        <div className="absolute inset-0 bg-grid-subtle opacity-70" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 text-center flex flex-col items-center">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#CBD5E1] text-xs font-semibold text-[#475569] mb-8 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#9E7D47]" />
            <span>
              {language === "en"
                ? "Qatar EPC Engineering • Georgia Real Estate Developments"
                : "المقاولات الإنشائية بقطر • الاستثمار العقاري بجورجيا"}
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#0F172A] max-w-5xl leading-[1.18]">
            {language === "en" ? (
              <>
                Multi-Disciplinary Construction &{" "}
                <span className="text-[#9E7D47]">Integrated Engineering</span>
              </>
            ) : (
              <>
                خدمات المقاولات المتكاملة{" "}
                <span className="text-[#9E7D47]">والتطوير العقاري الدولي</span>
              </>
            )}
          </h1>

          {/* Subtitle */}
          <p className="mt-5 text-base sm:text-lg text-[#64748B] max-w-3xl leading-relaxed">
            {language === "en"
              ? "Golden Tower Trading & Contracting (GTTC) delivers turnkey civil EPC contracting, structural steel fabrication, and landmark hotel developments in partnership with Retaj Hotels & Hospitality."
              : "شركة البرج الذهبي للتجارة والمقاولات (GTTC) رائدة في تنفيذ مشروعات البنية التحتية، وتصنيع الهياكل الحديدية، وتطوير المشروعات الفندقية الكبرى بالشراكة مع مجموعة فنادق رتاج."}
          </p>

          {/* Action Buttons */}
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href="/projects"
              className="px-7 py-3.5 rounded-xl text-sm font-bold text-white bg-[#9E7D47] hover:bg-[#856636] shadow-sm transition-all flex items-center gap-2"
            >
              <span>
                {language === "en" ? "Explore Projects" : "استكشف المشروعات"}
              </span>
              <ArrowRight
                className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`}
              />
            </a>

            <a
              href="/services"
              className="px-7 py-3.5 rounded-xl text-sm font-semibold text-[#1E293B] bg-white hover:bg-slate-50 border border-[#CBD5E1] transition-all flex items-center gap-2 shadow-xs"
            >
              <Building className="w-4 h-4 text-[#9E7D47]" />
              <span>
                {language === "en" ? "Our Services" : "الخدمات الهندسية"}
              </span>
            </a>
          </div>

          {/* Trust Strip */}
          <div className="mt-14 pt-8 border-t border-[#E2E8F0] flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-[#64748B]">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#9E7D47]" />
              <span className="text-[#334155] font-medium">
                {language === "en"
                  ? "Retaj Hotels & Hospitality Partner"
                  : "شراكة رسمية مع فنادق رتاج"}
              </span>
            </div>
            <span className="hidden sm:inline text-[#CBD5E1]">•</span>
            <div className="flex items-center gap-2">
              <Globe2 className="w-4 h-4 text-[#9E7D47]" />
              <span className="text-[#334155] font-medium">
                {language === "en"
                  ? "Core Member of EUGBC (European Council)"
                  : "عضو رئيسي بمجلس الأعمال الأوروبي"}
              </span>
            </div>
            <span className="hidden sm:inline text-[#CBD5E1]">•</span>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-[#9E7D47]" />
              <span className="text-[#334155] font-medium">
                {language === "en"
                  ? "Qatar Rail Metro Landmark Contractor"
                  : "منفذ أعمال بمترو الدوحة (الريل)"}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== STATS BAR ===================== */}
      <StatsCounter />

      {/* ===================== BENTO GRID SHOWCASE ===================== */}
      <BentoGrid projects={projectsData as unknown as ProjectData[]} />

      {/* ===================== 7 CORE SERVICES SECTION ===================== */}
      <section className="py-20 bg-[#F8FAFC] border-y border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#CBD5E1] text-xs font-semibold text-[#475569] mb-3 shadow-xs">
                <Building className="w-3.5 h-3.5 text-[#9E7D47]" />
                <span>
                  {language === "en"
                    ? "Engineering & Fabrication Capabilities"
                    : "القدرات الهندسية والتصنيع"}
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
                {language === "en" ? (
                  <>
                    7 Core <span className="text-[#9E7D47]">Engineering Divisions</span>
                  </>
                ) : (
                  <>
                    7 قطاعات هندسية <span className="text-[#9E7D47]">متكاملة</span>
                  </>
                )}
              </h2>
              <p className="mt-2 text-sm sm:text-base text-[#64748B] max-w-2xl">
                {language === "en"
                  ? "From deep civil foundations and certified steel fabrication to mechanical, electrical, and fit-out packages."
                  : "من الإنشاءات الخرسانية وتصنيع الهياكل الحديدية إلى الأعمال الكهروميكانيكية والتشطيبات."}
              </p>
            </div>

            <a
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#9E7D47] hover:text-[#7C6033] transition-colors"
            >
              <span>
                {language === "en" ? "Explore All Services" : "دليل الخدمات الشامل"}
              </span>
              <ArrowRight
                className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`}
              />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((svc) => (
              <ServiceCard key={svc.id} service={svc} />
            ))}

            {/* Turnkey Consultation Card */}
            <div className="rounded-2xl bg-white border border-[#CBD5E1] p-6 sm:p-8 flex flex-col justify-between shadow-xs">
              <div>
                <span className="px-3 py-1 rounded-full bg-[#FBF7EE] text-[#856636] border border-[#E8DDC8] text-xs font-bold inline-block mb-4">
                  {language === "en" ? "Turnkey Execution" : "تسليم المفتاح"}
                </span>
                <h3 className="text-xl font-bold text-[#0F172A] mb-2.5">
                  {language === "en"
                    ? "Specific Scope or Tender Request?"
                    : "هل لديك مشروع يتطلب نطاق عمل محدد؟"}
                </h3>
                <p className="text-sm text-[#64748B] leading-relaxed mb-6">
                  {language === "en"
                    ? "Our engineering estimation team prepares detailed BOQ reviews, value engineering, and turnkey proposals."
                    : "فريق التقدير الهندسي يقدم دراسات دقيقة لجداول الكميات والهندسة القيمية وخطط التنفيذ."}
                </p>
              </div>

              <a
                href="/contact"
                className="w-full py-3 rounded-lg text-center text-xs font-bold text-white bg-[#9E7D47] hover:bg-[#856636] shadow-sm transition-all"
              >
                {language === "en" ? "Submit Tender Drawings" : "إرسال المخططات للتسعير"}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== QATAR LANDMARKS SPOTLIGHT ===================== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F8FAFC] border border-[#CBD5E1] text-xs font-semibold text-[#475569] mb-3">
                <Award className="w-3.5 h-3.5 text-[#9E7D47]" />
                <span>
                  {language === "en"
                    ? "Qatar Track Record & Landmarks"
                    : "إنجازات الشركة في دولة قطر"}
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
                {language === "en" ? (
                  <>
                    National Infrastructure &{" "}
                    <span className="text-[#9E7D47]">Commercial Landmarks</span>
                  </>
                ) : (
                  <>
                    المشاريع الإنشائية والمعالم{" "}
                    <span className="text-[#9E7D47]">في قطر</span>
                  </>
                )}
              </h2>
            </div>

            <a
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#9E7D47] hover:text-[#7C6033] transition-colors"
            >
              <span>{language === "en" ? "All Projects" : "كافة المشاريع"}</span>
              <ArrowRight
                className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`}
              />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {qatarLandmarks.slice(0, 6).map((proj) => (
              <a
                key={proj.id}
                href={`/projects/${proj.slug}`}
                className="group rounded-2xl bg-white border border-[#E2E8F0] hover:border-[#CBD5E1] overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative aspect-video w-full bg-[#F8FAFC] overflow-hidden">
                  <img
                    src={proj.image}
                    alt={proj.title[language]}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-white/95 text-[11px] font-semibold text-[#334155] border border-white/50 shadow-xs">
                    {proj.client[language]}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-[#0F172A] group-hover:text-[#9E7D47] transition-colors mb-2 leading-snug">
                      {proj.title[language]}
                    </h3>
                    <p className="text-xs text-[#64748B] line-clamp-2 leading-relaxed mb-4">
                      {proj.description[language]}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#E2E8F0] flex items-center justify-between text-xs text-[#9E7D47] font-bold">
                    <span>{language === "en" ? "View Details" : "عرض التفاصيل"}</span>
                    <ArrowRight
                      className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${
                        isRTL ? "rotate-180 group-hover:-translate-x-1" : ""
                      }`}
                    />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== STRATEGIC PARTNERSHIPS ===================== */}
      <PartnershipSection />

      {/* ===================== CEO LEADERSHIP SPOTLIGHT ===================== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] p-8 sm:p-12 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* CEO Portrait */}
              <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left rtl:lg:text-right">
                <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-2xl overflow-hidden border border-[#CBD5E1] shadow-xs mb-4 bg-white">
                  <img
                    src={companyData.ceo.image}
                    alt={companyData.ceo.name[language]}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="text-2xl font-bold text-[#0F172A]">
                  {companyData.ceo.name[language]}
                </h3>
                <p className="text-sm font-bold text-[#9E7D47] mt-1">
                  {companyData.ceo.title[language]}
                </p>
                <span className="text-xs text-[#64748B] mt-0.5">
                  {language === "en"
                    ? "Founder & Executive Leader"
                    : "المؤسس والرئيس التنفيذي"}
                </span>
              </div>

              {/* CEO Quote */}
              <div className="lg:col-span-7 flex flex-col gap-6">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#CBD5E1] text-xs font-semibold text-[#475569] self-start shadow-xs">
                  <Sparkles className="w-3.5 h-3.5 text-[#9E7D47]" />
                  <span>
                    {language === "en" ? "Executive Message" : "كلمة الرئيس التنفيذي"}
                  </span>
                </div>

                <blockquote className="text-base sm:text-lg text-[#334155] leading-relaxed italic border-l-2 rtl:border-l-0 rtl:border-r-2 border-[#9E7D47] pl-6 rtl:pl-0 rtl:pr-6">
                  "{companyData.ceo.quote[language]}"
                </blockquote>

                <div className="pt-4 border-t border-[#E2E8F0] flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-6 text-xs text-[#64748B]">
                    <span className="flex items-center gap-1.5 text-[#334155] font-semibold">
                      <CheckCircle2 className="w-4 h-4 text-[#9E7D47]" />
                      {language === "en" ? "Quality Workmanship" : "جودة التنفيذ"}
                    </span>
                    <span className="flex items-center gap-1.5 text-[#334155] font-semibold">
                      <CheckCircle2 className="w-4 h-4 text-[#9E7D47]" />
                      {language === "en" ? "Safety & Timely Delivery" : "السلامة والالتزام الزمني"}
                    </span>
                  </div>

                  <a
                    href="/about"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#9E7D47] hover:text-[#7C6033] transition-colors"
                  >
                    <span>
                      {language === "en" ? "Company Story & History" : "مسيرة وتاريخ الشركة"}
                    </span>
                    <ArrowRight
                      className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== LATEST ANNOUNCEMENTS ===================== */}
      <section className="py-20 bg-[#F8FAFC] border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#9E7D47] uppercase tracking-wider block mb-1.5">
              {language === "en" ? "Press & Milestones" : "الأخبار والبيانات"}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
              {language === "en" ? "Corporate Announcements" : "أحدث الاتفاقيات والمستجدات"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsData.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl bg-white border border-[#E2E8F0] overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="relative aspect-video w-full bg-slate-100 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title[language]}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-white/95 text-[11px] font-bold text-[#0F172A] shadow-xs">
                    {item.category[language]}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-[#64748B] mb-2 font-mono">
                      <Calendar className="w-3.5 h-3.5 text-[#9E7D47]" />
                      <span>{item.date}</span>
                    </div>

                    <h3 className="text-base font-bold text-[#0F172A] mb-2.5 leading-snug">
                      {item.title[language]}
                    </h3>

                    <p className="text-xs text-[#64748B] leading-relaxed line-clamp-3 mb-4">
                      {item.summary[language]}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#E2E8F0]">
                    <a
                      href="/about"
                      className="text-xs font-bold text-[#9E7D47] hover:text-[#7C6033] inline-flex items-center gap-1.5"
                    >
                      <span>{language === "en" ? "Learn More" : "المزيد"}</span>
                      <ArrowRight
                        className={`w-3.5 h-3.5 ${isRTL ? "rotate-180" : ""}`}
                      />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CALL TO ACTION STRIP ===================== */}
      <CtaStrip />
    </div>
  );
}
