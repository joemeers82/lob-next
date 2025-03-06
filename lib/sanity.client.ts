// lib/sanity.client.ts
import { createClient } from "next-sanity";

// Environment variables
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "ieuhyvha";
const dataset = "production"; // Always use production dataset
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-05-03";

// Determine if we should use local Sanity Studio
const isLocalDevelopment = process.env.NODE_ENV === "development";

// Create the Sanity client
export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: !isLocalDevelopment, // Use CDN in production, direct in development
});

// Helper function to fetch data with better error handling
export async function fetchSanityData<T = any>(
  query: string,
  params: Record<string, any> = {}
): Promise<T> {
  try {
    const env = isLocalDevelopment ? "LOCAL" : "PRODUCTION";
    console.log(`Fetching from ${env} Sanity instance`);
    console.log(`Query: ${query}`);
    console.log(`Params:`, params);

    // Always use the Sanity client
    const result = await sanityClient.fetch<T>(query, params);
    return result;
  } catch (error) {
    console.error("Error fetching Sanity data:", error instanceof Error ? error.message : String(error));
    throw error;
  }
}