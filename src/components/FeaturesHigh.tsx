import React from "react";
import Container from "./Container";
import Image from "next/image";
import Button from "./Button";

const FeaturesHigh = () => {
  return (
    <Container>
      <section className="flex flex-col gap-[2rem] pb-[7.5rem] md:grid md:grid-cols-12 md:items-center">
        <div className="col-span-6 flex flex-col gap-4">
          <p className="text-[0.875rem] font-bold uppercase text-[#452b9a]">
            Quick Transaction
          </p>
          <h2>Accelerating Financial Processes for Effortless Management</h2>
          <p>
            Streamline financial tasks effortlessly with accelerated processes,
            ensuring efficient and smooth management for enhanced productivity
            and ease of operations.
          </p>
          <Button intent="primary">Learn More</Button>
        </div>
        <div className="col-span-6">
          <div className="relative h-[350px] md:h-[500px]">
            <Image
              src="/Chat.png"
              alt="product_image"
              fill={true}
              className="object-contain"
            />
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-[2rem] pb-[7.5rem] md:grid md:grid-cols-12 md:items-center">
        <div className="col-span-6 col-start-7 col-end-13 flex flex-col gap-4 lg:px-[4.5rem]">
          <p className="text-[0.875rem] font-bold uppercase text-[#452b9a]">
            Save Your Money
          </p>
          <h2>Simplifying Your Funds Display for Quick Understanding</h2>
          <p>
            Enhance financial clarity with simplified fund display, ensuring
            easy comprehension and swift decision-making for effective
            management and planning.
          </p>
          <Button intent="primary">Learn More</Button>
        </div>
        <div className="col-span-6 col-start-1 col-end-6 row-start-1">
          <div className="relative h-[350px] md:h-[500px]">
            <Image
              src="/MyTeam.png"
              alt="product_image"
              fill={true}
              className="object-contain"
            />
          </div>
        </div>
      </section>
    </Container>
  );
};

export default FeaturesHigh;
