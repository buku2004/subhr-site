import ProjectCard from "./ProjectCard";

export default function Home() {
  return (
    <div id="projects" className="p-4">    
      <div className="w-[90%] mx-auto space-y-4">
        <h1 className="font-bold gradient-blue text-4xl mb-4">Projects</h1>
        <ProjectCard
          title="Build a Spotify Connected App"
          description="Video course that teaches how to build a web app with the Spotify Web API using REST APIs, Node, Express, React, and Styled Components."
          image="/image.png"
          tags={["Node", "Express", "React", "Spotify API"]}
          link="https://your-course-link.com"
        />
        <ProjectCard
          title="Spotify Profile"
          description="Web app for visualizing personalized Spotify data. View top artists, tracks, and more. Create playlists from recommendations."
          image="/image.png"
          tags={["React", "Express", "Spotify API", "Heroku"]}

          link="https://your-project-link.com"
        />
        <ProjectCard
          title="Halcyon Theme"
          description="Minimal dark blue theme for VS Code, Sublime Text, iTerm, and more."
          image="/image.png"
          tags={["VS Code", "Dark Theme"]}
          link="https://your-theme-link.com"
        />
        <ProjectCard
          title="Halcyon Theme"
          description="Minimal dark blue theme for VS Code, Sublime Text, iTerm, and more."
          image="/image.png"
          tags={["VS Code", "Dark Theme"]}
          link="https://your-theme-link.com"
        />
      </div>
    </div>
  );
}
