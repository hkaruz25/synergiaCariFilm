"use server";

import { prisma } from "@/utils/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function loginAction(_, formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  if (!email || !password) {
    return {
      success: "false",
      message: "All fields are required",
    };
  }

  if (password.length < 6) {
    return {
      success: "false",
      message: "Password must be at least 6 characters long",
    };
  }

  const user = await prisma.user.findFirst({
    where: {
      email,
    },
  });

  if (!user) {
    return {
      success: false,
      message: "User not found",
    };
  }

  const passwordValidation = await bcrypt.compare(password, user.password);

  if (!passwordValidation) {
    return {
      success: false,
      message: "Wrong password",
    };
  }

  const payload = {
    id: user.id,
    name: user.name,
    email: user.email,
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "3d" });

  cookies().set("token", token, {
    httpOnly: true,
    path: "/",
    secure: process.env.NODE_ENV === "production",
  });

  redirect("/dashboard");
}