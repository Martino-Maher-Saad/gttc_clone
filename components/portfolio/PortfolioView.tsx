"use client";

import Link from "next/link";
import Image from "next/image";
import projectsData from "@/data/projects.json";
import homeContent from "@/data/home_content.json";

interface PortfolioViewProps {
  isEn?: boolean;
}

export default function PortfolioView({ isEn = false }: PortfolioViewProps) {
  const langKey = isEn ? "en" : "ar";
  const trackData = homeContent.trackRecord;

  const georgiaProjects = Object.entries(projectsData).map(([slug, p]) => ({
    slug,
    name: isEn ? p.name.en : p.name.ar,
    eyebrow: isEn ? p.hero.eyebrow.en : p.hero.eyebrow.ar,
    badge: isEn ? p.status.en : p.status.ar,
    desc: isEn ? p.hero.subtitle.en : p.hero.subtitle.ar,
    image: p.hero.heroImage,
    location: isEn ? p.location.en : p.location.ar,
    operator: isEn ? "Retaj Hotels & Hospitality" : "فنادق رتاج للضيافة",
    spec: isEn ? p.area.en : p.area.ar,
  }));

  return (
    <div className="bg-background py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-14">
        {/* Header */}
        <header className="mx-auto max-w-4xl text-center">
          <p className="text-sm sm:text-base font-semibold uppercase tracking-[0.25em] rtl:tracking-[0.08em] text-brand">
            {isEn ? "Global Track Record" : "محفظة المشروعات والإنجازات"}
          </p>
          <h1 className="font-display mt-4 text-[clamp(2.4rem,5.5vw,4.5rem)] font-semibold leading-[1.08] tracking-tight text-foreground rtl:leading-[1.24]">
            {isEn
              ? "Enduring Hospitality & Infrastructure Assets"
              : "صروح فندقية وأصول بنية تحتية وطنية كبرى"}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-[#3d3832] font-normal">
            {isEn
              ? "From strategic national infrastructure in Qatar to landmark hotel and medical wellness resorts across Georgia in alliance with Retaj Hotels."
              : "من المشروعات القومية الكبرى في دولة قطر إلى التوسعات الفندقية والاستشفائية الرائدة في جورجيا بالشراكة مع فنادق رتاج العالمية."}
          </p>
        </header>

        {/* Section 1: Georgia Hospitality Developments */}
        <section className="mt-20 sm:mt-28">
          <div className="border-b border-neutral-200 pb-5 mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-brand">01 / 02</span>
              <h2 className="font-display mt-1 text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground">
                {isEn ? "Georgia Hospitality Developments" : "مشروعاتنا الفندقية الكبرى في جورجيا"}
              </h2>
            </div>
            <p className="text-sm sm:text-base text-neutral-500 max-w-md">
              {isEn
                ? "Click any project card to view its comprehensive masterplans, suites, and authentic specs."
                : "اضغط على أي مشروع لعرض التفاصيل الهندسية والأجنحة والمواصفات المعتمدة كاملة."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {georgiaProjects.map((p) => {
              const projectHref = isEn ? `/en/${p.slug}` : `/${p.slug}`;
              return (
                <article
                  key={p.slug}
                  className="group relative flex flex-col overflow-hidden rounded-md border border-neutral-200/80 bg-white shadow-sm transition-all duration-500 hover:shadow-xl"
                >
                  <Link href={projectHref} className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-900 block">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"
                    />
                    <span className="absolute top-4 start-4 inline-flex items-center rounded-full bg-brand px-4 py-1.5 text-xs sm:text-sm font-semibold text-white shadow-md">
                      {p.badge}
                    </span>
                  </Link>

                  <div className="flex flex-1 flex-col p-6 sm:p-8">
                    <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] rtl:tracking-[0.06em] text-brand">
                      {p.eyebrow}
                    </p>
                    <h3 className="font-display mt-2 text-2xl sm:text-3xl font-semibold text-foreground">
                      <Link href={projectHref} className="transition-colors hover:text-brand">
                        {p.name}
                      </Link>
                    </h3>
                    <p className="mt-3 text-base sm:text-lg leading-relaxed text-[#3d3832] line-clamp-3">
                      {p.desc}
                    </p>

                    {/* Authentic Project Details from PDF */}
                    <div className="mt-6 flex flex-col gap-3 border-t border-neutral-100 pt-5 text-sm sm:text-base">
                      <div className="flex items-center justify-between text-[#3d3832]">
                        <span className="text-neutral-500 font-medium">{isEn ? "Location" : "الموقع"}:</span>
                        <span className="font-semibold text-foreground">{p.location}</span>
                      </div>
                      <div className="flex items-center justify-between text-[#3d3832]">
                        <span className="text-neutral-500 font-medium">{isEn ? "Operator" : "الإدارة والتشغيل"}:</span>
                        <span className="font-semibold text-brand">{p.operator}</span>
                      </div>
                      <div className="flex items-center justify-between text-[#3d3832]">
                        <span className="text-neutral-500 font-medium">{isEn ? "Feature" : "الميزة الرئيسية"}:</span>
                        <span className="font-semibold text-foreground">{p.spec}</span>
                      </div>
                    </div>

                    <div className="mt-6 pt-2">
                      <Link
                        href={projectHref}
                        className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold uppercase tracking-wider text-brand transition-colors hover:text-brand-hover"
                      >
                        <span>{isEn ? "Explore Project Details" : "عرض تفاصيل المشروع"}</span>
                        <span aria-hidden="true" className="rtl:rotate-180">→</span>
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Section 2: National Qatar Infrastructure Landmarks */}
        <section className="mt-28 sm:mt-36">
          <div className="border-b border-neutral-200 pb-5 mb-10">
            <span className="text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-brand">02 / 02</span>
            <h2 className="font-display mt-1 text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground">
              {isEn ? "Qatar National Infrastructure Track Record" : "سابقة أعمال المشروعات الكبرى بدولة قطر"}
            </h2>
            <p className="text-sm sm:text-base text-neutral-500 mt-2 max-w-2xl">
              {isEn
                ? "GTTC has delivered major civil, structural steel, and infrastructure contracts for national iconic projects."
                : "قامت مجموعة البرج الذهبي (GTTC) بتنفيذ حزم أعمال إنشائية ومدنية وهياكل فولاذية لأكبر المشروعات القومية بدولة قطر."}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trackData.communities.map((item) => (
              <div
                key={item.num}
                className="group relative overflow-hidden rounded-sm border border-black/[0.08] bg-white shadow-xs transition-all hover:shadow-md"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-900">
                  <Image
                    src={item.image}
                    alt={item.name[langKey]}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"
                  />
                  <span className="absolute top-3 start-3 text-xs sm:text-sm font-mono font-semibold text-brand bg-black/75 px-2.5 py-1 rounded-sm backdrop-blur-xs">
                    {item.num} · {item.status[langKey]}
                  </span>
                  <div className="absolute bottom-3 start-3 end-3 text-white">
                    <h4 className="font-display text-base sm:text-lg font-semibold text-white">
                      {item.name[langKey]}
                    </h4>
                    <p className="text-sm text-white/85 mt-0.5">{item.location[langKey]}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="mt-24 sm:mt-32 rounded-sm bg-[#14110f] p-8 sm:p-12 text-center text-white relative overflow-hidden">
          <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold">
            {isEn
              ? "Ready to Invest in Georgia's Premier Hotel Resorts?"
              : "جاهز لبدء استثمارك الفندقي الآمن في جورجيا؟"}
          </h3>
          <p className="mt-3 text-base sm:text-lg text-neutral-300 max-w-xl mx-auto">
            {isEn
              ? "Contact our investment desk to reserve your fully furnished suite with guaranteed freehold title and periodic USD returns."
              : "تواصل مع مستشارينا التنفيذيين لحجز وحدتك الفندقية المفروشة بالكامل مع صك ملكية حر وعوائد دورية بالدولار."}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href={isEn ? "/en/contact" : "/contact"}
              className="rounded-full bg-brand px-8 py-3.5 text-sm sm:text-base font-semibold uppercase tracking-wider text-white shadow-xl transition-all duration-300 hover:bg-brand-hover hover:scale-105 cursor-pointer"
            >
              {isEn ? "Book Consultation" : "احجز استشارة الآن"}
            </Link>
            <Link
              href={isEn ? "/en/g-retaj" : "/g-retaj"}
              className="rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-sm sm:text-base font-semibold uppercase tracking-wider text-white transition-all hover:bg-white/10"
            >
              {isEn ? "Explore G-RETAJ" : "اكتشف فندق جي-رتاج"}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
