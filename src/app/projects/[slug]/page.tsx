import { notFound } from "next/navigation";
import type { Metadata } from "next";
import projectsData from "@/data/projects.json";
import { ProjectData } from "@/components/ProjectModal";
import ProjectDetailView from "@/components/ProjectDetailView";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const instant = false;

export function generateStaticParams() {
  const allProjects = projectsData as unknown as ProjectData[];
  return allProjects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const allProjects = projectsData as unknown as ProjectData[];
  const project = allProjects.find((p) => p.slug === slug || p.id === slug);

  if (!project) {
    return {
      title: "Project Not Found | GTTC",
    };
  }

  return {
    title: `${project.title.en} | GTTC Project Portfolio`,
    description: project.description.en.slice(0, 160),
    openGraph: {
      title: `${project.title.en} | Golden Tower Trading & Contracting`,
      description: project.description.en.slice(0, 160),
      images: [project.image],
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const allProjects = projectsData as unknown as ProjectData[];
  const project = allProjects.find((p) => p.slug === slug || p.id === slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = allProjects
    .filter((p) => p.id !== project.id && p.category === project.category)
    .slice(0, 3);

  return <ProjectDetailView project={project} relatedProjects={relatedProjects} />;
}
