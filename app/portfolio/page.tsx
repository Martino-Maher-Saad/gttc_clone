import type { Metadata } from "next";
import PortfolioView from "@/components/portfolio/PortfolioView";
import Footer from "@/components/Footer";
import FloatingActionBar from "@/components/FloatingActionBar";
import { getPageMetadata } from "@/lib/seo";

export const metadata: Metadata = getPageMetadata("ar", "portfolio");

export default function PortfolioPage() {
  return (
    <div className="flex-1 flex flex-col">
      <PortfolioView isEn={false} />
      <Footer isEn={false} />
      <FloatingActionBar isEn={false} />
    </div>
  );
}
