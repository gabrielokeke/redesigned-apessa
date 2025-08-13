// app/resources/page.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

// Keys must match your resourceDetails object
export type ResourceSlug = 
  | "resource-1"
  | "resource-2"
  | "resource-3"
  | "resource-4"
  | "resource-5"
  | "resource-6";

interface ResourceCard {
  slug: ResourceSlug;
  title: string;
  description: string;
  imageUrl: string;
}

const resources: ResourceCard[] = [
  {
    slug: "resource-1",
    title: "Resource 1",
    description: "Brief description 1",
    imageUrl: "/resource1.jpg",
  },
  {
    slug: "resource-2",
    title: "Resource 2",
    description: "Brief description 2",
    imageUrl: "/resource2.jpg",
  },
  {
    slug: "resource-3",
    title: "Resource 3",
    description: "Brief description 3",
    imageUrl: "/resource3.jpg",
  },
  {
    slug: "resource-4",
    title: "Resource 4",
    description: "Brief description 4",
    imageUrl: "/resource4.jpg",
  },
  {
    slug: "resource-5",
    title: "Resource 5",
    description: "Brief description 5",
    imageUrl: "/resource5.jpg",
  },
  {
    slug: "resource-6",
    title: "Resource 6",
    description: "Brief description 6",
    imageUrl: "/resource6.jpg",
  },
];

export default function ResourcesPage() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {resources.map(({ slug, title, description, imageUrl }, index) => (
        <motion.div
          key={slug}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <Link
            href={`/resources/${slug}`}
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
              <p className="text-gray-700">{description}</p>
            </div>
          </Link>
        </motion.div>
      ))}
    </section>
  );
}
