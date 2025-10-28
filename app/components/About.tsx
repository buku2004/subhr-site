import Image from "next/image";

export default function About() {
  return (
    <div id="about" className="min-h-screen p-4">
      <div className="w-[90%] mx-auto space-y-4">
        <h1 className="font-bold gradient-blue text-4xl mb-4">Short Profile</h1>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Large Card with Background Video */}
          <div className="relative col-span-2 rounded-xl overflow-hidden bg-[#1e293b]">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-70"
            >
              <source src="/bg-vid.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6 flex items-end">
              <p className="text-xl font-semibold relative z-10 leading-relaxed">
                Backend Engineer who has built systems for e-commerce, real-time
                auctions, and stock exchanges.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            {/* What I'm Working On */}
            <div className="bg-[#1e293b] rounded-xl p-6 border border-white/10 h-[100%] shadow-sm hover:shadow-md hover:scale-[1.01] transition-all">
              <h3 className="font-bold text-xl mb-3 text-slate-100">
                What I&apos;m working on right now
              </h3>
              <ul className="list-disc list-inside space-y-2 text-slate-300 text-[0.95rem] leading-relaxed">
                <li>
                  Diving deep into Agentic AI and Generative
                  Models — interested in developing systems that are autonomous, adaptive and
                  creative!
                </li>
                <li>
                  Strengthening fundamentals in Data Structures and Algorithms
                  to improve efficiency and problem-solving depth.
                </li>
              </ul>
            </div>

            {/* Tech Stack Card */}
            <div className="bg-[#1e293b] rounded-xl p-6 border border-white/10 h-[100%] shadow-sm hover:shadow-md hover:scale-[1.01] transition-all">
              <p className="mb-4 text-slate-200 font-semibold text-lg">
                My primary tech stack
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Next.js",
                  "C++",
                  "Node.js",
                  "React",
                  "Typescript",
                  "Express",
                  "JavaScript",
                  "TailwindCSS",
                  "SQL",
                  "MySQL",
                  "Python",
                  "Discord.js",
                  "Git",
                  "GitHub",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="bg-[#334155]/80 px-3 py-1 rounded-lg text-sm text-slate-100 border border-white/5 hover:border-slate-400/30 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Full-width Card */}
        <div className="bg-[#1e293b] rounded-xl p-6 mt-6 border border-white/10 flex items-center gap-4 sm:gap-6 shadow-sm">
          <div className="w-16 h-16 sm:w-20 sm:h-20 relative flex-shrink-0">
            <Image
              src="/nitr-logo.png"
              alt="NIT Rourkela Logo"
              fill
              className="object-contain rounded-md"
            />
          </div>

          <div className="flex flex-col justify-center text-slate-100">
            <h2 className="text-xl sm:text-2xl font-semibold">
              National Institute of Technology (NIT), Rourkela
            </h2>
            <p className="text-sm sm:text-base text-slate-300 font-mono">
              B.Tech in Ceramic Engineering (2023 - 2027)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
