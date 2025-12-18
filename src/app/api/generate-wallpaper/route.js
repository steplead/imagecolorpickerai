import { NextResponse } from "next/server";
import Replicate from "replicate";

export async function POST(request) {
    try {
        const { prompt } = await request.json();

        if (!process.env.REPLICATE_API_TOKEN) {
            return NextResponse.json({ error: "Missing REPLICATE_API_TOKEN" }, { status: 500 });
        }

        const replicate = new Replicate({
            auth: process.env.REPLICATE_API_TOKEN,
        });

        // Valid parameters for black-forest-labs/flux-schnell
        // See: https://replicate.com/black-forest-labs/flux-schnell/api
        const output = await replicate.run(
            "black-forest-labs/flux-schnell",
            {
                input: {
                    prompt: prompt,
                    aspect_ratio: "4:3",
                    output_format: "webp",
                    output_quality: 80,
                    megapixels: "1" // Standard quality
                }
            }
        );

        // Replicate returns an array of URLs, e.g. ["https://..."]
        // We map it to the expected Frontend format: { images: [{ url: ... }] }

        // Check if output is array or single string stream
        const imageUrl = Array.isArray(output) ? output[0] : output;

        // Some flux models return ReadableStream, flux-schnell usually returns array of strings
        if (!imageUrl) {
            throw new Error("No image URL returned from Replicate");
        }

        return NextResponse.json({
            images: [{ url: imageUrl }] // Mocking standard response structure
        });

    } catch (error) {
        console.error("Replicate Error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
