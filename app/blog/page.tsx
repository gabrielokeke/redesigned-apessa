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
    <section className="p-6 space-y-8 bg-red-50">
      {/* Writeup section */}
      <div className=" text-red-700 p-6 rounded-lg shadow-md">
        <h2 className="md:text-5xl text-2xl  text-center font-black mb-4">Bienvenue sur notre blog</h2>
        <p className="text-lg leading-relaxed">
          Ici, vous trouverez toutes les actualités, annonces et informations importantes concernant notre organisation et la communauté que nous servons. Chaque article est conçu pour tenir nos lecteurs informés des dernières initiatives, opportunités de participation et événements marquants. 
          <br />
          Nos publications couvrent le recrutement, les projets communautaires, les programmes de formation, ainsi que des réflexions sur le développement et la cohésion sociale. Nous croyons que la transparence et le partage de l’information renforcent l’engagement de chacun et favorisent un esprit de collaboration et de progrès.
          <br />
          Parcourez nos articles ci-dessous pour rester connecté et découvrir comment vous pouvez vous impliquer et contribuer à notre mission.
        </p>
      </div>

      {/* Blog grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
    </section>
  );
}
