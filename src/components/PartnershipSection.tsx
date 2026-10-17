"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ShieldCheck, Award, Globe2, CheckCircle2 } from "lucide-react";

export default function PartnershipSection() {
  const { language, isRTL } = useLanguage();

  return (
    <section className="py-20 bg-[#F8FAFC] border-y border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#CBD5E1] text-xs font-semibold text-[#475569] mb-3 shadow-xs">
            <Award className="w-3.5 h-3.5 text-[#9E7D47]" />
            <span>
              {language === "en"
                ? "Institutional Strategic Partnerships"
                : "التحالفات والاتفاقيات الاستراتيجية"}
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            {language === "en" ? (
              <>
                Strategic Alliances in{" "}
                <span className="text-[#9E7D47]">Hospitality & European Commerce</span>
              </>
            ) : (
              <>
                شراكات دولية في مجالات{" "}
                <span className="text-[#9E7D47]">الضيافة ومجلس الأعمال الأوروبي</span>
              </>
            )}
          </h2>

          <p className="mt-2.5 text-sm sm:text-base text-[#64748B]">
            {language === "en"
              ? "Official bilateral partnerships that empower GTTC to deliver institutional-grade developments, guaranteed hotel management, and European economic standards."
              : "شراكات رسمية تمكّن مجموعة البرج الذهبي من تطوير مشروعات استثمارية كبرى بإدارة فندقية عالمية ومعايير أوروبية موحدة."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Partner 1: Retaj Hotels & Hospitality */}
          <div className="rounded-2xl bg-white border border-[#E2E8F0] p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-all">
            <div>
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <span className="px-3 py-1 rounded-full bg-[#FBF7EE] text-[#856636] border border-[#E8DDC8] text-xs font-bold inline-block mb-2">
                    {language === "en"
                      ? "Global Hospitality Operator"
                      : "المشغل الفندقي المعتمد"}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A]">
                    Retaj Hotels & Hospitality
                  </h3>
                  <p className="text-xs text-[#64748B] mt-0.5">
                    {language === "en"
                      ? "Qatar's Premier Islamic Hospitality Group"
                      : "مجموعة فنادق رتاج القطرية الرائدة"}
                  </p>
                </div>

                <div className="w-12 h-12 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] p-2 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-6 h-6 text-[#9E7D47]" />
                </div>
              </div>

              {/* Photo of signing */}
              <div className="rounded-xl overflow-hidden border border-[#E2E8F0] mb-6 bg-slate-100 h-52 relative group">
                <img
                  src="/images/news/retaj-partnership.jpg"
                  alt="Signing Ceremony Retaj and GTTC"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 text-xs text-white">
                  <span className="font-bold">
                    {language === "en"
                      ? "Signing Ceremony:"
                      : "مراسم توقيع الشراكة:"}
                  </span>{" "}
                  {language === "en"
                    ? "HE Sheikh Nayef bin Eid Al-Thani & Engr. Said Salah El Refaay"
                    : "سعادة الشيخ نايف بن عيد آل ثاني والمهندس سعيد صلاح الرفاعي"}
                </div>
              </div>

              <p className="text-sm text-[#475569] leading-relaxed mb-6">
                {language === "en"
                  ? "Retaj Hotels & Hospitality signed an exclusive contract to manage and operate GTTC's hotel assets in Georgia, including 3 hotels in Tamara City (Sagarejo) and the Black Sea beachfront Grigoleti Resort."
                  : "وقعت مجموعة رتاج للفنادق والضيافة عقداً استراتيجياً لإدارة وتشغيل الأصول الفندقية لمجموعة البرج الذهبي في جورجيا، متضمنة 3 فنادق في تامارا سيتي وفندق غريغوليتي على البحر الأسود."}
              </p>

              <div className="grid grid-cols-2 gap-3 text-xs text-[#64748B] border-t border-[#E2E8F0] pt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#9E7D47]" />
                  <span>{language === "en" ? "3 Hotels in Tamara City" : "3 فنادق في تامارا سيتي"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#9E7D47]" />
                  <span>{language === "en" ? "Grigoleti Seafront Resort" : "منتجع غريغوليتي الساحلي"}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Partner 2: EU-Georgia Business Council */}
          <div className="rounded-2xl bg-white border border-[#E2E8F0] p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-all">
            <div>
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <span className="px-3 py-1 rounded-full bg-[#FBF7EE] text-[#856636] border border-[#E8DDC8] text-xs font-bold inline-block mb-2">
                    {language === "en"
                      ? "Core Strategic Member"
                      : "عضو استراتيجي رئيسي"}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A]">
                    EU-Georgia Business Council (EUGBC)
                  </h3>
                  <p className="text-xs text-[#64748B] mt-0.5">
                    {language === "en"
                      ? "European Economic & Governance Integration"
                      : "مجلس الأعمال الأوروبي الجورجي المشترك"}
                  </p>
                </div>

                <div className="w-12 h-12 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] p-2 flex items-center justify-center flex-shrink-0">
                  <Globe2 className="w-6 h-6 text-[#9E7D47]" />
                </div>
              </div>

              {/* Photo of EUGBC */}
              <div className="rounded-xl overflow-hidden border border-[#E2E8F0] mb-6 bg-slate-100 h-52 relative group">
                <img
                  src="/images/news/eugbc-news.jpg"
                  alt="EUGBC Core Member Acceptance"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 text-xs text-white">
                  <span className="font-bold">
                    {language === "en"
                      ? "EUGBC Official Admission:"
                      : "اعتماد العضوية بالمجلس:"}
                  </span>{" "}
                  {language === "en"
                    ? "Over $3,000,000 USD foreign direct investment in Georgia"
                    : "أكثر من 3 ملايين دولار استثمارات مباشرة في جورجيا"}
                </div>
              </div>

              <p className="text-sm text-[#475569] leading-relaxed mb-6">
                {language === "en"
                  ? "GTTC is an accredited Core Member of the EU-Georgia Business Council, aligning corporate developments with European values, investor protection, and sustainable building codes."
                  : "انضمت شركة البرج الذهبي للتجارة والمقاولات رسمياً كعضو رئيسي في مجلس الأعمال الأوروبي الجورجي بعد ضخ أكثر من 3 ملايين دولار وتأكيد الالتزام بالمعايير الهندسية والاستثمارية الأوروبية."}
              </p>

              <div className="grid grid-cols-2 gap-3 text-xs text-[#64748B] border-t border-[#E2E8F0] pt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#9E7D47]" />
                  <span>{language === "en" ? "EU Harmonized Standards" : "معايير أوروبية موحدة"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#9E7D47]" />
                  <span>{language === "en" ? "$3M+ Direct Capital Deployed" : "3+ مليون دولار استثمار مباشر"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
