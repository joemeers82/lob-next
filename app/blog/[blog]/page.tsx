// app/blog/[blog]/page.tsx
import { fetchSanityData } from '../../../lib/sanity.client';

// Define the type for our blog post
interface BlogPost {
  title: string;
  slug: { current: string };
  mainImage?: {
    _type: string;
    alt: string;
    asset: {
      _ref: string;
    };
  };
  body: Array<{ _type: string; [key: string]: unknown }>; // Replace any[] with a more specific type
  metaDescription?: string;
}

// This component handles the actual rendering
export default async function Blog({ params }: { params: { blog: string } }) {
  const slug = params.blog;
  console.log(`Attempting to fetch blog post with slug: ${slug}`);
  
  // Fetch the post with the given slug
  const post = await fetchSanityData<BlogPost | null>(
    `*[_type == "blog" && slug.current == $slug][0]`,
    { slug }
  );

  if (!post) {
    return (
      <main className="container">
        <h1>Blog post not found</h1>
        <p>Could not find blog post with slug: {slug}</p>
      </main>
    );
  }

  return (
    <main className="container max-w-4xl mx-auto p-4">
      <article>
        <h1 className="text-3xl font-bold">{post.title}</h1>
        
        {post.metaDescription && (
          <p className="text-lg text-gray-600 mt-2">{post.metaDescription}</p>
        )}
        
        {/* Display the body content */}
        <div className="mt-6">
          {/* Note: You would typically use a portable text component to render the body */}
          {/* For now, just showing that we have content */}
          <p>Post content is available. To properly render it, you'll need a Portable Text renderer.</p>
        </div>
        
        <div className="mt-8">
          <p className="text-sm text-gray-500">
            This post was loaded from: {process.env.NODE_ENV === "development" 
              ? "your local Sanity Studio (localhost:3333)" 
              : "your production Sanity.io instance"}
          </p>
        </div>
      </article>
    </main>
  );
}