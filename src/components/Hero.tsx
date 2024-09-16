import Button from "./Button";


const Hero = () => {
  return (
    <main className="flex h-screen flex-col justify-center gap-5 bg-gradient-to-t from-[#e5fdb5] via-[#fcfff5] to-[#fafafa] py-[12rem]">
      <h1>
        Examine the Future Landscape of <br /> Digital Wallet Solutions Today.
      </h1>
      <p className="text-center font-medium tracking-tight text-[#797979]">
        Embark on a journey to discover your dream home by exploring our
        <br />
        premier listings available for browsing today.
      </p>
      <div className="flex justify-center">
        <Button intent="secondary">Learn More</Button>
        <Button intent="primary">Explore</Button>
      </div>
    </main>
  );
};

export default Hero;
