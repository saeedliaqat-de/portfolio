"use client";

import Image from "next/image";
import { useId, useState } from "react";

const groups = [
  {
    name: "Web development & backend",
    tools: [
      ["React", "react"],
      ["Next.js", "nextdotjs"],
      ["TypeScript", "typescript"],
      ["Tailwind CSS", "tailwindcss"],
      ["Node.js", "nodedotjs"],
      ["Express", "express"],
      ["REST APIs", "rest-apis"],
      ["PostgreSQL", "postgresql"],
    ],
  },
  {
    name: "AI integration, programming & tools",
    tools: [
      ["OpenAI API", "openai"],
      ["Gemini API", "ai-integration"],
      ["Python", "python"],
      ["C++", "cplusplus"],
      ["Data structures & algorithms", "dsa"],
      ["Git / GitHub", "git"],
      ["Vercel", "vercel"],
    ],
  },
] as const;

function SkillList({ tools, repeated = false }: { tools: (typeof groups)[number]["tools"]; repeated?: boolean }) {
  return (
    <ul className="skill-marquee-list" aria-hidden={repeated || undefined} role="list">
      {tools.map(([name, logo]) => (
        <li className="skill-marquee-item" key={logo}>
          <Image src={`/images/skills/${logo}.svg`} alt="" width={23} height={23} />
          <span>{name}</span>
        </li>
      ))}
    </ul>
  );
}

export function SkillMarquees() {
  const [paused, setPaused] = useState(false);
  const headingId = useId();

  return (
    <div className="skill-marquees" data-paused={paused}>
      <div className="skill-marquees-heading">
        <h3 id={headingId}>Hands-on experience</h3>
        <button type="button" className="skill-motion-toggle" onClick={() => setPaused(!paused)}>
          {paused ? "Resume animation" : "Pause animation"}
        </button>
      </div>
      <div className="skill-groups" aria-labelledby={headingId} role="group">
        {groups.map(({ name, tools }, index) => (
          <section className="skill-group" key={name} aria-labelledby={`${headingId}-${index}`}>
            <h4 id={`${headingId}-${index}`}>{name}</h4>
            <div className="skill-marquee">
              <div className="skill-marquee-track" data-direction={index === 0 ? "right" : "left"}>
                <SkillList tools={tools} />
                <SkillList tools={tools} repeated />
              </div>
            </div>
          </section>
        ))}
      </div>
      <div className="skill-development">
        <h3>Currently developing</h3>
        <ul className="category-list" role="list">
          <li>Data analytics</li>
          <li>Business intelligence</li>
          <li>Process improvement</li>
        </ul>
      </div>
    </div>
  );
}
