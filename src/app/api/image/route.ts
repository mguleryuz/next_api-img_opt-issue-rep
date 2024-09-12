import { NextResponse } from "next/server";

export async function GET() {
  try {
    const imageUrl =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8D-IfTA58NONTORVfigb72pKqp8hHiEm7SA&s";

    // Fetch the image from the URL
    const response = await fetch(imageUrl);

    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${response.statusText}`);
    }

    // Convert the response to an array buffer and then to a Node.js Buffer
    const arrayBuffer = await response.arrayBuffer();
    const imageBuffer = Buffer.from(arrayBuffer);

    // Set appropriate headers and return the image buffer
    return new NextResponse(imageBuffer, {
      headers: {
        "Content-Type": "image/png", // PNG format
        "Content-Disposition": `inline; filename="image.png"`,
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
