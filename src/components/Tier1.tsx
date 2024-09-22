import Image from "next/image";

const Tier1 = () => {
  return (
    <div className="cursor-pointer rounded-xl bg-gradient-to-r from-[#2b2b2b] to-[#525252] p-[1px] hover:scale-105 hover:shadow-lg hover:shadow-[#525252]/40 hover:transition hover:delay-100 hover:ease-in-out">
      <div className="rounded-xl bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#41a9fd]/50 via-[#1a1a1a] to-[#1a1a1a] p-5">
        <h2 className="text-xl font-normal">Turquoise Trek</h2>
        <p className="text-[0.75rem] text-[#b8b8b8]">
          Seamless Web 3.0 integration. Enhanced privacy. Decentralized apps.
        </p>
        <p className="mt-3 bg-gradient-to-r from-[#00c3dd] via-[#004ddd] to-[#780cdd] bg-clip-text text-2xl font-medium text-transparent">
          $4,200
          <span className="text-[0.75rem] text-[#949494]">/month</span>
        </p>
        <button className="mt-3 w-full rounded-lg border-[0.5px] border-[#414141] bg-[#363636] py-[0.5rem] text-[0.75rem] font-medium text-white">
          Choose this plan
        </button>
        <ul className="mt-[0.75rem] flex flex-col gap-[0.5rem] text-[0.75rem] text-[#b8b8b8]">
          <li>
            <span className="text-white">2 free</span> seats available
          </li>
          <li>
            <span className="text-white">250MB</span> of cloud storage
          </li>
        </ul>
        <div className="mt-3 h-[1px] w-full bg-[#363636]" />
        <ul className="mt-[0.75rem] flex flex-col gap-[0.5rem] text-[0.75rem] text-[#b8b8b8]">
          <li className="flex items-center gap-[0.5rem]">
            <Image
              src="/checkmark.svg"
              className="w-[1rem]"
              width={16}
              height={16}
              alt="checkmark"
            ></Image>
            Seamless integration
          </li>
          <li className="flex items-center gap-[0.5rem]">
            <Image
              src="/checkmark.svg"
              className="w-[1rem]"
              width={16}
              height={16}
              alt="checkmark"
            ></Image>
            Enhanced privacy
          </li>
          <li className="flex items-center gap-[0.5rem]">
            <Image
              src="/checkmark.svg"
              className="w-[1rem]"
              width={16}
              height={16}
              alt="checkmark"
            ></Image>
            Decentralized applications
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Tier1;
