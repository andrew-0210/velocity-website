"use client";
import Image from "next/image";
import { useState } from "react";

type FormProps = {
  className: string;
};
const Form = ({ className }: FormProps) => {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!firstName && !lastName && !email && !password) return;

    const newItem = { firstName, lastName, email, password, id: Date.now() };
    console.log(newItem);

    setFirstname("");
    setLastname("");
    setPassword("");
    setEmail("");
  };
  return (
    <div className={className}>
      <Image
        src="velocity_logo.svg"
        alt="velocity_logo"
        width={250}
        height={100}
      />
      <div>
        <h1 className="text-center text-[1.5rem] font-medium">
          Sign Up Account
        </h1>
        <p className="text-center text-[#9e9e9e]">
          Enter your personal details to create your account
        </p>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* <select
          className='px-4 py-3 rounded-lg bg-[#1a1a1a]'
          value={quantity}
          onChange={e => setQuantity(Number(e.target.value))}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map(num => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select> */}
        <div className="flex flex-row gap-4 sm:flex-wrap lg:flex-nowrap">
          <section className="flex flex-col md:w-full">
            <label htmlFor="first_name">First Name</label>
            <input
              type="text"
              id="first_name"
              placeholder="eg.John"
              onChange={(e) => setFirstname(e.target.value)}
              value={firstName}
              className="rounded-lg bg-[#1a1a1a] px-4 py-3"
              required
              autoComplete="on"
            />
          </section>
          <section className="flex flex-col sm:flex-wrap md:w-full">
            <label htmlFor="last_name">Last Name</label>
            <input
              type="text"
              id="last_name"
              placeholder="eg.Francisco"
              onChange={(e) => setLastname(e.target.value)}
              value={lastName}
              className="rounded-lg bg-[#1a1a1a] px-4 py-3"
              autoComplete="on"
              required
            />
          </section>
        </div>
        <section className="flex flex-col sm:flex-wrap md:w-full">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="eg.johnfrans@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="rounded-lg bg-[#1a1a1a] px-4 py-3"
            autoComplete="on"
            required
          />
        </section>
        <section className="flex flex-col sm:flex-wrap md:w-full">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="rounded-lg bg-[#1a1a1a] px-4 py-3"
            required
          />
          <div className="text-[.75rem] font-semibold text-red-600">
            Must contain atleast 8 characters
          </div>
        </section>

        <button className="rounded-lg bg-[#fff] px-6 py-2 text-[#000] hover:bg-zinc-900 hover:font-semibold hover:text-white hover:ring hover:ring-zinc-700">
          Sign up
        </button>
      </form>
    </div>
  );
};

export default Form;
