"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-red-700 via-red-600 to-red-500 text-white py-20 px-6 md:px-16 lg:px-24 overflow-hidden">
      {/* Subtle Grid Background */}
      <div
        className={cn(
          "absolute inset-0 opacity-25", // almost invisible
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-gradient-to-b from-red-700 via-red-600 to-red-500 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      {/* Hero Content */}
      <motion.div
        className="relative z-20 max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
          Association pour l’Éducation, la Sexualité {" "}
          <br className="hidden md:block"/>
          et la Santé en Afrique
        </h1> */}

        <TextGenerateEffect
            words="Association pour l’Éducation, la Sexualité et la Santé en Afrique"
            className="text-center text-3xl font-bold leading-tight md:text-5xl lg:text-6xl"
          />

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
