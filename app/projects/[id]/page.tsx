import { PROJECTS } from "../../constants/projects";
import ProjectScene from "./ProjectScene";

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const project = PROJECTS.find((p) => p.id === resolvedParams.id);

  if (!project) return null;

  return <ProjectScene project={project} />;
}
