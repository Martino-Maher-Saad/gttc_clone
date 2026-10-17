"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  X,
  MapPin,
  Building,
  CheckCircle2,
  TrendingUp,
  Download,
  Calendar,
  Layers,
  ArrowRight,
} from "lucide-react";

export interface ProjectData {
  id: string;
  slug: string;
  category: string;
  featured?: boolean;
  title: { en: string; ar: string };
  location: { en: string; ar: string };
  client: { en: string; ar: string };
  area?: string;
  roi?: string;
  brochureUrl?: string;
  image: string;
  description: { en: string; ar: string };
  workPackages: Array<{ en: string; ar: string }>;
  specs?: Record<string, string | undefined>;
}

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { language, isRTL } = useLanguage();

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#161B22] border border-[#C5A880]/30 rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        {/* Modal Header Bar with Image */}
        <div className="relative h-64 sm:h-80 w-full bg-[#0D1117] flex-shrink-0">
          <img
            src={project.image}
            alt={project.title[language]}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#161B22] via-[#161B22]/60 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/60 hover:bg-[#C5A880] text-white hover:text-[#0D1117] border border-white/20 transition-all cursor-pointer z-10"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Tags on Header */}
          <div className="absolute bottom-4 left-6 right-6 flex flex-wrap items-end justify-between gap-3">
            <div>
              {project.roi && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/50 text-xs font-semibold text-[#D4AF37] mb-2 backdrop-blur-sm">
                  <TrendingUp className="w-3.5 h-3.5" />
                  {project.roi}
                </span>
              )}
              <h2 className="text-xl sm:text-2xl font-bold text-white drop-shadow-md">
                {project.title[language]}
              </h2>
            </div>

            {project.area && (
              <span className="px-3 py-1 rounded-lg bg-[#0D1117]/80 border border-[#30363D] text-xs text-[#C5A880] font-mono">
                {project.area}
              </span>
            )}
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Key Meta Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-[#0D1117] border border-[#30363D]/60 text-sm">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#C5A880] mt-0.5 flex-shrink-0" />
              <div>
                <span className="text-xs text-[#8B949E] block">
                  {language === "en" ? "Location" : "الموقع"}
                </span>
                <span className="text-white font-medium">
                  {project.location[language]}
                </span>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Building className="w-4 h-4 text-[#C5A880] mt-0.5 flex-shrink-0" />
              <div>
                <span className="text-xs text-[#8B949E] block">
                  {language === "en" ? "Client / Authority" : "الجهة المالكة / العميل"}
                </span>
                <span className="text-white font-medium">
                  {project.client[language]}
                </span>
              </div>
            </div>
          </div>

          {/* Overview Description */}
          <div>
            <h3 className="text-base font-semibold text-[#C5A880] mb-2 flex items-center gap-2">
              <Layers className="w-4 h-4" />
              {language === "en" ? "Project Overview" : "نبذة عن المشروع"}
            </h3>
            <p className="text-sm text-[#C9D1D9] leading-relaxed">
              {project.description[language]}
            </p>
          </div>

          {/* Work Packages Executed */}
          <div>
            <h3 className="text-base font-semibold text-[#C5A880] mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
              {language === "en" ? "Work Packages Executed" : "حزم الأعمال المنفذة"}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.workPackages.map((pkg, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-lg bg-[#0D1117]/60 border border-[#21262D] text-xs text-[#C9D1D9]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-1.5 flex-shrink-0" />
                  <span>{pkg[language]}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Specs if available */}
          {project.specs && Object.keys(project.specs).length > 0 && (
            <div>
              <h3 className="text-base font-semibold text-[#C5A880] mb-3">
                {language === "en" ? "Key Specifications" : "المواصفات الفنية"}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {Object.entries(project.specs).map(([k, v]) => (
                  <div
                    key={k}
                    className="p-3 rounded-lg bg-[#0D1117] border border-[#30363D] text-center"
                  >
                    <span className="text-[11px] text-[#8B949E] block mb-1">
                      {k}
                    </span>
                    <span className="text-xs font-semibold text-white">
                      {v}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Modal Action Footer */}
          <div className="pt-4 border-t border-[#30363D] flex flex-wrap items-center justify-between gap-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-[#0D1117] bg-gradient-to-r from-[#C5A880] to-[#D4AF37] hover:brightness-110 shadow-md transition-all"
            >
              <span>
                {language === "en"
                  ? "Inquire About This Project"
                  : "طلب تفاصيل أو استثمار في المشروع"}
              </span>
              <ArrowRight
                className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`}
              />
            </a>

            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-[#0D1117] hover:bg-[#21262D] text-xs text-[#8B949E] hover:text-white border border-[#30363D] transition-colors"
            >
              {language === "en" ? "Close" : "إغلاق"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
