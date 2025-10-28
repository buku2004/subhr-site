import ProjectCard from "./ProjectCard";

export default function Home() {
  return (
    <div id="projects" className="min-h-screen p-4">    
      <div className="w-[90%] mx-auto space-y-4">
        <h1 className="font-bold gradient-blue text-4xl mb-4">Projects</h1>
        <ProjectCard
          title="CryptoBoard"
          description="Dashboard for cryptocurrency, realtime updates, market stats and AI market summarizer."
          image="/image.png"
          tags={["NextJS", "React", "TypeScript", "Node.js", "Express", "Websocket"]}

          link="https://your-project-link.com"
        />
        <ProjectCard
          title="CabShare"
          description="Cab sharing web application."
          image="/image.png"
          tags={["NextJS", "React", "TypeScript", "Firebase", "Gemini"]}
          link="https://your-course-link.com"
        />
        <ProjectCard
          title="Tumor classifier"
          description="Identification and classification of various brain tumor using custom CNN."
          image="/image.png"
          tags={["Python", "TensorFlow"]}
          link="https://your-theme-link.com"
        />
        <ProjectCard
          title="StoreEase"
          description="Store files and images with ease!"
          image="/image.png"
          tags={["JavaScript", "Node.js"]}
          link="https://your-theme-link.com"
        />
      </div>
    </div>
  );
}
