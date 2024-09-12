import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function GET() {
  try {
    const fileName = `vercel.png`;

    // Build the file path from the static directory
    const filePath = path.join(process.cwd(), fileName);

    // Read the image file into a Buffer
    const imageBuffer = await fs.readFile(filePath);

    // Set appropriate headers and return the image buffer
    return new NextResponse(imageBuffer, {
      headers: {
        "Content-Type": "image/png", // PNG format
        "Content-Disposition": `inline; filename="${fileName}"`,
        "Cache-Control": "public, max-age=31536000, immutable", // Cache headers for long-lived assets
      },
    });
  } catch (err: any) {
    return new NextResponse(
      err?.message || "Unexpected: Could not retrieve any error messages",
      {
        status: err?.statusCode ?? 400,
      }
    );
  }
}
