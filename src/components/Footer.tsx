import Link from "next/link";
import Container from "./Container";
import Image from "next/image";

const whatWeDo = [
  { href: "/", name: "Features" },
  { href: "/", name: "Blog" },
  { href: "/", name: "Security" },
  { href: "/", name: "For Business" },
  { href: "/", name: "Payment" },
];
const whoWeAre = [
  { href: "/about_us", name: "About Us" },
  { href: "/", name: "Careers" },
  { href: "/", name: "Brand Center" },
  { href: "/", name: "Privacy" },
];
const useVelocity = [
  { href: "/", name: "Android" },
  { href: "/", name: "Iphone" },
  { href: "/", name: "Mac/PC" },
  { href: "/login", name: "Velocity Web" },
];
const needHelp = [
  { href: "/", name: "Contact Us" },
  { href: "/", name: "Help Center" },
  { href: "/", name: "Download" },
  { href: "/", name: "Security Advisories" },
];

const Footer = () => {
  return (
    <footer className="bg-[#141414] pt-[2rem] text-[0.875rem] text-[#d1d1d1]">
      <Container className="flex flex-col gap-6">
        <div className="flex flex-col gap-4 md:grid md:grid-cols-12 md:gap-8">
          <div className="col-span-4 flex flex-col gap-2">
            <div className="relative h-[3rem] w-[10rem]">
              <Image
                src="./velocity_logo.svg"
                alt="velocity_logo"
                fill={true}
                className="select-none object-contain"
              />
            </div>
            <p className="w-[20rem]">
              Velocity offers an innovative CRM app and dashboard, empowering
              users with seamless financial management tools for effortless
              transactions and comprehensive account monitoring.
            </p>
          </div>
          <div className="col-span-4 flex gap-4 md:mt-[2.75rem]">
            <div className="flex-1">
              <h3 className="mb-[1.125rem] text-[1rem] font-bold">
                What We Do
              </h3>
              <ul className="flex flex-col gap-2">
                {whatWeDo.map((link) => {
                  return (
                    <li key={link.name}>
                      <Link href={link.href}>{link.name}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="flex-1">
              <h3 className="mb-[1.125rem] text-[1rem] font-bold">
                Who We Are
              </h3>
              <ul className="flex flex-col gap-2">
                {whoWeAre.map((link) => {
                  return (
                    <li key={link.name}>
                      <Link href={link.href}>{link.name}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="col-span-4 flex gap-4 md:mt-[2.75rem]">
            <div className="flex-1">
              <h3 className="mb-[1.125rem] text-[1rem] font-bold">
                Use Velocity
              </h3>
              <ul className="flex flex-col gap-2">
                {useVelocity.map((link) => {
                  return (
                    <li key={link.name}>
                      <Link href={link.href}>{link.name}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="flex-1">
              <h3 className="mb-[1.125rem] text-[1rem] font-bold">
                Need Help?
              </h3>
              <ul className="flex flex-col gap-2">
                {needHelp.map((link) => {
                  return (
                    <li key={link.name}>
                      <Link href={link.href}>{link.name}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        <div className="relative select-none overflow-y-hidden md:h-[10.875rem] lg:h-[15.5rem]">
          <div className="z-1 absolute h-[100%] w-full bg-gradient-to-t from-[#141414] to-[#141414]/0" />
          <div className="bg-gradient-to-b from-[#7b7b7b] to-[#212121] bg-clip-text">
            <span className="block text-center text-[5.2rem] font-normal uppercase leading-[1] tracking-tight text-transparent subpixel-antialiased md:text-[12rem] lg:text-[18rem]">
              Velocity
            </span>
          </div>
        </div>
        <div className="flex justify-between border-t-[1px] border-[#797979] py-[1.5rem]">
          <p>&copy; Velocity {new Date().getFullYear()}</p>
          <div className="flex gap-4">
            <Link href="/" replace>
              Privacy Policy
            </Link>
            <Link href="/" replace>
              Terms of Use
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
