"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ProjectData } from "@/components/ProjectModal";
import {
  MapPin,
  Building,
  CheckCircle2,
  TrendingUp,
  ArrowLeft,
  ArrowRight,
  Phone,
  Mail,
  Download,
  Calendar,
  Layers,
  FileText,
  Share2,
  Check,
} from "lucide-react";
import TenderModal from "@/components/TenderModal";

interface Props {
  project: ProjectData;
  relatedProjects: ProjectData[];
}

export default function ProjectDetailView({ project, relatedProjects }: Props) {
  const { language, isRTL } = useLanguage();
  const [isTenderOpen, setIsTenderOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <article className="min-h-screen bg-white text-slate-900">
      {/* Breadcrumb Navigation */}
      <nav
        aria-label="Breadcrumb"
        className="bg-[#F8FAFC] border-b border-[#E2E8F0] py-3.5 px-4 sm:px-8 text-xs text-[#64748B]"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 overflow-hidden">
            <Link href="/" className="hover:text-[#0F172A] transition-colors flex-shrink-0">
              {language === "en" ? "Home" : "الرئيسية"}
            </Link>
            <span className="text-[#CBD5E1]">/</span>
            <Link href="/projects" className="hover:text-[#0F172A] transition-colors flex-shrink-0">
              {language === "en" ? "Projects" : "المشاريع"}
            </Link>
            <span className="text-[#CBD5E1]">/</span>
            <span className="text-[#0F172A] font-semibold truncate">
              {project.title[language]}
            </span>
          </div>

          <button
            onClick={handleShare}
            className="hidden sm:inline-flex items-center gap-1.5 text-xs text-[#64748B] hover:text-[#0F172A] bg-white border border-[#E2E8F0] px-2.5 py-1 rounded-md transition-colors shadow-2xs"
            title={language === "en" ? "Copy link" : "نسخ الرابط"}
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-600 font-medium">
                  {language === "en" ? "Link Copied" : "تم النسخ"}
                </span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5" />
                <span>{language === "en" ? "Share" : "مشاركة"}</span>
              </>
            )}
          </button>
        </div>
      </nav>

      {/* Project Header Bar */}
      <header className="py-10 sm:py-14 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#64748B] hover:text-[#0F172A] transition-colors"
            >
              <ArrowLeft className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`} />
              <span>{language === "en" ? "Back to Projects Catalog" : "العودة لدليل المشاريع"}</span>
            </Link>

            <div className="flex items-center gap-2">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-[#F1F5F9] text-[#475569] border border-[#E2E8F0]">
                {project.category === "georgia-mega"
                  ? language === "en"
                    ? "Georgia Developments"
                    : "مشاريع جورجيا الدولية"
                  : project.category === "qatar-infra"
                  ? language === "en"
                    ? "Infrastructure & Metro"
                    : "البنية التحتية والمترو"
                  : language === "en"
                  ? "Commercial & Landmarks"
                  : "المباني التجارية الكبرى"}
              </span>

              {project.roi && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FBF7EE] border border-[#E8DDC8] text-xs font-bold text-[#856636]">
                  <TrendingUp className="w-3.5 h-3.5 text-[#9E7D47]" />
                  {project.roi}
                </span>
              )}
            </div>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight max-w-4xl">
            {project.title[language]}
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-6 text-sm text-[#475569]">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#9E7D47]" />
              <span>{project.location[language]}</span>
            </div>
            <span className="text-[#CBD5E1]">•</span>
            <div className="flex items-center gap-1.5">
              <Building className="w-4 h-4 text-[#9E7D47]" />
              <span>
                <strong className="text-[#0F172A] font-semibold">
                  {language === "en" ? "Client / Owner:" : "الجهة المالكة:"}
                </strong>{" "}
                {project.client[language]}
              </span>
            </div>
            {project.area && (
              <>
                <span className="text-[#CBD5E1]">•</span>
                <div className="flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-[#9E7D47]" />
                  <span>
                    <strong className="text-[#0F172A] font-semibold">
                      {language === "en" ? "Scale / Scope:" : "المساحة / النطاق:"}
                    </strong>{" "}
                    {project.area}
                  </span>
                </div>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Main Image Showcase */}
      <section className="py-6 sm:py-8 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="rounded-2xl overflow-hidden border border-[#CBD5E1] shadow-xs bg-white aspect-[16/9] max-h-[560px] relative">
            <img
              src={project.image}
              alt={project.title[language]}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Main Details and Side Card */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Authentic Architectural Narrative */}
            <div className="lg:col-span-8 space-y-12">
              {/* Executive Overview */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] mb-4">
                  {language === "en" ? "Project Overview" : "نبذة عامة عن المشروع"}
                </h2>
                <p className="text-base sm:text-lg text-[#334155] leading-relaxed font-normal">
                  {project.description[language]}
                </p>
              </div>

              {/* Work Packages Executed */}
              <div className="pt-8 border-t border-[#E2E8F0]">
                <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#9E7D47]" />
                  <span>
                    {language === "en"
                      ? "Executed Engineering & Work Packages"
                      : "حزم الأعمال الهندسية والتنفيذية"}
                  </span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {project.workPackages.map((pkg, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-start gap-3 hover:border-[#CBD5E1] transition-colors"
                    >
                      <div className="w-2 h-2 rounded-full bg-[#9E7D47] mt-1.5 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-[#1E293B] font-medium leading-snug">
                        {pkg[language]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Specifications */}
              {project.specs && Object.keys(project.specs).length > 0 && (
                <div className="pt-8 border-t border-[#E2E8F0]">
                  <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] mb-4 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-[#9E7D47]" />
                    <span>
                      {language === "en"
                        ? "Key Technical & Architectural Specs"
                        : "البيانات الفنية والمواصفات المعمارية"}
                    </span>
                  </h3>
                  <div className="rounded-xl border border-[#E2E8F0] overflow-hidden bg-white shadow-2xs">
                    <table className="w-full text-left rtl:text-right text-xs sm:text-sm">
                      <tbody className="divide-y divide-[#E2E8F0]">
                        {Object.entries(project.specs).map(([key, val], idx) => (
                          <tr
                            key={idx}
                            className={idx % 2 === 0 ? "bg-[#F8FAFC]" : "bg-white"}
                          >
                            <td className="py-3.5 px-4 sm:px-6 font-semibold text-[#64748B] w-2/5">
                              {key}
                            </td>
                            <td className="py-3.5 px-4 sm:px-6 font-bold text-[#0F172A]">
                              {val}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Real Estate / Project Inquiry Box */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 rounded-2xl bg-[#F8FAFC] border border-[#CBD5E1] p-6 sm:p-8 space-y-6 shadow-2xs">
                <div>
                  <span className="text-[11px] font-bold text-[#9E7D47] uppercase tracking-wider block mb-1">
                    {language === "en" ? "Project Desk" : "المكتب التنفيذي"}
                  </span>
                  <h3 className="text-lg font-bold text-[#0F172A]">
                    {language === "en"
                      ? "Interested in This Development?"
                      : "طلب استفسار أو كراسة الشروط"}
                  </h3>
                  <p className="text-xs text-[#64748B] mt-1.5 leading-relaxed">
                    {language === "en"
                      ? "Direct communication with GTTC engineering management and investment advisory office."
                      : "تواصل مباشر مع الإدارة الهندسية ومكتب الاستثمار لشركة البرج الذهبي."}
                  </p>
                </div>

                <div className="space-y-3 pt-3 border-t border-[#E2E8F0] text-xs text-[#334155]">
                  <div>
                    <span className="text-[#64748B] block mb-0.5">
                      {language === "en" ? "Qatar Headquarters:" : "المقر الرئيسي (قطر):"}
                    </span>
                    <span className="text-xs font-semibold text-[#0F172A] block">
                      {language === "en"
                        ? "Barwa Tower 1, 9th Floor, Suhaim Bin Hamad St, Al Sadd"
                        : "برج بروة 1، الطابق التاسع، شارع سحيم بن حمد، السد، الدوحة"}
                    </span>
                  </div>

                  <div className="pt-2">
                    <span className="text-[#64748B] block mb-0.5">
                      {language === "en" ? "Phone Contact:" : "هاتف الإدارة:"}
                    </span>
                    <a
                      href="tel:+97444508659"
                      className="text-sm font-bold text-[#0F172A] hover:text-[#9E7D47] transition-colors"
                      dir="ltr"
                    >
                      +974 4450 8659 / +974 4451 0547
                    </a>
                  </div>

                  <div>
                    <span className="text-[#64748B] block mb-0.5">
                      {language === "en" ? "Official Email:" : "البريد الإلكتروني:"}
                    </span>
                    <a
                      href="mailto:info@gttc.co"
                      className="font-bold text-[#0F172A] hover:text-[#9E7D47] transition-colors"
                    >
                      info@gttc.co
                    </a>
                  </div>
                </div>

                <div className="space-y-2.5 pt-2">
                  <button
                    onClick={() => setIsTenderOpen(true)}
                    className="w-full py-3 rounded-xl text-center text-xs font-bold text-white bg-[#9E7D47] hover:bg-[#856636] shadow-2xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>{language === "en" ? "Submit Tender / Inquiry" : "تقديم طلب مناقصة / استفسار"}</span>
                    <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? "rotate-180" : ""}`} />
                  </button>

                  <a
                    href="/contact"
                    className="w-full py-2.5 rounded-xl text-center text-xs font-semibold text-[#0F172A] bg-white border border-[#CBD5E1] hover:bg-[#F1F5F9] transition-colors block"
                  >
                    {language === "en" ? "View Office Locations & Map" : "عرض عناوين الفروع والخريطة"}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Related Projects Section */}
          {relatedProjects.length > 0 && (
            <div className="mt-20 pt-12 border-t border-[#E2E8F0]">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A]">
                  {language === "en" ? "Other Projects in This Portfolio" : "مشاريع أخرى في هذه المحفظة"}
                </h3>
                <Link
                  href="/projects"
                  className="text-xs font-bold text-[#9E7D47] hover:underline inline-flex items-center gap-1"
                >
                  <span>{language === "en" ? "View All" : "عرض الكل"}</span>
                  <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? "rotate-180" : ""}`} />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedProjects.map((rel) => (
                  <Link
                    key={rel.id}
                    href={`/projects/${rel.slug}`}
                    className="group rounded-xl bg-white border border-[#E2E8F0] hover:border-[#CBD5E1] overflow-hidden shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div className="aspect-[16/10] bg-[#F8FAFC] overflow-hidden">
                      <img
                        src={rel.image}
                        alt={rel.title[language]}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <span className="text-[11px] font-semibold text-[#9E7D47] block mb-1">
                          {rel.location[language]}
                        </span>
                        <h4 className="text-base font-bold text-[#0F172A] group-hover:text-[#9E7D47] transition-colors line-clamp-1">
                          {rel.title[language]}
                        </h4>
                      </div>
                      <div className="pt-3 mt-3 border-t border-[#E2E8F0] text-xs font-semibold text-[#64748B] flex items-center justify-between">
                        <span>{language === "en" ? "View Details" : "عرض التفاصيل"}</span>
                        <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? "rotate-180" : ""}`} />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Tender RFQ Modal */}
      <TenderModal isOpen={isTenderOpen} onClose={() => setIsTenderOpen(false)} />
    </article>
  );
}
