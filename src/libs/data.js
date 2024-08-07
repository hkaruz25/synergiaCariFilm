import { prisma } from "../utils/prisma"
import jwt from "jsonwebtoken"
import { cookies } from "next/headers"

export const getTokenFromCookie = () => {
  const cookieStore = cookies()
  const token = cookieStore.get("token")?.value

  if (!token) {
    throw new Error("No token found")
  }

  return token
}

// Mendekode token untuk mendapatkan data pengguna
export const decodeToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET)
  } catch (error) {
    console.error("Error decoding token:", error)
    throw new Error("Invalid token")
  }
}

export const getUser = async () => {
  try {
    const token = getTokenFromCookie()
    const decoded = decodeToken(token)

    return decoded
  } catch (error) {
    console.log(error)
  }
}

export const getDataMovies = async () => {
  const movie = await prisma.movies.findMany()
  return movie
}

export const getDataMovieByUserId = async (userId) => {
  const movie = await prisma.movies.findMany({
    where: {
      user_id: userId,
      deleted: false,
    },
  })

  return movie
}

export const getDataHistoryByUserId = async (userId) => {
  const history = await prisma.history.findMany({
    where: {
      user_id: userId,
    },
    include: {
      movie: true,
      user: true,
    },
  })

  return history
}
