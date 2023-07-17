import Image from "next/image"
import Link from 'next/link'
import Project from "@/interfaces/Project.interface"
import { AiOutlineGithub, AiOutlineLink } from 'react-icons/ai';

export default function ProjectCard({project}:{project:Project}) {
  const style = {color: "#D7B400", fontSize: 30};

  return (
    <div className="group group/item p-[2px] pt-[6px] bg-yel relative mx-[5px] mb-[1vw]">
      <p className="ml-1">{project.name}</p>
      <Image className="group/edit group-hover:brightness-50" src={project.image} alt="test" height={240} width={240} unoptimized={true} />
      <div className="flex absolute top-[50%] left-[50%] transform translate-x-[-50%]">
        <Link href={project.github} target="_blank">
          <AiOutlineGithub className="group/edit invisible group-hover/item:visible hover:fill-black active:fill-white" style={style} />
        </Link>
        <Link href={project.url} target="_blank" className="ml-[2vw]">
          <AiOutlineLink className="group/edit invisible group-hover/item:visible hover:fill-black active:fill-white" style={style} />
        </Link>
      </div>
    </div>
  )
}