import 
{ SiJavascript, SiTypescript, SiDocker,
  SiPython, SiGit, SiMysql, SiNodedotjs, SiMongodb,
  SiReact, SiExpress, SiNextdotjs, SiSequelize,
  SiPostgresql 
} from 'react-icons/si';
import { LiaJava } from 'react-icons/lia';

function About() {
  const style = {color: "#D7B400"};

  return (
    <div id="about" className="flex flex-col justify-center bg-abt text-white md:h-screen h-fit py-10">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl mb-[1vw]">Sobre mim</h2>
        <div className="md:text-xl mb-[10vw] md:w-[65%] w-[86%] text-center">
        {`Me chamo Isaac Farias, sou um desenvolvedor web full stack. Me considero 
        alguém que ama criar e contar histórias, e esse amor me impulsiona a aprender 
        e evoluir profissionalmente na área de tecnologia. Atualmente resido em Curitiba 
        – PR e estou buscando por uma oportunidade profissional.`}
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h2 className="text-3xl mb-[1vw]">Tecnologias</h2>
        <div className="flex flex-wrap w-[80%] space-x-3 justify-evenly">
          <h3 className="text-[12px] mb-1 flex flex-col items-center">
          <SiJavascript style={style} className="mb-1 text-4xl md:text-6xl" />
            JavaScript
          </h3>
          <h3 className="text-[12px] mb-1 flex flex-col items-center">
            <SiTypescript style={style} className="mb-1 text-4xl md:text-6xl" />
            Typescript
          </h3>
          <h3 className="text-[12px] mb-1 flex flex-col items-center">
            <LiaJava style={style} className="mb-1 text-4xl md:text-6xl" />
            Java
          </h3>
          <h3 className="text-[12px] mb-1 flex flex-col items-center">
            <SiPython style={style} className="mb-1 text-4xl md:text-6xl" />
            Python
          </h3>
          <h3 className="text-[12px] mb-1 flex flex-col items-center">
            <SiDocker style={style} className="mb-1 text-4xl md:text-6xl" />
            Docker
          </h3>
          <h3 className="text-[12px] mb-1 flex flex-col items-center">
            <SiGit style={style} className="mb-1 text-4xl md:text-6xl" />
            Git
          </h3>
          <h3 className="text-[12px] mb-1 flex flex-col items-center">
            <SiNodedotjs style={style} className="mb-1 text-4xl md:text-6xl" />
            Node.js
          </h3>
          <h3 className="text-[12px] mb-1 flex flex-col items-center">
            <SiMongodb style={style} className="mb-1 text-4xl md:text-6xl" />
            MongoDb
          </h3>
          <h3 className="text-[12px] mb-1 flex flex-col items-center">
            <SiReact style={style} className="mb-1 text-4xl md:text-6xl" />
            React
          </h3>
          <h3 className="text-[12px] mb-1 flex flex-col items-center">
            <SiExpress style={style} className="mb-1 text-4xl md:text-6xl" />
            Express
          </h3>
          <h3 className="text-[12px] mb-1 flex flex-col items-center">
            <SiNextdotjs style={style} className="mb-1 text-4xl md:text-6xl" />
            Next.js
          </h3>
          <h3 className="text-[12px] mb-1 flex flex-col items-center">
            <SiMysql style={style} className="mb-1 text-4xl md:text-6xl" />
            MySQL
          </h3>
          <h3 className="text-[12px] mb-1 flex flex-col items-center">
            <SiSequelize style={style} className="mb-1 text-4xl md:text-6xl" />
            Sequelize
          </h3>
          <h3 className="text-[12px] mb-1 flex flex-col items-center">
            <SiPostgresql style={style} className="mb-1 text-4xl md:text-6xl" />
            PostgreSQL
          </h3>
        </div>
      </div>
    </div>
  )
}
  
export default About