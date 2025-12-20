import Link from "next/link";
import { experience } from "@/app/data/experience";

export default function Experience() {
  return (
    <div className="min-h-screen p-4">
      <section id="experience" className="w-[90%] mx-auto pt-8">
        <h2 className="text-4xl font-semibold gradient-blue mb-12">
          Experience
        </h2>

        <div className="space-y-12">
          {experience.map((item, idx) => (
            <div
              key={idx}
              className="group relative grid grid-cols-[120px_1fr] gap-6 p-6 rounded-lg 
                       transition-all hover:bg-slate-800/70"
            >
              {/* LEFT: TIME */}
              <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
                {item.period}
              </span>

              {/* RIGHT: CONTENT */}
              <div>
                <h3 className="text-lg font-medium text-slate-200 group-hover:text-purple-300">
                  {item.role} ·{" "}
                  <Link
                    href={item.link}
                    target="_blank"
                    className="inline-flex items-center gap-1"
                  >
                    {item.company}
                    <span className="transition-transform group-hover:translate-x-1">
                      ↗
                    </span>
                  </Link>
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {item.description}
                </p>

                {/* TECH TAGS */}
                <ul className="mt-4 flex flex-wrap gap-2">
                  {item.tech.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full bg-purple-400/10 px-3 py-1 
                               text-xs font-medium text-purple-300"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
