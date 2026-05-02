import { getBlogPostBySlug } from "@/lib/sanity.fetch";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/lib/sanityImage";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getBlogPostBySlug(params.slug);
  if (!post) return {};

  const imageUrl = post.mainImage
    ? urlFor(post.mainImage).width(1200).height(630).url()
    : "/onama.jpg";

  return {
    title: post.title,
    description: post.excerpt || post.title,
    alternates: {
      canonical: `https://www.naturkop.rs/blog/${params.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt || post.title,
      url: `https://www.naturkop.rs/blog/${params.slug}`,
      type: "article",
      images: [{ url: imageUrl, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt || post.title,
      images: [imageUrl],
    },
  };
}

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
        {post.mainImage && (
          <div className="relative h-96 md:h-[60dvh] w-full mb-8 rounded-lg overflow-hidden">
            <Image
              src={urlFor(post.mainImage).width(1200).height(800).auto('format').quality(85).url()}
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
