"use client";

import React, { useState, useMemo } from "react";
import { useLanguage } from "@/context/LanguageContext";
import projectsData from "@/data/projects.json";
import { ProjectData } from "@/components/ProjectModal";
import InvestmentCalculator from "@/components/InvestmentCalculator";
import CtaStrip from "@/components/CtaStrip";
import {
  Building2,
  TrendingUp,
  MapPin,
  CheckCircle2,
  Search,
  ArrowRight,
  Compass,
} from "lucide-react";

export default function ProjectsPage() {
  const { language, isRTL } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    { id: "all", label: { en: "All Projects", ar: "كافة المشاريع" } },
    {
      id: "georgia-mega",
      label: { en: "Georgia Mega Developments", ar: "مشروعات جورجيا الكبرى" },
    },
    {
      id: "qatar-infrastructure",
      label: {
        en: "Qatar Infrastructure & Landmarks",
        ar: "بنية قطر التحتية والمعالم",
      },
    },
    {
      id: "qatar-commercial",
      label: {
        en: "Qatar Commercial & High-Rises",
        ar: "المشاريع التجارية والأبراج",
      },
    },
    {
      id: "steel-industrial",
      label: {
        en: "Steel Fabrication & Industrial",
        ar: "الهياكل الحديدية والمصانع",
      },
    },
  ];

  const filteredProjects = useMemo(() => {
    return (projectsData as unknown as ProjectData[]).filter((proj) => {
      const matchesCategory =
        activeCategory === "all" || proj.category === activeCategory;

      const titleMatch =
        proj.title.en.toLowerCase().includes(searchQuery.toLowerCase()) ||
        proj.title.ar.toLowerCase().includes(searchQuery.toLowerCase());

      const locationMatch =
        proj.location.en.toLowerCase().includes(searchQuery.toLowerCase()) ||
        proj.location.ar.toLowerCase().includes(searchQuery.toLowerCase());

      const clientMatch =
        proj.client.en.toLowerCase().includes(searchQuery.toLowerCase()) ||
        proj.client.ar.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesSearch =
        searchQuery === "" || titleMatch || locationMatch || clientMatch;

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Page Hero */}
      <section className="relative py-16 sm:py-20 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#CBD5E1] text-xs font-semibold text-[#475569] mb-4 shadow-xs">
            <Compass className="w-3.5 h-3.5 text-[#9E7D47]" />
            <span>
              {language === "en"
                ? "Qatar Infrastructure & Georgia Developments"
                : "معالم قطر التحتية واستثمارات جورجيا"}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            {language === "en" ? (
              <>
                Projects <span className="text-[#9E7D47]">Portfolio</span>
              </>
            ) : (
              <>
                معرض <span className="text-[#9E7D47]">المشروعات والإنجازات</span>
              </>
            )}
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#64748B] max-w-3xl mx-auto leading-relaxed">
            {language === "en"
              ? "Explore landmark civil and structural contracts executed across Qatar, alongside integrated hotel and residential communities in Georgia."
              : "استعرض مشاريع البنية التحتية والإنشاءات المدنية المنجزة في قطر، إلى جانب المدن والمنتجعات الفندقية في جورجيا."}
          </p>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="py-6 bg-white border-b border-[#E2E8F0] px-4 sm:px-8 sticky top-20 z-30 backdrop-blur-md bg-white/95">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto no-scrollbar pb-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-lg text-xs font-semibold transition-all border cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-[#9E7D47] text-white border-[#9E7D47] shadow-xs font-bold"
                    : "bg-[#F8FAFC] text-[#475569] hover:text-[#0F172A] border-[#E2E8F0]"
                }`}
              >
                {cat.label[language]}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full lg:w-72 flex-shrink-0">
            <Search className="w-4 h-4 text-[#94A3B8] absolute top-1/2 -translate-y-1/2 left-3 rtl:left-auto rtl:right-3 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                language === "en"
                  ? "Search by project or client..."
                  : "ابحث باسم المشروع أو العميل..."
              }
              className="w-full bg-[#F8FAFC] border border-[#CBD5E1] focus:border-[#9E7D47] rounded-lg pl-9 pr-4 rtl:pl-4 rtl:pr-9 py-2 text-xs text-[#0F172A] placeholder-[#94A3B8] outline-none transition-colors"
            />
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-white flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <Building2 className="w-12 h-12 text-[#94A3B8] mx-auto mb-3" />
              <h3 className="text-lg font-bold text-[#0F172A] mb-1">
                {language === "en" ? "No projects found" : "لم يتم العثور على مشاريع"}
              </h3>
              <p className="text-xs text-[#64748B]">
                {language === "en"
                  ? "Try adjusting your search criteria or selecting a different category."
                  : "يرجى تجربة كلمات بحث أخرى أو اختيار تصنيف مختلف."}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <a
                  key={project.id}
                  href={`/projects/${project.slug}`}
                  className="group rounded-2xl bg-white border border-[#E2E8F0] hover:border-[#CBD5E1] overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Card Image */}
                  <div className="relative aspect-video w-full bg-[#F8FAFC] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title[language]}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                      <span className="px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-xs text-[11px] font-semibold text-[#334155] border border-white/40 shadow-xs">
                        {project.client[language]}
                      </span>

                      {project.roi && (
                        <span className="px-2.5 py-1 rounded-md bg-[#FBF7EE] text-[#856636] text-[11px] font-bold border border-[#E8DDC8] shadow-xs flex items-center gap-1">
                          <TrendingUp className="w-3 h-3 text-[#9E7D47]" />
                          {project.roi}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-1.5 text-xs text-[#64748B] mb-2 font-mono">
                        <MapPin className="w-3.5 h-3.5 text-[#9E7D47]" />
                        <span>{project.location[language]}</span>
                      </div>

                      <h3 className="text-lg font-bold text-[#0F172A] group-hover:text-[#9E7D47] transition-colors leading-snug mb-3">
                        {project.title[language]}
                      </h3>

                      <p className="text-xs text-[#64748B] leading-relaxed line-clamp-2 mb-6">
                        {project.description[language]}
                      </p>
                    </div>

                    <div>
                      {/* Work Packages Preview */}
                      <div className="pt-4 border-t border-[#E2E8F0] space-y-1.5 mb-4">
                        {project.workPackages.slice(0, 2).map((pkg, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-2 text-[11px] text-[#475569]"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#9E7D47] mt-0.5 flex-shrink-0" />
                            <span>{pkg[language]}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-3 border-t border-[#E2E8F0] flex items-center justify-between text-xs text-[#9E7D47] font-bold">
                        <span>
                          {language === "en" ? "View Full Project Details" : "عرض تفاصيل المشروع"}
                        </span>
                        <ArrowRight
                          className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${
                            isRTL ? "rotate-180 group-hover:-translate-x-1" : ""
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Investment Calculator Section for Georgia Projects */}
      <section className="py-16 bg-[#F8FAFC] border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <InvestmentCalculator />
        </div>
      </section>

      {/* CTA Strip */}
      <CtaStrip />
    </div>
  );
}
