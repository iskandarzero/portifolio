"use client"

import Image from "next/image"
import Link from "next/link"
import logo from "../../public/images/logo.png"
import { useState } from "react";
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const style = {color: "#D7B400", fontSize: 35};

  return (
    <nav className="flex flex-col md:flex-row w-full bg-nav min-h-[60px] items-center md:justify-around sm:justify-between fixed z-10">
      <div className="flex min-h-[60px] w-full md:h-auto md:w-auto justify-between items-center">
        <Link
        href="#home" className="ml-[10%] md:ml-0">
          <Image src={logo} alt='logo' className="max-h-[42px] w-auto" />
        </Link>
        <button onClick={() => setNavbar(!navbar)} className="md:hidden mr-[5%]">
          {navbar ? <MdClose style={style} /> : <GiHamburgerMenu style={style} />}
        </button>
      </div>
      <div className={`md:flex md:w-[25rem] text-white md:justify-between ${
        navbar ? 'h-screen flex flex-col items-center w-[60%] mt-[10%]' : 'hidden'}`}>
        <Link
          className="md:hover:text-yel text-3xl md:text-base pb-6 py-2 md:py-0 hover:bg-yel md:hover:bg-transparent text-center border-b-[1px] w-full border-yel md:border-b-0"
          href="#home" onClick={() => setNavbar(false)}
        >
          Início
        </Link>
        <Link
          className="md:hover:text-yel text-3xl md:text-base pb-6 py-2 md:py-0 hover:bg-yel md:hover:bg-transparent text-center border-b-[1px] w-full border-yel md:border-b-0"
          href="#about" onClick={() => setNavbar(false)}
        >
          Sobre
        </Link>
        <Link
          className="md:hover:text-yel text-3xl md:text-base pb-6 py-2 md:py-0 hover:bg-yel md:hover:bg-transparent text-center border-b-[1px] w-full border-yel md:border-b-0"
          href="#projects" onClick={() => setNavbar(false)}
        >
          Projetos
        </Link>
        <Link
          className="md:hover:text-yel text-3xl md:text-base pb-6 py-2 md:py-0 hover:bg-yel md:hover:bg-transparent text-center border-b-[1px] w-full border-yel md:border-b-0"
          href="#contact" onClick={() => setNavbar(false)}
        >
          Contato
        </Link>
      </div>
      <div className="md:flex md:w-[40px] sm:hidden"></div>
    </nav>
  )
}

export default Navbar