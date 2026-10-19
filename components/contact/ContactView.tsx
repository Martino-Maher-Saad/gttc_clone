"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Building } from "lucide-react";
import contactData from "@/data/contact.json";

interface ContactViewProps {
  isEn?: boolean;
}

export default function ContactView({ isEn = false }: ContactViewProps) {
  const langKey = isEn ? "en" : "ar";
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    project: "g-retaj",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || loading) return;

    setLoading(true);
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      setSubmitted(true);
    } catch (err) {
      console.error("Failed to submit contact request", err);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-background py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-14">
        {/* Header */}
        <header className="mx-auto max-w-4xl text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.25em] rtl:tracking-[0.08em] text-brand">
            {isEn ? "Direct Advisory Desks" : "المكاتب الاستشارية والتنفيذية"}
          </p>
          <h1 className="font-display mt-4 text-[clamp(2.4rem,5.5vw,4.5rem)] font-semibold leading-[1.08] tracking-tight text-foreground rtl:leading-[1.24]">
            {isEn ? "Get in Touch with Golden Tower & Retaj" : "تواصل مع مستشاري البرج الذهبي وفنادق رتاج"}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-neutral-600 sm:text-base font-normal">
            {isEn
              ? "Our senior investment teams in Doha and Tbilisi are available to answer inquiries, share official brochures, and coordinate site visits."
              : "مستشارونا في الدوحة وتبليسي جاهزون للرد على استفساراتكم وتزويدكم بالأسعار والمخططات وحجز المعاينات."}
          </p>
        </header>

        {/* 2-Column: Form & Offices */}
        <div className="mt-16 sm:mt-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column (5 cols): Lead Form */}
          <div className="lg:col-span-5 rounded-sm bg-[#14110f] text-white p-8 sm:p-10 shadow-xl border border-white/10">
            <h2 className="font-display text-2xl font-semibold">
              {isEn ? "Request Investment Consultation" : "طلب استشارة وحجز فندقي"}
            </h2>
            <p className="mt-2 text-xs text-neutral-400">
              {isEn
                ? "Fill in your details below and a senior hospitality consultant will call you directly."
                : "سجل بياناتك وسيقوم مستشار الاستثمار بالتواصل معك مباشرة."}
            </p>

            {submitted ? (
              <div className="mt-8 rounded-sm bg-white/5 border border-brand/50 p-6 text-center">
                <p className="font-display text-xl font-semibold text-white">
                  {isEn ? "Thank You!" : "شكراً لك!"}
                </p>
                <p className="mt-2 text-xs text-neutral-300">
                  {isEn
                    ? "Your request has been received. Our executive desk will contact you shortly."
                    : "تم استلام طلبك بنجاح وسيتواصل معك مستشارنا التنفيذي قريباً."}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div>
                  <label className="block text-[11px] font-medium uppercase tracking-[0.18em] text-brand">
                    {isEn ? "Full Name" : "الاسم بالكامل"}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={isEn ? "Your Name" : "اسمك بالكامل"}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="mt-2 w-full border-b border-white/20 bg-transparent py-2.5 text-sm text-white placeholder:text-neutral-500 focus:border-brand focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-medium uppercase tracking-[0.18em] text-brand">
                    {isEn ? "Phone Number (with country code)" : "رقم الموبايل (مع كود الدولة)"}
                  </label>
                  <input
                    type="tel"
                    required
                    dir="ltr"
                    placeholder="+974 / +995 / +20..."
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="mt-2 w-full border-b border-white/20 bg-transparent py-2.5 text-sm text-white placeholder:text-neutral-500 focus:border-brand focus:outline-none transition-colors text-start"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-medium uppercase tracking-[0.18em] text-brand">
                    {isEn ? "Interested Project" : "المشروع المهتم به"}
                  </label>
                  <select
                    value={formData.project}
                    onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                    className="mt-2 w-full border-b border-white/20 bg-transparent py-2.5 text-sm text-white focus:border-brand focus:outline-none transition-colors cursor-pointer"
                  >
                    <option value="g-retaj" className="bg-[#14110f] text-white">
                      {isEn ? "G-Retaj Resort (Black Sea)" : "فندق ومنتجع جي-رتاج (شاطئ البحر الأسود)"}
                    </option>
                    <option value="didi-dighomi" className="bg-[#14110f] text-white">
                      {isEn ? "Didi Dighomi Hotel Tower (Tbilisi)" : "برج ديدي ديغومي الفندقي (تبليسي)"}
                    </option>
                    <option value="montbella" className="bg-[#14110f] text-white">
                      {isEn ? "Montbella Resort By Retaj (Tskaltubo)" : "منتجع مونتبلا رتاج الصحي (تسخالتوبو)"}
                    </option>
                    <option value="sera-retaj" className="bg-[#14110f] text-white">
                      {isEn ? "Sera Retaj Mountain Resort" : "منتجع سيرا رتاج الجبلي"}
                    </option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full mt-4 rounded-full bg-brand py-3.5 text-xs font-semibold uppercase tracking-wider text-white shadow-lg transition-all hover:bg-brand-hover cursor-pointer disabled:opacity-50"
                >
                  {loading
                    ? (isEn ? "Submitting..." : "جاري الإرسال...")
                    : (isEn ? "Book Consultation" : "احجز الآن — طلب استشارة")}
                </button>
              </form>
            )}
          </div>

          {/* Right Column (7 cols): Global Offices */}
          <div className="lg:col-span-7 space-y-6">
            {contactData.offices.map((office) => (
              <div
                key={office.id}
                className="rounded-sm border border-neutral-200/80 bg-white p-6 sm:p-8 shadow-xs"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand/10 text-brand">
                    <Building className="h-4 w-4" />
                  </span>
                  <h3 className="font-display text-lg sm:text-xl font-semibold text-foreground">
                    {office.title[langKey]}
                  </h3>
                </div>

                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-neutral-600">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="h-4 w-4 shrink-0 text-brand mt-0.5" />
                    <span>{office.address[langKey]}</span>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Clock className="h-4 w-4 shrink-0 text-brand mt-0.5" />
                    <span>{office.workingHours[langKey]}</span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Phone className="h-4 w-4 shrink-0 text-brand" />
                    <a dir="ltr" href={`tel:${office.tel}`} className="hover:text-brand transition-colors font-medium">
                      {office.tel}
                    </a>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Mail className="h-4 w-4 shrink-0 text-brand" />
                    <a href={`mailto:${office.email}`} className="hover:text-brand transition-colors">
                      {office.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
