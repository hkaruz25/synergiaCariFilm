"use client";

import Link from "next/link";
import { useActionState } from "react";
import registerAction from "./action";

export default function Page() {
  const [state, formAction, pending] = useActionState(registerAction, null);

  return (
    <main>
      <main className="flex h-screen justify-center items-center bg-gray-100">
        <div className="w-1/2 p-6 border rounded bg-white shadow-md">
          <section className="mb-6 text-center">
            <h3 className="text-2xl font-bold">Register</h3>
            <p className="text-gray-600">Create an account to book your event!</p>
          </section>
          <form action={formAction} className="space-y-4">
            <input name="name" placeholder="Name" className="w-full p-2 border rounded bg-gray-100 focus:bg-blue-100" />
            <input name="email" placeholder="Email" type="email" className="w-full p-2 border rounded bg-gray-100 focus:bg-blue-100" />
            <input name="password" placeholder="Password" type="password" className="w-full p-2 border rounded bg-gray-100 focus:bg-blue-100" />
            <button disabled={pending} className="w-1/4 py-2 bg-black text-white rounded">
              Register
            </button>
            {state?.success === false && <p className="text-red-600">{state.message}</p>}
            {state?.success === true && <p className="text-green-600">{state.message}</p>}
          </form>
          <p className="mt-4 text-center">
            Have an account?{" "}
            <Link href="/authen/login" className="text-blue-500">
              Login
            </Link>
          </p>
        </div>
      </main>

      <main className="flex h-screen justify-center items-center bg-black">
        <div className="w-1/3 p-6 rounded bg-black shadow-md">
          <section className="mb-6 text-center">
            <h1 className="text-3xl font-bold mb-8 text-center text-white">CariFilm</h1>
          </section>
          <form action={formAction} className="space-y-4">
            <input name="email" placeholder="Email" type="email" className="w-full p-2 border rounded bg-gray-100 focus:bg-blue-100" />
            <input name="password" placeholder="Password" type="password" className="w-full p-2 border rounded bg-gray-100 focus:bg-blue-100" />
            <button disabled={pending} className="w-1/4 py-2 bg-black text-white rounded">
              Login
            </button>
            {!state?.success && <p className="text-red-600">{state?.message}</p>}
            {state?.success && <p className="text-green-600">{state?.message}</p>}

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
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" type="button">
                <Link href="/register">Register</Link>
              </button>
            </div>
            <p className="mt-4 text-center text-white">
              <Link href="/authen/login">Already have an account? </Link>
            </p>
          </form>
        </div>
      </main>
    </main>
  );
}
