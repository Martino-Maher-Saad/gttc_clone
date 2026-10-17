"use client";

import React, { useState, useMemo } from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  Calculator,
  TrendingUp,
  Building,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export default function InvestmentCalculator() {
  const { language, isRTL } = useLanguage();

  const [selectedProject, setSelectedProject] = useState<string>("didi-dighomi");
  const [unitSize, setUnitSize] = useState<number>(55); // in sqm
  const [downPaymentPct, setDownPaymentPct] = useState<number>(20); // %
  const [planYears, setPlanYears] = useState<number>(3); // years

  const projects = [
    {
      id: "didi-dighomi",
      name: {
        en: "Didi Dighomi Tower (Tbilisi)",
        ar: "برج ديدي ديغومي (تبليسي)",
      },
      basePrice: 1400,
      minSize: 46,
      maxSize: 120,
      expectedAppreciation: 15,
      rentalYield: 9.5,
      operator: "GTTC Hospitality",
    },
    {
      id: "tamara-city",
      name: {
        en: "Tamara City Villas & Residences",
        ar: "فيلات وشقق تامارا سيتي",
      },
      basePrice: 1650,
      minSize: 75,
      maxSize: 320,
      expectedAppreciation: 17,
      rentalYield: 10.5,
      operator: "Retaj Hotels & Hospitality",
    },
    {
      id: "grigoleti-resort",
      name: {
        en: "Grigoleti Beachfront Suites (Black Sea)",
        ar: "شقق منتجع غريغوليتي (البحر الأسود)",
      },
      basePrice: 1800,
      minSize: 50,
      maxSize: 160,
      expectedAppreciation: 14,
      rentalYield: 11.0,
      operator: "Retaj Hotels & Hospitality",
    },
  ];

  const currentProj = projects.find((p) => p.id === selectedProject) || projects[0];

  const calculations = useMemo(() => {
    const totalInvestment = unitSize * currentProj.basePrice;
    const downPayment = (totalInvestment * downPaymentPct) / 100;
    const remainingAmount = totalInvestment - downPayment;
    const monthlyInstallment = remainingAmount / (planYears * 12);
    const annualRentalIncome = (totalInvestment * currentProj.rentalYield) / 100;
    const projectedCapitalGrowth3Y =
      totalInvestment * Math.pow(1 + currentProj.expectedAppreciation / 100, 3) -
      totalInvestment;
    const totalEstimatedReturn3Y =
      projectedCapitalGrowth3Y + annualRentalIncome * 3;

    return {
      totalInvestment,
      downPayment,
      monthlyInstallment,
      annualRentalIncome,
      projectedCapitalGrowth3Y,
      totalEstimatedReturn3Y,
    };
  }, [unitSize, currentProj, downPaymentPct, planYears]);

  return (
    <div className="rounded-2xl bg-white border border-[#CBD5E1] shadow-sm p-6 sm:p-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#E2E8F0]">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FBF7EE] border border-[#E8DDC8] text-xs font-bold text-[#856636] mb-2">
            <Calculator className="w-3.5 h-3.5 text-[#9E7D47]" />
            <span>
              {language === "en"
                ? "Georgia Developments Yield Estimator"
                : "حاسبة العوائد لمشاريع جورجيا"}
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A]">
            {language === "en"
              ? "Projected Returns & Payment Plans"
              : "العوائد الاستثمارية وخطط السداد"}
          </h3>
          <p className="text-xs sm:text-sm text-[#64748B] mt-0.5">
            {language === "en"
              ? "Estimate your property value appreciation and hotel management rental yields."
              : "تقدير نمو القيمة الرأسمالية والعوائد الإيجارية الفندقية."}
          </p>
        </div>

        <div className="flex items-center gap-1.5 bg-[#F8FAFC] p-1.5 rounded-xl border border-[#CBD5E1]">
          {projects.map((p) => (
            <button
              key={p.id}
              onClick={() => {
                setSelectedProject(p.id);
                setUnitSize(p.minSize);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                selectedProject === p.id
                  ? "bg-[#9E7D47] text-white shadow-xs font-bold"
                  : "text-[#64748B] hover:text-[#0F172A]"
              }`}
            >
              {p.name[language].split(" ")[0]}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Inputs */}
        <div className="lg:col-span-7 space-y-6">
          <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold text-[#334155]">
                {language === "en" ? "Unit Size (SQM)" : "مساحة الوحدة (متر مربع)"}
              </label>
              <span className="text-base font-bold text-[#0F172A] font-mono">
                {unitSize} m²
              </span>
            </div>
            <input
              type="range"
              min={currentProj.minSize}
              max={currentProj.maxSize}
              value={unitSize}
              onChange={(e) => setUnitSize(Number(e.target.value))}
              className="w-full accent-[#9E7D47] h-2 bg-[#E2E8F0] rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-[#64748B] mt-1 font-mono">
              <span>{currentProj.minSize} m²</span>
              <span>{currentProj.maxSize} m²</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold text-[#334155]">
                {language === "en" ? "Down Payment Percentage" : "نسبة الدفعة الأولى"}
              </label>
              <span className="text-base font-bold text-[#0F172A] font-mono">
                {downPaymentPct}%
              </span>
            </div>
            <input
              type="range"
              min={15}
              max={50}
              step={5}
              value={downPaymentPct}
              onChange={(e) => setDownPaymentPct(Number(e.target.value))}
              className="w-full accent-[#9E7D47] h-2 bg-[#E2E8F0] rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-[#64748B] mt-1 font-mono">
              <span>15%</span>
              <span>50%</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
            <label className="block text-xs font-bold text-[#334155] mb-2.5">
              {language === "en" ? "Repayment Schedule" : "مدة السداد"}
            </label>
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 5].map((yr) => (
                <button
                  key={yr}
                  onClick={() => setPlanYears(yr)}
                  className={`py-2 rounded-lg text-xs font-bold transition-all border cursor-pointer ${
                    planYears === yr
                      ? "bg-[#9E7D47] text-white border-[#9E7D47] shadow-xs"
                      : "bg-white text-[#475569] border-[#CBD5E1] hover:border-[#9E7D47]"
                  }`}
                >
                  {yr} {language === "en" ? (yr === 1 ? "Yr" : "Yrs") : (yr === 1 ? "سنة" : "سنوات")}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-[#64748B] pt-2">
            <span className="flex items-center gap-1.5 text-[#334155]">
              <ShieldCheck className="w-4 h-4 text-[#9E7D47]" />
              {currentProj.operator}
            </span>
            <span className="font-semibold text-[#856636]">
              {currentProj.expectedAppreciation}% {language === "en" ? "Target Annual Capital Growth" : "نمو رأسمالي سنوي مستهدف"}
            </span>
          </div>
        </div>

        {/* Right: Calculations */}
        <div className="lg:col-span-5 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] p-6 space-y-4">
          <span className="text-xs font-bold text-[#64748B] uppercase tracking-wider block pb-2 border-b border-[#E2E8F0]">
            {language === "en" ? "Investment Projection" : "البيان المالي التقديري"}
          </span>

          <div>
            <span className="text-xs text-[#64748B] block mb-1">
              {language === "en" ? "Total Property Price" : "إجمالي سعر الوحدة"}
            </span>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] font-mono">
              ${calculations.totalInvestment.toLocaleString()} USD
            </div>
            <span className="text-xs text-[#64748B] font-mono">
              (~{(calculations.totalInvestment * 3.64).toLocaleString()} QAR)
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 py-2 border-y border-[#E2E8F0]">
            <div>
              <span className="text-[11px] text-[#64748B] block">
                {language === "en" ? "Down Payment" : "الدفعة الأولى"}
              </span>
              <span className="text-sm font-bold text-[#0F172A] font-mono">
                ${calculations.downPayment.toLocaleString()}
              </span>
            </div>
            <div>
              <span className="text-[11px] text-[#64748B] block">
                {language === "en" ? "Monthly Payment" : "القسط الشهري"}
              </span>
              <span className="text-sm font-bold text-[#9E7D47] font-mono">
                ${Math.round(calculations.monthlyInstallment).toLocaleString()}
              </span>
            </div>
          </div>

          <div className="space-y-1.5 text-xs text-[#475569]">
            <div className="flex items-center justify-between">
              <span>{language === "en" ? "Est. Annual Rental Yield" : "العائد الإيجاري السنوي"}</span>
              <span className="font-bold text-[#0F172A] font-mono">
                +${Math.round(calculations.annualRentalIncome).toLocaleString()} / yr
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span>{language === "en" ? "Est. 3-Year Capital Gain" : "العائد الرأسمالي (3 سنوات)"}</span>
              <span className="font-bold text-[#856636] font-mono">
                +${Math.round(calculations.projectedCapitalGrowth3Y).toLocaleString()}
              </span>
            </div>
          </div>

          <div className="pt-4 border-t border-[#E2E8F0]">
            <a
              href="/contact"
              className="w-full py-3 rounded-lg text-center text-xs font-bold text-white bg-[#9E7D47] hover:bg-[#856636] shadow-sm transition-all flex items-center justify-center gap-2"
            >
              <span>{language === "en" ? "Inquire About Units" : "طلب تفاصيل وحجز الوحدات"}</span>
              <ArrowRight
                className={`w-3.5 h-3.5 ${isRTL ? "rotate-180" : ""}`}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
