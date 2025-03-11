import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { fetchSanityData } from '../../../lib/sanity.client';

// Define the correct props type for a Next.js App Router page component
type BlogPageProps = {
  params: {
    blog: string;
  };
  searchParams?: { [key: string]: string | string[] | undefined };
};

// Define your blog post type
interface BlogPost {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  content: any; // You might want to use a more specific type here
  // Add other fields as needed
}

// This is an async Server Component
export default async function BlogPage({ params }: BlogPageProps) {
  const slug = params.blog;
  
  // Fetch the blog post data from Sanity
  const post = await fetchSanityData<BlogPost | null>(
    `*[_type == "blog" && slug.current == $slug][0]`,
    { slug }
  );

  // If no post is found, show the 404 page
  if (!post) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <article>
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        {/* Render your blog content here */}
        <div>{/* Render your content - you might use a serializer like Portable Text */}</div>
      </article>
    </main>
  );
}

// Generate metadata for the page
export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const slug = params.blog;
  
  const post = await fetchSanityData<BlogPost | null>(
    `*[_type == "blog" && slug.current == $slug][0]`,
    { slug }
  );

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    // Add more metadata as needed
  };
}