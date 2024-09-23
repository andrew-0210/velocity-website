import SearchBar from "../../../components/SearchBar";
import Tier1 from "../../../components/Tier1";
import Tier2 from "../../../components/Tier2";
import Tier3 from "../../../components/Tier3";

const Pricing = () => {
  return (
    <section className="m-auto flex h-full max-w-[1400px] flex-col items-center justify-center px-[1rem] sm:h-[100vh]">
      <h1 className="bg-gradient-to-t from-[#646464] to-[#ffffff] bg-clip-text text-[2.5rem] font-semibold text-transparent">
        Pricing
      </h1>
      <section className="grid grid-cols-1 items-center justify-center gap-3 py-10 text-[#fafafa] sm:grid-cols-3">
        <Tier1 />
        <Tier2 />
        <Tier3 />
      </section>
      <SearchBar />
    </section>
  );
};

export default Pricing;
