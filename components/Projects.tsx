"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  SiNextdotjs,
  SiTailwindcss,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiVercel,
  SiTypescript,
  SiStripe,
  SiCloudinary,
} from "react-icons/si"
import { ExternalLink, Code, Eye } from "lucide-react"

interface Project {
  title: string
  url: string
  github: string
  imageUrl: string
  techStack: string[]
}

export default function Projects() {
  const [, setHoveredIndex] = useState<number | null>(null)

  const projects: Project[] = [
    {
      title: "Vibely",
      url: "https://vibely-liart.vercel.app/",
      github: "https://github.com/Krushan12/Vibely",
      imageUrl: "/projects/vibely.png",
      techStack: ["React", "Express", "Node.js", "MongoDB", "Tailwind CSS"],
    },
    {
      title: "Phoge",
      url: "https://phoge.vercel.app/",
      github: "https://github.com/Krushan12/phoge",
      imageUrl: "/projects/phoge.png",
      techStack: ["Next.js", "TypeScript", "MongoDB", "Clerk", "Cloudinary", "Stripe", "Shadcn"],
    },
    {
      title: "Kanban Board",
      url: "https://kanban-board-teal-pi.vercel.app/",
      github: "https://github.com/Krushan12/Kanban-board",
      imageUrl: "/projects/kanbanboard.png",
      techStack: ["React", "Tailwind CSS"],
    },
    {
      title: "Web Profile",
      url: "https://profile-mu-silk.vercel.app/",
      github: "https://github.com/Krushan12/profile",
      imageUrl: "/projects/webprofile.png",
      techStack: ["Next.js", "Tailwind CSS", "Magic UI"],
    },
  ]

  const getTechIcon = (tech: string) => {
    switch (tech.toLowerCase()) {
      case "next.js":
        return <SiNextdotjs className="text-white" />
      case "react":
        return <SiReact className="text-cyan-400" />
      case "node.js":
        return <SiNodedotjs className="text-green-500" />
      case "express":
        return <SiExpress className="text-white" />
      case "mongodb":
        return <SiMongodb className="text-green-700" />
      case "tailwind css":
        return <SiTailwindcss className="text-blue-500" />
      case "typescript":
        return <SiTypescript className="text-blue-600" />
      case "stripe":
        return <SiStripe className="text-purple-500" />
      case "cloudinary":
        return <SiCloudinary className="text-blue-400" />
      default:
        return <SiVercel className="text-white" />
    }
  }

  return (
    <section id="projects" className="py-20 bg-black text-white w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-16">
          <motion.div
            className="text-4xl lg:text-6xl font-bold mb-4 text-center bg-gradient-to-r from-[#f1f5f966] via-[#f1f5f9] via-51% to-[#f1f5f966] text-transparent bg-clip-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl md:text-5xl text-white lg:text-6xl font-bold relative inline-block">
              My <span className="text-blue-500">Projects</span>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-blue-500 rounded-full"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </h2>
          </motion.div>
          <p className="text-gray-400 max-w-lg mx-auto text-sm md:text-base">
            A showcase of my web development projects, from full-stack applications to interactive web experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group cursor-pointer transform transition-all duration-300 hover:-translate-y-1"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800/50 h-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-80"></div>
                  <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-blue-500/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors"
                        aria-label={`Visit ${project.title}`}
                      >
                        <Eye className="w-4 h-4" />
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-gray-800/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition-colors"
                      aria-label={`View code for ${project.title}`}
                    >
                      <Code className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-blue-400 transition-colors"
                        aria-label={`External link to ${project.title}`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                  {project.url && (
                    <p className="text-gray-500 text-xs mb-3 truncate">
                      {project.url.replace(/(^\w+:|^)\/\//, '')}
                    </p>
                  )}
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-1 bg-gray-800/50 px-2 py-0.5 rounded-md text-xs font-medium text-gray-300"
                      >
                        <span className="text-base">{getTechIcon(tech)}</span>
                        <span>{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href="https://github.com/Krushan12"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-all shadow-md hover:shadow-lg shadow-blue-500/20 hover:shadow-blue-600/30 text-sm"
          >
            <span>View All Projects</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}