"use server"

import { prisma } from "../../utils/prisma"
import { getUser } from "../../libs/data"

export async function addReviewAction(_, formData) {
  const user = await getUser()
  const review = formData.get("review")
  const movieId = parseInt(formData.get("movie_id"))

  try {
    await prisma.history.create({
      data: {
        user_id: user.id,
        review,
        movie_id: movieId,
      },
    })

    await prisma.movies.update({
      where: { id: movieId },
      data: { watched: true },
    })

    return {
      success: true,
      message: "Successfully added History",
    }
  } catch (error) {
    console.error("Error adding wishlist:", error)
    return {
      success: false,
      message: "Something went wrong",
    }
  }
}

export async function deleteWishlistAction(movieId) {
  try {
    await prisma.movies.update({
      where: {
        id: movieId,
      },
      data: {
        deleted: true,
      },
    })

    return {
      success: true,
      message: "Successfully deleted Wishlist",
    }
  } catch (error) {
    console.error("Error deleting review:", error)
    return {
      success: false,
      message: "Something went wrong",
    }
  }
}
