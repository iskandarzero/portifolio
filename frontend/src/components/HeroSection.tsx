import Image from "next/image"
import banner from "../../public/images/banner.png";

function HeroSection() {
  return (
    <div className="flex justify-center bg-[#222222] h-screen">
      <Image className="mt-[4.9vw] object-scale-down" src={banner} alt="banner" />
      <h1 className="absolute bg-black mt-[17.5vw] mr-[46vw]
        p-[0.5vw] text-yel text-[1.25vw] border-t-[1.5vw]
        border-[0.15vw] border-yel h-fit"
      >
        Isaac Farias <br/> Desenvolvedor Back-end
      </h1>
    </div>
  )
}

export default HeroSection