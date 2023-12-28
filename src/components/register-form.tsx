import React, { type FormEvent } from "react";
const RegisterForm: React.FC = () => {
  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement);
    const res = await fetch("/api/auth/register", {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    console.log(data)
  };
  return (
    <form onSubmit={submit}
      className="w-[95%] md:w-fit bg-zinc-800 static z-10 flex flex-col gap-6 py-6 rounded-sm"
    >
      <div className="flex flex-col gap-1 px-8">
        <label htmlFor="name" className="text-zinc-400 font-sans">
          Name
        </label>
        <input
          className="w-full md:w-80 h-8 bg-transparent border-zinc-400 border-b-2 outline-none text-base text-zinc-200"
          type="text"
          name="name"
          id="name"
        />
      </div>
      <div className="flex flex-col gap-1 px-8">
        <label htmlFor="email" className="text-zinc-400 font-sans">
          Email
        </label>
        <input
          className="w-full md:w-80 h-8 bg-transparent border-zinc-400 border-b-2 outline-none text-base text-zinc-200"
          type="email"
          name="email"
          id="email"
        />
      </div>
      <div className="flex flex-col gap-1 px-8">
        <label htmlFor="passwd" className="text-zinc-400 font-sans">
          Password
        </label>
        <input
          className="w-full md:w-80 h-8 bg-transparent border-zinc-400 border-b-2 outline-none text-base text-zinc-200"
          type="password"
          name="passwd"
          id="passwd"
        />
      </div>
      <button
        type="submit"
        className="py-4 px-2 mx-8 bg-zinc-400 font-sans rounded-lg"
      >
        Register
      </button>
    </form>
  );
};
export default RegisterForm;
