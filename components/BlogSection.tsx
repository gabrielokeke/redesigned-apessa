"use client";

import { motion } from "framer-motion";
import { FiMail } from "react-icons/fi";

const BlogSection = () => {
  return (
    <section className="bg-gradient-to-b from-red-50 via-red-100 to-red-200 py-16 px-6 md:px-20" id="blog">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-gray-800"
      >
        <h2 className="text-3xl md:text-4xl font-black text-red-600 text-center mb-6">
           Blog de l’APESSA
        </h2>

        <p className="text-lg md:text-xl text-justify mb-8 leading-relaxed">
          Avec l’avancée de la technologie et le besoin d’informations des adolescents, on
          constate que ces derniers souffrent d’un manque évident de sources d’informations fiables.
          Il en est de même pour certains parents qui se retrouvent parfois dans l’incapacité
          d’apporter les réponses aux divers questionnements de leurs enfants.
        </p>
        <p className="text-lg md:text-xl text-justify mb-12 leading-relaxed">
          <strong className="font-black text-red-600 text-4xl">APESSA</strong> s’est donnée pour mission de mettre à disposition des adolescents,
          jeunes, parents et encadreurs ces informations, afin d’aider toute personne désireuse de
          s’informer de manière fiable et encourager les adolescents et les jeunes à adopter une
          sexualité construite et responsable.
        </p>

        {/* Newsletter Signup */}
        <div className="bg-gray-100 p-6 md:p-10 rounded-lg shadow-lg">
          <div className="flex items-center mb-4">
            <FiMail className="text-red-600 text-3xl mr-3" />
            <h3 className="text-xl md:text-2xl text-red-600 font-semibold">
              Ne ratez aucun article !
            </h3>
          </div>
          <p className="mb-6 text-gray-700">
            Saisissez votre adresse e‑mail pour vous abonner et recevoir une notification à chaque nouvelle publication.
          </p>
          <form className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              placeholder="Votre adresse e‑mail"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
            >
             S’abonner
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default BlogSection;
