"use client";

import Link from "next/link";
import { useActionState } from "react";
import registerAction from "./action";

export default function Page() {
  const [state, formAction, pending] = useActionState(registerAction, null);

  return (
    <main className="flex h-screen justify-center items-center bg-black">
      <div className="w-1/3 p-6 rounded bg-black shadow-md">
        <section className="mb-6 text-center">
          <h1 className="text-3xl font-bold mb-8 text-center text-white">CariFilm</h1>
        </section>
        <form action={formAction} className="space-y-4">
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-white bg-black leading-tight focus:outline-none focus:shadow-outline focus:bg-gray-800"
              id="name"
              type="text"
              placeholder="Masukkan nama lengkap kamu"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-white bg-black leading-tight focus:outline-none focus:shadow-outline focus:bg-gray-800"
              id="email"
              type="email"
              placeholder="Masukkan email terdaftar"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-white bg-black leading-tight focus:outline-none focus:shadow-outline focus:bg-gray-800"
              id="password"
              type="password"
              placeholder="Masukkan password anda"
            />
          </div>
          <div className="mt-4 text-center">
            <button button disabled={pending} className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" type="button">
              Register
            </button>
            {state?.success === "false" && <p className="text-red-600">{state?.message}</p>}
            {state?.success === "true" && <p className="text-green-600">Register success, please login</p>}
          </div>
          <p className="text-white">
            Have an account?{" "}
            <Link href="/login" className="hover:underline hover:underline-offset-4">
              Log in
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
}
