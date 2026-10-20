"use client";

import Link from "next/link";
import Image from "next/image";
import projectsData from "@/data/projects.json";

interface ProjectSwitcherProps {
  currentSlug: string;
  isEn?: boolean;
}

export default function ProjectSwitcher({
  currentSlug,
  isEn = false,
}: ProjectSwitcherProps) {
  const projectList = Object.entries(projectsData).map(([slug, data]) => ({
    slug,
    name: isEn ? data.name.en : data.name.ar,
    tag: isEn ? data.hero.eyebrow.en : data.hero.eyebrow.ar,
    image: data.hero.heroImage,
    badge: isEn ? data.status.en : data.status.ar,
  }));

  return (
    <div className="w-full bg-[#14110f] border-b border-white/10 pt-24 pb-6 sm:pt-28 sm:pb-8">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-14">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] rtl:tracking-[0.08em] text-brand">
              {isEn ? "Georgia Hospitality Portfolio" : "محفظة مشروعات جورجيا الفندقية"}
            </p>
            <h2 className="font-display mt-1 text-lg sm:text-xl font-semibold text-white">
              {isEn ? "Select a Project to Explore" : "اختر المشروع للاطلاع على التفاصيل الكاملة"}
            </h2>
          </div>
          <Link
            href={isEn ? "/en/portfolio" : "/portfolio"}
            className="text-xs sm:text-sm font-semibold text-neutral-400 hover:text-brand transition-colors underline-offset-4 hover:underline"
          >
            {isEn ? "View All Portfolio →" : "عرض كل سابقة الأعمال ←"}
          </Link>
        </div>

        {/* Horizontal Scrollable Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {projectList.map((p) => {
            const isActive = p.slug === currentSlug;
            const targetHref = isEn ? `/en/${p.slug}` : `/${p.slug}`;

            return (
              <Link
                key={p.slug}
                href={targetHref}
                className={`group relative overflow-hidden rounded-md transition-all duration-300 border ${
                  isActive
                    ? "border-brand ring-2 ring-brand/40 shadow-lg"
                    : "border-white/10 hover:border-white/30 opacity-75 hover:opacity-100"
                }`}
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-900">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent"
                  />
                  {isActive && (
                    <span className="absolute top-2 start-2 rounded-full bg-brand px-3 py-1 text-xs font-semibold text-white shadow-xs">
                      {isEn ? "Active" : "المعروض حالياً"}
                    </span>
                  )}
                </div>

                <div className="p-3 bg-[#171411]">
                  <p className="text-xs font-semibold text-brand truncate">
                    {p.tag}
                  </p>
                  <h3 className="font-display mt-1 text-xs sm:text-sm font-semibold text-white truncate">
                    {p.name}
                  </h3>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
