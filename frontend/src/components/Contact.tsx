import Image from 'next/image'
import contact from '../../public/images/contact.png'
import { FaGithub, FaLinkedin, FaPhoneSquareAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function Contact() {
  return (
    <div id="contact" className="flex items-center bg-abt h-screen relative">
      <Image src={contact} alt="contact image" className="m-[1vw] h-[45vw] w-auto absolute" />
      <div className="flex bg-yel w-full max-h-[60%] justify-end py-[1vw]">
        <div className="flex flex-col justify-evenly border-r-[1px] border-black mr-[1vw]">
          <p className="mr-[1vw] flex items-center"><FaGithub size={30} className="mr-[0.1vw]"/>GitHub</p>
          <p className="mr-[1vw] flex items-center"><FaLinkedin size={30} className="mr-[0.1vw]"/>LinkedIn</p>
          <p className="mr-[1vw] flex items-center"><MdEmail size={30} className="mr-[0.1vw]"/>riderzerotg@gmail.com</p>
          <p className="mr-[1vw] flex items-center"><FaPhoneSquareAlt size={30} className="mr-[0.1vw]"/>+55 44 9 9716-8668</p>
        </div>
        <form className="flex flex-col mr-[10%]">
          <h1 className="text-[2.3vw]">Contato</h1>
          <label htmlFor="name">Nome:</label>
          <input className="text-[18px] my-[0.3vw] border-b-[1px] border-black bg-transparent" name="name" type="text"/>

          <label htmlFor="email">E-mail:</label>
          <input className="text-[18px] my-[0.3vw] border-b-[1px] border-black bg-transparent" name="email" type="email"/>

          <label htmlFor="message">Mensagem:</label>
          <textarea name="message" className="text-[18px] my-[0.3vw] border-b-[1px] border-black bg-transparent resize-none" rows={2} cols={30}/>

          <button type="submit" className="bg-nav p-[1vw] m-[10px] border-[1px] rounded-sm text-white">Enviar</button>
        </form>
      </div>
    </div>
  )
}