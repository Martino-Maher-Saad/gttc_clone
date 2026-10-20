"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
import LeadModal from "@/components/LeadModal";
import homeContent from "@/data/home_content.json";

interface ProjectsShowcaseProps {
  isEn?: boolean;
}

interface ProjectData {
  id: string;
  category: string;
  tag: string;
  name: string;
  location: string;
  price: string;
  priceLabelKey: string;
  payment: string;
  unitTypes: string[];
  description: string;
  image: string;
  href: string;
}

function ProjectCard({
  project,
  isEn,
  labels,
  onBook,
}: {
  project: ProjectData;
  isEn: boolean;
  labels: typeof homeContent.projectsSection.labels;
  onBook: (projectId: string) => void;
}) {
  const langKey = isEn ? "en" : "ar";
  const isCommercial = project.category === "commercial";

  return (
    <article
      className="project-card group flex-shrink-0"
      data-category={project.category}
      data-project-id={project.id}
    >
      <div className="relative w-[86vw] max-w-[760px] sm:w-[560px] lg:w-[680px] xl:w-[760px]">
        {/* Main Image Box */}
        <div className="relative aspect-[16/9] overflow-hidden rounded-md bg-neutral-100 border border-black/[0.06] shadow-sm">
          <Image
            src={project.image}
            alt={project.name}
            fill
            sizes="(min-width: 1280px) 760px, (min-width: 1024px) 680px, (min-width: 640px) 560px, 86vw"
            className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
            draggable={false}
          />

          {/* Hover Inquire / Action Button in Center */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none bg-black/25 backdrop-blur-[2px]">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onBook(project.id);
              }}
              className="pointer-events-auto flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-base font-semibold tracking-wide text-white shadow-xl transition-all duration-300 hover:bg-brand-hover hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>{labels.book?.[langKey] || (isEn ? "Request Consultation" : "طلب استشارة")}</span>
            </button>
          </div>

          {/* Category Tag Top-Start */}
          <span
            className={`absolute top-4 start-4 inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold tracking-wide backdrop-blur-md border ${
              isCommercial
                ? "bg-[#171410]/90 text-white border-white/10"
                : "bg-white/95 text-[#171410] border-black/10 shadow-sm"
            }`}
          >
            {project.tag}
          </span>
        </div>

        {/* Content Below Image */}
        <div className="mt-5 flex flex-col gap-3">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h3 className="leading-[1.15] tracking-tight text-[#171410] dark:text-white font-display text-[clamp(1.5rem,2.6vw,2.3rem)] font-semibold">
              {project.name}
            </h3>
            <span className="text-sm sm:text-base font-semibold tracking-wide text-neutral-600 dark:text-neutral-300">
              {project.location}
            </span>
          </div>

          <p className="max-w-xl text-base sm:text-lg leading-relaxed text-neutral-700 dark:text-neutral-200">
            {project.description}
          </p>

          <Link
            href={isEn ? `/en${project.href}` : project.href}
            className="group/cta mt-2 inline-flex items-center gap-3 self-start border-b border-[#171410]/20 pb-1.5 text-base font-semibold tracking-wide text-[#171410] dark:text-white dark:border-white/20 transition-all hover:border-brand hover:text-brand"
          >
            <span>{labels.discover[langKey]}</span>
            <svg
              aria-hidden="true"
              className="transition-transform duration-300 group-hover/cta:translate-x-1 rtl:-scale-x-100 rtl:group-hover/cta:-translate-x-1 text-current"
              fill="none"
              height="10"
              viewBox="0 0 22 10"
              width="20"
            >
              <path
                d="M1 5h20m0 0L17 1m4 4l-4 4"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}

type FilterKey = keyof typeof homeContent.projectsSection.filters;

export default function ProjectsShowcase({ isEn = false }: ProjectsShowcaseProps) {
  const [filter, setFilter] = useState<FilterKey>("all");
  const [showDragHint, setShowDragHint] = useState(true);
  const [modalProject, setModalProject] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const sectionRef = useRef<HTMLElement>(null);
  const sliderContainerRef = useRef<HTMLDivElement>(null);

  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const hasMovedRef = useRef(false);

  const sectionData = homeContent.projectsSection;
  const langKey = isEn ? "en" : "ar";

  // Map projects data from json
  const allProjects: ProjectData[] = sectionData.projects.map((p) => ({
    id: p.id,
    category: p.category,
    tag: p.tag[langKey],
    name: p.name[langKey],
    location: p.location[langKey],
    price: p.price,
    priceLabelKey: p.priceLabelKey,
    payment: p.payment[langKey],
    unitTypes: p.unitTypes[langKey],
    description: p.description[langKey],
    image: p.image,
    href: p.href,
  }));

  const filteredProjects =
    filter === "all" ? allProjects : allProjects.filter((p) => p.category === filter);

  // Smooth magnetic center scroll to target index
  const scrollToIndex = useCallback((index: number) => {
    const container = sliderContainerRef.current;
    if (!container) return;
    const cards = Array.from(container.querySelectorAll<HTMLElement>("[data-card-index]"));
    if (cards.length === 0) return;

    const clamped = Math.max(0, Math.min(cards.length - 1, index));
    const targetCard = cards[clamped];
    if (!targetCard) return;

    targetCard.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
    setActiveIndex(clamped);
  }, []);

  // Mouse Drag to scroll with magnetic center snap on release
  const handleMouseDown = (e: React.MouseEvent) => {
    const container = sliderContainerRef.current;
    if (!container) return;
    isDraggingRef.current = true;
    hasMovedRef.current = false;
    startXRef.current = e.pageX - container.offsetLeft;
    scrollLeftRef.current = container.scrollLeft;
    container.style.scrollBehavior = "auto";
    container.style.scrollSnapType = "none";
    setShowDragHint(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current) return;
    const container = sliderContainerRef.current;
    if (!container) return;
    const x = e.pageX - container.offsetLeft;
    const walk = x - startXRef.current;
    if (Math.abs(walk) > 4) {
      hasMovedRef.current = true;
    }
    container.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleMouseUp = () => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    const container = sliderContainerRef.current;
    if (!container) return;

    container.style.scrollBehavior = "smooth";
    container.style.scrollSnapType = "x mandatory";

    // Magnetic snap to the closest card to the viewport center
    const cards = Array.from(container.querySelectorAll<HTMLElement>("[data-card-index]"));
    if (cards.length === 0) return;

    const containerRect = container.getBoundingClientRect();
    const containerCenterX = containerRect.left + containerRect.width / 2;

    let closestIdx = 0;
    let minDistance = Infinity;

    cards.forEach((card, idx) => {
      const cardRect = card.getBoundingClientRect();
      const cardCenterX = cardRect.left + cardRect.width / 2;
      const dist = Math.abs(cardCenterX - containerCenterX);
      if (dist < minDistance) {
        minDistance = dist;
        closestIdx = idx;
      }
    });

    scrollToIndex(closestIdx);
  };

  // Sync active index with center card while scrolling
  useEffect(() => {
    const container = sliderContainerRef.current;
    if (!container) return;

    let timeoutId: NodeJS.Timeout;
    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const cards = Array.from(container.querySelectorAll<HTMLElement>("[data-card-index]"));
        if (cards.length === 0) return;

        const containerRect = container.getBoundingClientRect();
        const containerCenterX = containerRect.left + containerRect.width / 2;

        let closestIdx = 0;
        let minDistance = Infinity;

        cards.forEach((card, idx) => {
          const cardRect = card.getBoundingClientRect();
          const cardCenterX = cardRect.left + cardRect.width / 2;
          const dist = Math.abs(cardCenterX - containerCenterX);
          if (dist < minDistance) {
            minDistance = dist;
            closestIdx = idx;
          }
        });

        setActiveIndex(closestIdx);
      }, 50);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      clearTimeout(timeoutId);
      container.removeEventListener("scroll", handleScroll);
    };
  }, [filter]);

  // Initial scroll reveal for project cards
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const cards = sectionRef.current?.querySelectorAll(".project-card");
      if (cards && cards.length > 0) {
        gsap.from(cards, {
          y: 40,
          autoAlpha: 0,
          duration: 0.8,
          stagger: 0.08,
          ease: "expo.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            once: true,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Filter change
  const handleFilterChange = (newFilter: FilterKey) => {
    if (newFilter === filter) return;
    setFilter(newFilter);
    setActiveIndex(0);
    requestAnimationFrame(() => {
      scrollToIndex(0);
    });
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      aria-labelledby="projects-title"
      className="relative py-24 sm:py-32 lg:py-40 bg-[#faf8f5] text-[#171410] overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-14">
        {/* Section Header */}
        <header className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] rtl:tracking-[0.08em] text-neutral-500">
              {sectionData.eyebrow[langKey]}
            </p>
            <h2
              id="projects-title"
              className="font-display mt-3 max-w-2xl text-[clamp(2.25rem,5.5vw,4.5rem)] leading-[1.06] tracking-tight text-[#171410] dark:text-white font-semibold"
            >
              {sectionData.title[langKey]}
            </h2>
          </div>
          <p className="font-display text-lg italic text-brand sm:max-w-xs sm:text-right rtl:sm:text-left font-normal">
            {sectionData.subtitle[langKey]}
          </p>
        </header>

        {/* Filters and Navigation Controls Row */}
        <div className="mt-12 flex items-center justify-between gap-4 border-b border-neutral-200/80 pb-6 sm:mt-16">
          {/* Filter Pills */}
          <div
            role="tablist"
            aria-label="Filter projects"
            className="inline-flex items-center gap-1 rounded-full border border-neutral-200/80 bg-white dark:bg-[#141210] p-1 shadow-[0_2px_8px_rgba(0,0,0,0.03)]"
          >
            {(Object.keys(sectionData.filters) as FilterKey[]).map((key) => {
              const isActive = filter === key;
              return (
                <button
                  key={key}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => handleFilterChange(key)}
                  className={`relative inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-medium tracking-normal transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-brand text-white shadow-xs"
                      : "text-neutral-600 dark:text-neutral-300 hover:text-brand"
                  }`}
                >
                  {sectionData.filters[key][langKey]}
                </button>
              );
            })}
          </div>

          {/* Navigation Arrows for fast center scroll */}
          <div className="flex items-center gap-3">
            <span
              className={`hidden sm:inline-block font-mono text-xs uppercase tracking-[0.22em] text-neutral-500 transition-opacity duration-500 select-none ${
                showDragHint ? "opacity-100" : "opacity-0"
              }`}
              aria-hidden={!showDragHint}
            >
              ← {sectionData.dragHint[langKey]} →
            </span>

            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="Previous project"
                disabled={activeIndex === 0}
                onClick={() => scrollToIndex(activeIndex - 1)}
                className="flex size-9 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-700 shadow-xs transition-colors hover:border-brand hover:text-brand disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
              >
                <span className="rtl:rotate-180">←</span>
              </button>
              <button
                type="button"
                aria-label="Next project"
                disabled={activeIndex === filteredProjects.length - 1}
                onClick={() => scrollToIndex(activeIndex + 1)}
                className="flex size-9 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-700 shadow-xs transition-colors hover:border-brand hover:text-brand disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
              >
                <span className="rtl:rotate-180">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Smooth Magnetic Center Scroll Slider */}
      <div
        ref={sliderContainerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        className="relative mt-8 sm:mt-12 overflow-x-auto overflow-y-hidden py-4 cursor-grab active:cursor-grabbing select-none scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        style={{
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
        }}
      >
        <div className="flex gap-6 sm:gap-8 w-max px-[calc(50vw-min(43vw,380px))]">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              data-card-index={idx}
              onClick={() => {
                if (!hasMovedRef.current && idx !== activeIndex) {
                  scrollToIndex(idx);
                }
              }}
              className="snap-center shrink-0 opacity-100 transition-transform duration-300"
              style={{
                scrollSnapAlign: "center",
                scrollSnapStop: "normal",
              }}
            >
              <ProjectCard
                project={project}
                isEn={isEn}
                labels={sectionData.labels}
                onBook={(id) => setModalProject(id)}
              />
            </div>
          ))}
        </div>
      </div>

      <LeadModal
        isOpen={modalProject !== null}
        onClose={() => setModalProject(null)}
        isEn={isEn}
        initialProject={modalProject || "taj-city"}
      />
    </section>
  );
}
