type childrenProps = { children: React.ReactNode };

const Container = ({ children }: childrenProps) => {
  return (
    <section className="px-[1rem] md:m-auto md:max-w-[1440px]">
      {children}
    </section>
  );
};

export default Container;
