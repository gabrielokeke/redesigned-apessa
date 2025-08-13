"use client";
//app/blog/page.tsx

import Link from "next/link";
import { motion } from "framer-motion";

export type BlogSlug =
  | "blog-1"
  | "blog-2"
  | "blog-3"
  | "blog-4"
  | "blog-5"
  | "blog-6";

interface BlogCard {
  slug: BlogSlug;
  title: string;
  imageUrl: string;
}

const blogPosts: BlogCard[] = [
  {
    slug: "blog-1",
    title: "Un mois d’août pour célébrer la fierté, le bien-être et la force de la jeunesse",
    imageUrl: "/blog1.jpg",
  },
  {
    slug: "blog-2",
    title: "RECRUTEMENT DE DEUX ANIMATEURS COMMUNAUTAIRES",
    imageUrl: "/blog2.jpg",
  },
  {
    slug: "blog-3",
    title: "RECRUTEMENT DE DEUX GESTIONNAIRES DE PROJETS",
    imageUrl: "/blog3.jpg",
  },
  {
    slug: "blog-4",
    title: "Avis de recrutement de deux stagiaires comptables",
    imageUrl: "/blog4.jpg",
  },
  {
    slug: "blog-5",
    title: "AVIS DE RECRUTEMENT D’UN STATISTICIEN",
    imageUrl: "/blog5.jpg",
  },
  {
    slug: "blog-6",
    title: "Avis d’appel à manifestation d’intérêt",
    imageUrl: "/blog6.jpg",
  },
];

export default function BlogPageList() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 ">
      {blogPosts.map(({ slug, title, imageUrl }, index) => (
        <motion.div
          key={slug}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <Link
            href={`/blog/${slug}`}
            className="group block rounded-xl overflow-hidden shadow-md shadow-red-500 hover:shadow-xl transition-all duration-300 bg-white"
          >
            <div className="overflow-hidden">
              <motion.img
                src={imageUrl}
                alt={title}
                className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
                whileHover={{ scale: 1.05 }}
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-xl mb-2 text-red-700 group-hover:text-red-900 transition-colors">
                {title}
              </h3>
            </div>
          </Link>
        </motion.div>
      ))}
    </section>
  );
}
