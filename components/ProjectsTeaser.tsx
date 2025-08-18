'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiUsers, FiSmartphone, FiTarget } from 'react-icons/fi';
// Update the import path if the file is located elsewhere, for example:
import { HoverEffect, Card, CardTitle, CardDescription } from '../components/ui/card-hover-effect';
// Or create the file '../ui/card-hover-effect.tsx' and export the required components.

const projects = [
  {
    title: 'Réseau de bénévoles',
    description:
      'Au sein de l’APESSA, un réseau de jeunes empreints de leadership grandit jour après jour en menant des initiatives à fort impact sur l’éducation et la sante des jeunes de leur communauté. Rejoins-nous c’est gratuit !',
    icon: <FiUsers size={28} className="text-red-600 mb-2" />,
    link: '/blog',
  },
  {
    title: 'Les Ados Veulent Savoir',
    description:
      'Les réponses à toutes les questions des adolescents et jeunes. Application mobile et plateforme d’information fiable pour adolescents et jeunes que vous pouvez télécharger et exploiter librement.',
    icon: <FiSmartphone size={28} className="text-red-600 mb-2" />,
    link: '/about',
  },
  {
    title: 'Nos Projets',
    description:
      'Adolescents et jeunes, population à la base : tous informés, autonomes et responsables ! Plus de cinq ans d’actions concrètes avec le soutien de partenaires techniques et financiers.',
    icon: <FiTarget size={28} className="text-red-600 mb-2" />,
    link: '/contact',
  },
];

const ProjectsTeaser = () => {
  return (
    <section className="bg-gradient-to-t from-white to-red-50 text-red-500 py-16 px-6 md:px-16 lg:px-24">
      <motion.div
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Use HoverEffect for 3D hover effect */}
        <HoverEffect
          items={projects.map((proj) => ({
            title: proj.title,
            description: proj.description,
            link: proj.link,
          }))}
          className="gap-8"
        />

        <div className="mt-6 text-center">
          <Link href="/resources">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gradient-to-b cursor-pointer from-red-100 via-red-50 to-white text-red-500 font-semibold px-8 py-3 rounded-xl shadow-md hover:bg-yellow-300 transition"
            >
              Voir tous les projets
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectsTeaser;
