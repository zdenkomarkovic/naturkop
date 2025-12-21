import { getAllBlogPosts } from "@/lib/sanity.fetch";
import Link from "next/link";
import Image from "next/image";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function BlogPage() {
  const posts = await getAllBlogPosts();

  return (
    <main className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Blog
        </h1>

        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">
              Uskoro ćemo objaviti blog postove.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {posts.map((post: any) => (
              <Link
                key={post._id}
                href={`/blog/${post.slug.current}`}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                {post.mainImage?.asset?.url && (
                  <div className="relative h-64 w-full">
                    <Image
                      src={post.mainImage.asset.url}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    {post.title}
                  </h2>
                  {post.excerpt && (
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  )}
                  {post.publishedAt && (
                    <p className="text-sm text-gray-500">
                      {new Date(post.publishedAt).toLocaleDateString('sr-RS', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
