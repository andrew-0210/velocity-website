import Image from "next/image";
import Container from "./Container";

const CTABanner = () => {
  return (
    <section className="h-full bg-[#452b9a] py-[3rem] md:h-[50vh] md:overflow-y-hidden md:pt-[4rem]">
      <Container className="flex flex-col gap-6 text-[#fafafa] md:grid md:grid-cols-12 md:items-center md:gap-[2rem]">
        <div className="col-span-6 flex h-full flex-col gap-4 pt-[2rem]">
          <h2>
            Get Velocity Now: Simplify Your Finances with Our Powerful App!
            Download for Free Today!
          </h2>
          <p>
            Simplify finances effortlessly with Velocity! Our Powerful app
            streamlines your financial management. Download now for Free!
          </p>
        </div>
        <div className="col-span-4 col-start-8 col-end-13">
          <div className="relative h-[350px] md:h-[500px]">
            <Image
              src="/Check in.png"
              alt="product_image"
              fill={true}
              className="object-contain"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTABanner;
