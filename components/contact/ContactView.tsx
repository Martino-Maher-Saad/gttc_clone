"use client";

import { useState } from "react";
import { Phone, MapPin, Clock, Building } from "lucide-react";
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
          <p className="text-xs font-semibold uppercase tracking-[0.25em] rtl:tracking-[0.08em] text-brand">
            {isEn ? "Direct Advisory Desks" : "المكاتب الاستشارية والتنفيذية"}
          </p>
          <h1 className="font-display mt-4 text-[clamp(2.4rem,5.5vw,4.5rem)] font-semibold leading-[1.08] tracking-tight text-foreground rtl:leading-[1.24]">
            {isEn ? "Get in Touch with Golden Tower & Retaj" : "تواصل مع مستشاري البرج الذهبي وفنادق رتاج"}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-[#3d3832] font-normal">
            {isEn
              ? "Our investment advisory team is available to answer inquiries, share official brochures, and coordinate reservations."
              : "مستشارونا جاهزون للرد على كافة استفساراتكم وتزويدكم بالكتيبات الرسمية والمخططات وحجز الوحدات."}
          </p>
        </header>

        {/* 2-Column: Form & Offices */}
        <div className="mt-16 sm:mt-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column (5 cols): Lead Form */}
          <div className="lg:col-span-5 rounded-md bg-[#14110f] text-white p-8 sm:p-10 shadow-xl border border-white/10">
            <h2 className="font-display text-2xl font-semibold">
              {isEn ? "Request Investment Consultation" : "طلب استشارة وحجز فندقي"}
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-neutral-400">
              {isEn
                ? "Fill in your details below and a senior hospitality consultant will call you directly."
                : "سجل بياناتك وسيقوم مستشار الاستثمار بالتواصل معك مباشرة."}
            </p>

            {submitted ? (
              <div className="mt-8 rounded-md bg-white/5 border border-brand/50 p-6 text-center">
                <p className="font-display text-xl font-semibold text-white">
                  {isEn ? "Thank You!" : "شكراً لك!"}
                </p>
                <p className="mt-2 text-xs sm:text-sm text-neutral-300">
                  {isEn
                    ? "Your request has been received. Our executive desk will contact you shortly."
                    : "تم استلام طلبك بنجاح وسيتواصل معك مستشارنا التنفيذي قريباً."}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-brand">
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
                  <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                    {isEn ? "Phone Number" : "رقم الهاتف"}
                  </label>
                  <input
                    type="tel"
                    required
                    dir="ltr"
                    placeholder="01015626755..."
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="mt-2 w-full border-b border-white/20 bg-transparent py-2.5 text-sm text-white placeholder:text-neutral-500 focus:border-brand focus:outline-none transition-colors text-start"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-brand">
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
                  className="w-full mt-4 rounded-full bg-brand py-3.5 text-sm font-semibold uppercase tracking-wider text-white shadow-lg transition-all hover:bg-brand-hover hover:scale-[1.02] cursor-pointer disabled:opacity-50"
                >
                  {loading
                    ? (isEn ? "Submitting..." : "جاري الإرسال...")
                    : (isEn ? "Book Consultation" : "احجز الآن — طلب استشارة")}
                </button>
              </form>
            )}
          </div>

          {/* Right Column (7 cols): Executive Office Card (First Card Only) */}
          <div className="lg:col-span-7 space-y-6">
            {contactData.offices.slice(0, 1).map((office) => (
              <div
                key={office.id}
                className="rounded-md border border-neutral-200/80 bg-white p-7 sm:p-10 shadow-md"
              >
                <div className="flex items-center gap-3.5 border-b border-neutral-100 pb-5">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand/10 text-brand">
                    <Building className="h-5 w-5" />
                  </span>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-brand">
                      {isEn ? "Company Office" : "مقر الشركة"}
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl font-semibold text-[#171410] mt-0.5">
                      {office.title[langKey]}
                    </h3>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm sm:text-base text-[#3d3832]">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 shrink-0 text-brand mt-0.5" />
                    <div>
                      <p className="text-xs uppercase font-semibold text-neutral-400 mb-0.5">{isEn ? "Address" : "العنوان"}</p>
                      <span className="text-[#171410] font-medium text-sm sm:text-base">{office.address[langKey]}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 shrink-0 text-brand mt-0.5" />
                    <div>
                      <p className="text-xs uppercase font-semibold text-neutral-400 mb-0.5">{isEn ? "Working Hours" : "ساعات العمل"}</p>
                      <span className="text-[#171410] font-medium text-sm sm:text-base">{office.workingHours[langKey]}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 shrink-0 text-brand mt-0.5" />
                    <div>
                      <p className="text-xs uppercase font-semibold text-neutral-400 mb-0.5">{isEn ? "Direct Call" : "الهاتف المباشر"}</p>
                      <a dir="ltr" href={`tel:${office.tel}`} className="hover:text-brand transition-colors font-bold text-[#171410] text-base sm:text-lg">
                        {office.tel}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 shrink-0 text-emerald-600 mt-0.5" />
                    <div>
                      <p className="text-xs uppercase font-semibold text-emerald-600 mb-0.5">واتساب مبيعات</p>
                      <a
                        dir="ltr"
                        href={`https://wa.me/201146659065`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-emerald-600 transition-colors font-bold text-[#171410] text-base sm:text-lg"
                      >
                        {office.mob}
                      </a>
                    </div>
                  </div>


                </div>

                {office.mapEmbedUrl && (
                  <div className="mt-8 overflow-hidden rounded-md border border-neutral-200/80 aspect-[16/8] w-full">
                    <iframe
                      src={office.mapEmbedUrl}
                      title="Office Location Map"
                      className="w-full h-full border-0"
                      loading="lazy"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
