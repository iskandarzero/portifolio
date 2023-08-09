import Image from "next/image"
import banner from "../../public/images/banner.png";

function HeroSection() {
  return (
    <div id="home" className="flex justify-center bg-hero h-screen">
      <Image className="mt-[60px] object-cover md:object-scale-down" src={banner} alt="Banner do Portifólio" />
      <h1 className="absolute top-[34%] left-[50%] md:top-[16.5vw] md:left-[25vw] transform translate-x-[-50%] bg-black
        p-[0.5vw] text-yel text-2xl border-t-[26px] mx-2
        border-[2px] border-yel h-fit md:w-fit w-[326px] shadow-2xl"
      >
        Isaac Farias <br/> Desenvolvedor Back-end
      </h1>
    </div>
  )
}

export default HeroSection