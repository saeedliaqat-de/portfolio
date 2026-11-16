import type { TechnologyDetail, WorkflowProject } from "@/content/projects";

export function WorkflowSteps({ steps, label }: { steps: readonly string[]; label: string }) {
  return (
    <ol className="workflow-steps" aria-label={label} role="list">
      {steps.map((step) => <li key={step}>{step}</li>)}
    </ol>
  );
}

export function TechnologyDetails({ items }: { items: readonly TechnologyDetail[] }) {
  return (
    <dl className="case-stack-details">
      {items.map(({ label, description }) => (
        <div key={label}>
          <dt>{label}</dt>
          <dd>{description}</dd>
        </div>
      ))}
    </dl>
  );
}

export function WorkflowCaseStudy({ project }: { project: WorkflowProject }) {
  return (
    <div className="case-content workflow-content">
      <div>
        <section aria-labelledby="overview-title" data-reveal>
          <h2 id="overview-title">Overview</h2>
          <p>{project.overview}</p>
        </section>
        <section aria-labelledby="challenge-title" data-reveal>
          <h2 id="challenge-title">Business challenge</h2>
          <p>{project.challenge}</p>
          <p>{project.challengePurpose}</p>
        </section>
        <section aria-labelledby="transformation-title" data-reveal>
          <h2 id="transformation-title">Transformation delivered by the team</h2>
          {project.workflowChange.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <figure className="workflow-diagram">
            <div className="workflow-lane">
              <h3>Manual workflow</h3>
              <WorkflowSteps steps={project.manualSteps} label="Manual workflow steps" />
            </div>
            <div className="workflow-lane workflow-lane-automated">
              <h3>Automated workflow</h3>
              <WorkflowSteps steps={project.automatedSteps} label="Automated workflow steps" />
            </div>
          </figure>
        </section>
        <section aria-labelledby="contribution-title" data-reveal>
          <h2 id="contribution-title">My supporting role</h2>
          {project.supportingRole.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </section>
        <section aria-labelledby="learning-title" data-reveal>
          <h2 id="learning-title">What I learned about transformation</h2>
          <ul className="bullet-list">
            {project.learning.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>
        <section className="workflow-outcome" aria-labelledby="outcome-title" data-reveal>
          <h2 id="outcome-title">Business outcome</h2>
          <p className="workflow-outcome-label">{project.outcomeLabel}</p>
          <p>{project.outcome}</p>
        </section>
        <section aria-labelledby="technology-title" data-reveal>
          <h2 id="technology-title">Team’s technology stack</h2>
          <TechnologyDetails items={project.technicalDetails} />
        </section>
      </div>
    </div>
  );
}
