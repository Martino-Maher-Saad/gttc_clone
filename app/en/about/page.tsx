import type { Metadata } from "next";
import AboutView from "@/components/about/AboutView";
import Footer from "@/components/Footer";
import FloatingActionBar from "@/components/FloatingActionBar";
import { getPageMetadata } from "@/lib/seo";

export const metadata: Metadata = getPageMetadata("en", "about");

export default function AboutPageEn() {
  return (
    <div className="flex-1 flex flex-col">
      <AboutView isEn={true} />
      <Footer isEn={true} />
      <FloatingActionBar isEn={true} />
    </div>
  );
}
