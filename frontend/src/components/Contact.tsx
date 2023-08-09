"use client"

import Image from 'next/image'
import contact from '../../public/images/contact.png'
import { FaGithub, FaLinkedin, FaPhoneSquareAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import FormContact from './FormContact';
import Link from 'next/link'

export default function Contact() {
  return (
    <div id="contact" className="flex items-center bg-abt h-screen relative">
      <Image src={contact} alt="Imagem da seção de contatos" className="m-[1vw] h-[44vw] w-auto absolute invisible md:visible" />
      <div className="flex flex-col-reverse md:flex-row bg-yel w-full md:max-h-[60%] max-h-full md:justify-end py-[1vw]">
        <div className="flex self-center md:self-auto md:items-start flex-col flex-wrap justify-evenly md:border-r-[1px] border-black mr-[1vw] mb-[10vw] md:mb-0">
          <Link href="https://github.com/iskandarzero" target="_blank">
            <p className="mr-[1vw] flex items-center md:text-base"><FaGithub size={25} className="mr-[0.1vw]"/>GitHub</p>
          </Link>
          <Link href="https://www.linkedin.com/in/brtfarias/" target="_blank">
            <p className="mr-[1vw] flex items-center md:text-base"><FaLinkedin size={25} className="mr-[0.1vw]"/>LinkedIn</p>
          </Link>
          <Link href="mailto:riderzerotg@gmail.com" target="_blank">
            <p className="mr-[1vw] flex items-center md:text-base"><MdEmail size={25} className="mr-[0.1vw]"/>riderzerotg@gmail.com</p>
          </Link>
          <Link href="tel:+5544997168668" target="_blank">
            <p className="mr-[1vw] flex items-center md:text-base"><FaPhoneSquareAlt size={25} className="mr-[0.1vw]"/>44 99716-8668</p>
          </Link>
        </div>
        <FormContact />
      </div>
    </div>
  )
}