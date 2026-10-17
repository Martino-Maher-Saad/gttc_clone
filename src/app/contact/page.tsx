"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import contactData from "@/data/contact.json";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Building,
  Hammer,
  Globe2,
  Send,
  CheckCircle2,
} from "lucide-react";

export default function ContactPage() {
  const { language, isRTL } = useLanguage();
  const [activeMapIndex, setActiveMapIndex] = useState<number>(0);

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    inquiryType: "tenders",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  const currentOffice = contactData.offices[activeMapIndex];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Page Hero */}
      <section className="relative py-16 sm:py-20 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#CBD5E1] text-xs font-semibold text-[#475569] mb-4 shadow-xs">
            <Mail className="w-3.5 h-3.5 text-[#9E7D47]" />
            <span>
              {language === "en" ? "Executive Inquiries" : "التواصل المباشر"}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            {language === "en" ? (
              <>
                Contact <span className="text-[#9E7D47]">Our Offices</span>
              </>
            ) : (
              <>
                تواصل مع <span className="text-[#9E7D47]">إدارتنا ومكاتبنا</span>
              </>
            )}
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#64748B] max-w-3xl mx-auto leading-relaxed">
            {language === "en"
              ? "Connect directly with our headquarters in Doha, our industrial steel fabrication plant, or our regional development office in Georgia."
              : "تواصل مع المقر الرئيسي بالدوحة، أو مصنع الهياكل بالمنطقة الصناعية، أو المكتب الإقليمي بجورجيا."}
          </p>
        </div>
      </section>

      {/* Offices Cards */}
      <section className="py-16 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactData.offices.map((office, idx) => {
              const isSelected = activeMapIndex === idx;

              return (
                <div
                  key={office.id}
                  onClick={() => setActiveMapIndex(idx)}
                  className={`rounded-2xl p-6 sm:p-8 cursor-pointer transition-all duration-300 flex flex-col justify-between border ${
                    isSelected
                      ? "bg-white border-[#9E7D47] shadow-md ring-1 ring-[#9E7D47]"
                      : "bg-[#F8FAFC] border-[#E2E8F0] hover:border-[#CBD5E1]"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="w-10 h-10 rounded-xl bg-white border border-[#CBD5E1] flex items-center justify-center text-[#9E7D47] shadow-xs">
                        {idx === 0 ? (
                          <Building className="w-5 h-5" />
                        ) : idx === 1 ? (
                          <Hammer className="w-5 h-5" />
                        ) : (
                          <Globe2 className="w-5 h-5" />
                        )}
                      </span>

                      {isSelected && (
                        <span className="px-2.5 py-0.5 rounded-full bg-[#FBF7EE] text-[#856636] text-[11px] font-bold border border-[#E8DDC8]">
                          {language === "en" ? "Map Selected" : "الخريطة مفعلة"}
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg font-bold text-[#0F172A] mb-2">
                      {office.title[language]}
                    </h3>

                    <p className="text-xs text-[#64748B] leading-relaxed mb-6">
                      {office.address[language]}
                    </p>

                    <div className="space-y-2 text-xs text-[#334155] pt-4 border-t border-[#E2E8F0]">
                      <div className="flex items-center gap-2">
                        <Phone className="w-3.5 h-3.5 text-[#9E7D47]" />
                        <span dir="ltr" className="font-semibold">{office.tel}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="w-3.5 h-3.5 text-[#9E7D47]" />
                        <span>{office.email}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-[#9E7D47]" />
                        <span>{office.workingHours[language]}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-5 mt-6 border-t border-[#E2E8F0]">
                    <span className="text-[11px] font-bold text-[#9E7D47] block text-center">
                      {language === "en" ? "Click to view map below" : "اضغط لعرض الموقع أدناه"}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form & Map */}
      <section className="py-20 bg-[#F8FAFC] flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Form */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl bg-white border border-[#CBD5E1] p-8 sm:p-10 shadow-xs">
                <span className="text-xs font-bold text-[#9E7D47] uppercase tracking-wider block mb-1">
                  {language === "en" ? "Direct Inquiry" : "نموذج التواصل"}
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] mb-2">
                  {language === "en"
                    ? "Send Us a Message or Tender Request"
                    : "إرسال استفسار أو طلب مناقصة"}
                </h2>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed mb-8">
                  {language === "en"
                    ? "Please complete the form below. Our estimation and project team will respond within 24 working hours."
                    : "املأ البيانات وسيقوم فريق التقدير الهندسي بالرد خلال 24 ساعة."}
                </p>

                {submitted ? (
                  <div className="rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] p-8 text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-[#FBF7EE] text-[#9E7D47] flex items-center justify-center mx-auto border border-[#E8DDC8]">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-[#0F172A]">
                      {language === "en" ? "Message Sent Successfully" : "تم إرسال الرسالة بنجاح"}
                    </h3>
                    <p className="text-xs text-[#64748B] max-w-md mx-auto">
                      {language === "en"
                        ? "Thank you for reaching out. We will get back to you shortly."
                        : "شكراً لتواصلك معنا، سنتواصل معك في أقرب وقت."}
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-2 px-5 py-2 rounded-lg bg-[#9E7D47] text-white text-xs font-bold hover:bg-[#856636]"
                    >
                      {language === "en" ? "Send Another Message" : "إرسال رسالة أخرى"}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-[#334155] mb-1.5">
                          {language === "en" ? "Full Name *" : "الاسم الكامل *"}:
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="w-full bg-[#F8FAFC] border border-[#CBD5E1] focus:border-[#9E7D47] rounded-lg px-3.5 py-2.5 text-xs text-[#0F172A] outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#334155] mb-1.5">
                          {language === "en" ? "Company / Client" : "الشركة أو الجهة"}:
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) =>
                            setFormData({ ...formData, company: e.target.value })
                          }
                          className="w-full bg-[#F8FAFC] border border-[#CBD5E1] focus:border-[#9E7D47] rounded-lg px-3.5 py-2.5 text-xs text-[#0F172A] outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-[#334155] mb-1.5">
                          {language === "en" ? "Email Address *" : "البريد الإلكتروني *"}:
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full bg-[#F8FAFC] border border-[#CBD5E1] focus:border-[#9E7D47] rounded-lg px-3.5 py-2.5 text-xs text-[#0F172A] outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#334155] mb-1.5">
                          {language === "en" ? "Phone Number" : "رقم الهاتف"}:
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="w-full bg-[#F8FAFC] border border-[#CBD5E1] focus:border-[#9E7D47] rounded-lg px-3.5 py-2.5 text-xs text-[#0F172A] outline-none"
                          dir="ltr"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#334155] mb-1.5">
                        {language === "en" ? "Inquiry Nature" : "نوع الاستفسار"}:
                      </label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) =>
                          setFormData({ ...formData, inquiryType: e.target.value })
                        }
                        className="w-full bg-[#F8FAFC] border border-[#CBD5E1] focus:border-[#9E7D47] rounded-lg px-3.5 py-2.5 text-xs text-[#0F172A] outline-none"
                      >
                        {contactData.inquiryTypes.map((t) => (
                          <option key={t.id} value={t.id}>
                            {t[language]}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#334155] mb-1.5">
                        {language === "en" ? "Message & Project Scope *" : "تفاصيل الرسالة أو نطاق العمل *"}:
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full bg-[#F8FAFC] border border-[#CBD5E1] focus:border-[#9E7D47] rounded-lg px-3.5 py-2.5 text-xs text-[#0F172A] outline-none resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-lg text-xs font-bold text-white bg-[#9E7D47] hover:bg-[#856636] shadow-xs transition-all cursor-pointer flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>{language === "en" ? "Submit Inquiry" : "إرسال الاستفسار"}</span>
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Map */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="rounded-2xl bg-white border border-[#CBD5E1] p-6 shadow-xs flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#9E7D47]" />
                    <span className="text-sm font-bold text-[#0F172A]">
                      {currentOffice.title[language]}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-[#64748B]">
                    {currentOffice.poBox}
                  </span>
                </div>

                <div className="w-full h-80 sm:h-96 rounded-xl overflow-hidden border border-[#CBD5E1] relative bg-[#F8FAFC] flex-1">
                  <iframe
                    src={currentOffice.mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    title={currentOffice.title[language]}
                  />
                </div>

                <div className="mt-4 pt-4 border-t border-[#E2E8F0] flex items-center justify-between text-xs text-[#64748B]">
                  <span>
                    Tel:{" "}
                    <span className="text-[#0F172A] font-bold" dir="ltr">
                      {currentOffice.tel}
                    </span>
                  </span>
                  <span>
                    Email:{" "}
                    <span className="text-[#9E7D47] font-semibold">
                      {currentOffice.email}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
