"use client";

import Link from "next/link";
import Image from "next/image";
import companyData from "@/data/company.json";

interface AboutViewProps {
  isEn?: boolean;
}

export default function AboutView({ isEn = false }: AboutViewProps) {
  const langKey = isEn ? "en" : "ar";

  return (
    <div className="bg-background py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-14">
        {/* Header */}
        <header className="mx-auto max-w-4xl text-center">
          <p className="text-sm sm:text-base font-semibold uppercase tracking-[0.25em] rtl:tracking-[0.08em] text-brand">
            {isEn ? "About Golden Tower & Retaj" : "من نحن · البرج الذهبي ورتاج للضيافة"}
          </p>
          <h1 className="font-display mt-4 text-[clamp(2.4rem,5.5vw,4.5rem)] font-semibold leading-[1.08] tracking-tight text-foreground rtl:leading-[1.24]">
            {isEn
              ? "Engineering Excellence Meets Global 5-Star Hospitality"
              : "ريادة المقاولات الهندسية تلتقي مع الضيافة الفندقية العالمية"}
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base sm:text-lg leading-relaxed text-[#3d3832] font-normal">
            {companyData.about[langKey]}
          </p>
        </header>

        {/* Stats Grid - 100% Genuine from Company Profile */}
        <div className="mt-16 sm:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {companyData.stats.map((s) => (
            <div
              key={s.id}
              className="rounded-md border border-neutral-200/80 bg-white p-6 sm:p-8 text-center shadow-xs"
            >
              <p className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-brand">
                {s.value}
              </p>
              <p className="text-xs sm:text-sm uppercase tracking-widest text-neutral-400 mt-1 font-semibold">{s.unit}</p>
              <p className="mt-3 text-sm sm:text-base font-semibold text-foreground">
                {s.label[langKey]}
              </p>
            </div>
          ))}
        </div>

        {/* Strategic Alliance Section */}
        <section className="mt-24 sm:mt-32 rounded-md bg-[#14110f] text-white p-8 sm:p-14 lg:p-18">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-brand">
                {isEn ? "Strategic Alliance" : "شراكة استراتيجية عابرة للحدود"}
              </span>
              <h2 className="font-display mt-3 text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight">
                {isEn
                  ? "Golden Tower Group & Retaj Hotels & Hospitality"
                  : "مجموعة البرج الذهبي وفنادق رتاج العالمية"}
              </h2>
              <p className="mt-5 text-base sm:text-lg leading-relaxed text-neutral-300 font-normal">
                {isEn
                  ? "A pioneering alliance founded on joint investment and operational synergy. While GTTC delivers state-of-the-art structural engineering, turnkey construction, and steel craftsmanship, Retaj Hotels & Hospitality (established in Qatar with global presence) manages and operates the hotel developments under internationally certified halal family hospitality standards."
                  : "تحالف استثماري وهندسي رائد يجمع بين قوة التنفيذ الإنشائي والمقاولات المتطورة لمجموعة البرج الذهبي (GTTC) والخبرة الفندقية الدولية العريقة لمجموعة فنادق رتاج القطرية (Retaj Hotels). يضمن هذا التحالف لعملائنا في دول الخليج والعالم العربي تملكاً عقارياً موثوقاً وإدارة تشغيلية فندقية تحقق أعلى نسب إشغال وعوائد دورية بالدولار الأمريكي."}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href={isEn ? "/en/g-retaj" : "/g-retaj"}
                  className="rounded-full bg-brand px-7 py-3 text-sm sm:text-base font-semibold uppercase tracking-wider text-white shadow-lg transition-all hover:bg-brand-hover hover:scale-105"
                >
                  {isEn ? "View Flagship Resort (G-Retaj)" : "استكشف منتجع جي-رتاج الرئيسي"}
                </Link>
                <Link
                  href={isEn ? "/en/portfolio" : "/portfolio"}
                  className="rounded-full border border-white/20 bg-white/5 px-7 py-3 text-sm sm:text-base font-semibold uppercase tracking-wider text-white hover:bg-white/10 transition-all"
                >
                  {isEn ? "View All Projects" : "عرض جميع المشاريع"}
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative aspect-[4/3] rounded-md overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="https://res.cloudinary.com/izrnyvya/image/upload/f_auto,q_auto/v1792491173/gttc/general/general_tourism_partner_p16_3279x2186_cd4842.jpg"
                alt="Golden Tower & Retaj Alliance"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Accredited Partnerships & EUGBC */}
        <section className="mt-20 sm:mt-28">
          <h2 className="font-display text-center text-2xl sm:text-3xl font-semibold text-foreground mb-10">
            {isEn ? "Accredited Strategic Partnerships" : "الشراكات والاعتمادات الدولية"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {companyData.partnerships.map((partner, idx) => (
              <div
                key={idx}
                className="rounded-md border border-neutral-200/80 bg-white p-7 sm:p-9 shadow-xs"
              >
                <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-brand">
                  {partner.role[langKey]}
                </span>
                <h3 className="font-display mt-2 text-xl sm:text-2xl font-semibold text-foreground">
                  {partner.name}
                </h3>
                <p className="mt-3 text-base sm:text-lg leading-relaxed text-[#3d3832]">
                  {partner.desc[langKey]}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Leadership & Founder Word */}
        <section className="mt-20 sm:mt-28 border border-neutral-200/80 rounded-md bg-white p-8 sm:p-12 lg:p-16 shadow-xs">
          <div className="max-w-3xl">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              {isEn ? "Executive Leadership" : "القيادة التنفيذية"}
            </span>
            <h2 className="font-display mt-2 text-2xl sm:text-3xl font-semibold text-foreground">
              {companyData.ceo.name[langKey]}
            </h2>
            <p className="text-sm sm:text-base text-neutral-500 font-medium mt-1">
              {companyData.ceo.title[langKey]}
            </p>
            <blockquote className="mt-6 border-s-2 border-brand ps-6 text-base sm:text-lg italic text-[#2b2520] leading-relaxed">
              &ldquo;{companyData.ceo.quote[langKey]}&rdquo;
            </blockquote>
          </div>
        </section>

        {/* Corporate Values */}
        <section className="mt-20 sm:mt-28">
          <h2 className="font-display text-center text-2xl sm:text-3xl font-semibold text-foreground mb-12">
            {isEn ? "Our Core Principles" : "قيمنا ومبادئنا الراسخة"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {companyData.values.slice(0, 3).map((v, idx) => (
              <div key={idx} className="rounded-md border border-neutral-200/80 bg-white p-6 shadow-xs">
                <span className="font-mono text-xs sm:text-sm font-semibold text-brand">0{idx + 1}</span>
                <h3 className="font-display text-lg sm:text-xl font-semibold text-foreground mt-2">
                  {v.title[langKey]}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-[#3d3832] font-normal">
                  {v.desc[langKey]}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
