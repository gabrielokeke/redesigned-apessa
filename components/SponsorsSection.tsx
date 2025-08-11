"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const sponsors = [
  {
    name: "Bailleur 1",
    imageUrl: "/sponsor1.png",
  },
  {
    name: "Partenaire 2",
    imageUrl: "/sponsor2.png",
  },
  {
    name: "Bailleur 3",
    imageUrl: "/sponsor3.png",
  },
  {
    name: "Partenaire 4",
    imageUrl: "/sponsor4.png",
  },
  {
    name: "Bailleur 5",
    imageUrl: "/sponsor5.png",
  },
  {
    name: "Partenaire 6",
    imageUrl: "/sponsor6.png",
  },
  {
    name: "Bailleur 7",
    imageUrl: "/sponsor7.png",
  },
];

const SponsorsSection = () => {
  return (
    <section
      className="bg-gradient-to-t from-red-200 via-red-100 to-red-50 py-16 px-6 md:px-20"
      id="sponsors"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-gray-900"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-red-600 text-center mb-6">
          Nos Bailleurs et Partenaires
        </h2>

        <p className="text-lg md:text-xl text-justify mb-8 leading-relaxed mx-auto max-w-3xl">
          Nous sommes profondément reconnaissants envers nos bailleurs et partenaires, dont la confiance
          renouvelée chaque année est la clé de la continuité et du succès de nos activités. Leur
          engagement sincère rend possible la réalisation de nos projets ambitieux et soutient sans faille
          nos efforts pour accompagner les jeunes dans leur éducation et leur épanouissement. 
          C’est grâce à cette collaboration solide que nous pouvons avancer avec confiance, 
          en touchant toujours plus de vies et en construisant un avenir meilleur pour les générations à venir.
        </p>

<Swiper
  modules={[Autoplay]} // only Autoplay module now
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
          {sponsors.map(({ name, imageUrl }, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="rounded-xl overflow-hidden shadow-lg bg-gradient-to-tr from-red-500 via-red-600 to-red-700 text-white flex flex-col items-center p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative w-full h-48 flex justify-center items-center overflow-hidden rounded-lg">
                  <img
                    src={imageUrl}
                    alt={name}
                    className="max-w-full max-h-full object-contain brightness-90"
                    loading="lazy"
                  />
                </div>
                <h3 className="mt-4 font-bold text-xl text-center">{name}</h3>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
};

export default SponsorsSection;
