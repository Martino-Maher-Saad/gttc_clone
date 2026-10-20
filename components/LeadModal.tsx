"use client";

import { useEffect, useRef, useState } from "react";
import { X, CheckCircle } from "lucide-react";
import { gsap } from "gsap";
import siteConfig from "@/data/site_config.json";

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  isEn?: boolean;
  initialProject?: string;
}

export default function LeadModal({
  isOpen,
  onClose,
  isEn = false,
  initialProject = "g-retaj",
}: LeadModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    project: initialProject,
  });
  const [prevInitial, setPrevInitial] = useState(initialProject);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (prevInitial !== initialProject) {
    setPrevInitial(initialProject);
    setFormData((prev) => ({ ...prev, project: initialProject }));
  }

  const backdropRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    const backdrop = backdropRef.current;
    const card = cardRef.current;
    if (!backdrop || !card) return;

    if (isOpen) {
      document.body.style.overflow = "hidden";
      gsap.set(backdrop, { autoAlpha: 1, pointerEvents: "auto" });
      gsap.fromTo(
        backdrop,
        { backgroundColor: "rgba(20, 16, 14, 0)" },
        { backgroundColor: "rgba(20, 16, 14, 0.78)", duration: 0.45, ease: "power2.out" }
      );
      gsap.fromTo(
        card,
        { y: 30, autoAlpha: 0, scale: 0.96 },
        { y: 0, autoAlpha: 1, scale: 1, duration: 0.55, ease: "expo.out", delay: 0.05 }
      );
    } else {
      gsap.to(card, { y: 30, autoAlpha: 0, scale: 0.96, duration: 0.3, ease: "power2.in" });
      gsap.to(backdrop, {
        autoAlpha: 0,
        backgroundColor: "rgba(20, 16, 14, 0)",
        duration: 0.35,
        ease: "power2.in",
        onComplete: () => {
          document.body.style.overflow = "";
          setSubmitted(false);
        },
      });
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.phone || loading) return;

    setLoading(true);
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      setSubmitted(true);
      setTimeout(() => {
        onClose();
      }, 3500);
    } catch (err) {
      console.error("Failed to submit lead", err);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      ref={backdropRef}
      role="dialog"
      aria-modal="true"
      aria-label={isEn ? "Book Now" : "احجز الآن"}
      className="fixed inset-0 z-[80] flex items-center justify-center px-4 sm:px-6 pointer-events-none opacity-0 invisible"
    >
      <div
        ref={cardRef}
        className="relative w-full max-w-md rounded-sm bg-white p-7 sm:p-9 shadow-[0_24px_80px_rgba(0,0,0,0.3)] border border-black/[0.08]"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label={isEn ? "Close" : "إغلاق"}
          className="absolute end-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full text-[#171410] transition-colors hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-brand cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="py-6 text-center">
            <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
            <h4 className="font-display text-xl font-semibold text-[#171410] mb-2">
              {isEn ? "Request Received Successfully!" : "تم استلام طلبك بنجاح!"}
            </h4>
            <p className="text-sm text-neutral-600 font-normal">
              {isEn
                ? "Our senior investment consultant will contact you shortly with full project details and brochures."
                : "سيقوم مستشار الاستثمار بالتواصل معك فوراً لتزويدك بكافة تفاصيل المشروع والمخططات المعتمدة."}
            </p>
          </div>
        ) : (
          <>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] rtl:tracking-[0.08em] text-neutral-500">
              {isEn ? "Register your interest" : "سجل بياناتك للحصول على التفاصيل"}
            </p>
            <h3 className="font-display mt-2 text-2xl font-semibold leading-tight tracking-tight text-[#171410] sm:text-3xl">
              {isEn ? "Inquire Now" : "طلب استشارة استثمارية"}
            </h3>

            <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-5">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-[0.18em] rtl:tracking-[0.06em] text-neutral-600 mb-1">
                  {isEn ? "Full Name" : "اسمك بالكامل"}
                </label>
                <input
                  type="text"
                  required
                  placeholder={isEn ? "Full Name" : "اسمك بالكامل"}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full border-b border-neutral-300/80 bg-transparent py-2.5 text-sm text-[#171410] placeholder:text-neutral-400 focus:border-brand focus:outline-none transition-colors font-normal"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-[0.18em] rtl:tracking-[0.06em] text-neutral-600 mb-1">
                  {isEn ? "Phone Number" : "رقم الهاتف"}
                </label>
                <input
                  type="tel"
                  required
                  dir="ltr"
                  placeholder="01015626755..."
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full border-b border-neutral-300/80 bg-transparent py-2.5 text-sm text-[#171410] placeholder:text-neutral-400 focus:border-brand focus:outline-none transition-colors font-normal"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-[0.18em] rtl:tracking-[0.06em] text-neutral-600 mb-1">
                  {isEn ? "Selected Project" : "المشروع المختار"}
                </label>
                <select
                  value={formData.project}
                  onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                  className="w-full border-b border-neutral-300/80 bg-transparent py-2.5 text-sm text-[#171410] focus:border-brand focus:outline-none transition-colors cursor-pointer font-normal"
                >
                  <option value="g-retaj">
                    {isEn ? "G-Retaj Hotel & Resort (Black Sea)" : "فندق ومنتجع جي-رتاج (شاطئ البحر الأسود)"}
                  </option>
                  <option value="didi-dighomi">
                    {isEn ? "Didi Dighomi Hotel Tower (Tbilisi)" : "برج ديدي ديغومي الفندقي (تبليسي)"}
                  </option>
                  <option value="montbella">
                    {isEn ? "Montbella Resort By Retaj (Tskaltubo)" : "منتجع مونتبلا رتاج الصحي (تسخالتوبو)"}
                  </option>
                  <option value="sera-retaj">
                    {isEn ? "Sera Retaj Mountain Resort" : "منتجع سيرا رتاج الجبلي"}
                  </option>
                </select>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-4 w-full py-3.5 rounded-full bg-brand hover:bg-brand-hover text-white font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98] disabled:opacity-50"
              >
                <span>{loading ? (isEn ? "Submitting..." : "جاري الإرسال...") : (isEn ? "Submit Request" : "إرسال الطلب")}</span>
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
