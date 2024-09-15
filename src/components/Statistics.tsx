const stats = [
  {
    stat: "500K",
    description:
      "Play Store Downloads reach significant milestone for the application.",
  },
  {
    stat: "400K+",
    description:
      "Daily Transactions achieve important milestone for the Application.",
  },
  {
    stat: "300K+",
    description: "Global Active Users reach Milestone on the Platform.",
  },
];

const Statistics = () => {
  return (
    <section className="flex flex-col gap-5 py-[7.5rem]">
      <h2 className="text-center text-[1.5rem] font-semibold leading-tight tracking-tighter md:text-[2rem]">
        User Statistics for E-Wallet: Insights into Platform
        <br /> Engagement and Growth.
      </h2>
      <p className="text-center font-medium tracking-tight text-[#797979]">
        Explore user data to understand E-wallet usage patterns, engagement
        levels,and
        <br /> platform expansion opportunities for informed decisions.
      </p>
      <div className="flex flex-col gap-2 md:grid md:grid-cols-12 md:gap-[2rem]">
        {stats.map((data) => (
          <div className="col-span-4 rounded-xl border border-[#d8d8d8] px-[2rem] py-[2rem]">
            <p className="mb-[0.5rem] text-center text-[1.75rem] font-semibold tracking-tight">
              {data.stat}
            </p>
            <p className="text-center font-medium tracking-tight text-[#797979]">
              {data.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statistics;
