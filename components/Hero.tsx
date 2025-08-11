"use client";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-red-700 via-red-600 to-red-500 text-white py-20 px-6 md:px-16 lg:px-24">
      <motion.div
        className="max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Association pour l’Éducation, la Sexualité
          <br />
          et la Santé en Afrique
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">
          Agir Ensemble pour une Santé Sexuelle Authentique
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Les réponses à toutes les questions des adolescents et jeunes.
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;
