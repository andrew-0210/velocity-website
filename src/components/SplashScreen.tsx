type SplashProps = {
  className?: string;
};

const SplashScreen = ({ className }: SplashProps) => {
  return (
    <div
      className={`${className} flex h-full flex-col gap-6 rounded-[2rem] bg-[#1a1a1a] bg-gradient-to-t from-transparent from-50% via-[#4a1a88] via-70% to-[#cc98ee]`}
    >
      <div>
        <h2 className="text-center text-[2rem] font-medium">
          Get Started with Us
        </h2>
        <p className="text-center text-[#9e9e9e]">
          Complete these easy steps to register your account
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2 rounded-[.5rem] bg-white py-3 pl-4 pr-24 text-black">
          <span className="rounded-full bg-[#000] px-[14px] py-[6px] text-white">
            1
          </span>
          <p className="block font-medium">Sign up your account</p>
        </div>
        <div className="flex items-center gap-2 rounded-[.5rem] bg-[#333333] px-4 py-3 hover:bg-white hover:text-black">
          <span className="rounded-full bg-[#3f3f3f] px-[14px] py-[6px]">
            2
          </span>
          <p className="font-medium">Set up your Workspace</p>
        </div>
        <div className="flex items-center gap-2 rounded-[.5rem] bg-[#333333] px-4 py-3 hover:bg-white hover:text-black">
          <span className="rounded-full bg-[#3f3f3f] px-[14px] py-[6px]">
            3
          </span>
          <p className="font-medium">Set up your profile</p>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
// bg-gradient-to-t from-transparent from-70% to-[#cc98ee]
