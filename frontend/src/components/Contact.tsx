import Image from 'next/image'
import contact from '../../public/images/contact.png'
import { FaGithub, FaLinkedin, FaPhoneSquareAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function Contact() {
  return (
    <div id="contact" className="flex items-center bg-abt h-screen relative">
      <Image src={contact} alt="contact image" className="m-[1vw] h-[44vw] w-auto absolute invisible md:visible" />
      <div className="flex flex-col-reverse md:flex-row bg-yel w-full md:max-h-[60%] max-h-[80%] md:justify-end py-[1vw]">
        <div className="flex md:flex-col flex-wrap justify-evenly md:border-r-[1px] border-black mr-[1vw] mb-[10vw] md:mb-0">
          <p className="mr-[1vw] flex items-center text-xs md:text-base"><FaGithub size={25} className="mr-[0.1vw]"/>GitHub</p>
          <p className="mr-[1vw] flex items-center text-xs md:text-base"><FaLinkedin size={25} className="mr-[0.1vw]"/>LinkedIn</p>
          <p className="mr-[1vw] flex items-center text-xs md:text-base"><MdEmail size={25} className="mr-[0.1vw]"/>riderzerotg@gmail</p>
          <p className="mr-[1vw] flex items-center text-xs md:text-base"><FaPhoneSquareAlt size={25} className="mr-[0.1vw]"/>44 99716-8668</p>
        </div>
        <form className="flex flex-col md:mr-[10%] md:m-0 mx-[7%] mt-[10vw] mb-[4vw]">
          <h1 className="text-3xl text-center md:text-start">Contato</h1>
          <label htmlFor="name">Nome:</label>
          <input className="my-[0.3vw] border-b-[1px] border-black bg-transparent" name="name" type="text"/>

          <label htmlFor="email">E-mail:</label>
          <input className="my-[0.3vw] border-b-[1px] border-black bg-transparent" name="email" type="email"/>

          <label htmlFor="message">Mensagem:</label>
          <textarea name="message" className="my-[0.3vw] border-b-[1px] border-black bg-transparent resize-none" rows={3} cols={30}/>

          <button type="submit" className="bg-nav p-[1vw] m-[10px] border-[1px] w-[35%] md:w-full rounded-sm text-white self-center">Enviar</button>
        </form>
      </div>
    </div>
  )
}