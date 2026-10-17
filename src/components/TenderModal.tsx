"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  X,
  FileText,
  UploadCloud,
  Send,
  CheckCircle2,
} from "lucide-react";

interface TenderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TenderModal({ isOpen, onClose }: TenderModalProps) {
  const { language, isRTL } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [selectedFile, setSelectedFile] = useState<string | null>(null);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/50 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white border border-[#CBD5E1] rounded-2xl shadow-xl overflow-hidden my-8 p-6 sm:p-10 flex flex-col">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#F8FAFC] hover:bg-slate-200 text-[#64748B] hover:text-[#0F172A] border border-[#CBD5E1] transition-all cursor-pointer z-10"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FBF7EE] border border-[#E8DDC8] text-xs font-bold text-[#856636] mb-2">
            <FileText className="w-3.5 h-3.5 text-[#9E7D47]" />
            <span>
              {language === "en" ? "Tender & Estimation Request" : "طلب تسعير ومناقصة"}
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A]">
            {language === "en"
              ? "Request for Quotation (RFQ)"
              : "طلب تسعير ومناقصة هندسية"}
          </h3>
          <p className="text-xs text-[#64748B] mt-0.5">
            {language === "en"
              ? "Direct submission to GTTC estimation and engineering team."
              : "يصل الطلب مباشرة لإدارة التقدير الهندسي والمناقصات بشركة البرج الذهبي."}
          </p>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-[#FBF7EE] text-[#9E7D47] flex items-center justify-center mx-auto border border-[#E8DDC8]">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-[#0F172A]">
              {language === "en" ? "Request Submitted" : "تم إرسال الطلب بنجاح"}
            </h4>
            <p className="text-xs text-[#64748B] max-w-md mx-auto">
              {language === "en"
                ? "Our team will review your specifications and contact you shortly."
                : "سيقوم فريقنا بدراسة المخططات والتواصل معكم في أقرب وقت."}
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-3 px-5 py-2 rounded-lg bg-[#9E7D47] text-white text-xs font-bold hover:bg-[#856636]"
            >
              {language === "en" ? "Done" : "إغلاق"}
            </button>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="space-y-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#334155] mb-1">
                  {language === "en" ? "Client / Company *" : "الجهة أو الشركة *"}:
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Al Rayyan"
                  className="w-full bg-[#F8FAFC] border border-[#CBD5E1] focus:border-[#9E7D47] rounded-lg px-3.5 py-2 text-xs text-[#0F172A] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#334155] mb-1">
                  {language === "en" ? "Contact Person *" : "اسم المسؤول *"}:
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Eng. Khalid"
                  className="w-full bg-[#F8FAFC] border border-[#CBD5E1] focus:border-[#9E7D47] rounded-lg px-3.5 py-2 text-xs text-[#0F172A] outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#334155] mb-1">
                  {language === "en" ? "Email *" : "البريد الإلكتروني *"}:
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  className="w-full bg-[#F8FAFC] border border-[#CBD5E1] focus:border-[#9E7D47] rounded-lg px-3.5 py-2 text-xs text-[#0F172A] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#334155] mb-1">
                  {language === "en" ? "Phone *" : "رقم الجوال *"}:
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+974 XXXX XXXX"
                  className="w-full bg-[#F8FAFC] border border-[#CBD5E1] focus:border-[#9E7D47] rounded-lg px-3.5 py-2 text-xs text-[#0F172A] outline-none"
                  dir="ltr"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#334155] mb-1">
                {language === "en" ? "Discipline" : "القطاع الهندسي"}:
              </label>
              <select className="w-full bg-[#F8FAFC] border border-[#CBD5E1] focus:border-[#9E7D47] rounded-lg px-3.5 py-2 text-xs text-[#0F172A] outline-none">
                <option value="civil">Structural & Civil Engineering</option>
                <option value="steel">Structural Steel & Metal Fabrication</option>
                <option value="mep">MEP Engineering</option>
                <option value="turnkey">Full Turnkey EPC</option>
                <option value="fitout">Architectural & Fit-out</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#334155] mb-1">
                {language === "en" ? "Scope Details *" : "تفاصيل نطاق العمل *"}:
              </label>
              <textarea
                rows={3}
                required
                placeholder={
                  language === "en"
                    ? "Specify project location, tonnage, or timeline..."
                    : "حدد الموقع، المساحات، الأوزان، والجدول الزمني المطلوب..."
                }
                className="w-full bg-[#F8FAFC] border border-[#CBD5E1] focus:border-[#9E7D47] rounded-lg px-3.5 py-2 text-xs text-[#0F172A] outline-none resize-none"
              />
            </div>

            <div className="p-3.5 rounded-lg border border-dashed border-[#CBD5E1] bg-[#F8FAFC] text-center">
              <UploadCloud className="w-5 h-5 text-[#9E7D47] mx-auto mb-1" />
              <p className="text-xs text-[#64748B]">
                {selectedFile || (language === "en" ? "Attach Drawings or BOQ" : "إرفاق المخططات أو جداول الكميات")}
              </p>
              <input
                type="file"
                className="hidden"
                id="tender-input"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    setSelectedFile(e.target.files[0].name);
                  }
                }}
              />
              <label
                htmlFor="tender-input"
                className="text-[11px] text-[#9E7D47] font-bold hover:underline cursor-pointer block mt-0.5"
              >
                {language === "en" ? "Choose file" : "اختر ملفاً"}
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg text-xs font-bold text-white bg-[#9E7D47] hover:bg-[#856636] shadow-xs transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{language === "en" ? "Submit RFQ" : "إرسال طلب التسعير"}</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
