"use client";

import React from "react";
import {
  FaFacebook,
  FaWhatsapp,
  FaTwitter,
  FaInstagram,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { motion } from "framer-motion";

// Add URLs to actual social pages
const Socials = [
  { title: "Facebook", icon: <FaFacebook size={42} />, link: "https://facebook.com/apessa" },
  { title: "Whatsapp", icon: <FaWhatsapp size={42} />, link: "https://wa.me/2290161872332" },
  { title: "Twitter", icon: <FaTwitter size={42} />, link: "https://twitter.com/apessa" },
  { title: "Instagram", icon: <FaInstagram size={42} />, link: "https://instagram.com/apessa" },
  { title: "Téléphone", icon: <FaPhone size={42} />, link: "tel:+2290161872332" },
  { title: "Email", icon: <FaEnvelope size={42} />, link: "mailto:secretariat@apessa.net" },
];

function ContactezNous() {
  return (
    <section className="bg-gradient-to-t from-red-50 to-white text-red-700 py-16 px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-extrabold text-2xl md:text-5xl mb-16"
        >
          Suivez-nous et contactez-nous !
        </motion.h1>

        <div className="flex flex-wrap justify-center items-center gap-12">
          {Socials.map(({ title, icon, link }, i) => (
            <motion.a
              key={i}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center flex flex-col items-center space-y-3 text-red-600 transform transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.2 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
            >
              {icon}
              <p className="text-2xl font-extrabold">{title}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ContactezNous;
