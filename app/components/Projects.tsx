import ProjectCard from "./ProjectCard";

export default function Home() {
  return (
    <div id="projects" className="min-h-screen p-4">    
      <div className="w-[90%] mx-auto space-y-4">
        <h1 className="font-bold gradient-blue text-4xl mb-4">Projects</h1>
        <ProjectCard
          title="CryptoBoard"
          description="Dashboard for cryptocurrency, realtime updates, market stats and AI market summarizer."
          image="/miku.jpg"
          tags={["NextJS", "React", "TypeScript", "Node.js", "Express", "Websocket"]}

          link="https://github.com/buku2004/project-haligtree.git"
        />
        <ProjectCard
          title="CabShare"
          description="Cab sharing web application."
          image="/miku.jpg"
          tags={["NextJS", "React", "TypeScript", "Firebase", "Gemini"]}
          link="https://github.com/buku2004/project-cabshare.git"
        />
        <ProjectCard
          title="Tumor classifier"
          description="Identification and classification of various brain tumor using custom CNN."
          image="/miku.jpg"
          tags={["Python", "TensorFlow"]}
          link="https://your-theme-link.com"
        />
        <ProjectCard
          title="StoreEase"
          description="Store files and images with ease!"
          image="/miku.jpg"
          tags={["JavaScript", "Node.js"]}
          link="https://your-theme-link.com"
        />
      </div>
    </div>
  );
}
