"use server"

import { cookies } from "next/headers"

export async function logoutAction() {
  const cookieStore = cookies()

  // Hapus token dari cookie dengan menetapkan nilai kosong dan masa berlaku di masa lalu
  cookieStore.delete("token", {
    path: "/",
    secure: process.env.NODE_ENV === "production",
  })

  return {
    success: true,
    message: "Logout successful",
  }
}
