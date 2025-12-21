import { getBlogPostBySlug } from "@/lib/sanity.fetch";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen py-20">
      <article className="container mx-auto px-4 max-w-7xl">
        {post.mainImage?.asset?.url && (
          <div className="relative h-96 md:h-[60dvh] w-full mb-8 rounded-lg overflow-hidden">
            <Image
              src={post.mainImage.asset.url}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          {post.title}
        </h1>

        {post.body && (
          <div className="prose prose-lg max-w-none">
            <PortableText value={post.body} />
          </div>
        )}
      </article>
    </main>
  );
}
