import { NextRequest, NextResponse } from "next/server"
import { prisma } from "../../../utils/prisma"
import { getUser } from "../../../libs/data"
import { uploadFile } from "../../../libs/uploadFile"

export async function POST(request) {
  try {
    const formData = await request.formData()
    const file = formData.get("image")

    if (!file) {
      return NextResponse.json(
        { success: false, message: "File is required" },
        { status: 400 }
      )
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    const key = `${Date.now()}_${file.name}`.replace(/\s+/g, "_")
    const fileUrl = await uploadFile({
      key,
      folder: "posters",
      body: buffer,
    })

    const rating = parseInt(formData.get("rating"))
    const judul = formData.get("judul")
    const genre = formData.get("genre")
    const tahun = parseInt(formData.get("tahun"))
    const sinopsis = formData.get("sinopsis")
    const user = await getUser()

    await prisma.movies.create({
      data: {
        rating,
        judul,
        genre,
        sinopsis,
        tahun,
        image: fileUrl,
        user_id: user.id,
        deleted: false,
        watched: false,
      },
    })

    return NextResponse.json({
      success: true,
      message: "Wishlist added and file uploaded successfully",
    })
  } catch (error) {
    console.error("Error adding wishlist:", error)
    return NextResponse.json(
      { success: false, message: "Operation failed", error: error.message },
      { status: 500 }
    )
  }
}
