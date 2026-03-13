"use client";

import Link from "../components/Link";
import ProjectList from "../components/ProjectList";

import PixelArtStudioImage from "@/app/assets/projects/pixelartstudio.png";
import TaskItImage from "@/app/assets/projects/taskit.png";

import { useState } from "react";
import { Search } from "lucide-react";

export default function Home() {
  const projects = [
    {
      title: "Pixel Art Studio",
      href: "https://github.com/siddhiipatell/Pixel-Art-Studio",
      description:
        "a browser-based pixel art editor built with React and Vite that lets users design, edit, and explore artwork at the pixel level using real-time tools on a responsive canvas.",
      image: PixelArtStudioImage,
      imageAlt: "Pixel Art Studio",
      technologies: [
        "React",
        "Vite",
        "Tailwind CSS",
        "JavaScript",
      ],
      github: "https://github.com/siddhiipatell/Pixel-Art-Studio",
      demo: "https://pixel-art-studio-app.vercel.app",
    },
    {
      title: "Task.it",
      href: "https://github.com/siddhiipatell/task.it_mini",
      description:
        "a full-stack task management system featuring Role-Based Access Control (RBAC) for Admins, Managers, and Employees. It supports real-time task assignment, status tracking, and secure authentication. ",
      image: TaskItImage,
      imageAlt: "Task.it",
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "OAuth",
        "RBAC"
      ],
      github: "https://github.com/siddhiipatell/task.it_mini",
      demo: "",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <div className="relative">
        <Search className="absolute top-2.5 left-3 size-6 text-stone-400" />
        <input
          type="text"
          placeholder="search for a project, technology, etc."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full py-2 px-4 border border-stone-400 rounded-md bg-transparent focus:outline-none focus:border-stone-700 pl-10"
        />
      </div>
      <ProjectList
        projects={projects.filter(
          (project) =>
            project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.description
              .toLowerCase()
              .includes(searchTerm.toLowerCase()) ||
            project.technologies.some((technology) =>
              technology.toLowerCase().includes(searchTerm.toLowerCase())
            )
        )}
      />
      <p>
        You can check out the rest of my projects{" "}
        <Link href="https://github.com/siddhiipatell?tab=repositories&q=&type=source" className="font-medium">
          here
        </Link>
        .
      </p>
    </>
  );
}
