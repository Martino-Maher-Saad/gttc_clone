import type { Metadata } from "next";
import seoData from "@/data/seo.json";
import siteConfig from "@/data/site_config.json";

export type SupportedLang = "ar" | "en";
export type StandardPageKey =
  | "home"
  | "g-retaj"
  | "didi-dighomi"
  | "montbella"
  | "sera-retaj"
  | "portfolio"
  | "gallery"
  | "about"
  | "contact"
  | string;

interface PageSeo {
  title: string;
  description?: string;
  keywords?: string | string[];
  path?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
}

// Single source of truth for base URL (easily changed in site_config.json or via env var)
export function getBaseSiteUrl(): string {
  const url =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (siteConfig as { contact?: { site_url?: string } })?.contact?.site_url ||
    "https://www.gttc.co";
  return url.replace(/\/$/, "");
}

export function getFullUrl(path: string = "/"): string {
  const base = getBaseSiteUrl();
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return cleanPath === "/" ? base : `${base}${cleanPath}`;
}

export function getPageMetadata(
  lang: SupportedLang,
  pageKey: StandardPageKey
): Metadata {
  const langData = seoData[lang] as unknown as Record<string, PageSeo>;
  const page = langData?.[pageKey] || langData?.home;

  const defaultTitle = lang === "ar" ? siteConfig.brand.name_ar : siteConfig.brand.name_en;

  if (!page) {
    return {
      title: defaultTitle,
    };
  }

  const fullUrl = getFullUrl(page.path || "/");

  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    alternates: {
      canonical: fullUrl,
    },
    openGraph: {
      title: page.ogTitle || page.title,
      description: page.ogDescription || page.description,
      url: fullUrl,
      siteName: defaultTitle,
      locale: lang === "ar" ? "ar_QA" : "en_US",
      type: "website",
      images: page.ogImage ? [{ url: page.ogImage }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: page.ogTitle || page.title,
      description: page.ogDescription || page.description,
      images: page.ogImage ? [page.ogImage] : undefined,
    },
  };
}

export function getBlogPostMetadata(
  lang: SupportedLang,
  slug: string
): Metadata {
  const langData = seoData[lang] as unknown as { blog_posts?: Record<string, PageSeo> };
  const post = langData?.blog_posts?.[slug];
  const defaultTitle = lang === "ar" ? siteConfig.brand.name_ar : siteConfig.brand.name_en;

  if (!post) {
    return {
      title: defaultTitle,
    };
  }

  const fullUrl = getFullUrl(post.path || `/blog/${slug}`);

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: {
      canonical: fullUrl,
    },
    openGraph: {
      title: post.ogTitle || post.title,
      description: post.ogDescription || post.description,
      url: fullUrl,
      siteName: defaultTitle,
      locale: lang === "ar" ? "ar_QA" : "en_US",
      type: "article",
      images: post.ogImage ? [{ url: post.ogImage }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.ogTitle || post.title,
      description: post.ogDescription || post.description,
      images: post.ogImage ? [post.ogImage] : undefined,
    },
  };
}
