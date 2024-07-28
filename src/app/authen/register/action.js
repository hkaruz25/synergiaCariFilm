"use server";

import { prisma } from "@/utils/prisma";
import bcrypt from "bcrypt";

export default async function registerAction(_, formData) {
  const username = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");

  if (!username || !email || !password) {
    return {
      success: "false",
      message: "All fields are required",
    };
  }

  if (password.length < 6) {
    return {
      success: "false",
      message: "Password must be 6 characters",
    };
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    return {
      success: "true",
      message: "Register success, please login",
    };
  } catch (error) {
    console.log(error);

    return {
      success: "false",
      message: "Something went wrong",
    };
  }
}
