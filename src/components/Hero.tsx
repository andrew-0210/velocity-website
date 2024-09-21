import Button from "./Button";

const Hero = () => {
  return (
    <main className="flex min-h-[80vh] flex-col justify-center gap-5 bg-gradient-to-t from-[#dc85ff] via-[#fbf0ff] to-[#fafafa] py-[12rem]">
      <h1 className="subpixel-antialiased">
        Examine the Future Landscape of <br /> Digital Wallet Solutions Today.
      </h1>
      <p className="text-center font-medium tracking-tight text-[#797979] subpixel-antialiased">
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
