import Image from "next/image";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  tags,
  link,
}: ProjectProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative flex flex-col sm:flex-row gap-4 rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm 
      hover:from-slate-800/60 hover:to-slate-900/60  hover:border-purple-400/20 hover:scale-[1.015] transition-all duration-300 p-4 text-slate-100"
    >
      {/* Image */}
      <div className="w-full sm:w-36 h-44 sm:h-28 relative flex-shrink-0 overflow-hidden rounded-xl">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Text Content */}
      <div className="flex-1 flex flex-col justify-between sm:pr-32">
        <div>
          <h3 className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            {title}
          </h3>
          <p className="text-sm text-slate-300 mt-2 leading-relaxed">
            {description}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="bg-purple-400/10 text-[0.7rem] text-purple-300 px-2.5 py-1 rounded-full border border-purple-400/20 hover:bg-purple-400/20 transition"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Mobile Live View button */}
        <div className="mt-4 sm:hidden">
          <button
            className="w-full bg-gradient-to-r from-purple-500/30 to-blue-500/30 text-purple-200 border border-purple-400/30 px-3 py-2 rounded-md text-sm font-medium hover:from-purple-500/50 hover:to-blue-500/50 hover:text-white transition-all"
          >
            Live View
          </button>
        </div>
      </div>

      {/* Desktop Live View Button */}
      <div className="hidden sm:block absolute right-5 top-1/2 -translate-y-1/2">
        <button
          className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-200 border border-purple-400/30 px-3 py-1.5 rounded-md text-sm font-medium hover:from-purple-500/40 hover:to-blue-500/40 hover:text-white transition-all"
        >
          Live View
        </button>
      </div>
    </a>
  );
}
