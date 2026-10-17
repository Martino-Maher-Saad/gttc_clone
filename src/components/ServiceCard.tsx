"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  Building2,
  Hammer,
  Briefcase,
  Palette,
  Compass,
  Zap,
  Cpu,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export interface ServiceData {
  id: string;
  slug: string;
  icon: string;
  number: string;
  title: { en: string; ar: string };
  shortDesc: { en: string; ar: string };
  fullDesc: { en: string; ar: string };
  capabilities: Array<{ en: string; ar: string }>;
}

const iconMap: Record<string, React.ElementType> = {
  Building2,
  Hammer,
  Briefcase,
  Palette,
  Compass,
  Zap,
  Cpu,
};

interface ServiceCardProps {
  service: ServiceData;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const { language, isRTL } = useLanguage();
  const Icon = iconMap[service.icon] || Building2;

  return (
    <div className="group rounded-2xl bg-white border border-[#E2E8F0] hover:border-[#CBD5E1] p-6 sm:p-8 transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-md hover:-translate-y-1">
      <div>
        <div className="flex items-center justify-between mb-5">
          <div className="w-12 h-12 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] group-hover:border-[#9E7D47]/40 flex items-center justify-center text-[#9E7D47] transition-colors">
            <Icon className="w-6 h-6" />
          </div>
          <span className="text-xl font-mono font-bold text-slate-300 group-hover:text-[#9E7D47] transition-colors">
            {service.number}
          </span>
        </div>

        <h3 className="text-xl font-bold text-[#0F172A] mb-2.5 group-hover:text-[#9E7D47] transition-colors">
          {service.title[language]}
        </h3>

        <p className="text-sm text-[#475569] leading-relaxed mb-6">
          {service.shortDesc[language]}
        </p>

        {/* Capabilities list */}
        <div className="space-y-2 pt-4 border-t border-[#E2E8F0]">
          {service.capabilities.slice(0, 3).map((cap, idx) => (
            <div
              key={idx}
              className="flex items-start gap-2 text-xs text-[#334155]"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-[#9E7D47] mt-0.5 flex-shrink-0" />
              <span>{cap[language]}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-5 mt-6 border-t border-[#E2E8F0] flex items-center justify-between">
        <a
          href={`/services#${service.id}`}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#9E7D47] group-hover:text-[#7C6033] transition-colors"
        >
          <span>{language === "en" ? "Explore Scope" : "تفاصيل نطاق العمل"}</span>
          <ArrowRight
            className={`w-3.5 h-3.5 transition-transform group-hover:translate-x-1 ${
              isRTL ? "rotate-180 group-hover:-translate-x-1" : ""
            }`}
          />
        </a>

        <a
          href="/contact"
          className="text-xs text-[#64748B] hover:text-[#0F172A] transition-colors font-medium"
        >
          {language === "en" ? "Inquiry" : "طلب تسعير"}
        </a>
      </div>
    </div>
  );
}
