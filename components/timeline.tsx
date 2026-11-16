import Link from "next/link";
import type { TimelineEntry } from "@/content/profile";
import { Icon } from "./icon";

export function Timeline({
  entries,
  heading: Heading = "h3",
}: {
  entries: readonly TimelineEntry[];
  heading?: "h3" | "h4";
}) {
  return (
    <ol className="timeline">
      {entries.map((entry) => (
        <li key={entry.title}>
          <p className="timeline-date">{entry.period}</p>
          <Heading>{entry.title}</Heading>
          <p className="timeline-organization">{entry.organization}</p>
          <p>{entry.detail}</p>
          {entry.distinction && <p className="timeline-distinction">{entry.distinction}</p>}
          {entry.coursework && (
            <div className="timeline-coursework">
              <p>{entry.coursework.label}</p>
              <ul role="list">
                {entry.coursework.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          )}
          {entry.highlights && (
            <ul className="timeline-highlights">
              {entry.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
            </ul>
          )}
          {entry.link && (
            <Link className="text-link" href={entry.link.href}>{entry.link.label} <Icon name="arrow" /></Link>
          )}
        </li>
      ))}
    </ol>
  );
}
