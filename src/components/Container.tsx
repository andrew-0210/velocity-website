type childrenProps = { children: React.ReactNode; className?: string };

const Container = ({ children, className }: childrenProps) => {
  return (
    <section className={`${className} px-[1rem] md:m-auto md:max-w-[1440px]`}>
      {children}
    </section>
  );
};

export default Container;
