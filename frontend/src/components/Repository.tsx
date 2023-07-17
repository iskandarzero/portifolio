"use client"

import { useEffect, useState } from "react";
import { fetchProjects } from "@/services/project";
import ProjectCard from "./ProjectCard";
import Project from "@/interfaces/Project.interface";

export default function Repository() {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const response = await fetchProjects();
      setProjects(response);
    };
    fetch()
  });

  const changeStatus = (status:string) => {
    if (status === "all") {
      setFilteredProjects(projects)
    } else {
      const filter = projects.filter((project:Project) => project.type === status);

      setFilteredProjects(filter)
    }
  }

  return (
    <div id="projects" className="bg-hero h-screen flex items-center justify-center flex-col">
      <h1 className="text-white text-3xl my-[30px] md:mt-0">Projetos</h1>
      <div className="mb-[30px]">
        <button className="md:mx-2.5 mx-1 p-2 bg-yel hover:bg-yellow-400 active:bg-yellow-500" onClick={() => changeStatus('all')}>Todos</button>
        <button className="md:mx-2.5 mx-1 p-2 bg-yel hover:bg-yellow-400 active:bg-yellow-500" onClick={() => changeStatus('front-end')}>Front-end</button>
        <button className="md:mx-2.5 mx-1 p-2 bg-yel hover:bg-yellow-400 active:bg-yellow-500" onClick={() => changeStatus('back-end')}>Back-end</button>
        <button className="md:mx-2.5 mx-1 p-2 bg-yel hover:bg-yellow-400 active:bg-yellow-500" onClick={() => changeStatus('full stack')}>Full Stack</button>
      </div>
      <div className="flex flex-col md:flex-row justify-center w-[70vw] flex-wrap overflow-auto">
        {filteredProjects.length > 0 ?
        filteredProjects.map((projectData, i) => (
          <ProjectCard project={projectData} key={i} />
        )) : projects.map((projectData, i) => (
          <ProjectCard project={projectData} key={i} />
        ))}
      </div>
    </div>
  )
}
