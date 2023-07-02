import 
{ SiJavascript, SiTypescript, SiDocker,
  SiPython, SiGit, SiMysql, SiNodedotjs, SiMongodb,
  SiReact, SiExpress, SiNextdotjs, SiSequelize,
  SiPostgresql 
} from 'react-icons/si';
import { LiaJava } from 'react-icons/lia';

function About() {
  const style = {color: "#D7B400", fontSize: 65};

  return (
    <div className="flex flex-col justify-center bg-abt text-white h-screen">
      <div className="flex flex-col items-center">
        <h2 className="text-[2.3vw] mb-[1vw]">Olá, eu sou o Isaac!</h2>
        <div className="text-[1.3vw] mb-[1vw]">
          Sou um desenvolvedor em início de carreira, e alguém<br/>
          que ama criar e contar histórias! Atualmente resido<br/>
          em Curitiba - PR lorem ipslum lorem ipslum lol haha
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h2 className="text-[2.3vw] mb-[1.5vw]">Tecnologias</h2>
        <div className="flex flex-wrap w-[31vw] space-x-3 justify-evenly">
          <h3 className="ml-[12px] text-[12px] mb-1 flex flex-col items-center">
            <SiJavascript style={style} className="mb-1" />
            JavaScript
          </h3>
          <h3 className="text-[12px] mb-1 flex flex-col items-center">
            <SiTypescript style={style} className="mb-1" />
            Typescript
          </h3>
          <h3 className="text-[12px] mb-1 flex flex-col items-center">
            <LiaJava style={style} className="mb-1" />
            Java
          </h3>
          <h3 className="text-[12px] mb-1 flex flex-col items-center">
            <SiPython style={style} className="mb-1" />
            Python
          </h3>
          <h3 className="text-[12px] mb-1 flex flex-col items-center">
            <SiDocker style={style} className="mb-1" />
            Docker
          </h3>
          <h3 className="text-[12px] mb-1 flex flex-col items-center">
            <SiGit style={style} className="mb-1" />
            Git
          </h3>
          <h3 className="text-[12px] mb-1 flex flex-col items-center">
            <SiNodedotjs style={style} className="mb-1" />
            Node.js
          </h3>
          <h3 className="text-[12px] mb-1 flex flex-col items-center">
            <SiMongodb style={style} className="mb-1" />
            MongoDb
          </h3>
          <h3 className="text-[12px] mb-1 flex flex-col items-center">
            <SiReact style={style} className="mb-1" />
            React
          </h3>
          <h3 className="text-[12px] mb-1 flex flex-col items-center">
            <SiExpress style={style} className="mb-1" />
            Express
          </h3>
          <h3 className="text-[12px] mb-1 flex flex-col items-center">
            <SiNextdotjs style={style} className="mb-1" />
            Next.js
          </h3>
          <h3 className="text-[12px] mb-1 flex flex-col items-center">
            <SiMysql style={style} className="mb-1" />
            MySQL
          </h3>
          <h3 className="text-[12px] mb-1 flex flex-col items-center">
            <SiSequelize style={style} className="mb-1" />
            Sequelize
          </h3>
          <h3 className="text-[12px] mb-1 flex flex-col items-center">
            <SiPostgresql style={style} className="mb-1" />
            PostgreSQL
          </h3>
        </div>
      </div>
    </div>
  )
}
  
export default About