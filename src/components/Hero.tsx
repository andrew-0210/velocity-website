import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="flex h-full flex-col justify-center gap-5 bg-gradient-to-t from-[#ffffff] via-[#e8afff] to-[#fbf0ff] pt-[12rem]">
      <h1 className="px-[1rem] subpixel-antialiased md:mx-auto md:max-w-[800px]">
        Examine the Future Landscape of Employee Management Today.
      </h1>
      <p className="px-[1rem] text-center font-medium tracking-tight text-[#494949] subpixel-antialiased md:mx-auto md:max-w-[600px]">
        Embark on a journey to discover your dream home by exploring our premier
        listings available for browsing today.
      </p>
      <div className="flex justify-center">
        <Button intent="secondary">Learn More</Button>
        <Button intent="primary">Explore</Button>
      </div>
      <div className="relative mt-7">
        <div className="absolute z-[26] h-[100%] w-full bg-gradient-to-t from-[#ffffff]/80 to-[#ffffff]/0" />

        <div className="relative h-[350px] w-auto md:h-[600px]">
          <Image
            src="/Check in.png"
            alt="Velocity_Image"
            className="object-contain"
            fill={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
