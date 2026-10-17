"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { TrendingUp, Building2, Award, Compass } from "lucide-react";

export default function StatsCounter() {
  const { language } = useLanguage();

  const stats = [
    {
      value: "$3M+",
      label: {
        en: "Foreign Direct Investment in Georgia",
        ar: "استثمارات أجنبية مباشرة في جورجيا",
      },
      desc: {
        en: "Real estate & hospitality developments",
        ar: "مشروعات عقارية وفندقية كبرى",
      },
      icon: TrendingUp,
    },
    {
      value: "20+",
      label: {
        en: "Years Engineering Track Record",
        ar: "عاماً من التميز الهندسي (منذ 2004)",
      },
      desc: {
        en: "Continuous execution in Qatar & GCC",
        ar: "تنفيذ متواصل في قطر والخليج",
      },
      icon: Award,
    },
    {
      value: "50+",
      label: {
        en: "Major Projects Executed",
        ar: "مشروع استراتيجي وقومي منجز",
      },
      desc: {
        en: "Qatar Rail, Lusail & Msheireb",
        ar: "مترو قطر، لوسيل، ومشيرب",
      },
      icon: Building2,
    },
    {
      value: "100k",
      unit: "m²",
      label: {
        en: "Tamara City Integrated Master Footprint",
        ar: "مساحة التطوير لمدينة تامارا سيتي",
      },
      desc: {
        en: "3 Retaj hotels, hospital & villas",
        ar: "3 فنادق بإدارة رتاج ومستشفى وفيلات",
      },
      icon: Compass,
    },
  ];

  return (
    <div className="relative z-20 -mt-10 max-w-7xl mx-auto px-4 sm:px-8">
      <div className="rounded-2xl bg-white border border-[#E2E8F0] shadow-md p-6 sm:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#E2E8F0] rtl:sm:divide-x-reverse">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="pt-6 sm:pt-0 sm:px-6 first:sm:pl-0 last:sm:pr-0 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
                      {stat.value}
                    </span>
                    {stat.unit && (
                      <span className="text-sm font-bold text-[#9E7D47]">
                        {stat.unit}
                      </span>
                    )}
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] flex items-center justify-center text-[#9E7D47]">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-[#1E293B] leading-snug">
                    {stat.label[language]}
                  </h4>
                  <p className="text-xs text-[#64748B] mt-1">
                    {stat.desc[language]}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
