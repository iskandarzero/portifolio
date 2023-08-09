"use client"

import { useEffect, useState } from "react";
import { fetchProjects } from "@/services/project";
import ProjectCard from "./ProjectCard";
import Project from "@/interfaces/Project.interface";

export default function Repository() {
  const [projects, setProjects] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const response = await fetchProjects();
      setProjects(response);
    };
    fetch()
  }, []);

  const changeStatus = (statusParam:string) => {
    setStatus(statusParam)
    console.log(status);
    

    if (statusParam === "all") {
      setFilteredProjects(projects)
    } else {
      const filter = projects.filter((project:Project) => project.type === statusParam);

      setFilteredProjects(filter)
    }
  }

  return (
    <div id="projects" className="bg-hero md:h-screen h-fit flex items-center justify-center flex-col">
      <h1 className="text-white text-3xl md:mb-[30px] mt-[30px] mb-[10px] md:mt-0">Projetos</h1>
      <div className="flex justify-center flex-wrap mb-[2vw]">
        <button
          className={status === 'front-end' ?
          "md:mx-2.5 m-1 p-2 bg-white hover:bg-yellow-400 active:bg-yellow-500" :
          "md:mx-2.5 m-1 p-2 bg-yel hover:bg-yellow-400 active:bg-yellow-500"}
          onClick={() => changeStatus('front-end')}
        >
          Front-end
        </button>
        <button
          className={status === 'back-end' ?
          "md:mx-2.5 m-1 p-2 bg-white hover:bg-yellow-400 active:bg-yellow-500" :
          "md:mx-2.5 m-1 p-2 bg-yel hover:bg-yellow-400 active:bg-yellow-500"}
          onClick={() => changeStatus('back-end')}
        >
          Back-end
        </button>
        <button
          className={status === 'full stack' ?
          "md:mx-2.5 m-1 p-2 bg-white hover:bg-yellow-400 active:bg-yellow-500" :
          "md:mx-2.5 m-1 p-2 bg-yel hover:bg-yellow-400 active:bg-yellow-500"}
          onClick={() => changeStatus('full stack')}
        >
          Full Stack
        </button>
        <button
          className={status === 'all' ?
          "md:mx-2.5 m-1 p-2 bg-white hover:bg-yellow-400 active:bg-yellow-500" :
          "md:mx-2.5 m-1 p-2 bg-yel hover:bg-yellow-400 active:bg-yellow-500"}
          onClick={() => changeStatus('all')}
        >
          Todos
        </button>
      </div>
      <div className="flex flex-col md:flex-row justify-center w-[70vw] mb-[30px]">
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
