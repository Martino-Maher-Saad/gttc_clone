import type { Metadata } from "next";
import PortfolioView from "@/components/portfolio/PortfolioView";
import Footer from "@/components/Footer";
import FloatingActionBar from "@/components/FloatingActionBar";
import { getPageMetadata } from "@/lib/seo";

export const metadata: Metadata = getPageMetadata("en", "portfolio");

export default function PortfolioPageEn() {
  return (
    <div className="flex-1 flex flex-col">
      <PortfolioView isEn={true} />
      <Footer isEn={true} />
      <FloatingActionBar isEn={true} />
    </div>
  );
}
