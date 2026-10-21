import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin } from "lucide-react";
import siteConfig from "@/data/site_config.json";
import homeContent from "@/data/home_content.json";

interface FooterProps {
  isEn?: boolean;
}

export default function Footer({ isEn = false }: FooterProps) {
  const footerData = homeContent.footer;
  const langKey = isEn ? "en" : "ar";
  const navLinks = isEn ? siteConfig.nav.en : siteConfig.nav.ar;

  return (
    <footer className="relative isolate overflow-hidden bg-[#14110f] text-background">
      <div className="mx-auto w-full max-w-7xl px-6 pt-24 pb-10 sm:px-10 sm:pt-32 lg:px-14 lg:pt-40">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-12 md:gap-16">
          {/* Logo & Platform Bio */}
          <div className="col-span-2 md:col-span-5">
            <Link href={isEn ? "/en" : "/"} className="inline-block">
              <Image
                src="/images/logo.jpg"
                alt={isEn ? siteConfig.brand.name_en : siteConfig.brand.name_ar}
                width={160}
                height={58}
                className="h-12 w-auto object-contain rounded-md p-1 bg-white"
              />
            </Link>
            <p className="mt-6 max-w-md text-base sm:text-lg leading-relaxed text-background/80 font-normal">
              {footerData.about[langKey]}
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 md:col-span-3">
            <h4 className="text-sm sm:text-base font-semibold uppercase tracking-[0.2em] rtl:tracking-[0.08em] text-background/70">
              {footerData.quickLinksTitle[langKey]}
            </h4>
            <ul className="mt-6 space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="footer-link inline-block text-base sm:text-lg text-background/85 transition-colors hover:text-white font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="col-span-1 md:col-span-4">
            <h4 className="text-sm sm:text-base font-semibold uppercase tracking-[0.2em] rtl:tracking-[0.08em] text-background/70">
              {footerData.contactTitle[langKey]}
            </h4>
            <ul className="mt-6 space-y-5">
              <li className="flex items-start gap-3">
                <Phone className="mt-1 shrink-0 text-brand h-5 w-5" strokeWidth={1.5} />
                <div className="text-base sm:text-lg">
                  <p className="text-sm uppercase tracking-[0.15em] rtl:tracking-[0.06em] text-background/65 font-semibold">
                    {isEn ? "Sales & Reservations" : "المبيعات والحجوزات"}
                  </p>
                  <a
                    dir="ltr"
                    href={`tel:${footerData.phone}`}
                    className="text-background/95 transition-colors hover:text-brand font-bold tabular-nums text-base sm:text-lg"
                  >
                    {footerData.phone}
                  </a>
                </div>
              </li>



              <li className="flex items-start gap-3">
                <MapPin className="mt-1 shrink-0 text-brand h-5 w-5" strokeWidth={1.5} />
                <div className="text-base sm:text-lg">
                  <p className="text-sm uppercase tracking-[0.15em] rtl:tracking-[0.06em] text-background/65 font-semibold">
                    {isEn ? "Location" : "الموقع"}
                  </p>
                  <span className="text-background/95 font-medium text-sm sm:text-base">
                    {footerData.address[langKey]}
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Disclaimer & Copyright */}
        <div className="mt-16 flex flex-col gap-6 border-t border-background/10 pt-8 sm:mt-20 md:flex-row md:items-center md:justify-between lg:mt-24">
          <p className="max-w-md text-sm leading-relaxed text-background/70 font-normal">
            {isEn
              ? `Official authorized platform for marketing ${siteConfig.brand.name_en} developments.`
              : `منصة رسمية معتمدة لتسويق مشروعات ${siteConfig.brand.name_ar} الفندقية الاستثمارية.`}
          </p>

          <p className="text-xs text-background/60">
            {isEn
              ? `All rights reserved © ${new Date().getFullYear()} — ${siteConfig.brand.name_en}`
              : `جميع الحقوق محفوظة © ${new Date().getFullYear()} — ${siteConfig.brand.name_ar}`}
          </p>
        </div>
      </div>
    </footer>
  );
}
