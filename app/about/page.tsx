import type { Metadata } from "next";
import AboutView from "@/components/about/AboutView";
import Footer from "@/components/Footer";
import FloatingActionBar from "@/components/FloatingActionBar";
import { getPageMetadata } from "@/lib/seo";

export const metadata: Metadata = getPageMetadata("ar", "about");

export default function AboutPage() {
  return (
    <div className="flex-1 flex flex-col">
      <AboutView isEn={false} />
      <Footer isEn={false} />
      <FloatingActionBar isEn={false} />
    </div>
  );
}
