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
  imageUrl: string;
}

const resources: ResourceCard[] = [
  {
    slug: "resource-1",
    title: "Le RBA Parakou recrute de nouveaux membres",
    imageUrl: "/resource1.jpg",
  },
  {
    slug: "resource-2",
    title: "Conférence débat sur le thème Jeunesse, Emploi et Développement",
    imageUrl: "/resource2.jpg",
  },
  
  {
    slug: "resource-4",
    title: "Appel à candidature pour le recrutement de 10 volontaires-bénévoles",
    imageUrl: "/resource4.jpg",
  },
  {
    slug: "resource-5",
    title: "Appel à candidature pour le recrutement de 10 volontaires-bénévoles étudiants (es)",
    imageUrl: "/resource5.jpg",
  },
  {
    slug: "resource-6",
    title: "Seize Jours d’activisme contre les violences faites aux femmes, édition 2019",
    imageUrl: "/resource6.jpg",
  },
];

export default function ResourcesPage() {
  return (
    <section className="py-12 px-6 md:p-6 bg-red-50 space-y-8">
      
      {/* Write-up section */}
      <motion.div
        className="text-red-700 p-4 md:p-6 rounded-lg shadow-md"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="md:text-5xl text-xl underline text-center font-black mb-4">
          Reseau des Bénévoles
        </h2>
        <p className="md:text-lg text-base leading-relaxed">
          Découvrez les initiatives et opportunités de bénévolat proposées par notre organisation. 
          Ici, vous pouvez rejoindre des projets locaux, participer à des programmes communautaires, et contribuer activement au développement social. 
          <br />
          Chaque action de bénévolat est une occasion d'apprendre, de partager et de créer un impact positif dans notre communauté. 
          Explorez ci-dessous nos annonces et trouvez la manière dont vous pouvez vous impliquer dès aujourd'hui.
        </p>
      </motion.div>

      {/* Grid of resources */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {resources.map(({ slug, title, imageUrl }, index) => (
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
                  alt="apessa"
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  whileHover={{ scale: 1.05 }}
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-base md:text-xl mb-2 text-red-700 group-hover:text-red-900 transition-colors">
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
