"use client";
import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import { FaHandsHelping, FaStar } from "react-icons/fa";

const sponsors = [
  { imageUrl: "/sponsor1.png" },
  { imageUrl: "/sponsor2.png" },
  { imageUrl: "/sponsor3.png" },
  { imageUrl: "/sponsor4.png" },
  { imageUrl: "/sponsor5.png" },
  { imageUrl: "/sponsor6.png" },
  { imageUrl: "/sponsor7.png" },
];

const SponsorsSection = () => {
  return (
    <section
      className="bg-gradient-to-t from-red-200 via-red-100 to-red-50 py-16 px-6 md:px-20"
      id="partenaires"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-gray-900"
      >
        <h2 className="text-2xl md:text-5xl font-extrabold text-red-700 mb-8 text-center flex items-center justify-center gap-3">
          <FaHandsHelping className="animate-bounce text-4xl text-red-700" />
          Nos Bailleurs et Partenaires
          <FaStar className="animate-pulse text-4xl text-red-700" />
        </h2>

        <p className="text-sm md:text-xl text-justify mb-8 leading-relaxed mx-auto">
          Nous sommes profondément reconnaissants envers nos bailleurs et partenaires, dont la confiance
          renouvelée chaque année est la clé de la continuité et du succès de nos activités. Leur
          engagement sincère rend possible la réalisation de nos projets ambitieux et soutient sans faille
          nos efforts pour accompagner les jeunes dans leur éducation et leur épanouissement. 
          <span className="inline-block ml-2 text-red-600">🤝</span> 
          C’est grâce à cette collaboration solide que nous pouvons avancer avec confiance, 
          en touchant toujours plus de vies et en construisant un avenir meilleur pour les générations à venir.
        </p>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="py-8"
        >
          {sponsors.map(({ imageUrl }, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="rounded-xl overflow-hidden shadow-lg bg-gradient-to-tr from-red-500 via-red-600 to-red-700 flex justify-center items-center p-6 cursor-pointer hover:scale-105 hover:shadow-2xl transition-transform duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative w-full h-48 flex justify-center items-center overflow-hidden rounded-lg">
                  <img
                    src={imageUrl}
                    alt="Partenaire"
                    className="max-w-full max-h-full object-contain brightness-90 hover:brightness-100 transition-all duration-300"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
};

export default SponsorsSection;
