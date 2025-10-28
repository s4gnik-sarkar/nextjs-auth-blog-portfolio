import Image from "next/image";
import Hero from "../../public/hero.png";
import Button from "@/components/Button/Button";


export default function Home() {
  return (
    <div className="flex items-center gap-[200px]">
      <div className="flex-1 flex flex-col gap-[50px]">
        <h1 className="title !text-7xl bg-gradient-to-b from-[#194c33] to-[#bbb] bg-clip-text text-transparent font-bold">Better design for your digital products.</h1>
        <p className="text-2xl font-light">
          Turning your idea into reality. We bring together the teams from the global tech industry.
        </p>
        <Button url="/portfolio" text="See Our Works"/>
      </div>
      <div className="item">
      <Image src={Hero} alt="hero image" className="w-[100%] h-[500px] object-contain motion-scale-loop-[1.1] motion-translate-x-loop-[-4%] motion-translate-y-loop-[12%] motion-duration-[3000ms] motion-ease-in-out" />
      </div>
    </div>
  );
}
