import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { fetchSanityData } from '../../../lib/sanity.client';

// Define your blog post type
interface BlogPost {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  content: unknown; // Adjust as needed for your content
}

type PageParams = Promise<{ blog: string }>;

export default async function BlogPage({
  params,
}: {
  params: PageParams;
}) {
  const resolvedParams = await params;
  const { blog: slug } = resolvedParams;

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
        {/* Render your blog content here, e.g. Portable Text */}
        <div>{/* ...post.content... */}</div>
      </article>
    </main>
  );
}

export async function generateMetadata({
  params,
}: {
  params: PageParams;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const { blog: slug } = resolvedParams;
  
  // Fetch the blog post data from Sanity
  const post = await fetchSanityData<BlogPost | null>(
    `*[_type == "blog" && slug.current == $slug][0]`,
    { slug }
  );

  // If no post is found, return a fallback
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  // Otherwise, build your metadata
  return {
    title: post.title,
    // Add additional SEO fields as needed
  };
}