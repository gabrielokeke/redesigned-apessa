"use client";
import React from "react";
import {
  FaFacebook,
  FaWhatsapp,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Socials = [
  { title: "Facebook", icon: <FaFacebook size={42} /> },
  { title: "Whatsapp", icon: <FaWhatsapp size={42} /> },
  { title: "Twitter", icon: <FaTwitter size={42} /> },
  { title: "Instagram", icon: <FaInstagram size={42} /> },
];

function ContactezNous() {
  return (
    <section className="bg-gradient-to-t from-red-50 to-white text-red-500 py-16 px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-extrabold text-3xl md:text-4xl mb-12"
        >
          Suivez-nous sur les réseaux sociaux !
        </motion.h1>

        <div className="flex flex-col md:flex-row justify-around items-center gap-12">
          {Socials.map(({ title, icon }, i) => (
            <motion.div
              key={i}
              className="text-center flex flex-col items-center space-y-3 text-red-600"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: i * 0.2, duration: 0.6, ease: "easeOut" }}
            >
              <div>{icon}</div>
              <p className="text-2xl font-extrabold">{title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ContactezNous;
