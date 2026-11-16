import Image from "next/image";
import Link from "next/link";
import type { DevelopmentProject, Project } from "@/content/projects";
import { Icon } from "./icon";
import { WorkflowSteps } from "./project-case-study";

export function ProjectImage({ project, detail = false }: { project: DevelopmentProject; detail?: boolean }) {
  const { media } = project;
  return (
    <figure className={detail ? "project-figure" : "project-thumbnail"} data-project={project.slug} data-reveal={detail || undefined}>
      <div className="project-image-frame">
        <Image
          src={media.src}
          alt={media.alt}
          width={media.width}
          height={media.height}
          sizes={detail ? "(max-width: 760px) 92vw, (max-width: 1200px) 90vw, 1060px" : "(max-width: 650px) 90vw, (max-width: 1200px) 46vw, 520px"}
        />
      </div>
      {detail && <figcaption>{media.caption}</figcaption>}
    </figure>
  );
}

export function ProjectStack({ items }: { items: readonly string[] }) {
  return <ul className="stack-list" aria-label="Project technologies" role="list">{items.map((item) => <li key={item}>{item}</li>)}</ul>;
}

export function ProjectCategories({ items }: { items: Project["categories"] }) {
  return <ul className="category-list" aria-label="Project categories" role="list">{items.map((item) => <li key={item}>{item}</li>)}</ul>;
}

export function ProjectCard({ project }: { project: Project }) {
  const isWorkflow = project.type === "workflow";

  return (
    <article className={isWorkflow ? "project-card project-card-workflow" : "project-card"} data-reveal>
      {isWorkflow ? (
        <figure className="workflow-preview">
          <figcaption>Automated documentation workflow</figcaption>
          <WorkflowSteps steps={project.automatedSteps} label="Automated documentation steps" />
        </figure>
      ) : (
        <ProjectImage project={project} />
      )}
      <div className="project-card-body">
        <p className="label">{project.kind}</p>
        <h3>{project.title}</h3>
        <p>{project.summary}{!isWorkflow && ` ${project.contribution}`}</p>
        <ProjectCategories items={project.categories} />
        <ProjectStack items={project.stack} />
        <div className="project-card-links">
          <Link href={`/projects/${project.slug}`} className="text-link" aria-label={`Read case study: ${project.title}`}>
            Read case study <Icon name="arrow" />
          </Link>
          {project.links.map(({ href, label }) => (
            <a className="text-link" key={href} href={href} aria-label={`${label}: ${project.title}`}>
              {label} <Icon name="external" />
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
