import Image from "next/image";

export default function About() {
  return (
    <div id="about" className="min-h-screen p-4">
      <div className="w-[90%] mx-auto space-y-4">
        <h1 className="font-bold gradient-blue text-4xl mb-4">Short Profile</h1>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Large Card */}
          <div className="relative col-span-2 rounded-xl overflow-hidden bg-[#1e293b]">
            <Image
              src="/poo.webp"
              alt="Laptop"
              width={800}
              height={500}
              className="object-cover w-full h-full opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6 flex items-end">
              <p className="text-xl font-semibold">
                Backend Engineer who has built systems for e-commerce, real-time
                auctions, and stock exchanges.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            {/* Language Card */}
            <div className="bg-[#1e293b] rounded-xl p-6 text-md border border-white/10 h-[100%]">
            <h3 className="font-bold text-xl">What I&apos;m working on right now</h3>
            <ul className="list-disc list-inside">
              <li>Diving deep into the intersection of Agentic AI and Generative Models. Thrilled to be working on solutions that are truly autonomous and creative.</li>
              <li>Learning about different data structures & algorithms.</li>
            </ul>
            </div>

            {/* Tech Stack Card */}
            <div className="bg-[#1e293b] rounded-xl p-6 border border-white/10 h-[100%]">
              <p className="mb-4">
                My primary tech stack <br />
                <span className="text-2xl font-bold">NEXT.JS</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Express",
                  "React",
                  "Typescript",
                  "Python",
                  "C#",
                  "MongoDB",
                  "NextJS",
                  "TensorFlow",
                  "HTML",
                  "CSS",
                  "OpenCV",
                  "Solidity",
                  "Rust",
                  "TailwindCSS",
                  "NodeJS",
                  "C++",
                  "Ruby",
                  "Go",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="bg-[#334155] px-3 py-1 rounded-lg text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Full-width Card */}
        <div className="bg-[#1e293b] rounded-xl p-6 mt-6 border border-white/10 flex items-center gap-4 sm:gap-6">
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
              National Institute of Technology(NIT), Rourkela
            </h2>
            <p className="text-sm sm:text-base text-slate-300 font-mono">
              B.Tech in Ceramic Engineering(2023 - 2027)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
