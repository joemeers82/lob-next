// lib/sanity.client.ts
import { createClient } from "next-sanity";
// Environment variables
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "ieuhyvha";
const dataset = "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-05-03";
const isLocalDevelopment = process.env.NODE_ENV === "development";
// Sanity client
export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: !isLocalDevelopment,
});
// Define a base type for Sanity data (customize based on your schema)
interface SanityData {
  _id?: string;
  _type?: string;
  _createdAt?: string;
  _updatedAt?: string;
  [key: string]: unknown; // Fallback for unknown fields using 'unknown' instead of 'any'
}
// Fetch data with explicit generic type
export async function fetchSanityData<T = SanityData>(
  query: string,
  params: Record<string, unknown> = {} // Using 'unknown' instead of 'any'
): Promise<T> {
  try {
    const env = isLocalDevelopment ? "LOCAL" : "PRODUCTION";
    console.log(`Fetching from ${env} Sanity instance`);
    console.log(`Query: ${query}`);
    console.log(`Params:`, params);
    const result = await sanityClient.fetch<T>(query, params);
    if (!result) {
      throw new Error("No data returned from Sanity");
    }
    return result;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error("Error fetching Sanity data:", errorMessage);
    throw new Error(`Failed to fetch Sanity data: ${errorMessage}`);
  }
}