"use client"

import Link from "next/link"
import { useActionState, useEffect } from "react"
import loginAction from "./action"
import { useRouter } from "next/navigation"

export default function Page() {
  const [state, formAction, pending] = useActionState(loginAction, null)
  const router = useRouter()

  useEffect(() => {
    if (state?.success) router.push("/wishlist")
  }, [router, state?.success])

  return (
    <main className="flex h-screen justify-center items-center bg-black">
      <div className="w-1/3 p-6 rounded bg-black shadow-md">
        <form action={formAction}>
          <div className="mb-4">
            <label
              className="block text-gray-300 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-white bg-black leading-tight focus:outline-none focus:shadow-outline focus:bg-gray-800"
              name="email"
              type="email"
              placeholder="Masukkan email terdaftar"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-300 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-white bg-black leading-tight focus:outline-none focus:shadow-outline focus:bg-gray-800"
              name="password"
              type="password"
              placeholder="Masukkan password anda"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              disabled={pending}
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="submit"
            >
              {pending ? "Loading..." : "Login"}
            </button>
          </div>
          <p className="mt-4 text-center text-white">
            <Link href="/authen/register">Dont have an account? </Link>
          </p>
        </form>
        {!state?.success && <p className="text-red-600">{state?.message}</p>}
        {state?.success && <p className="text-green-600">{state?.message}</p>}
      </div>
    </main>
  )
}
