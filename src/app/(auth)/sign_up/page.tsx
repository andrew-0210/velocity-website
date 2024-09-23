import Form from "../../../components/Form";
import SplashScreen from "../../../components/SplashScreen";

export default function Login() {
  return (
    <section className="grid h-[100vh] grid-cols-12 gap-4 bg-[#000000] p-[1rem] text-[#ffffff]">
      <SplashScreen className="col-span-6 flex items-center justify-end py-12" />
      <Form className="col-span-6 flex flex-col items-center justify-center gap-8 p-10" />
    </section>
  );
}
