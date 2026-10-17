"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import PartnershipSection from "@/components/PartnershipSection";
import CtaStrip from "@/components/CtaStrip";
import companyData from "@/data/company.json";
import {
  Target,
  Eye,
  Award,
  Sparkles,
  CheckCircle2,
  Building,
} from "lucide-react";

export default function AboutPage() {
  const { language, isRTL } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Page Hero */}
      <section className="relative py-16 sm:py-20 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#CBD5E1] text-xs font-semibold text-[#475569] mb-4 shadow-xs">
            <Award className="w-3.5 h-3.5 text-[#9E7D47]" />
            <span>
              {language === "en" ? "Company Profile" : "الملف التعريفي للشركة"}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            {language === "en" ? (
              <>
                About <span className="text-[#9E7D47]">Golden Tower (GTTC)</span>
              </>
            ) : (
              <>
                عن شركة <span className="text-[#9E7D47]">البرج الذهبي (GTTC)</span>
              </>
            )}
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#64748B] max-w-3xl mx-auto leading-relaxed">
            {language === "en"
              ? "Over two decades of multi-disciplinary EPC contracting in Qatar, expanding into strategic hospitality developments in Georgia with Retaj Hotels."
              : "أكثر من عقدين من أعمال المقاولات الإنشائية المتكاملة بقطر، والتوسع نحو المشروعات الفندقية في جورجيا بالشراكة مع فنادق رتاج."}
          </p>
        </div>
      </section>

      {/* Corporate Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 flex flex-col gap-6">
              <span className="text-xs font-bold text-[#9E7D47] tracking-wider uppercase">
                {language === "en" ? "Overview" : "نبذة عامة"}
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0F172A] leading-tight tracking-tight">
                {language === "en" ? (
                  <>
                    Multi-Disciplinary Construction &{" "}
                    <span className="text-[#9E7D47]">Integrated Engineering</span>
                  </>
                ) : (
                  <>
                    ريادة متكاملة في{" "}
                    <span className="text-[#9E7D47]">
                      المقاولات والهندسة الإنشائية
                    </span>
                  </>
                )}
              </h2>

              <p className="text-base text-[#334155] leading-relaxed">
                {companyData.about[language]}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#E2E8F0]">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#9E7D47] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#0F172A]">
                      {language === "en" ? "Turnkey Execution" : "تنفيذ متكامل تسليم مفتاح"}
                    </h4>
                    <p className="text-xs text-[#64748B] mt-0.5">
                      {language === "en"
                        ? "Engineering, procurement, and site construction."
                        : "التصميم، التوريد، والتنفيذ الميداني الكامل."}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#9E7D47] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#0F172A]">
                      {language === "en" ? "Fabrication Facilities" : "مصانع وورش تصنيع متطورة"}
                    </h4>
                    <p className="text-xs text-[#64748B] mt-0.5">
                      {language === "en"
                        ? "Dedicated structural steel workshop in Industrial Area."
                        : "مصنع هياكل فولاذية وألومنيوم بالمنطقة الصناعية."}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-[#CBD5E1] shadow-xs bg-[#F8FAFC] p-2">
                <img
                  src="/images/projects/msheireb.jpg"
                  alt="GTTC Projects"
                  className="w-full h-80 object-cover rounded-xl"
                />
                <div className="p-6">
                  <h4 className="text-base font-bold text-[#0F172A] mb-1">
                    {language === "en"
                      ? "Infrastructure & Urban Developments"
                      : "مشاريع البنية التحتية والتطوير الحضري"}
                  </h4>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {language === "en"
                      ? "Contributing to national landmarks such as Msheireb Downtown, Lusail Plaza, and the Doha Metro Green Line."
                      : "المشاركة في تشييد كبرى المعالم مثل مشيرب، لوسيل بلازا، ومترو الدوحة."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="py-20 bg-[#F8FAFC] border-y border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="rounded-2xl bg-white border border-[#E2E8F0] p-8 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] flex items-center justify-center text-[#9E7D47] mb-6">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-2.5">
                  {language === "en" ? "Our Mission" : "رسالتنا"}
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  {companyData.mission[language]}
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-white border border-[#E2E8F0] p-8 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] flex items-center justify-center text-[#9E7D47] mb-6">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-2.5">
                  {language === "en" ? "Our Vision" : "رؤيتنا"}
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  {companyData.vision[language]}
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-white border border-[#E2E8F0] p-8 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] flex items-center justify-center text-[#9E7D47] mb-6">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-2.5">
                  {language === "en" ? "Core Values" : "القيم المهنية"}
                </h3>
                <div className="space-y-2">
                  {companyData.values.slice(0, 4).map((v, i) => (
                    <div key={i} className="text-xs text-[#334155] flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#9E7D47]" />
                      <span className="font-semibold text-[#0F172A]">{v.title[language]}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="p-8 rounded-2xl bg-white border border-[#E2E8F0]">
            <h3 className="text-base font-bold text-[#0F172A] mb-6 text-center">
              {language === "en" ? "Guiding Principles" : "المبادئ التوجيهية للعمل"}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {companyData.values.map((v, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-center flex flex-col items-center"
                >
                  <span className="w-8 h-8 rounded-full bg-[#FBF7EE] text-[#856636] font-bold text-xs flex items-center justify-center mb-3 border border-[#E8DDC8]">
                    0{idx + 1}
                  </span>
                  <h4 className="text-sm font-bold text-[#0F172A] mb-1">
                    {v.title[language]}
                  </h4>
                  <p className="text-[11px] text-[#64748B] leading-relaxed">
                    {v.desc[language]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* History and Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#9E7D47] uppercase tracking-wider block mb-1.5">
              {language === "en" ? "Timeline" : "المسيرة والتاريخ"}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
              {language === "en" ? "Company Evolution" : "مراحل تطور الشركة"}
            </h2>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {companyData.history.map((hist, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] p-6 sm:p-8 flex flex-col md:flex-row gap-6 items-start shadow-xs"
              >
                <div className="flex-shrink-0">
                  <span className="px-3.5 py-1.5 rounded-lg bg-white border border-[#CBD5E1] text-xs font-bold text-[#0F172A] font-mono shadow-xs">
                    {hist.year}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0F172A] mb-2">
                    {hist.title[language]}
                  </h3>
                  <p className="text-sm text-[#475569] leading-relaxed">
                    {hist.desc[language]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CEO Message Section */}
      <section className="py-20 bg-[#F8FAFC] border-y border-[#E2E8F0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <div className="rounded-2xl bg-white border border-[#CBD5E1] p-8 sm:p-12 shadow-sm flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-shrink-0 text-center">
              <div className="w-40 h-40 rounded-2xl overflow-hidden border border-[#CBD5E1] mx-auto mb-3 bg-slate-100 shadow-xs">
                <img
                  src={companyData.ceo.image}
                  alt={companyData.ceo.name[language]}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-base font-bold text-[#0F172A]">
                {companyData.ceo.name[language]}
              </h3>
              <p className="text-xs text-[#9E7D47] font-semibold">
                {companyData.ceo.title[language]}
              </p>
            </div>

            <div className="flex-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FBF7EE] border border-[#E8DDC8] text-xs font-semibold text-[#856636] mb-3">
                <Sparkles className="w-3.5 h-3.5 text-[#9E7D47]" />
                <span>{language === "en" ? "CEO Statement" : "كلمة الرئيس التنفيذي"}</span>
              </div>
              <blockquote className="text-sm sm:text-base text-[#334155] leading-relaxed italic border-l-2 rtl:border-l-0 rtl:border-r-2 border-[#9E7D47] pl-6 rtl:pl-0 rtl:pr-6">
                "{companyData.ceo.quote[language]}"
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Partnerships */}
      <PartnershipSection />

      {/* CTA Strip */}
      <CtaStrip />
    </div>
  );
}
