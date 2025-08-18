"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { FiDownload } from "react-icons/fi";

const faqData = [
  {
    question: "Apessa",
    answer:
      "On entend par APESSA : Association Pour l’Education, la Sexualité et la Santé en Afrique. Cette association comme l’indique son nom se fixe comme objectif global une éducation dans le domaine de la sexualité.Notre association a pour vocation de couvrir une grande partie de l’Afrique et pour ce faire, nous avons choisi comme point de départ de nos activités le Bénin.La sexualité est un élément important dans la formation de l’identité d’un individu, l’éducation fait l’identité. Pour cela on peut donc affirmer que santé-éducation et sexualité forment un ensemble harmonieux de développement de la personne humaine.",
  },
  {
    question: "Nos objectifs?",
    answer:
      "Créer un environnement d’accompagnement, de suivi, d’écoute, d’information et d’orientation de la jeunesse ; Accompagner sur le plan scolaire ; Ecouter de questionnement de jeunes pour privilégier et favoriser la mobilisation d’un escape de réflexion personnelle et de parole autour de la sexualité et des pratiques sexuelles ;Sensibiliser contre l’exploitation sexuelle et la prostitution en milieu scolaire ; Sensibiliser contre les grossesses précoces en milieu scolaire ; Proposer aux jeunes filles des services de santé sexuelle de qualité ; Sensibiliser les jeunes filles sur la prévention du cancer du sein, du col de l’utérus et d’autres parties du corps de la femme ; Intensifier l’échange des informations sur les IST/VIH/SIDA en milieu scolaire ;Développer et renforcer les capacités des élèves et les enseignants pour contribuer aux initiatives de lutte contre les STI/VIH/SIDA ; Sensibiliser les parents au bien-fondé d’une éducation sexuelle ; Coopérer avec tous les organismes publics et privés ayant les mêmes objectifs que l’association.",
  },
  {
    question: "Nos Actions?",
    answer:
      "La sexualité dans la société et dans les médias ; Le corps et les comportements sexuels ; L’amitié, l’amour, le plaisir, la vie relationnelle et affective ; Le genre, les identités et orientations sexuelles ; La santé sexuelle et reproductive (visite chez le gynécologue, différents test de dépistages) ; L’implication des parents dans l’éducation sexuelle des enfants et des jeunes ; Dialogue autour de la sexualité ; Action soutien scolaire.",
  },
  {
    question: "Pour nous soutenir",
    answer:
      "Afin de donner corps à nos projets, nous sommes à la recherche de soutiens tout aussi bien matériels que financiers, vous pouvez participer aux actions d’APESSA. RIB APESSA BENIN BJ104 01002 032-804-023-001-46 SGBE COTONOU Saint Michel.",
  },
];

const pdfUrl = "/APESSA_Information.pdf"; // <-- replace with your PDF path

const AboutPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

const handleOpenPdf = () => {
  window.open(pdfUrl, "_blank", "noopener,noreferrer");
};

  return (
    <div className="bg-gradient-to-b from-red-50 via-red-100 to-red-200 min-h-screen py-20 px-6 md:px-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-gray-900"
      >
        <h1 className="text-2xl md:text-5xl font-extrabold text-red-700 mb-4 md:mb-8 text-center">
          QUI SOMMES-NOUS?
        </h1>

        <p className="text-sm md:text-xl leading-relaxed text-justify mb-10 md:mb-16">
          Avec l’avancée de la technologie et le besoin d’informations des adolescents,
           on constate que ces derniers souffrent d’un manque évident de sources
            d’informations fiables. Il en est de même pour certains parents qui 
            se retrouvent parfois dans l’incapacité d’apporter les réponses aux divers
             questionnements de leurs enfants. De ce constat,{" "}
          <strong className="text-red-700 text-xl md:text-2xl">APESSA</strong> s’est 
          donnée pour mission de mettre à disposition des adolescents, jeunes,
           parents et encadreurs ces informations, afin d’aider toute personne 
           désireuse de s’informer de manière fiable et encourager les adolescents 
           et les jeunes à adopter une sexualité construite et responsable…
        </p>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-5xl font-extrabold text-red-700 mb-4 md:mb-8 text-center">
            Questions Fréquentes
          </h2>
          <div className="space-y-4">
            {faqData.map(({ question, answer }, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div
                  key={index}
                  layout
                  initial={{ borderRadius: 12 }}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex justify-between items-center px-6 py-4 text-left text-lg md:text-xl font-semibold text-red-700 focus:outline-none hover:bg-red-50 transition-colors duration-300"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3">
                      {/* Icon with rotation */}
                      <motion.div
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-red-600 text-xl md:text-2xl flex-shrink-0"
                      >
                        <AiOutlinePlus />
                      </motion.div>
                      <span>{question}</span>
                    </div>
                    {/* Alternate icon on right for open state */}
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-red-600 text-2xl flex-shrink-0"
                      >
                        <AiOutlineMinus />
                      </motion.div>
                    )}
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                          open: { opacity: 1, height: "auto" },
                          collapsed: { opacity: 0, height: 0 },
                        }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="px-6 overflow-hidden text-gray-800 text-sm md:text-lg"
                      >
                        <p className="pb-6">{answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Transition Paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center text-gray-900 mb-6 md:mb-10 px-2 md:px-4"
        >
          <p className="text-base md:text-xl leading-relaxed">
            Pour en savoir plus et avoir un accès direct à toutes nos ressources, cliquez ici pour accéder à notre espace dédié aux adolescents et jeunes!.
          </p>
        </motion.div>

        {/* Download Button */}
        <div className="flex justify-center">
          <button
            onClick={handleOpenPdf}
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 focus:bg-red-800 text-white font-semibold text-sm md:text-lg px-8 py-3 rounded-lg shadow-lg transition-colors duration-300 focus:outline-none"
          >
            <FiDownload className="md:w-6 md:h-6 size-4" />
            Voir la brochure
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutPage;
