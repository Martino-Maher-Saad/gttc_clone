import type { Metadata } from "next";
import ContactView from "@/components/contact/ContactView";
import Footer from "@/components/Footer";
import FloatingActionBar from "@/components/FloatingActionBar";
import { getPageMetadata } from "@/lib/seo";

export const metadata: Metadata = getPageMetadata("ar", "contact");

export default function ContactPage() {
  return (
    <div className="flex-1 flex flex-col">
      <ContactView isEn={false} />
      <Footer isEn={false} />
      <FloatingActionBar isEn={false} />
    </div>
  );
}
