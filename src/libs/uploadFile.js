import { s3Client } from "../utils/aws"
import { PutObjectCommand } from "@aws-sdk/client-s3"

export async function uploadFile({ key, folder, body }) {
  try {
    // Sanitasi nama file
    const sanitizedKey = key
      .replace(/\s+/g, "_")
      .replace(/[^a-zA-Z0-9._-]/g, "")

    const command = new PutObjectCommand({
      Bucket: process.env.R2_BUCKETNAME,
      Key: `${folder}/${sanitizedKey}`,
      Body: body,
      ContentType: body.type || "application/octet-stream",
    })

    await s3Client.send(command)

    // Pastikan URL yang dikembalikan konsisten
    const fileUrl = `${process.env.R2_PUBLIC_URL}/${process.env.R2_BUCKETNAME}/${folder}/${sanitizedKey}`
    return fileUrl
  } catch (error) {
    console.error("Error uploading file:", error)
    throw new Error("File upload failed")
  }
}
