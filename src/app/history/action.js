"use server"

import { prisma } from "../../utils/prisma"

export async function deleteHistoryAction(movieId) {
  try {
    await prisma.history.delete({
      where: { id: movieId },
    })

    return {
      success: true,
      message: "Successfully deleted Hsitory",
    }
  } catch (error) {
    console.error("Error deleting review:", error)
    return {
      success: false,
      message: "Something went wrong",
    }
  }
}
