import type { Metadata } from "next";
import ContactView from "@/components/contact/ContactView";
import Footer from "@/components/Footer";
import FloatingActionBar from "@/components/FloatingActionBar";
import { getPageMetadata } from "@/lib/seo";

export const metadata: Metadata = getPageMetadata("en", "contact");

export default function ContactPageEn() {
  return (
    <div className="flex-1 flex flex-col">
      <ContactView isEn={true} />
      <Footer isEn={true} />
      <FloatingActionBar isEn={true} />
    </div>
  );
}
