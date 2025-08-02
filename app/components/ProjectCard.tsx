import Image from "next/image";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  stars?: number;
  installs?: string;
  link: string;
}

export default function ProjectCard({ title, description, image, tags, stars, installs, link }: ProjectProps) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="flex gap-4 rounded-xl 
    hover:bg-[#334155] hover:border-white/10 hover:border hover:shadow-lg transition p-4 text-white"
    >
      <div className="w-32 h-26 relative">
        <Image src={image} alt={title} fill className="object-cover rounded-md" />
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold">{title} ↗</h3>
        <p className="text-sm text-gray-300 mt-1">{description}</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span key={i} className="bg-[#0f172a] text-xs px-2 py-1 rounded-full">{tag}</span>
          ))}
        </div>
      </div>
    </a>
  );
}
