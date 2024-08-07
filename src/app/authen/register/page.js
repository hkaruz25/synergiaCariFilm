"use client"

import Link from "next/link"
import { useActionState, useEffect } from "react"
import registerAction from "./action"
import { useRouter } from "next/navigation"

export default function Page() {
  const [state, formAction, pending] = useActionState(registerAction, null)

  // Inside the Page component
  const router = useRouter()

  useEffect(() => {
    if (state?.success) {
      router.push("/authen/login")
    }
  }, [router, state?.success])

  return (
    <main className="flex h-screen justify-center items-center bg-black">
      <div className="w-1/2 p-6 rounded-lg border bg-black shadow-md">
        <section className="mb-6 text-center text-white">
          <h3 className="text-2xl font-bold">Register</h3>
          <p className="">Create an account to book your event!</p>
        </section>
        <form action={formAction} className="space-y-4 flex flex-col">
          <input
            name="name"
            placeholder="Name"
            className="w-full p-2 border rounded bg-black text-white"
          />
          <input
            name="email"
            placeholder="Email"
            type="email"
            className="w-full p-2 border rounded bg-black text-white"
          />
          <input
            name="password"
            placeholder="Password"
            type="password"
            className="w-full p-2 border rounded bg-black text-white"
          />
          <button
            disabled={pending}
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="submit"
          >
            {pending ? "Loading..." : "Submit"}
          </button>
          {state?.success === false && (
            <p className="text-red-600">{state.message}</p>
          )}
          {state?.success === true && (
            <p className="text-green-600">{state.message}</p>
          )}
        </form>
        <p className="mt-4 text-center text-white">
          Have an account?{" "}
          <Link href="/authen/login" className="text-blue-500">
            Login
          </Link>
        </p>
      </div>
    </main>
  )
}
