import Image from "next/image"
import logo from "../../public/images/logo.png"

function Navbar() {
  return (
    <nav className="flex w-full bg-nav h-[65px] items-center justify-around fixed z-40">
      <Image src={logo} alt='logo' width={40} />
      <div className="flex w-[25rem] text-white justify-between">
        <a className="hover:text-yel" href="/#home">
          Início
        </a>
        <a className="hover:text-yel" href="/#about">
          Sobre
        </a>
        <a className="hover:text-yel" href="/#projects">
          Projetos
        </a>
        <a className="hover:text-yel" href="/#contact">
          Contato
        </a>
      </div>
      <div className="flex w-[40px]"></div>
    </nav>
  )
}

export default Navbar